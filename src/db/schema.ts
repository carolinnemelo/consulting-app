import { sql } from "drizzle-orm";
import { pgTable, varchar, timestamp, uuid, json, integer } from "drizzle-orm/pg-core";

export const consultantsTable = pgTable("consultants", {
  id: uuid().default(sql`gen_random_uuid()`),
  firstName: varchar().notNull(),
  lastName: varchar().notNull(),
  email: varchar().notNull(), 
  bio: varchar().notNull(),
  // linkedinUrl: varchar(),
  // phone: varchar(), 
  // dynamicFields: json(),
  // status: varchar().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

export const consultantsSkillsTable = pgTable("consultantsSkills", {
  id: integer().notNull().primaryKey(),
  consultant_id: uuid().references(() => consultantsTable.id).notNull(),
  generalItems: json().notNull(),
  backendItems: json().notNull(),
  frontendItems: json().notNull(),
  toolsItems: json().notNull(),
  socialItems: json().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});


export const consultantsEducationTable = pgTable("consultantsEducation", {
  id: integer().notNull().primaryKey(),
  consultant_id: uuid().references(() => consultantsTable.id).notNull(),
  school: varchar().notNull(),
  degree: varchar().notNull(),
  details: varchar().notNull(),
  year: integer().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

export const consultantsWorkTable = pgTable("consultantsWork", {
  id: integer().notNull().primaryKey(),
  consultant_id: uuid().references(() => consultantsTable.id).notNull(),
  title: varchar().notNull(),
  company: varchar().notNull(),
  details: varchar().notNull(),
  year: integer().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});