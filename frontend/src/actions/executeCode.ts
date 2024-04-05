"use server"

import { API_GATEWAY_CODE_ENDPOINT } from "@/config"
import { CodeExecutionType } from "@/lib/validators/schema"

import { getQuestionTestCases } from "./getQuestionTestCases"
import { getValidationCode } from "./getValidationCode"
import { combineCode } from "@/lib/getUserCode"

interface ExecuteCodeProps {
    code: string,
    lang: SupportedLangs,
    questionId: number
}


// get rest code 
// get testcases from the database 


export async function ExecuteCodeAction(data: ExecuteCodeProps): Promise<ExecuteCodeActionResponse<boolean>> {

    const result = CodeExecutionType.safeParse(data)

    if (result.success) {

        const testCases = await getQuestionTestCases(result.data.questionId)
        const validationCode = await getValidationCode(result.data.questionId)


        if (!testCases.testCases || !validationCode.success) {

            console.log(testCases)
            return {
                success: false,
                error: "No testCases found or no validation code"
            }
        }


        const payload = {
            ...result.data,
            code: combineCode(result.data.code, result.data.lang, validationCode.validationData[result.data.lang].validationClass),
            testCases: testCases.testCases
        }


        const response = await fetch(API_GATEWAY_CODE_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': "application/json"
            }
        })

        const jsonData: ApiGatewayResponse = await response.json()

        console.log('response from api gateway')
        console.log(jsonData)


        if (jsonData.statusCode == 200 && !jsonData.body.isError) {
            return {
                success: true,
                result: jsonData.body.result,
            }
        }
        else {
            return {
                success: false,
                error: jsonData.body?.error || "error"
            }

        }

    }

    else {
        return {
            error: result.error,
            success: false
        }
    }

}