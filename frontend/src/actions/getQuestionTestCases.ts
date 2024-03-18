"use server"

import { db } from "@/db"
import { questions } from "@/db/schema"
import { eq } from "drizzle-orm"




export async function getQuestionTestCases(questionId: number) {

    if (!questionId) {

        try {

            const data = await db.select({ testCases: questions.testCases }).from(questions).where(eq(questions.id, questionId))

            if (data.length == 0 || !('testCases' in data[0])) throw new Error("Invalid questionId ")

            return {
                success: true,
                testCases: data[0].testCases
            }
        }

        catch (err: any) {

            return {
                success: false,
                error: "Error fetching data"
            }

        }



    }

    else {

        return {
            success: false,
            error: "no questionId"
        }

    }


}