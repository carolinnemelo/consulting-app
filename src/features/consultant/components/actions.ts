"use server"

import { z } from "zod"

const createConsultantSchema = z.object({
  firstName: z.string().min(1, "Can not be empty"),
  lastName: z.string().min(1, "Can not be empty"),
  email: z.string().email("Insert Valid Email"),
});

export type State = {
  errors: {
    firstName?: string[] | undefined;
    choice1?: string[] | undefined;
    choice2?: string[] | undefined;
  };
  message?: string | null;
};

export async function createConsultant(formData: FormData) {
  const validatedFields = createConsultantSchema.safeParse({
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields",
    };
  }
}