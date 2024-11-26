import { db, consultantsTable, ConsultantInsert } from "@/db";
import { eq } from "drizzle-orm";
import { consultantFeature } from "./instance";

export function createService() {
  return {
    async getAll() {
      return await db.select().from(consultantsTable);
    },

    async getById(id: number) {
      return await db
        .select()
        .from(consultantsTable)
        .where(eq(consultantsTable.id, id));
    },

    async getConsultantByEmail(email: string) {
      const foundConsultant = await db
        .select()
        .from(consultantsTable)
        .where(eq(consultantsTable.email, email));
      if (!foundConsultant) {
        const messageConsultantNotFound =
          "This email does not exist in our database. Please, try again.";

        return { messageConsultantNotFound };
      }
      return foundConsultant;
    },

    async create(consultant: ConsultantInsert) {
      const { firstName, lastName, email } = consultant;
      await db.insert(consultantsTable).values({ firstName, lastName, email });
    },
  };
}
