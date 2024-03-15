import { z } from "zod";


export const CodeExecutionType = z.object({
    code: z.string().trim().min(1),
    lang: z.enum(["javascript", "cpp", "python"])
})


