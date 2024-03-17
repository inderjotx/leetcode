import { relations } from "drizzle-orm";
import { questionTag, questions, solutions, tag, validationSchema } from "./question";
import { users } from "./user";


export const userRelations = relations(users, ({ one, many }) => ({
    questionsAttempted: many(solutions),
}))




export const questionRelations = relations(questions, ({ one, many }) => ({
    usersAttemptedThisQuestion: many(solutions),
    tags: many(questionTag)
}))


export const tagRelations = relations(tag, ({ many }) => ({
    questions: many(questionTag)
}))



export const validationSchemaRelations = relations(validationSchema, ({ one, many }) => ({
    question: one(questions, {
        fields: [validationSchema.questionId],
        references: [questions.id]
    })
}))





export const questionTagRelations = relations(questionTag, ({ one, many }) => ({
    question: one(questions, {
        fields: [questionTag.questionId],
        references: [questions.id]
    })
    ,
    tag: one(tag, {
        fields: [questionTag.questionId],
        references: [tag.tag]
    })
    ,

}))




export const solutionRelations = relations(solutions, ({ one, many }) => ({
    question: one(questions, {
        fields: [solutions.questionId],
        references: [questions.id]
    })
    ,
    user: one(users, {
        fields: [solutions.questionId],
        references: [users.id]
    })
}))