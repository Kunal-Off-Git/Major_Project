from flask import Flask, render_template, request, jsonify
import whisper
from googletrans import Translator
from flask_cors import CORS
from chat import get_response
import asyncio

app = Flask(__name__)
CORS(app)

# Load the Whisper model (small model for demonstration; larger models are more accurate)
model = whisper.load_model("base")

# Initialize the Google Translator
translator = Translator()

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
    # Check if the audio file is provided
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file provided"}), 400
    
    # Get the audio file from the request
    audio_file = request.files['audio']
    audio_path = "temp_audio.wav"
    audio_file.save(audio_path)

    # Transcribe the audio file
    transcription = model.transcribe(audio_path)
    transcript_text = transcription["text"]

    # Return the transcription as JSON
    return jsonify({
        "transcript": transcript_text
    })

@app.route('/translate', methods=['POST'])
def translate():
    # Check if the transcript text is provided
    if not request.json or 'text' not in request.json:
        return jsonify({"error": "No text provided"}), 400

    # Get the transcript text from the request
    transcript_text = request.json['text']
    
    # Get target language from the request, default to Hindi if not specified
    target_lang = request.json.get("lang", "hi")

    # Translate the transcript to the target language
    translated = asyncio.run(translator.translate(transcript_text, dest=target_lang))

    # Return the translated text as JSON
    return jsonify({
        "translated_text": translated.text
    })


if __name__ == '__main__':
    app.run(port=5001, debug=True)
