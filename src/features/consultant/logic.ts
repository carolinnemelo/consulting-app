import { z } from "zod";

export const createConsultantSchema = z.object({
  firstName: z.string().trim().min(1, "*Can not be empty").trim(),
  lastName: z.string().trim().min(1, "*Can not be empty"),
  email: z.string().trim().email("*Insert Valid Email"),
  bio: z.string().max(500).min(4, "*Bio can not be empty"),
});

export type State = z.infer<typeof createConsultantSchema>;
