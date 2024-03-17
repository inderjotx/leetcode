'use client'
import React, { useRef, useState } from 'react'

import { SelectLanguage } from './SelectLanguage';
import { ExecuteCodeAction } from '@/actions/executeCode';

// ui
import { Button } from "@/components/ui/button";
import { MonacoEditor } from './MonacoEditor';


import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { EditorWrapper } from './EditorWrapper';
import { Code2 } from 'lucide-react';


export function CodeEditor() {

    const [code, setCode] = useState<string>("")

    const [curLang, setLang] = useState<SupportedLangs>("python")
    const [result, setResult] = useState<string>("")


    async function handleClick() {

        console.log(code)

        // const response = await ExecuteCodeAction({ lang: curLang, code: code })
        // if (response.success && response.result && response.result.result) {
        //     console.log(response.result.result)
        //     setResult(response.result?.result)
        // }
        // else {
        //     console.log(response.error)
        //     setResult(response.error)
        // }

    }


    return (

        <div className='w-full h-full flex flex-col '>
            <div className='flex justify-between '>
                <Button type="button" onClick={handleClick}>Submit </Button>
                <SelectLanguage changeLang={(value: SupportedLangs) => setLang(value)} />
            </div>
            <EditorWrapper Icon={Code2} height='h-[530px]' width='w-full' className='border' >
                <MonacoEditor multiFile={false} defaultValue={code} setValue={setCode} lang={curLang} />
            </EditorWrapper>
        </div>
    )
}





