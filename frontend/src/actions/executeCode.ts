"use server"

import { API_GATEWAY_CODE_ENDPOINT } from "@/config/endpoints"
import { CodeExecutionType } from "@/lib/validators/schema"


interface ExecuteCodeProps {
    code: string,
    lang: SupportedLangs
}






export async function ExecuteCodeAction(data: ExecuteCodeProps): Promise<ExecuteCodeActionResponse> {

    const result = CodeExecutionType.safeParse(data)

    if (result.success) {

        const response = await fetch(API_GATEWAY_CODE_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(result.data),
            headers: {
                'Content-Type': "application/json"
            }
        })


        const jsonData: ApiGatewayResponse = await response.json()
        const jsonBody: JsonBody = JSON.parse(jsonData.body)


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