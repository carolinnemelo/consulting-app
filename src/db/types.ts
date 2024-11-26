import { consultantsTable } from ".";

export type ConsultantInsert = typeof consultantsTable.$inferInsert;
export type ConsultantUpdate = Partial<ConsultantInsert> & {id: number};

