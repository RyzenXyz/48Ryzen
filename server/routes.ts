import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all laws
  app.get("/api/laws", async (req, res) => {
    try {
      const laws = await storage.getAllLaws();
      res.json(laws);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch laws" });
    }
  });

  // Get law by ID
  app.get("/api/laws/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid law ID" });
      }
      
      const law = await storage.getLawById(id);
      if (!law) {
        return res.status(404).json({ message: "Law not found" });
      }
      
      res.json(law);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch law" });
    }
  });

  // Search laws
  app.get("/api/laws/search/:query", async (req, res) => {
    try {
      const query = req.params.query;
      const laws = await storage.searchLaws(query);
      res.json(laws);
    } catch (error) {
      res.status(500).json({ message: "Failed to search laws" });
    }
  });

  // Get laws by category
  app.get("/api/laws/category/:category", async (req, res) => {
    try {
      const category = req.params.category;
      const laws = await storage.getLawsByCategory(category);
      res.json(laws);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch laws by category" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
