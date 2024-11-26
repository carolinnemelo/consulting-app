"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { consultantFeature } from ".";


const createConsultantSchema = z.object({
  firstName: z.string().trim().min(1, "Can not be empty").trim(),
  lastName: z.string().trim().min(1, "Can not be empty"),
  email: z.string().trim().email("Insert Valid Email"),
});

export type State = {
  errors?: {
    firstName?: string[] | undefined;
    lastName?: string[] | undefined;
    email?: string[] | undefined;
  };
  message?: string | null;
};

export async function createConsultant(prevState: State, formData: FormData) {
  const validatedFields = createConsultantSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields",
    };
  }
  const isConsultantDuplicate = await isEmailDuplicate(
    validatedFields.data.email
  );

  if (isConsultantDuplicate) {
    console.log("Consultant already exists, try again");
    return;
  }
  const newConsultant = validatedFields.data;

  consultantFeature.service.create(newConsultant);
  console.log(validatedFields);
  revalidatePath("/my-profile");
}

async function isEmailDuplicate(email: string) {
  const foundConsultant = await consultantFeature.service.getConsultantByEmail(
    email
  );
  if (foundConsultant) {
    return true;
  }
  return false;
}