import { type Law, type InsertLaw } from "@shared/schema";
import { lawsData } from "../client/src/lib/laws-data";

export interface IStorage {
  getAllLaws(): Promise<Law[]>;
  getLawById(id: number): Promise<Law | undefined>;
  searchLaws(query: string): Promise<Law[]>;
  getLawsByCategory(category: string): Promise<Law[]>;
}

export class MemStorage implements IStorage {
  private laws: Map<number, Law>;

  constructor() {
    this.laws = new Map();
    // Initialize with the 48 laws data
    lawsData.forEach(law => {
      this.laws.set(law.id, law);
    });
  }

  async getAllLaws(): Promise<Law[]> {
    return Array.from(this.laws.values()).sort((a, b) => a.id - b.id);
  }

  async getLawById(id: number): Promise<Law | undefined> {
    return this.laws.get(id);
  }

  async searchLaws(query: string): Promise<Law[]> {
    const searchTerm = query.toLowerCase();
    return Array.from(this.laws.values()).filter(law => 
      law.title.toLowerCase().includes(searchTerm) ||
      law.shortDescription.toLowerCase().includes(searchTerm) ||
      law.principle.toLowerCase().includes(searchTerm)
    ).sort((a, b) => a.id - b.id);
  }

  async getLawsByCategory(category: string): Promise<Law[]> {
    if (category === "all") {
      return this.getAllLaws();
    }
    return Array.from(this.laws.values()).filter(law => 
      law.category.toLowerCase() === category.toLowerCase()
    ).sort((a, b) => a.id - b.id);
  }
}

export const storage = new MemStorage();
