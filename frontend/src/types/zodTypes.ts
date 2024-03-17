
import { QuestionSchema } from '@/lib/validators/schema'
import { z } from 'zod'



export type QuestionSchema = z.infer<typeof QuestionSchema>