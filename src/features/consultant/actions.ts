"use server";

import { consultantFeature } from "@/features";

import { State } from "./logic";
import { redirect } from "next/navigation";
;

export async function createConsultant(prevState: State, formData: FormData) {
  const validatedFields = await consultantFeature.service.validateFields(
    formData
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    const newConsultant = validatedFields.data;
    consultantFeature.service.create(newConsultant);
  } catch (error) {
    return { success: false, message: error.message };
  }
  redirect("/consultants");
}
