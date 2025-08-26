import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertChatMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ success: false, error: "Invalid contact data", details: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Failed to save contact" });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch contacts" });
    }
  });

  // Chat messages
  app.post("/api/chat", async (req, res) => {
    try {
      const messageData = insertChatMessageSchema.parse(req.body);
      const message = await storage.createChatMessage(messageData);
      
      // Simulate bot response
      if (messageData.isBot === "false") {
        setTimeout(async () => {
          const botResponse = generateBotResponse(messageData.message);
          await storage.createChatMessage({
            message: botResponse,
            isBot: "true"
          });
        }, 1000);
      }
      
      res.json({ success: true, message });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ success: false, error: "Invalid message data", details: error.errors });
      } else {
        res.status(500).json({ success: false, error: "Failed to save message" });
      }
    }
  });

  // Get chat messages
  app.get("/api/chat", async (req, res) => {
    try {
      const messages = await storage.getChatMessages();
      res.json({ success: true, messages });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

function generateBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes("program") || message.includes("course")) {
    return "We offer 6 comprehensive programs: Software Development, AI, Cloud Computing, Cybersecurity, Data Science, and Mobile Development. Which program interests you most?";
  } else if (message.includes("price") || message.includes("cost") || message.includes("fee")) {
    return "Our program fees vary by course duration and complexity. Please contact our admissions team at info@futuremodetech.com for detailed pricing information.";
  } else if (message.includes("duration") || message.includes("time") || message.includes("long")) {
    return "Program durations range from 10-18 months depending on the specialization. Each program includes hands-on projects and industry mentorship.";
  } else if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
    return "Hello! Welcome to Future Mode Technology. I'm here to help you learn about our programs. What would you like to know?";
  } else if (message.includes("admission") || message.includes("apply") || message.includes("enroll")) {
    return "Great! To start your application, please fill out the contact form or call us at +1 (555) 123-4567. Our admissions team will guide you through the process.";
  } else {
    return "Thank you for your question! For detailed information, please contact us at info@futuremodetech.com or call +1 (555) 123-4567. Our team is available Monday-Friday, 9 AM-6 PM.";
  }
}
