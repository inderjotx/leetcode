import { z } from "zod";


export const CodeExecutionType = z.object({
    code: z.string().trim().min(1),
    lang: z.enum(["javascript", "cpp", "python"])
})


//  input and output , varies with question
const testCasesSechma = z.object({
    input: z.any(),
    output: z.any()
})


export const QuestionSchema = z.object({
    title: z.string().min(5),
    description: z.string().min(10),
    hints: z.string().optional(),
    difficulty: z.enum(['easy', 'medium', 'hard']),
    testCases: z.array(testCasesSechma),
})


