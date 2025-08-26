import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const laws = pgTable("laws", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  shortDescription: text("short_description").notNull(),
  fullDescription: text("full_description").notNull(),
  principle: text("principle").notNull(),
  historicalExample: text("historical_example").notNull(),
  modernExample: text("modern_example").notNull(),
  psychologyBehind: text("psychology_behind").notNull(),
  practicalApplication: text("practical_application").notNull(),
  commonMistakes: text("common_mistakes").array().notNull(),
  keyPoints: text("key_points").array().notNull(),
  relatedConcepts: text("related_concepts").array().notNull(),
  category: text("category").notNull(),
  icon: text("icon").notNull(),
});

export const insertLawSchema = createInsertSchema(laws);

export type InsertLaw = z.infer<typeof insertLawSchema>;
export type Law = typeof laws.$inferSelect;
