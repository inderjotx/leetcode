import { escapeCharacters } from "@/constants";



export function combineCode(userCode: string, lang: SupportedLangs, validationClass: string): string {

    const excapeChar = escapeCharacters[lang]
    const extractedCode = extractUserCodeFromClass(userCode, lang)
    const fullCode = validationClass.replace(`${excapeChar}INSERT_USER_CODE_HERE`, extractedCode)
    return fullCode

}




function extractUserCodeFromClass(code: string, lang: SupportedLangs): string {
    const regex = {
        'python': /class\s+\w+:(\s*[\s\S]*?)\s*(?=\n\s*(?:class|$))/,
        'javascript': /class\s+\w+\s*\{(\s*[\s\S]*?(?:\s*\{[\s\S]*?\}\s*)*)\s*\}/,
        'cpp': /class\s+\w+\s*\{(\s*[\s\S]*?(?:\s*\{[\s\S]*?\}\s*)*)\s*\}\s*;/,
        'java': /(?:public\s+)?class\s+\w+\s*\{(\s*[\s\S]*?(?:\s*\{[\s\S]*?\}\s*)*)\s*\}/
    };

    const pattern = regex[lang];
    const match = code.match(pattern);
    return match ? match[1].trim() : "";
}
