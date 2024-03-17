import { Question, db } from "@/db";
import { QuestionSchema } from './validators/schema';
import { questions } from "@/db/schema";


type InsertQuestionResponse<TSuccess extends boolean> = TSuccess extends true ? { success: true, id: number } : { success: false, error: any }





export async function insertQuestion(data: Omit<Question, 'id'>): Promise<InsertQuestionResponse<boolean>> {
    console.log('Before Insteting question to the database')
    console.log(data)

    const parsedData = QuestionSchema.safeParse(data)

    if (parsedData.success) {


        try {

            const response = await db.insert(questions).values({ ...parsedData.data, testCases: JSON.stringify(parsedData.data.testCases) }).returning({ id: questions.id })
            return {
                success: true,
                id: response[0].id
            }

        }

        catch (err) {

            return {
                success: false,
                error: err
            }

        }



    }

    else {

        return {
            success: false,
            error: parsedData.error
        }

    }

}