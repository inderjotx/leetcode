"use server"

import { supportedLangs } from "@/constants"
import { db } from "@/db"
import { validationSchema } from "@/db/schema"
import { eq } from "drizzle-orm"


const files = {
    validationClass: "",
    userClass: "",
    solutionClass: ""
}



export async function getValidationCode(questionId: number): Promise<GetValidationCodeResponse<boolean>> {

    if (questionId) {

        try {

            const data = await db.select().from(validationSchema).where(eq(validationSchema.questionId, questionId))
            if (data.length == 0) throw new Error("Invalid questionId ")

            // @ts-ignore //fix this  
            const validationData: Record<SupportedLangs, CodeFiles> = {}

            supportedLangs.forEach((lang: SupportedLangs) => {

                const langData = data.find(({ language }) => language === lang)

                if (langData) {
                    validationData[lang] = {
                        validationClass: langData.validationClass,
                        userClass: langData.userClass,
                        solutionClass: langData.solutionClass,
                    } satisfies CodeFiles
                }
                else {
                    validationData[lang] = { ...files }
                }

            })

            return {
                success: true,
                validationData: validationData
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


