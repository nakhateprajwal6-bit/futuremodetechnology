import { randomUUID } from "crypto";

export class MemStorage {
  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.chatMessages = new Map();
  }

  async getUser(id) {
    return this.users.get(id);
  }

  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact) {
    const id = randomUUID();
    const contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts() {
    return Array.from(this.contacts.values());
  }

  async createChatMessage(insertMessage) {
    const id = randomUUID();
    const message = { 
      ...insertMessage, 
      id, 
      createdAt: new Date(),
      isBot: insertMessage.isBot || "false"
    };
    this.chatMessages.set(id, message);
    return message;
  }

  async getChatMessages() {
    return Array.from(this.chatMessages.values())
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
  }
}

export const storage = new MemStorage();