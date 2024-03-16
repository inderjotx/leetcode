

interface ExecuteCodeActionResponse {
    result?: JsonBody,
    error: any,
    success: boolean,
}


interface JsonBody {
    result: string,
    isError: boolean,
    error?: any
}



interface ApiGatewayResponse {
    statusCode: number,
    body: string

    // stringified
    //    body : {
    //         result: string,
    //         isError: boolean,
    //         error: any
    //     }
}


type SupportedLangs = "javascript" | "python" | "cpp" | "json"
