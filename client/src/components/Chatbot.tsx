import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { ChatMessage } from "@shared/schema";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const queryClient = useQueryClient();

  const { data: messagesResponse } = useQuery<{ success: boolean; messages: ChatMessage[] }>({
    queryKey: ["/api/chat"],
    enabled: isOpen,
  });

  const sendMessageMutation = useMutation({
    mutationFn: async (messageText: string) => {
      const response = await apiRequest("POST", "/api/chat", {
        message: messageText,
        isBot: "false"
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/chat"] });
      setMessage("");
    },
  });

  // Poll for new messages when chatbot is open
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      queryClient.invalidateQueries({ queryKey: ["/api/chat"] });
    }, 2000);

    return () => clearInterval(interval);
  }, [isOpen, queryClient]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    sendMessageMutation.mutate(message);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="chatbot-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-card rounded-xl shadow-2xl w-80 h-96 border border-border mb-4 overflow-hidden animate-fade-in" data-testid="chat-window">
          <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
            <h3 className="font-semibold" data-testid="chat-header">Tech Support Assistant</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
              data-testid="button-close-chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <ScrollArea className="h-64 p-4" data-testid="chat-messages">
            <div className="space-y-3">
              {/* Welcome message */}
              <div className="bg-muted rounded-lg p-3 max-w-xs">
                <p className="text-sm">
                  Hi! I'm here to help you with any questions about our programs. How can I assist you today?
                </p>
              </div>
              
              {/* Messages from API */}
              {messagesResponse?.success && messagesResponse.messages.map((msg: ChatMessage) => (
                <div 
                  key={msg.id}
                  className={`rounded-lg p-3 max-w-xs ${
                    msg.isBot === "true" 
                      ? "bg-muted text-left" 
                      : "bg-primary text-primary-foreground ml-auto text-right"
                  }`}
                  data-testid={`chat-message-${msg.id}`}
                >
                  <p className="text-sm">{msg.message}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t border-border">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 text-sm"
                disabled={sendMessageMutation.isPending}
                data-testid="input-chat-message"
              />
              <Button 
                type="submit"
                size="sm"
                disabled={sendMessageMutation.isPending || !message.trim()}
                data-testid="button-send-message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
      
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl animate-float bg-primary text-primary-foreground hover:bg-blue-700"
        data-testid="button-toggle-chatbot"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}
