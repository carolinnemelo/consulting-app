import { pgTable, integer, varchar, timestamp } from "drizzle-orm/pg-core";

export const consultantsTable = pgTable("consultants", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstName: varchar().notNull(),
  lastName: varchar().notNull(),
  email: varchar().notNull(), 
  // skills: varchar().notNull(),
  // summary: varchar().notNull(),
  // education: json().notNull(),
  // workExperience: json().notNull(), 
  // toolsAndTechnologies: json().notNull(),
  // languages: json().notNull(),
  // portfolio: varchar(), 
  // location: varchar().notNull(),
  // linkedinUrl: varchar(),
  // phone: varchar(), 
  // dynamicFields: json(),
  // status: varchar().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});
