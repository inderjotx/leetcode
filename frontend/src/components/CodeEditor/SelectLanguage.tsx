import * as React from "react"
import { supportedLanguages } from "@/config/language"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


interface SelectLanguageProps {
    changeLang: (newLang: SupportedLangs) => void
}


export function SelectLanguage({ changeLang }: SelectLanguageProps) {
    return (
        <Select onValueChange={changeLang} defaultValue={supportedLanguages[0]} name="lang" >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {
                        supportedLanguages.map((lang) => (
                            <SelectItem value={lang} key={lang} >{lang}</SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
