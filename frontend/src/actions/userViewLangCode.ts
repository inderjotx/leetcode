"use server"

import { db } from "@/db"
import { validationSchema } from "@/db/schema"
import { userViewLangCodeSchema } from "@/lib/validators/schema"
import { and, eq } from "drizzle-orm"


interface userViewLangCodeProps {
    language: SupportedLangs,
    questionId: number
}





export async function userViewLangCode(data: userViewLangCodeProps) {

    console.log(data)
    const parsedData = userViewLangCodeSchema.safeParse(data)

    if (parsedData.success) {

        console.log('isvalid')

        try {
            const response = await db.select({ code: validationSchema.userClass }).from(validationSchema).where(and(eq(validationSchema.language, parsedData.data.language), eq(validationSchema.questionId, parsedData.data.questionId)))
            if (response.length == 0 || !('code' in response[0])) new Error("Valid Call")
            return {
                success: true,
                code: response[0].code
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
            error: parsedData.error.errors[0].message
        }

    }


}