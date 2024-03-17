

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

interface CodeFiles {
    validationClass: string,
    userClass: string,
    solutionClass: string
}


type SupportedLangs = "javascript" | "python" | "cpp"

type QuestionDifficulty = "easy" | "medium" | "hard"
