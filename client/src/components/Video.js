// src/components/video.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../assets/css/Video.css";

function Video() {
  const [showTranscribe, setShowTranscribe] = useState(false);
  const [showTranslate, setShowTranslate] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("HTML");

  const handleTranscribeClick = () => {
    setShowTranscribe(true);
    setShowTranslate(false);
  };

  const handleTranslateClick = () => {
    setShowTranslate(true);
    setShowTranscribe(false);
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setShowTranscribe(false);
    setShowTranslate(false);
  };

  const videoData = {
    HTML: {
      src: "/assets/video/HTML clip.mp4",
      transcription: `
Let's start with HTML. HTML stands for hypertext markup language. And no, HTML is not a programming language, but it is such a huge part of the building blocks when it comes to the web. Without HTML, honestly, the web would I don't even know what it would look like. HTML at the core is a huge part of the web.

HTML uses different tags and elements to identify what you see on screen. So for example, if you are looking to have a paragraph on screen, you would use the p tag. If you are looking to have an image on screen, you would use the I m g tag. These tags will show exactly what it is you are trying to show to the user. I like to think of HTML as a way to have different instructions as to what to show to the user.

So for example, as I mentioned, the p tag to show paragraphs, the I m g to show images, and it's a really great way to think of HTML as kind of a set of instructions.`,
      translation: `चलिए HTML से शुरू करते हैं। HTML का मतलब हाइपरटेक्स्ट मार्कअप लैंग्वेज है। और नहीं, HTML एक प्रोग्रामिंग भाषा नहीं है, लेकिन जब वेब की बात आती है तो यह बिल्डिंग ब्लॉक्स का एक बड़ा हिस्सा है। ईमानदारी से कहूँ तो HTML के बिना, मुझे यह भी नहीं पता कि यह कैसा दिखेगा। मूल रूप से HTML वेब का एक बड़ा हिस्सा है।

आप स्क्रीन पर क्या देखते हैं इसकी पहचान करने के लिए HTML विभिन्न टैग और तत्वों का उपयोग करता है। उदाहरण के लिए, यदि आप स्क्रीन पर एक पैराग्राफ देखना चाहते हैं, तो आप पी टैग का उपयोग करेंगे। यदि आप स्क्रीन पर कोई छवि देखना चाहते हैं, तो आप I mg टैग का उपयोग करेंगे। ये टैग वही दिखाएंगे जो आप उपयोगकर्ता को दिखाने का प्रयास कर रहे हैं। मैं HTML को उपयोगकर्ता को क्या दिखाना है इसके बारे में अलग-अलग निर्देश देने के एक तरीके के रूप में सोचना पसंद करता हूं।

उदाहरण के लिए, जैसा कि मैंने उल्लेख किया है, पैराग्राफ दिखाने के लिए पी टैग, चित्र दिखाने के लिए आई एम जी, और यह एचटीएमएल को निर्देशों के एक सेट के रूप में सोचने का एक बहुत अच्छा तरीका है।`,
    },
    CSS: {
      src: "/assets/video/CSS clip.mp4",
      transcription: `
Websites would look pretty boring though if it wasn't for the help of CSS. As you can see, this would be a website without any CSS. It's boring. It's plain. I mean, who would really wanna use any websites?

And that's where we go to CSS. While HTML is the markup language, CSS you can think of as the design language. CSS stands for cascading style sheets. And there are many different versions of CSS, many different, takes on it, but at its core, CSS is used to make a website look good. Sounds simple, right?

Why complicate things? It does get complicated the further you get into it, but at its core, that's what it does. I'm going to show you a website here that has CSS. As you can see, it's a no brainer. It makes things just instantly look so much better.

I think as humans, we are so visual, so CSS is so important. I often hear people say front end is boring or designers or front end people, they have such a boring job, which is completely not true. I think it's just because back end is having a moment, but in reality, these people who focus on front end or design, they have such an important job to ensure that when a user goes to a website for example, they actually stay there right away because of what they see visually. When you think CSS, think of it as a list of rules that you can assign properties to different HTML tags. You can make each tag look unique, have different styles depending on what it is.

Before CSS, this was I'll show you on screen how to write styles. As you can see, it would get very inefficient as it continue to get longer and longer with more styles, writing it directly in line in the HTML tags. That's why CSS is so amazing to have its own file where you can put all the different styles into it.`,
      translation: `हालांकि, अगर CSS की मदद न होती तो वेबसाइटें बहुत बोरिंग लगतीं। जैसा कि आप देख सकते हैं, यह बिना किसी CSS के एक वेबसाइट होगी। यह बोरिंग है। यह सादा है। मेरा मतलब है, कौन वास्तव में किसी भी वेबसाइट का उपयोग करना चाहेगा?

और यहीं पर हम CSS पर आते हैं। जबकि HTML मार्कअप भाषा है, CSS को आप डिज़ाइन भाषा के रूप में सोच सकते हैं। CSS का मतलब कैस्केडिंग स्टाइल शीट है। और CSS के कई अलग-अलग संस्करण हैं, इसके कई अलग-अलग रूप हैं, लेकिन इसके मूल में, CSS का उपयोग किसी वेबसाइट को अच्छा दिखाने के लिए किया जाता है। सरल लगता है, है न?

चीजों को जटिल क्यों करें? आप जितना आगे बढ़ेंगे यह उतना ही जटिल होता जाएगा, लेकिन इसके मूल में, यह यही करता है। मैं आपको यहाँ एक ऐसी वेबसाइट दिखाने जा रहा हूँ जिसमें CSS है। जैसा कि आप देख सकते हैं, यह कोई दिमाग लगाने वाली बात नहीं है। यह चीजों को तुरंत बहुत बेहतर बना देता है।

मुझे लगता है कि मनुष्य के रूप में, हम बहुत दृश्यात्मक हैं, इसलिए CSS बहुत महत्वपूर्ण है। मैं अक्सर लोगों को यह कहते हुए सुनता हूँ कि फ्रंट एंड बोरिंग है या डिज़ाइनर या फ्रंट एंड के लोग, उनके पास बहुत बोरिंग काम है, जो पूरी तरह से सच नहीं है। मुझे लगता है कि यह सिर्फ इसलिए है क्योंकि बैक एंड का समय चल रहा है, लेकिन वास्तव में, ये लोग जो फ्रंट एंड या डिज़ाइन पर ध्यान केंद्रित करते हैं, उनके पास यह सुनिश्चित करने के लिए बहुत महत्वपूर्ण काम है कि जब कोई उपयोगकर्ता उदाहरण के लिए किसी वेबसाइट पर जाता है, तो वे वास्तव में वहाँ तुरंत रुक जाते हैं क्योंकि वे जो देखते हैं वह उन्हें बहुत पसंद आता है। जब आप CSS के बारे में सोचते हैं, तो इसे नियमों की एक सूची के रूप में सोचें, जिसे आप विभिन्न HTML टैग्स को गुण प्रदान कर सकते हैं। आप प्रत्येक टैग को अद्वितीय बना सकते हैं, अलग-अलग स्टाइल रख सकते हैं जो इस बात पर निर्भर करता है कि यह क्या है।

CSS से पहले, यह था मैं आपको स्क्रीन पर दिखाऊंगा कि स्टाइल कैसे लिखें। जैसा कि आप देख सकते हैं, यह बहुत ही अक्षम हो जाएगा क्योंकि यह अधिक स्टाइल के साथ लंबा और लंबा होता जा रहा है, इसे सीधे HTML टैग्स में लाइन में लिखना। यही कारण है कि CSS इतना अद्भुत है कि इसकी अपनी फ़ाइल है जहाँ आप सभी अलग-अलग स्टाइल डाल सकते हैं।`,
    },
    JavaScript: {
      src: "/assets/video/JS clip.mp4",
      transcription: `
JavaScript essentially is a programming language that is used to help with the user interacting with the website. So what I mean by that is actually I'm gonna put up on screen here, when you interact with the website, you will get a response back from the web site. This might be a pop up. This might be notifications, an animation, and so much more. Most dynamic behavior you see on websites is thanks to JavaScript.

JavaScript has many different frameworks and libraries that can be used, with it, but I always say if you are learning JavaScript, start with vanilla JavaScript. JavaScript is widely used across the web and now is used not only both in the front end side of things, and also to now it's used in the back end with node and express.`,
      translation: `जावास्क्रिप्ट मूलतः एक प्रोग्रामिंग भाषा है जिसका उपयोग वेबसाइट के साथ उपयोगकर्ता की सहभागिता में सहायता के लिए किया जाता है। तो मेरा मतलब है कि मैं वास्तव में यहाँ स्क्रीन पर डालने जा रहा हूँ, जब आप वेबसाइट के साथ सहभागिता करते हैं, तो आपको वेबसाइट से एक प्रतिक्रिया मिलेगी। यह एक पॉप अप हो सकता है। यह सूचनाएँ, एक एनीमेशन और बहुत कुछ हो सकता है। वेबसाइटों पर आप जो सबसे अधिक गतिशील व्यवहार देखते हैं, वह जावास्क्रिप्ट के कारण है।

जावास्क्रिप्ट में कई अलग-अलग फ्रेमवर्क और लाइब्रेरी हैं जिनका उपयोग किया जा सकता है, लेकिन मैं हमेशा कहता हूँ कि यदि आप जावास्क्रिप्ट सीख रहे हैं, तो वेनिला जावास्क्रिप्ट से शुरू करें। जावास्क्रिप्ट का व्यापक रूप से वेब पर उपयोग किया जाता है और अब इसका उपयोग न केवल चीजों के फ्रंट एंड साइड में किया जाता है, बल्कि अब इसका उपयोग नोड और एक्सप्रेस के साथ बैक एंड में भी किया जाता है।`,
    },
  };

  const { src, transcription, translation } = videoData[selectedTopic];

  return (
    <div className="main-container">
      <Sidebar onTopicSelect={handleTopicSelect} />
      <div className="video-content">
        <div className="video-player">
          {/* Add a unique key prop to force re-render */}
          <video key={selectedTopic} controls width="100%" height="500px">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="course-details">
          <h3>{selectedTopic} for Web Developers</h3>
          <p>
            Learn {selectedTopic.toLowerCase()} in 1 hour with simple-to-use
            rules and guidelines.
          </p>
        </div>
        <div>
          <button className="btn btn-large" onClick={handleTranscribeClick}>
            Transcribe Video
          </button>
          <button className="btn btn-large ml-3" onClick={handleTranslateClick}>
            Translate Video to Hindi
          </button>

          {showTranscribe && <div className="transcribed">{transcription}</div>}
          {showTranslate && <div className="translate">{translation}</div>}
        </div>
      </div>
    </div>
  );
}

export default Video;
