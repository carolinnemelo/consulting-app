"use server";

import { z } from "zod";


const createConsultantSchema = z.object({
  firstName: z.string().trim().min(1, "Can not be empty").trim(),
  lastName: z.string().trim().min(1, "Can not be empty"),
  email: z.string().trim().email("Insert Valid Email"),
});


type State = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  errorMessages: { message: null; errors: {} };
};

export async function updateConsultant(prevState: State, formData: FormData) {
  console.log(formData)
  // const id = formData.get("")
  // try {
  //   const newConsultant = validatedFields.data;
  //   consultantFeature.service.create(newConsultant);
  // } catch (error) {
  //   return { success: false, message: error.message };
  // }
  // revalidatePath("/my-profile");
}