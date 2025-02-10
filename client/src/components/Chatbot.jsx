import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const toggleChatbox = () => {
    setIsOpen((isOpen) => !isOpen);
    console.log("clicked", isOpen);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { name: "User", message: inputValue };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Send message to the server and handle the response
    fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: JSON.stringify({ message: inputValue }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const botMessage = { name: "Sam", message: data.answer };
        console.log(data.answer);
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setInputValue(""); // Clear input
      })
      .catch((error) => {
        console.error("Error:", error);
        setInputValue(""); // Clear input in case of error
      });
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="container">
      <div className="chatbox chatbot--active">
        {isOpen && (
          <div className="chatbox__support">
            <div className="chatbox__header">
              <div className="chatbox__image--header">
                <img
                  src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                  alt="user avatar"
                />
              </div>
              <div className="chatbox__content--header">
                <h4 className="chatbox__heading--header">Chat support</h4>
                <p className="chatbox__description--header">
                  Hi.. How can I help you?
                </p>
              </div>
            </div>
            <div className="chatbox__messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`messages__item ${
                    msg.name === "Sam"
                      ? "messages__item--visitor"
                      : "messages__item--operator"
                  }`}
                >
                  {msg.message}
                </div>
              ))}
            </div>
            <div className="chatbox__footer">
              <input
                type="text"
                placeholder="Write a message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyUp={handleKeyUp}
              />
              <button
                className="chatbox__send--footer send__button"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        )}
        <div className="chatbox__button">
          <button onClick={toggleChatbox}>
            <img src="chatbox-icon.svg" alt="chatbox icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
