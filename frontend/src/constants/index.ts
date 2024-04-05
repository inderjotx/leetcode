

export const supportedLangs: SupportedLangs[] = ["cpp", "javascript", "python"]


export const escapeCharacters: { [key: string]: string } = {
    "python": "#",
    "javascript": "//",
    "cpp": "//",
    "java": "//",
    "csharp": "//",
    "ruby": "#",
    "php": "//",
    "go": "//",
    "swift": "//",
    "kotlin": "//",
    "scala": "//",
    "rust": "//",
    "bash": "#",
    "perl": "#",
    "r": "#",
    "sql": "--",
    "html": "<!--",
    "css": "/*",
    "xml": "<!--",
    "yaml": "#",
    "markdown": ""
};



export const languageRegexes: { [key: string]: { classIdentifierRegex: RegExp, openingBraceRegex: RegExp, closingBraceRegex: RegExp } } = {
    "cpp": {
        classIdentifierRegex: /^\s*class\s+\w+\s*\{?\s*/,
        openingBraceRegex: /^\s*\{?\s*/,
        closingBraceRegex: /\s*}\s*$/,
    },
    "javascript": {
        classIdentifierRegex: /^\s*class\s+\w+\s*\{?\s*/,
        openingBraceRegex: /^\s*\{?\s*/,
        closingBraceRegex: /\s*}\s*$/,
    },
    "python": {
        classIdentifierRegex: /^\s*class\s+\w+\s*:\s*/,
        openingBraceRegex: /^\s*:\s*/,
        closingBraceRegex: /.*/,
    },
    "java": {
        classIdentifierRegex: /^\s*class\s+\w+\s*\{?\s*/,
        openingBraceRegex: /^\s*\{?\s*/,
        closingBraceRegex: /\s*}\s*$/,
    },
};