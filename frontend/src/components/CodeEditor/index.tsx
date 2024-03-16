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
            console.log(response.result.result)
            setResult(response.result?.result)
        }
        else {
            console.log(response.error)
            setResult(response.error)
        }

    }


    return (

        <div className='w-full h-full flex flex-col '>
            <div className='flex justify-between '>
                <Button type="button" onClick={handleClick}>Submit </Button>
                <SelectLanguage changeLang={(value: SupportedLangs) => setLang(value)} />
            </div>
            <EditorWrapper height='h-96' width='w-full' >
                <MonacoEditor editorRef={ref} defaultValue='' lang={curLang} />
            </EditorWrapper>
        </div>
    )
}






{/* <Button type="button" onClick={handleClick}>Submit </Button>
<SelectLanguage changeLang={(value: SupportedLangs) => setLang(value)} /> */}
// <ResizablePanelGroup direction='vertical' className='h-full w-full' >
//     <ResizablePanel defaultSize={80} >
//         <MonacoEditor editorRef={ref} defaultValue='' lang={curLang} />
//     </ResizablePanel>
//     <ResizableHandle withHandle />
//     <ResizablePanel defaultSize={20}   >
//         {result}
//     </ResizablePanel>
// </ResizablePanelGroup>