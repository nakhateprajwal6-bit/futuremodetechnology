<<<<<<< HEAD
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Settings, ThumbsUp, ThumbsDown } from "lucide-react";
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
  // Dynamic content that can be updated
  knowledgeBase: {
    "robotic": "Robotics Lab teaches building intelligent robotic systems.",
    "industrial": "Industrial Training prepares you for real-world engineering environments.",
    "iot": "IoT program connects and controls devices via smart technologies.",
    "3d": "3D Printing program lets you create physical prototypes from digital models.",
    "internship": "Our Internship Programs provide hands-on experience in robotics and tech.",
    "cad": "CAD Designing teaches 2D & 3D design and modeling techniques.",
    "r&d": "R&D Services help in prototyping and innovation.",
    "rd": "R&D Services help in prototyping and innovation.",
    "web": "Web Development program teaches frontend and backend development using modern frameworks.",
    "mobile": "Mobile App Development covers iOS & Android app development.",
    "data": "Data Science program covers analytics, ML, and data-driven decision making.",
    "cybersecurity": "Cybersecurity program teaches protecting systems and networks.",
    "devops": "DevOps Engineering program teaches CI/CD and infrastructure automation.",
    "blockchain": "Blockchain Development covers smart contracts and decentralized applications.",
    "software": "Software Development program teaches coding, architecture, and project building.",
    "default": "Hi! Ask me about Robotics Lab, Industrial Training, IoT, 3D Printing, Internship Programs, CAD, R&D Services, Web/Mobile Development, Data Science, Cybersecurity, DevOps, Blockchain, or Software Development."
  },
  // Conversation flows for specific scenarios
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

  // Merge provided config with defaults
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

  // Initialize with welcome message and suggestions
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

  // Enhanced bot response logic with conversation flows
  const getBotResponse = (userMessage, context) => {
    const lower = userMessage.toLowerCase();
    
    // Check conversation flows first
    for (const [flowName, flow] of Object.entries(chatbotConfig.flows)) {
      if (flow.triggers.some(trigger => lower.includes(trigger))) {
        setConversationContext(flowName);
        
        if (flow.actions) {
          // Handle special actions
          flow.actions.forEach(action => {
            if (action === "connect_to_agent") {
              setTimeout(() => {
                const followUp = {
                  id: Date.now() + 2,
                  message: "I've notified our team. Someone will contact you shortly. In the meantime, is there anything else I can help with?",
                  isBot: true,
                  timestamp: new Date(),
                  type: "follow_up"
                };
                setMessages(prev => [...prev, followUp]);
              }, 2000);
            }
          });
        }
        
        return flow.response;
      }
    }

    // Check knowledge base
    for (const [keyword, response] of Object.entries(chatbotConfig.knowledgeBase)) {
      if (lower.includes(keyword) && keyword !== "default") {
        // Update suggested questions based on context
        updateSuggestedQuestions(keyword);
        return response;
      }
    }

    // Handle follow-up conversations
    if (context && chatbotConfig.flows[context]?.followUp) {
      return chatbotConfig.flows[context].followUp;
    }

    // Default response
    updateSuggestedQuestions();
    return chatbotConfig.knowledgeBase.default;
  };

  // Update suggested questions based on context
  const updateSuggestedQuestions = (context = null) => {
    const suggestions = {
      general: [
        "What programs do you offer?",
        "Tell me about internships",
        "Web development courses",
        "Contact information"
      ],
      robotic: [
        "Robotics course duration",
        "Prerequisites for robotics",
        "Robotics lab equipment",
        "Career opportunities"
      ],
      web: [
        "Web development curriculum",
        "Frontend technologies",
        "Backend frameworks",
        "Project examples"
      ],
      internship: [
        "Internship duration",
        "Companies partnered",
        "Stipend information",
        "Application process"
      ]
    };

    const key = context || "general";
    setSuggestedQuestions(suggestions[key] || suggestions.general);
=======
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
>>>>>>> b762ab8bef42ca9929d080f43d790c0e517208ec
  };

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

<<<<<<< HEAD
    const userMsg = { 
      id: Date.now(), 
      message: message.trim(), 
      isBot: false,
      timestamp: new Date(),
      type: "user_message"
    };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");

    // Show typing indicator
    setIsTyping(true);
    
    // Simulate bot thinking time
    const thinkingTime = chatbotConfig.delayResponse ? 
      (1000 + Math.random() * 1000) : 500;
    
    setTimeout(() => {
      setIsTyping(false);
      const botResponse = getBotResponse(userMsg.message, conversationContext);
      const botMsg = { 
        id: Date.now() + 1, 
        message: botResponse, 
        isBot: true,
        timestamp: new Date(),
        type: "bot_response"
      };
      setMessages(prev => [...prev, botMsg]);
    }, thinkingTime);
  };

  // Handle quick question selection
  const handleQuickQuestion = (question) => {
    setMessage(question);
    // Auto-send after a brief delay for better UX
    setTimeout(() => {
      const userMsg = { 
        id: Date.now(), 
        message: question, 
        isBot: false,
        timestamp: new Date(),
        type: "user_message"
      };
      setMessages((prev) => [...prev, userMsg]);
      setMessage("");

      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const botResponse = getBotResponse(question, conversationContext);
        const botMsg = { 
          id: Date.now() + 1, 
          message: botResponse, 
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMsg]);
      }, 1000);
    }, 100);
  };

  // Handle user feedback
  const handleFeedback = (messageId, isPositive) => {
    setUserFeedback(prev => ({
      ...prev,
      [messageId]: isPositive
    }));
    
    // In a real app, you would send this to your analytics/backend
    console.log(`Feedback for message ${messageId}: ${isPositive ? 'positive' : 'negative'}`);
    
    // Show thank you message for feedback
    if (isPositive) {
      const thankYouMsg = {
        id: Date.now(),
        message: "Thanks for your feedback! 😊",
        isBot: true,
        timestamp: new Date(),
        type: "feedback_ack"
      };
      setMessages(prev => [...prev, thankYouMsg]);
    }
=======
    const userMsg = { id: Date.now(), message: message.trim(), isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");

    setTimeout(() => {
      const botMsg = { id: Date.now() + 1, message: getBotResponse(userMsg.message), isBot: true };
      setMessages((prev) => [...prev, botMsg]);
    }, 500);
>>>>>>> b762ab8bef42ca9929d080f43d790c0e517208ec
  };

  // Auto-scroll to bottom on new messages
  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
<<<<<<< HEAD
  }, [messages, isTyping]);

  // Focus input when chat opens
  useLayoutEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Format timestamp
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Dynamic CSS variables based on config
  const dynamicStyles = {
    '--primary-color': chatbotConfig.primaryColor,
    '--primary-hover': `${chatbotConfig.primaryColor}E6`
  };

  return (
    <div 
      className={`chatbot-container ${chatbotConfig.position}`}
      style={dynamicStyles}
    >
=======
  }, [messages]);

  return (
    <div className="chatbot-container">
>>>>>>> b762ab8bef42ca9929d080f43d790c0e517208ec
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
<<<<<<< HEAD
            <div className="chat-title-container">
              <Bot className="chat-bot-icon" />
              <div>
                <h3 className="chat-title">{chatbotConfig.title}</h3>
                <p className="chat-subtitle">{chatbotConfig.subtitle}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="chat-close-button"
              aria-label="Close chat"
=======
            <h3 className="chat-title">Tech Support Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="chat-close-button"
>>>>>>> b762ab8bef42ca9929d080f43d790c0e517208ec
            >
              <X />
            </button>
          </div>

          {/* Messages */}
          <div ref={containerRef} className="messages-container">
            {messages.length === 0 && (
<<<<<<< HEAD
              <div className="welcome-section">
                <div className="welcome-message">
                  <Bot className="welcome-icon" />
                  <div>
                    <p className="welcome-title">{chatbotConfig.welcomeMessage}</p>
                  </div>
                </div>
                
                {/* Suggested Questions */}
                <div className="suggested-questions">
                  <p className="suggestions-title">Quick questions:</p>
                  <div className="questions-grid">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        className="question-chip"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
=======
              <div className="welcome-message">
                <p>
                  Hi! Ask me about Robotics Lab, Industrial Training, IoT, 3D Printing, Internship Programs, CAD, R&D Services, Web/Mobile Development, Data Science, Cybersecurity, DevOps, Blockchain, or Software Development.
                </p>
>>>>>>> b762ab8bef42ca9929d080f43d790c0e517208ec
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message ${msg.isBot ? "bot" : "user"}`}
              >
<<<<<<< HEAD
                {chatbotConfig.showAvatars && (
                  <div className="message-avatar">
                    {msg.isBot ? <Bot /> : <User />}
                  </div>
                )}
                <div className="message-content">
                  <p className="message-text">{msg.message}</p>
                  <div className="message-footer">
                    {chatbotConfig.showTimestamps && (
                      <span className="message-time">{formatTime(msg.timestamp)}</span>
                    )}
                    {msg.isBot && chatbotConfig.enableFeedback && (
                      <div className="feedback-buttons">
                        <button
                          onClick={() => handleFeedback(msg.id, true)}
                          className={`feedback-btn ${userFeedback[msg.id] === true ? 'active' : ''}`}
                          aria-label="Helpful"
                        >
                          <ThumbsUp size={14} />
                        </button>
                        <button
                          onClick={() => handleFeedback(msg.id, false)}
                          className={`feedback-btn ${userFeedback[msg.id] === false ? 'active' : ''}`}
                          aria-label="Not helpful"
                        >
                          <ThumbsDown size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot typing">
                {chatbotConfig.showAvatars && (
                  <div className="message-avatar">
                    <Bot />
                  </div>
                )}
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
=======
                <p>{msg.message}</p>
              </div>
            ))}
>>>>>>> b762ab8bef42ca9929d080f43d790c0e517208ec
          </div>

          {/* Input */}
          <div className="chat-input-container">
            <form onSubmit={handleSendMessage} className="chat-input-form">
              <input
<<<<<<< HEAD
                ref={inputRef}
                type="text"
                className="chat-input"
                placeholder={chatbotConfig.placeholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-label="Type your message"
=======
                type="text"
                className="chat-input"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
>>>>>>> b762ab8bef42ca9929d080f43d790c0e517208ec
              />
              <button 
                type="submit" 
                className="chat-send-button"
                disabled={!message.trim()}
<<<<<<< HEAD
                aria-label="Send message"
=======
>>>>>>> b762ab8bef42ca9929d080f43d790c0e517208ec
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
<<<<<<< HEAD
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X /> : <MessageCircle />}
=======
      >
        <MessageCircle />
>>>>>>> b762ab8bef42ca9929d080f43d790c0e517208ec
      </button>
    </div>
  );
}
<<<<<<< HEAD

// Export configuration for easy customization
export { defaultConfig };
=======
>>>>>>> b762ab8bef42ca9929d080f43d790c0e517208ec
