import { consultantsTable } from ".";

export type ConsultantInsert = typeof consultantsTable.$inferInsert;
export type ConsultantUpdate = Omit<ConsultantInsert, "id" | "createdAt">;
