import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, ThumbsUp, ThumbsDown } from "lucide-react";
import "./../styles/Chatbot.css";

// Default configuration - can be overridden via props
const defaultConfig = {
  title: "Tech Support Assistant",
  subtitle: "Ask me about our programs",
  welcomeMessage: "Hello! I'm your Tech Assistant. Ask me about our programs and services.",
  placeholder: "Type your message...",
  primaryColor: "#2563eb",
  position: "bottom-right", // bottom-right, bottom-left, top-right, top-left
  autoOpen: false,
  delayResponse: true,
  showTimestamps: true,
  showAvatars: true,
  enableFeedback: true,
  knowledgeBase: {
    robotic: "Robotics Lab teaches building intelligent robotic systems.",
    industrial: "Industrial Training prepares you for real-world engineering environments.",
    iot: "IoT program connects and controls devices via smart technologies.",
    "3d": "3D Printing program lets you create physical prototypes from digital models.",
    internship: "Our Internship Programs provide hands-on experience in robotics and tech.",
    cad: "CAD Designing teaches 2D & 3D design and modeling techniques.",
    "r&d": "R&D Services help in prototyping and innovation.",
    rd: "R&D Services help in prototyping and innovation.",
    web: "Web Development program teaches frontend and backend development using modern frameworks.",
    mobile: "Mobile App Development covers iOS & Android app development.",
    data: "Data Science program covers analytics, ML, and data-driven decision making.",
    cybersecurity: "Cybersecurity program teaches protecting systems and networks.",
    devops: "DevOps Engineering program teaches CI/CD and infrastructure automation.",
    blockchain: "Blockchain Development covers smart contracts and decentralized applications.",
    software: "Software Development program teaches coding, architecture, and project building.",
    default: "Hi! Ask me about Robotics Lab, Industrial Training, IoT, 3D Printing, Internship Programs, CAD, R&D Services, Web/Mobile Development, Data Science, Cybersecurity, DevOps, Blockchain, or Software Development."
  },
  flows: {
    greeting: {
      triggers: ["hello", "hi", "hey", "greetings"],
      response: "Hello! How can I help you today? You can ask about our programs, services, or request specific information.",
      followUp: "Is there anything specific you'd like to know more about?"
    },
    pricing: {
      triggers: ["price", "cost", "fee", "how much"],
      response: "Our pricing varies depending on the program and duration. Would you like me to connect you with our admissions team for detailed pricing information?",
      actions: ["connect_to_agent"]
    },
    contact: {
      triggers: ["contact", "email", "phone", "speak to", "talk to"],
      response: "You can reach us at contact@techacademy.edu or call +1 (555) 123-4567. Would you like to schedule a callback?",
      actions: ["schedule_callback"]
    }
  }
};

export default function Chatbot({ config = {} }) {
  const [isOpen, setIsOpen] = useState(config.autoOpen || defaultConfig.autoOpen);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState(null);
  const [userFeedback, setUserFeedback] = useState({});
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const chatbotConfig = {
    ...defaultConfig,
    ...config,
    knowledgeBase: {
      ...defaultConfig.knowledgeBase,
      ...config.knowledgeBase
    },
    flows: {
      ...defaultConfig.flows,
      ...config.flows
    }
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setSuggestedQuestions([
        "What programs do you offer?",
        "Tell me about internships",
        "Web development courses",
        "Contact information"
      ]);
    }
  }, [isOpen, messages.length]);

  const getBotResponse = (userMessage, context) => {
    const lower = userMessage.toLowerCase();

    for (const [flowName, flow] of Object.entries(chatbotConfig.flows)) {
      if (flow.triggers.some(trigger => lower.includes(trigger))) {
        setConversationContext(flowName);
        if (flow.actions) {
          flow.actions.forEach(action => {
            if (action === "connect_to_agent") {
              setTimeout(() => {
                setMessages(prev => [
                  ...prev,
                  {
                    id: Date.now() + 2,
                    message: "I've notified our team. Someone will contact you shortly. In the meantime, is there anything else I can help with?",
                    isBot: true,
                    timestamp: new Date(),
                    type: "follow_up"
                  }
                ]);
              }, 2000);
            }
          });
        }
        return flow.response;
      }
    }

    for (const [keyword, response] of Object.entries(chatbotConfig.knowledgeBase)) {
      if (lower.includes(keyword) && keyword !== "default") {
        updateSuggestedQuestions(keyword);
        return response;
      }
    }

    if (context && chatbotConfig.flows[context]?.followUp) {
      return chatbotConfig.flows[context].followUp;
    }

    updateSuggestedQuestions();
    return chatbotConfig.knowledgeBase.default;
  };

  const updateSuggestedQuestions = (context = null) => {
    const suggestions = {
      general: [
        "What programs do you offer?",
        "Tell me about internships",
        "Web development courses",
        "Contact information"
      ],
      robotic: ["Robotics course duration", "Prerequisites for robotics", "Robotics lab equipment", "Career opportunities"],
      web: ["Web development curriculum", "Frontend technologies", "Backend frameworks", "Project examples"],
      internship: ["Internship duration", "Companies partnered", "Stipend information", "Application process"]
    };
    const key = context || "general";
    setSuggestedQuestions(suggestions[key] || suggestions.general);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = { id: Date.now(), message: message.trim(), isBot: false, timestamp: new Date(), type: "user_message" };
    setMessages(prev => [...prev, userMsg]);
    setMessage("");
    setIsTyping(true);

    const thinkingTime = chatbotConfig.delayResponse ? (1000 + Math.random() * 1000) : 500;
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = getBotResponse(userMsg.message, conversationContext);
      const botMsg = { id: Date.now() + 1, message: botResponse, isBot: true, timestamp: new Date(), type: "bot_response" };
      setMessages(prev => [...prev, botMsg]);
    }, thinkingTime);
  };

  const handleQuickQuestion = (question) => {
    setMessage(question);
    setTimeout(() => handleSendMessage({ preventDefault: () => {} }), 100);
  };

  const handleFeedback = (messageId, isPositive) => {
    setUserFeedback(prev => ({ ...prev, [messageId]: isPositive }));
    if (isPositive) {
      setMessages(prev => [...prev, { id: Date.now(), message: "Thanks for your feedback! 😊", isBot: true, timestamp: new Date(), type: "feedback_ack" }]);
    }
  };

  useLayoutEffect(() => {
    if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages, isTyping]);

  useLayoutEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dynamicStyles = { '--primary-color': chatbotConfig.primaryColor, '--primary-hover': `${chatbotConfig.primaryColor}E6` };

  return (
    <div className={`chatbot-container ${chatbotConfig.position}`} style={dynamicStyles}>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-title-container">
              <Bot className="chat-bot-icon" />
              <div>
                <h3 className="chat-title">{chatbotConfig.title}</h3>
                <p className="chat-subtitle">{chatbotConfig.subtitle}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="chat-close-button" aria-label="Close chat">
              <X />
            </button>
          </div>

          <div ref={containerRef} className="messages-container">
            {messages.length === 0 && (
              <div className="welcome-section">
                <div className="welcome-message">
                  <Bot className="welcome-icon" />
                  <p className="welcome-title">{chatbotConfig.welcomeMessage}</p>
                </div>
                <div className="suggested-questions">
                  <p className="suggestions-title">Quick questions:</p>
                  <div className="questions-grid">
                    {suggestedQuestions.map((q, i) => (
                      <button key={i} className="question-chip" onClick={() => handleQuickQuestion(q)}>{q}</button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.isBot ? "bot" : "user"}`}>
                {chatbotConfig.showAvatars && <div className="message-avatar">{msg.isBot ? <Bot /> : <User />}</div>}
                <div className="message-content">
                  <p className="message-text">{msg.message}</p>
                  <div className="message-footer">
                    {chatbotConfig.showTimestamps && <span className="message-time">{formatTime(msg.timestamp)}</span>}
                    {msg.isBot && chatbotConfig.enableFeedback && (
                      <div className="feedback-buttons">
                        <button onClick={() => handleFeedback(msg.id, true)} className={`feedback-btn ${userFeedback[msg.id] === true ? 'active' : ''}`} aria-label="Helpful"><ThumbsUp size={14} /></button>
                        <button onClick={() => handleFeedback(msg.id, false)} className={`feedback-btn ${userFeedback[msg.id] === false ? 'active' : ''}`} aria-label="Not helpful"><ThumbsDown size={14} /></button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="message bot typing">
                {chatbotConfig.showAvatars && <div className="message-avatar"><Bot /></div>}
                <div className="message-content">
                  <div className="typing-indicator"><span></span><span></span><span></span></div>
                </div>
              </div>
            )}
          </div>

          <div className="chat-input-container">
            <form onSubmit={handleSendMessage} className="chat-input-form">
              <input ref={inputRef} type="text" className="chat-input" placeholder={chatbotConfig.placeholder} value={message} onChange={e => setMessage(e.target.value)} aria-label="Type your message" />
              <button type="submit" className="chat-send-button" disabled={!message.trim()} aria-label="Send message"><Send /></button>
            </form>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className="chat-toggle-button" aria-label={isOpen ? "Close chat" : "Open chat"}>
        {isOpen ? <X /> : <MessageCircle />}
      </button>
    </div>
  );
}

// Export configuration for customization
export { defaultConfig };
