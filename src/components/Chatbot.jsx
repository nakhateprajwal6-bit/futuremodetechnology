import { useState, useRef, useLayoutEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import "./../styles/Chatbot.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const containerRef = useRef(null);

  // Bot response logic
  const getBotResponse = (userMessage) => {
    const lower = userMessage.toLowerCase();

    if (lower.includes("robotic")) return "Robotics Lab teaches building intelligent robotic systems.";
    if (lower.includes("industrial")) return "Industrial Training prepares you for real-world engineering environments.";
    if (lower.includes("iot")) return "IoT program connects and controls devices via smart technologies.";
    if (lower.includes("3d")) return "3D Printing program lets you create physical prototypes from digital models.";
    if (lower.includes("internship")) return "Our Internship Programs provide hands-on experience in robotics and tech.";
    if (lower.includes("cad")) return "CAD Designing teaches 2D & 3D design and modeling techniques.";
    if (lower.includes("r&d") || lower.includes("rd")) return "R&D Services help in prototyping and innovation.";
    if (lower.includes("web")) return "Web Development program teaches frontend and backend development using modern frameworks.";
    if (lower.includes("mobile")) return "Mobile App Development covers iOS & Android app development.";
    if (lower.includes("data")) return "Data Science program covers analytics, ML, and data-driven decision making.";
    if (lower.includes("cybersecurity")) return "Cybersecurity program teaches protecting systems and networks.";
    if (lower.includes("devops")) return "DevOps Engineering program teaches CI/CD and infrastructure automation.";
    if (lower.includes("blockchain")) return "Blockchain Development covers smart contracts and decentralized applications.";
    if (lower.includes("software")) return "Software Development program teaches coding, architecture, and project building.";

    return "Hi! Ask me about Robotics Lab, Industrial Training, IoT, 3D Printing, Internship Programs, CAD, R&D Services, Web/Mobile Development, Data Science, Cybersecurity, DevOps, Blockchain, or Software Development.";
  };

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = { id: Date.now(), message: message.trim(), isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");

    setTimeout(() => {
      const botMsg = { id: Date.now() + 1, message: getBotResponse(userMsg.message), isBot: true };
      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  // Auto-scroll to bottom on new messages
  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <h3 className="chat-title">Tech Support Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="chat-close-button"
            >
              <X />
            </button>
          </div>

          {/* Messages */}
          <div ref={containerRef} className="messages-container">
            {messages.length === 0 && (
              <div className="welcome-message">
                <p>
                  Hi! Ask me about Robotics Lab, Industrial Training, IoT, 3D Printing, Internship Programs, CAD, R&D Services, Web/Mobile Development, Data Science, Cybersecurity, DevOps, Blockchain, or Software Development.
                </p>
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message ${msg.isBot ? "bot" : "user"}`}
              >
                <p>{msg.message}</p>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chat-input-container">
            <form onSubmit={handleSendMessage} className="chat-input-form">
              <input
                type="text"
                className="chat-input"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button 
                type="submit" 
                className="chat-send-button"
                disabled={!message.trim()}
              >
                <Send />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-toggle-button"
      >
        <MessageCircle />
      </button>
    </div>
  );
}
