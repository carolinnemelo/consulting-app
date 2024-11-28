import { sql } from "drizzle-orm";
import { pgTable, varchar, timestamp, uuid } from "drizzle-orm/pg-core";

export const consultantsTable = pgTable("consultants", {
  id: uuid().default(sql`gen_random_uuid()`).primaryKey(),
  firstName: varchar().notNull(),
  lastName: varchar().notNull(),
  email: varchar().notNull(), 
  bio: varchar().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});