import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatMessage {
  id: number;
  message: string;
  isBot: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(true); // auto-open on page load
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Bot response logic
  const getBotResponse = (userMessage: string) => {
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
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg: ChatMessage = { id: Date.now(), message: message.trim(), isBot: false };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");

    setTimeout(() => {
      const botMsg: ChatMessage = { id: Date.now() + 1, message: getBotResponse(userMsg.message), isBot: true };
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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-card rounded-xl shadow-2xl w-80 h-96 border border-border mb-4 overflow-hidden flex flex-col animate-fade-in">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
            <h3 className="font-semibold">Tech Support Assistant</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div
            ref={containerRef}
            className="flex-1 p-4 overflow-y-auto flex flex-col space-y-3"
          >
            {messages.length === 0 && (
              <div className="bg-muted rounded-lg p-3 max-w-xs">
                <p className="text-sm">
                  Hi! Ask me about Robotics Lab, Industrial Training, IoT, 3D Printing, Internship Programs, CAD, R&D Services, Web/Mobile Development, Data Science, Cybersecurity, DevOps, Blockchain, or Software Development.
                </p>
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`rounded-lg p-3 max-w-xs break-words ${
                  msg.isBot
                    ? "bg-muted text-left"
                    : "bg-primary text-primary-foreground ml-auto text-right"
                }`}
              >
                <p className="text-sm">{msg.message}</p>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 text-sm"
              />
              <Button type="submit" size="sm" disabled={!message.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl animate-float bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}
