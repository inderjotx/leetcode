import { escapeCharacters, languageRegexes } from "@/constants";



export function combineCode(userCode: string, lang: SupportedLangs, validationClass: string): string {

    const excapeChar = escapeCharacters[lang]
    const extractedCode = extractUserCodeFromClass(userCode, lang)

    console.log("extracted code")
    console.log(extractedCode)

    const fullCode = validationClass.replace(`${excapeChar}INSERT_USER_CODE_HERE`, extractedCode)
    return fullCode

}




function extractUserCodeFromClass(code: string, lang: SupportedLangs) {

    // find index of start 
    // find index of end 

    // get string from start + 1 to end ( not included )


    const excapeChar = escapeCharacters[lang]

    const lengthOfBeing = `${excapeChar}START`.length

    const startIdx = code.indexOf(`${excapeChar}START`)
    const endIdx = code.indexOf(`${excapeChar}END`)

    const extractedCode = code.slice(startIdx + lengthOfBeing, endIdx)

    return extractedCode


}




// function extractUserCodeFromClass(code: string, language: SupportedLangs): string {
//     const { classIdentifierRegex, openingBraceRegex, closingBraceRegex } = languageRegexes[language];

//     const codeWithoutClassIdentifier = code.replace(classIdentifierRegex, "");
//     const codeWithoutOpeningBrace = codeWithoutClassIdentifier.replace(openingBraceRegex, "");
//     const extractedCode = codeWithoutOpeningBrace.replace(closingBraceRegex, "");

//     return extractedCode;
// }
