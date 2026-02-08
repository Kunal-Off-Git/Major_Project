import os
from flask import Flask, render_template, request, jsonify
import whisper
from googletrans import Translator
from flask_cors import CORS
from chat import get_response
import asyncio
from moviepy import AudioFileClip,VideoFileClip,CompositeAudioClip
from gtts import gTTS
from pydub import AudioSegment
from datetime import datetime
import uuid
from flask import send_from_directory
from transformers import pipeline
# from moviepy.video.fx.all import audio_fadein

UPLOAD_FOLDER = 'uploads'
VIDEO_FOLDER = os.path.join(UPLOAD_FOLDER, 'videos')
AUDIO_FOLDER = os.path.join(UPLOAD_FOLDER, 'audios')
TRANSLATED_VIDEO_FOLDER = os.path.join(UPLOAD_FOLDER, 'translated_videos')

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# Load the Whisper model (small model for demonstration; larger models are more accurate)
model = whisper.load_model("base")

# Initialize the Google Translator
translator = Translator()

# Generate unique filenames
def generate_filename(base_name, folder, extension):
    unique_id = uuid.uuid4().hex
    timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
    return os.path.join(folder, f"{base_name}_{timestamp}_{unique_id}.{extension}")

@app.get("/")
def home():
    return """
    <html>
        <head><title>Flask Message</title></head>
        <body>
            <h1>Hello from Flask!</h1>
        </body>
    </html>
    """

@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    #TODO: check if text is valid
    response = get_response(text)
    message = {"answer":response}
    return jsonify(message)


@app.route('/transcribe', methods=['POST'])
def transcribe():
    # Check if the transcript text is provided
    if not request.json or 'text' not in request.json:
        return jsonify({"error": "No text provided"}), 400

    # Get the transcript text from the request
    transcript_text = request.json['text']
    
    # Get target language from the request, default to Hindi if not specified
    target_lang = request.json.get("lang", "hi")

    # Translate the transcript to the target language
    translated = translator.translate(transcript_text, dest=target_lang)

    # Return the translated text as JSON
    return jsonify({
        "translated_text": translated.text
    })

# Serve uploaded files
@app.route('/uploads/translated_videos/<path:filename>')
def uploaded_file(filename):
    return send_from_directory(TRANSLATED_VIDEO_FOLDER, filename)

@app.route('/translate', methods=['POST'])
def translate():
    if 'video' not in request.files or 'text' not in request.form or 'lang' not in request.form:
        return jsonify({"error": "Missing video, text, or language"}), 400
    
    video_file = request.files['video']
    text_string = request.form['text']
    target_language = request.form['lang']

    translated = translator.translate(text_string, dest=target_language)

    audio_path = generate_filename('translated_audio', AUDIO_FOLDER, 'mp3')
    tts = gTTS(translated.text)
    tts.save(audio_path)

    audio = AudioSegment.from_file(audio_path)
    current_duration = len(audio) / 1000  # Convert duration from ms to seconds

    # Process video
    video_path = generate_filename('uploaded_video', UPLOAD_FOLDER, 'mp4')
    video_file.save(video_path)
    video_clip = VideoFileClip(video_path)
    target_duration = video_clip.duration

    # Adjust audio speed
    speed_factor = current_duration/target_duration

    # Adjust speed if needed
    if speed_factor != 1.0:
        adjusted_audio = audio.speedup(playback_speed=speed_factor)
    else:
        adjusted_audio = audio

    # Save adjusted audio and merge with video
    adjusted_audio_path = generate_filename('adjusted_audio', AUDIO_FOLDER, 'mp3')
    adjusted_audio.export(adjusted_audio_path, format="mp3")
    
    audio_clip = AudioFileClip(adjusted_audio_path)

    # final_video = video_clip.set_audio(audio_clip)
    
    # Combine video with audio
    final_audio = CompositeAudioClip([audio_clip])
    video_clip.audio = final_audio


    output_video_path = generate_filename('translated_video', TRANSLATED_VIDEO_FOLDER, 'mp4')
    video_clip.write_videofile(output_video_path, codec='libx264', audio_codec='aac')

    file_name = os.path.basename(output_video_path)
    public_url = f"http://localhost:5001/uploads/translated_videos/{file_name}"

    return jsonify({
        "message": "Video translated and processed successfully",
        "translated_video_path": public_url
    })

# Load the summarization model once when the app starts
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json()

    if not data or 'transcript' not in data:
        return jsonify({'error': 'Missing transcript field in JSON'}), 400

    transcript = data['transcript']

    try:
        summary = summarizer(transcript, max_length=150, min_length=50, do_sample=False)
        return jsonify({'summary': summary[0]['summary_text']})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5001, debug=True)
