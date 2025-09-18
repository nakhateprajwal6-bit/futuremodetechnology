import { createServer } from "http";
import { storage } from "./storage.js";
import { insertContactSchema, insertChatMessageSchema } from "../shared/schema.js";
import { ZodError } from "zod";

export async function registerRoutes(app) {
  // ===== Contact Form =====
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof ZodError) res.status(400).json({ success: false, error: "Invalid contact data", details: error.errors });
      else res.status(500).json({ success: false, error: "Failed to save contact" });
    }
  });

  app.get("/api/contacts", async (_req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json({ success: true, contacts });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch contacts" });
    }
  });

  // ===== Chat API =====
  app.post("/api/chat", async (req, res) => {
    try {
      const messageData = insertChatMessageSchema.parse(req.body);
      const message = await storage.createChatMessage(messageData);

      if (messageData.isBot === "false") {
        setTimeout(async () => {
          const botResponse = generateBotResponse(messageData.message);
          await storage.createChatMessage({ message: botResponse, isBot: "true" });
        }, 1000);
      }

      res.json({ success: true, message });
    } catch (error) {
      if (error instanceof ZodError) res.status(400).json({ success: false, error: "Invalid message data", details: error.errors });
      else res.status(500).json({ success: false, error: "Failed to save message" });
    }
  });

  app.get("/api/chat", async (_req, res) => {
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

// ===== Bot Logic =====
function generateBotResponse(userMessage) {
  const msg = userMessage.toLowerCase();
  if (msg.includes("program") || msg.includes("course")) return "We offer 6 comprehensive programs: Software Development, AI, Cloud Computing, Cybersecurity, Data Science, and Mobile Development. Which program interests you most?";
  if (msg.includes("price") || msg.includes("cost") || msg.includes("fee")) return "Our program fees vary. Contact admissions at info@futuremodetech.com.";
  if (msg.includes("duration") || msg.includes("time") || msg.includes("long")) return "Program durations range from 10-18 months depending on specialization.";
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) return "Hello! Welcome to Future Mode Technology. What would you like to know?";
  if (msg.includes("admission") || msg.includes("apply") || msg.includes("enroll")) return "To apply, fill out the contact form or call +1 (555) 123-4567.";
  return "Thank you! For details, contact info@futuremodetech.com or call +1 (555) 123-4567.";
}
