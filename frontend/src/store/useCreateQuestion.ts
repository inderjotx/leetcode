import { QuestionSchema } from '@/types/zodTypes'
import { create } from 'zustand'

type userCreateQuestionType = QuestionSchema & {
    setTitle: (val: string) => void,
    setDescription: (val: string) => void,
    setDifficulty: (val: QuestionDifficulty) => void,
    setTestCases: (val: string) => void,
    setHints: (val: string) => void
}


export const useCreateQuestion = create<userCreateQuestionType>((set) => ({
    title: "",
    description: "",
    difficulty: "easy",
    testCases: "",
    hints: "",
    setTitle: (val) => set(({ title: val })),
    setDescription: (val) => set(({ description: val })),
    setDifficulty: (val) => set(({ difficulty: val })),
    setTestCases: (val) => set(({ testCases: val })),
    setHints: (val) => set(({ hints: val })),
}))





