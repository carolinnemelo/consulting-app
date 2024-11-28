import { consultantsEducationTable, consultantsSkillsTable, consultantsTable, consultantsWorkTable, db } from ".";


export type Db = typeof db;
export type ConsultantInsert = typeof consultantsTable.$inferInsert;
export type ConsultantSkillsInsert = typeof consultantsSkillsTable.$inferInsert;
export type ConsultantEducationInsert = typeof consultantsEducationTable.$inferInsert;
export type ConsultantWorkInsert = typeof consultantsWorkTable.$inferInsert;
export type ConsultantUpdate = Omit<ConsultantInsert, "id" | "createdAt">;
