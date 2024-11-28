"use server";

import { consultantFeature } from "@/features";
import { revalidatePath } from "next/cache";
import { State } from "../logic";

export async function createConsultant(prevState: State, formData: FormData) {
  const validatedFields = await consultantFeature.service.validateFields(formData)
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields",
    };
  }

  try {
    const newConsultant = validatedFields.data;
    consultantFeature.service.create(newConsultant);
  } catch (error) {
    return { success: false, message: error.message };
  }
  revalidatePath("/my-profile");
}
