// src/components/video.js
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Sidebar from "./Sidebar";
import "../assets/css/Video.css";
import Header from "./Header";
const languages = [
  { name: "afrikaans", code: "af" },
  { name: "albanian", code: "sq" },
  { name: "amharic", code: "am" },
  { name: "arabic", code: "ar" },
  { name: "armenian", code: "hy" },
  { name: "azerbaijani", code: "az" },
  { name: "basque", code: "eu" },
  { name: "belarusian", code: "be" },
  { name: "bengali", code: "bn" },
  { name: "bosnian", code: "bs" },
  { name: "bulgarian", code: "bg" },
  { name: "catalan", code: "ca" },
  { name: "cebuano", code: "ceb" },
  { name: "chichewa", code: "ny" },
  { name: "chinese (simplified)", code: "zh-cn" },
  { name: "chinese (traditional)", code: "zh-tw" },
  { name: "corsican", code: "co" },
  { name: "croatian", code: "hr" },
  { name: "czech", code: "cs" },
  { name: "danish", code: "da" },
  { name: "dutch", code: "nl" },
  { name: "english", code: "en" },
  { name: "esperanto", code: "eo" },
  { name: "estonian", code: "et" },
  { name: "filipino", code: "tl" },
  { name: "finnish", code: "fi" },
  { name: "french", code: "fr" },
  { name: "frisian", code: "fy" },
  { name: "galician", code: "gl" },
  { name: "georgian", code: "ka" },
  { name: "german", code: "de" },
  { name: "greek", code: "el" },
  { name: "gujarati", code: "gu" },
  { name: "haitian creole", code: "ht" },
  { name: "hausa", code: "ha" },
  { name: "hawaiian", code: "haw" },
  { name: "hebrew", code: "he" },
  { name: "hindi", code: "hi" },
  { name: "hmong", code: "hmn" },
  { name: "hungarian", code: "hu" },
  { name: "icelandic", code: "is" },
  { name: "igbo", code: "ig" },
  { name: "indonesian", code: "id" },
  { name: "irish", code: "ga" },
  { name: "italian", code: "it" },
  { name: "japanese", code: "ja" },
  { name: "javanese", code: "jw" },
  { name: "kannada", code: "kn" },
  { name: "kazakh", code: "kk" },
  { name: "khmer", code: "km" },
  { name: "korean", code: "ko" },
  { name: "kurdish (kurmanji)", code: "ku" },
  { name: "kyrgyz", code: "ky" },
  { name: "lao", code: "lo" },
  { name: "latin", code: "la" },
  { name: "latvian", code: "lv" },
  { name: "lithuanian", code: "lt" },
  { name: "luxembourgish", code: "lb" },
  { name: "macedonian", code: "mk" },
  { name: "malagasy", code: "mg" },
  { name: "malay", code: "ms" },
  { name: "malayalam", code: "ml" },
  { name: "maltese", code: "mt" },
  { name: "maori", code: "mi" },
  { name: "marathi", code: "mr" },
  { name: "mongolian", code: "mn" },
  { name: "myanmar (burmese)", code: "my" },
  { name: "nepali", code: "ne" },
  { name: "norwegian", code: "no" },
  { name: "odia", code: "or" },
  { name: "pashto", code: "ps" },
  { name: "persian", code: "fa" },
  { name: "polish", code: "pl" },
  { name: "portuguese", code: "pt" },
  { name: "punjabi", code: "pa" },
  { name: "romanian", code: "ro" },
  { name: "russian", code: "ru" },
  { name: "samoan", code: "sm" },
  { name: "scots gaelic", code: "gd" },
  { name: "serbian", code: "sr" },
  { name: "sesotho", code: "st" },
  { name: "shona", code: "sn" },
  { name: "sindhi", code: "sd" },
  { name: "sinhala", code: "si" },
  { name: "slovak", code: "sk" },
  { name: "slovenian", code: "sl" },
  { name: "somali", code: "so" },
  { name: "spanish", code: "es" },
  { name: "sundanese", code: "su" },
  { name: "swahili", code: "sw" },
  { name: "swedish", code: "sv" },
  { name: "tajik", code: "tg" },
  { name: "tamil", code: "ta" },
  { name: "telugu", code: "te" },
  { name: "thai", code: "th" },
  { name: "turkish", code: "tr" },
  { name: "ukrainian", code: "uk" },
  { name: "urdu", code: "ur" },
  { name: "uyghur", code: "ug" },
  { name: "uzbek", code: "uz" },
  { name: "vietnamese", code: "vi" },
  { name: "welsh", code: "cy" },
  { name: "xhosa", code: "xh" },
  { name: "yiddish", code: "yi" },
  { name: "yoruba", code: "yo" },
  { name: "zulu", code: "zu" },
];

function Video() {
  const [showTranscribe, setShowTranscribe] = useState(false);
  const [showTranslate, setShowTranslate] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("HTML");
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState("/assets/video/HTML clip.mp4");

  const handleTranscribeClick = async (language, trans_text) => {
    console.log("clicked");
    const text = trans_text;
    const targetLang = language;
    try {
      const response = await fetch("http://localhost:5001/transcribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, lang: targetLang }),
      });
      const data = await response.json();
      if (response.ok) {
        setTranscript(data.translated_text);
        setShowTranslate(true);
        setShowSummary(false);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to translate text.");
    }
  };

  useEffect(() => {
    if (source) {
      console.log("Updated Source:", source);
    }
  }, [source]);

  const handleSummaryClick = async (trans_text) => {
    console.log("clicked");
    setLoading(true);
    const transcript = trans_text;
    try {
      const response = await fetch("http://localhost:5001/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transcript }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.summary);
        setSummary(data.summary);
        setShowSummary(true);
        setLoading(false);
        setShowTranslate(false);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Failed to translate text.");
    }
  };

  useEffect(() => {
    if (source) {
      console.log("Updated Source:", source);
    }
  }, [source]);

  const handleTranslateClick = async (src, trans_text) => {
    console.log("clicked");
    setLoading(true);
    try {
      const text = trans_text;
      const targetLang = "hi";
      // Fetch the file from the local assets folder
      const res = await fetch(src);
      const blob = await res.blob();

      const filename = src.split("/").pop();
      const file = new File([blob], filename, { type: "video/mp4" });

      const formData = new FormData();
      formData.append("video", file);
      formData.append("text", text);
      formData.append("lang", targetLang);

      const response = await fetch("http://localhost:5001/translate", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        console.log("working");
        console.log("Translated Video Path:", data.translated_video_path);
        setLoading(false);
        setSource(data.translated_video_path);
        // console.log(source);
      } else {
        alert(data.error);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);

      alert("failed to upload file.");
    }
  };

  const videoData = {
    HTML: {
      src: "/assets/video/HTML clip.mp4",
      transcription: `
Let's start with HTML. HTML stands for hypertext markup language. And no, HTML is not a programming language, but it is such a huge part of the building blocks when it comes to the web. Without HTML, honestly, the web would I don't even know what it would look like. HTML at the core is a huge part of the web.

HTML uses different tags and elements to identify what you see on screen. So for example, if you are looking to have a paragraph on screen, you would use the p tag. If you are looking to have an image on screen, you would use the I m g tag. These tags will show exactly what it is you are trying to show to the user. I like to think of HTML as a way to have different instructions as to what to show to the user.

So for example, as I mentioned, the p tag to show paragraphs, the I m g to show images, and it's a really great way to think of HTML as kind of a set of instructions.`,
    },
    CSS: {
      src: "/assets/video/CSS clip.mp4",
      transcription: `
Websites would look pretty boring though if it wasn't for the help of CSS. As you can see, this would be a website without any CSS. It's boring. It's plain. I mean, who would really wanna use any websites?

And that's where we go to CSS. While HTML is the markup language, CSS you can think of as the design language. CSS stands for cascading style sheets. And there are many different versions of CSS, many different, takes on it, but at its core, CSS is used to make a website look good. Sounds simple, right?

Why complicate things? It does get complicated the further you get into it, but at its core, that's what it does. I'm going to show you a website here that has CSS. As you can see, it's a no brainer. It makes things just instantly look so much better.

I think as humans, we are so visual, so CSS is so important. I often hear people say front end is boring or designers or front end people, they have such a boring job, which is completely not true. I think it's just because back end is having a moment, but in reality, these people who focus on front end or design, they have such an important job to ensure that when a user goes to a website for example, they actually stay there right away because of what they see visually. When you think CSS, think of it as a list of rules that you can assign properties to different HTML tags. You can make each tag look unique, have different styles depending on what it is.

Before CSS, this was I'll show you on screen how to write styles. As you can see, it would get very inefficient as it continue to get longer and longer with more styles, writing it directly in line in the HTML tags. That's why CSS is so amazing to have its own file where you can put all the different styles into it.`,
    },
    JavaScript: {
      src: "/assets/video/JS clip.mp4",
      transcription: `
JavaScript essentially is a programming language that is used to help with the user interacting with the website. So what I mean by that is actually I'm gonna put up on screen here, when you interact with the website, you will get a response back from the web site. This might be a pop up. This might be notifications, an animation, and so much more. Most dynamic behavior you see on websites is thanks to JavaScript.

JavaScript has many different frameworks and libraries that can be used, with it, but I always say if you are learning JavaScript, start with vanilla JavaScript. JavaScript is widely used across the web and now is used not only both in the front end side of things, and also to now it's used in the back end with node and express.`,
    },
  };

  const { src, transcription } = videoData[selectedTopic];

  const handleTopicSelect = (topic) => {
    // console.log(topic);
    setSelectedTopic(topic);
    setSource(videoData[topic].src);
    setShowTranscribe(false);
    setShowTranslate(false);
  };

  return (
    <>
      <Header />
      <header className="header-video"></header>
      <div className="main-container">
        <Sidebar onTopicSelect={handleTopicSelect} />
        <div className="video-content">
          <h3 className="video-heading">{selectedTopic} for Web Developers</h3>
          <div className="video-player">
            {/* Add a unique key prop to force re-render */}
            <video key={source} controls width="100%" height="630px">
              <source src={source} type="video/mp4" />
              {/* <source
                src="http://localhost:5001/uploads/translated_videos/translated_video_20250304114119_dcc0e2e1f06a4317adb9e698af39bc68.mp4"
                type="video/mp4"
              /> */}
              Your browser does not support the video tag.
            </video>
          </div>
          {/* <div className="course-details">
             <h3>{selectedTopic} for Web Developers</h3> *
            <p>
              Learn {selectedTopic.toLowerCase()} in 1 hour with simple-to-use
              rules and guidelines.
            </p>
          </div> */}
          <div className="controls-section">
            {/* <button
              className="btn btn-large"
              onClick={() => handleTranscribeClick(src)}
            >
              Transcribe Video
            </button> */}
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Transcript
              </button>
              <ul class="dropdown-menu scrollable-dropdown">
                {languages.map((item) => (
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() =>
                        handleTranscribeClick(item.code, transcription)
                      }
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="btn btn-large ml-3"
              onClick={() => handleTranslateClick(source, transcription)}
            >
              Translate Video to Hindi
            </button>
            <button
              className="btn btn-large ml-3"
              onClick={() => handleSummaryClick(transcription)}
            >
              Summary
            </button>
          </div>
          <div className="content-section">
            {showTranscribe && (
              <div className="transcribed">{transcription}</div>
            )}
            {showTranslate && <div className="translate">{transcript}</div>}
            {showSummary && <div className="translate">{summary}</div>}
            {loading && <ClipLoader className="loading-icon" color="#36d7b7" />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
