import { db, consultantsTable, ConsultantInsert } from "@/db";
import { eq } from "drizzle-orm";

export function createService() {
  return {
    async getAll() {
      return await db.select().from(consultantsTable);
    },

    async getById(id: number) {
      return await db.select().from(consultantsTable).where(eq(consultantsTable.id, id))
    },

    async create(consultant: ConsultantInsert) {
      const { firstName, lastName, email } = consultant;
      await db.insert(consultantsTable).values({ firstName, lastName, email });
    },
  };
}
