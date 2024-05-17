import * as z from "zod"

export const authFormSchema = z.object({
    username: z.string().min(2).max(12),
    password: z.string().min(6).max(15)
})