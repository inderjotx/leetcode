import { db } from "@/db";


export async function getQuestion() {

    const question = await db.query.questions.findMany()
    return question
}




export async function getQuestionWithId(id: number) {

    const question = await db.query.questions.findFirst({
        where(fields, operators) {
            return operators.eq(fields.id, id)
        },
    })
    return question
}

