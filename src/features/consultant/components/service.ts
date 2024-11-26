import { db, consultantsTable } from "@/db";


export function createService() {
  return {
    async getAll() {
      return await db.select().from(consultantsTable);
    },
    async create() {

    }
  }
}