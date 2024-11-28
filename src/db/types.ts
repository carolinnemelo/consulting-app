import { consultantsTable, db } from ".";

export type Db = typeof db;
export type ConsultantInsert = typeof consultantsTable.$inferInsert;
