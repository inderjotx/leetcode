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
import { useTheme } from 'next-themes';


export function CodeEditor() {

    // todo: fix to null or monoco instance
    const ref = useRef<any>(null)
    const [curLang, setLang] = useState<SupportedLangs>("python")
    const [result, setResult] = useState<string>("")


    async function handleClick() {
        console.log(curLang)
        console.log(ref.current.getValue())
        const response = await ExecuteCodeAction({ lang: curLang, code: ref.current.getValue() })

        if (response.success && response.result && response.result.result) {
            setResult(response.result?.result)
        }
        else {
            setResult(response.error)
        }

    }


    return (

        <ResizablePanelGroup direction='vertical' className='h-full w-full' >
            <ResizablePanel defaultSize={80} >
                <div className="flex items-center justify-between py-3">
                    <Button type="button" onClick={handleClick}>Submit </Button>
                    <SelectLanguage changeLang={(value: SupportedLangs) => setLang(value)} />
                </div>
                <MonacoEditor editorRef={ref} defaultValue='' lang={curLang} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={20}   >
                {result}
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}