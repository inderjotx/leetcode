import * as React from "react"
import { supportedLanguages } from "@/config"

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
    lang: SupportedLangs
}


export function SelectLanguage({ changeLang, lang }: SelectLanguageProps) {
    return (
        <Select onValueChange={changeLang} value={lang} name="lang" >
            <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {
                        supportedLanguages.map((lang) => (
                            <SelectItem value={lang} key={lang} > <span className="text-[12px]" > {lang} </span></SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
