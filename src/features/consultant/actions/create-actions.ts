"use server";

import { consultantFeature } from "@/features";
import { revalidatePath } from "next/cache";
import { z } from "zod";



const createConsultantSchema = z.object({
  firstName: z.string().trim().min(1, "Can not be empty").trim(),
  lastName: z.string().trim().min(1, "Can not be empty"),
  email: z.string().trim().email("Insert Valid Email"),
  bio: z.string().max(500).min(4),
  generalItems: z
    .string()
    .transform((value) =>
      value
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0)
    )
    .refine(
      (arr) => arr.length > 0,
      "General items must have at least one entry"
    ),
  backendItems: z
  .string()
  .transform((value) =>
    value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0)
  )
  .refine(
    (arr) => arr.length > 0,
    "Backend items must have at least one entry"
  ),
  frontendItems: z
  .string()
  .transform((value) =>
    value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0)
  )
  .refine(
    (arr) => arr.length > 0,
    "Frontend items must have at least one entry"
  ),
  toolsItems: z
  .string()
  .transform((value) =>
    value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0)
  )
  .refine(
    (arr) => arr.length > 0,
    "Tools items must have at least one entry"
  ),
  socialItems: z
  .string()
  .transform((value) =>
    value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0)
  )
  .refine(
    (arr) => arr.length > 0,
    "Social items must have at least one entry"
  ),
  school: z.string().trim().min(1, "Can not be empty"),
  degree: z.string().trim().min(1, "Can not be empty"),
  year: z.string().trim().min(1, "Can not be empty"),
  details: z.string().trim().min(1, "Can not be empty"),
});

export type State = z.infer<typeof createConsultantSchema>


export async function createConsultant(prevState: State, formData: FormData) {
  const validatedFields = createConsultantSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    bio: formData.get("bio"),
    generalItems: formData.get("generalItems"),
    backendItems: formData.get("backendItems"), 
    frontendItems: formData.get("frontendItems"), 
    toolsItems:  formData.get("toolsItems"),
    socialItems:  formData.get("socialItems"),
    school:  formData.get("school"),
    degree:  formData.get("degree"),
    year: formData.get("year"),
    details: formData.get("details"),
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
