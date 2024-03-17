
import {
    pgTable,
    text,
    integer,
    serial,
    pgEnum,
    boolean,
    timestamp,
    primaryKey,
    index
} from "drizzle-orm/pg-core"
import { users } from "./user"


export const difficultyEnum = pgEnum('difficulty', ['easy', 'medium', 'hard'])
export const langugageEnum = pgEnum('language', ['cpp', 'python', 'javascript'])


export const questions = pgTable("question", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    hints: text("hints").notNull(),
    difficulty: difficultyEnum('difficulty').notNull(),
    testCases: text("testCases").notNull(),
},
    (table) => ({
        difficulty_idx: index("difficulty_idx").on(table.difficulty)
    })
)


export const validationSchema = pgTable('validationSchema', {
    questionId: integer('questionId').references(() => questions.id, { onDelete: "cascade" }).notNull(),
    language: langugageEnum('language').notNull(),
    validationClass: text("validationClass").notNull(),
    solutionClass: text("solutionClass").notNull(),
    userClass: text("userClass").notNull(),
},
    (table) => ({
        questionIdx: index('validation_schema_question_idx').on(table.questionId),
    })
)



export const solutions = pgTable('solution', {
    questionId: integer('questionId').references(() => questions.id, { onDelete: "cascade" }).notNull(),
    language: langugageEnum('language').notNull(),
    userSolution: text("userSolution").notNull(),
    userId: text("userId").references(() => users.id, { onDelete: "cascade" }).notNull(),
    isAccepted: boolean("isAccepted").notNull(),
    totalTestCases: integer("totalTestCases").notNull(),
    testCasesPassed: integer("testCasesPassed").notNull(),
    attemptedOn: timestamp('attemptedOn').defaultNow()

}, (table) => ({
    pk: primaryKey({ columns: [table.questionId, table.userId] }),
    questionIdx: index('solutions_question_idx').on(table.questionId),
    userIdx: index('user_idx').on(table.userId)
}))



export const tag = pgTable('tag', {
    tag: text('tag').notNull().primaryKey().unique()
})



export const questionTag = pgTable('questionTag', {
    questionId: integer('questionId').references(() => questions.id, { onDelete: "cascade" }).notNull(),
    tag: text('tag').references(() => tag.tag).notNull(),
}, (table) => ({
    pk: primaryKey({ columns: [table.tag, table.questionId] })
}))