'use client'

import React, { useRef, useState } from 'react'

import { SelectLanguage } from './SelectLanguage';
import { ExecuteCodeAction } from '@/actions/executeCode';

// ui
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MonacoEditor } from './MonacoEditor';


export function CodeEditor() {

    // todo: fix to null or monoco instance
    const ref = useRef<any>(null)
    const [curLang, setLang] = useState<SupportedLangs>("python")

    return (
        <form className="h-full" action={ExecuteCodeAction} >
            <div className="flex items-center justify-between py-3">
                <div> <Button type="submit" >Submit </Button> </div>
                <SelectLanguage changeLang={(value: SupportedLangs) => setLang(value)} />
            </div>
            <MonacoEditor editorRef={ref} defaultValue='' lang={curLang} />
        </form>
    )
}