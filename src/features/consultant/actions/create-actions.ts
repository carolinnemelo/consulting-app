"use server";

import { consultantFeature } from "@/features";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const createConsultantSchema = z.object({
  firstName: z.string().trim().min(1, "Can not be empty").trim(),
  lastName: z.string().trim().min(1, "Can not be empty"),
  email: z.string().trim().email("Insert Valid Email"),
  bio: z.string().max(500).min(4),
});

export type State = {
  errors?: {
    firstName?: string[] | undefined;
    lastName?: string[] | undefined;
    email?: string[] | undefined;
    bio?: string[] | undefined;
  };
  message?: string | null;
};

export async function createConsultant(prevState: State, formData: FormData) {
  const validatedFields = createConsultantSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    bio: formData.get("bio"),
  });

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
