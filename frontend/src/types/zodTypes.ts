
import { QuestionSchema, codeFilesSchema, userViewLangCodeSchema, validationCodeSchema } from '@/lib/validators/schema'
import { z } from 'zod'




export type QuestionSchema = z.infer<typeof QuestionSchema>
export type CodeFilesSchema = z.infer<typeof codeFilesSchema>
export type ValidationCodeSchema = z.infer<typeof validationCodeSchema>
export type UserViewLangCodeSchema = z.infer<typeof userViewLangCodeSchema>
