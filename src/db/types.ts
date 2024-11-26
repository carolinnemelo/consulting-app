import { consultantsTable } from ".";

export type ConsultantInsert = typeof consultantsTable.$inferInsert;
export type ConsultantUpdate = Partial<ConsultantInsert> & {id: number}; // partial makes all the values optional and inside the object mandatory

