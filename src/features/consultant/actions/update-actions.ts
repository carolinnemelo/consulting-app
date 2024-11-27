"use server";

import { z } from "zod";
import { consultantFeature } from "../instance";

const createConsultantSchema = z.object({
  firstName: z.string().trim().min(1, "Can not be empty").trim(),
  lastName: z.string().trim().min(1, "Can not be empty"),
  email: z.string().trim().email("Insert Valid Email"),
});

type State = {
  loggedConsultant: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  };
  errorMessages: { message: null; errors: {} };
};


export async function updateConsultant(prevState: State, formData: FormData) {
  const loggedConsultant = prevState.loggedConsultant;
  const updatedFields: any = {};
  for (const [field, fieldValue] of Object.entries(loggedConsultant
  )) {
    const newValue = formData.get(field);
    if (field === "id" || field === "createdAt" || fieldValue === newValue) {
      continue;
    }
    updatedFields[field] = newValue;
  }
  console.log(formData)
  await consultantFeature.service.update({updatedFields});
}

