'use server'
import { db } from "@/db";
import { validationSchema } from "@/db/schema";
import { validationCodeSchema } from "@/lib/validators/schema";
import { ValidationCodeSchema } from "@/types/zodTypes";
import { eq } from "drizzle-orm";

type AddValidationCodeResponse<TSuccess extends boolean> = TSuccess extends true ? { success: true } : { success: false, error: any }

export async function addValidationCode(data: ValidationCodeSchema): Promise<AddValidationCodeResponse<boolean>> {

    const parsedData = validationCodeSchema.safeParse(data)

    if (parsedData.success) {

        const payload = { questionId: parsedData.data.questionId, language: parsedData.data.language, ...parsedData.data.codeFiles }

        try {

            // will do upsert
            await db.insert(validationSchema)
                .values(payload)
                .onConflictDoUpdate({ target: [validationSchema.questionId, validationSchema.language], set: payload })

            return {
                success: true
            }
        }
        catch (err) {

            console.log(err)
            return {
                success: false,
                error: 'erro'
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
