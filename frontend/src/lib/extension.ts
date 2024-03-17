

export function getExtension(lang: SupportedLangs) {

    switch (lang) {

        case 'javascript':
            return '.js'
        case 'python':
            return '.py'
        case 'cpp':
            return '.cpp'
        default:
            return ""
    }
}