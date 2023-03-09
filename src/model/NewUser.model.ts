import { z } from "zod";

export const NewUserSchema = z.object({});

export type NewUser = z.infer<typeof NewUserSchema>;
