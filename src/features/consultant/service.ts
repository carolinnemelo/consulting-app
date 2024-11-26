import { db, consultantsTable, ConsultantInsert, ConsultantUpdate } from "@/db";
import { eq } from "drizzle-orm";

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
        throw new Error("Consultant not found. Please, try another email.");
      }
      return foundConsultant;
    },

    async create(consultant: ConsultantInsert) {
      const existingConsultant = await this.getConsultantByEmail(
        consultant.email
      );
      if (existingConsultant) {
        throw new Error("Consultant already exist. Please, try another email.");
      }
      const { firstName, lastName, email } = consultant;
      await db.insert(consultantsTable).values({ firstName, lastName, email });
    },

    async update(consultant: ConsultantUpdate) {
      await db.update(consultantsTable).set({...consultant}).where(eq(consultantsTable.id,consultant.id));
    },
  };
}
