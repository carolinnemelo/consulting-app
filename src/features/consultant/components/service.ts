import { db, consultantsTable, ConsultantInsert } from "@/db";

export function createService() {
  return {
    async getAll() {
      return await db.select().from(consultantsTable);
    },
    async create(consultant: ConsultantInsert) {
      const { firstName, lastName, email } = consultant;
      await db.insert(consultantsTable).values({ firstName, lastName, email });
    },
  };
}
