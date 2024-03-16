"use server"

import { API_GATEWAY_CODE_ENDPOINT } from "@/config/endpoints"
import { CodeExecutionType } from "@/lib/validators/schema"

// just for testing 
import testData from '@/config/example/testCases.json'

interface ExecuteCodeProps {
    code: string,
    lang: SupportedLangs
}


// get rest code 
// get testcases from the database 


export async function ExecuteCodeAction(data: ExecuteCodeProps): Promise<ExecuteCodeActionResponse> {

    const result = CodeExecutionType.safeParse(data)

    if (result.success) {

        const payload = {
            ...result.data,
            testCases: JSON.stringify(testData)
        }


        const response = await fetch(API_GATEWAY_CODE_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': "application/json"
            }
        })

        const jsonData: ApiGatewayResponse = await response.json()
        console.log(jsonData)
        const jsonBody: JsonBody = JSON.parse(jsonData.body)
        console.log(jsonBody)


        if (jsonData.statusCode == 200) {
            return {
                success: true,
                result: jsonBody,
                error: null
            }
        }
        else {
            return {
                success: false,
                error: jsonBody
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