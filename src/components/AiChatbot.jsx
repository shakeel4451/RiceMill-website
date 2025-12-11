import React, { useState, useRef, useEffect } from "react";
import "./AiChatbot.css";
import { FaRobot, FaPaperPlane, FaTimes, FaMicrophone } from "react-icons/fa";

const AiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I am GrainBot. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!inputText.trim()) return;

    // 1. Add User Message
    const userMsg = { id: Date.now(), text: inputText, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // 2. Simulate AI Response (Replace this with API Call later)
    setTimeout(() => {
      let botResponse =
        "I am currently in simulation mode. Connect me to OpenAI to make me smart!";

      // Simple Keyword Logic for Demo
      const lowerInput = userMsg.text.toLowerCase();
      if (lowerInput.includes("price") || lowerInput.includes("rate")) {
        botResponse =
          "Today's rate for Super Kernel Basmati is Rs. 11,800/40kg.";
      } else if (lowerInput.includes("track") || lowerInput.includes("order")) {
        botResponse = "Please provide your Order ID to track your shipment.";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        botResponse =
          "Salam! Welcome to GrainBridge. Are you a Farmer or a Customer?";
      }

      const botMsg = { id: Date.now() + 1, text: botResponse, sender: "bot" };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating Toggle Button */}
      <button
        className={`chatbot-toggle ${isOpen ? "hide" : ""}`}
        onClick={toggleChat}
      >
        <FaRobot className="toggle-icon" />
        <span className="toggle-text">Ask AI</span>
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="header-info">
            <FaRobot />
            <h3>GrainBot AI</h3>
          </div>
          <button onClick={toggleChat} className="close-btn">
            <FaTimes />
          </button>
        </div>

        {/* Messages Area */}
        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              <div className="message-bubble">{msg.text}</div>
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
              <div className="message-bubble typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="voice-btn" title="Voice Input (Coming Soon)">
            <FaMicrophone />
          </button>
          <button className="send-btn" onClick={handleSend}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiChatbot;
