import { sql } from "drizzle-orm";
import { pgTable, varchar, timestamp, uuid } from "drizzle-orm/pg-core";

export const consultantsTable = pgTable("consultants", {
  id: uuid().default(sql`gen_random_uuid()`),
  firstName: varchar().notNull(),
  lastName: varchar().notNull(),
  email: varchar().notNull(), 
  bio: varchar().notNull(),
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
