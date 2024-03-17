import { z } from "zod";


export const CodeExecutionType = z.object({
    code: z.string().trim().min(1),
    lang: z.enum(["javascript", "cpp", "python"])
})


//  input and output , varies with question
// export const testCasesSechma = z.object({
//     input: z.any(),
//     output: z.any()
// })


export const QuestionSchema = z.object({
    title: z.string().min(1, "Don't leave title empty"),
    description: z.string().min(10, "Add more to description"),
    hints: z.string(),
    difficulty: z.enum(['easy', 'medium', 'hard',]),
    // after strinfiying
    testCases: z.string().min(1, "Add Test Cases"),
})





