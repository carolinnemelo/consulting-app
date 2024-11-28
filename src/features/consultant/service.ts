import { db, consultantsTable, ConsultantInsert } from "@/db";
import { eq } from "drizzle-orm";
import { createConsultantSchema } from "./logic";
import { dianaPrinceData, hermioneGrangerData, patrickData, sheeraData, shrekData, tonyStarkData } from "./mockdata";

export function createService() {
  return {
    async getAll() {
      return await db.select().from(consultantsTable);
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
      await db
        .insert(consultantsTable)
        .values({ firstName, lastName, email, bio });
    },

    async validateFields(formData: FormData) {
      const validatedFields = createConsultantSchema.safeParse({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        bio: formData.get("bio"),
        generalItems: formData.get("generalItems"),
        backendItems: formData.get("backendItems"),
        frontendItems: formData.get("frontendItems"),
        toolsItems: formData.get("toolsItems"),
        socialItems: formData.get("socialItems"),
        school: formData.get("school"),
        degree: formData.get("degree"),
        year: formData.get("year"),
        details: formData.get("details"),
      });
      return validatedFields;
    },

    async getCV(name: string) {
      if (name === "sheera") {
        return sheeraData;
      }
      if (name === "diana") {
        return dianaPrinceData;
      }
      if (name === "hermione") {
        return hermioneGrangerData;
      } else{
        return sheeraData
      }
    },
  };
}
