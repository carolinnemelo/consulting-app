import { db, consultantsTable, ConsultantInsert, ConsultantUpdate } from "@/db";
import { eq } from "drizzle-orm";
import { date } from "drizzle-orm/mysql-core";

export function createService() {
  return {
    async getAll() {
      return await db.select().from(consultantsTable);
    },

    async getById(id: number) {
      const foundConsultant = await db
        .select()
        .from(consultantsTable)
        .where(eq(consultantsTable.id, id));
      if (foundConsultant.length === 0) {
        throw new Error("Consultant not found. Please, try another id.");
      }
      return foundConsultant[0];
    },

    async getConsultantByEmail(email: string) {
      const foundConsultant = await db
        .select()
        .from(consultantsTable)
        .where(eq(consultantsTable.email, email));
      if (!foundConsultant) {
        throw new Error("Consultant not found. Please, try another email.");
      }
      return foundConsultant[0];
    },

    async create(consultant: ConsultantInsert) {
      const existingConsultant = await this.getConsultantByEmail(
        consultant.email
      );
      if (existingConsultant) {
        throw new Error("Consultant already exist. Please, try another email.");
      }
      const { firstName, lastName, email, bio } = consultant;
      await db.insert(consultantsTable).values({ firstName, lastName, email, bio });
    },

    async update({ id, ...consultant }: any) {
      await db
        .update(consultantsTable)
        .set({ updatedAt: new Date(), ...consultant })
        .where(eq(consultantsTable.id, id))
    },
  };
}
