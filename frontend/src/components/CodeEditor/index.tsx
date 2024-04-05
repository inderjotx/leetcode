'use client'
import React, { useContext, useEffect, useState } from 'react'
import useSWR from 'swr'

import { SelectLanguage } from './SelectLanguage';
import { ExecuteCodeAction } from '@/actions/executeCode';

// ui
import { Button } from "@/components/ui/button";
import { MonacoEditor } from './MonacoEditor';


import { EditorWrapper } from './EditorWrapper';
import { Code2 } from 'lucide-react';
import { userViewLangCode } from '@/actions/userViewLangCode';
import { useSocket } from '../Provider/SocketProvider';


interface CodeEditorProps {
    questionId: number
}



export function CodeEditor({ questionId }: CodeEditorProps) {

    const { code, setCode } = useSocket()
    const [curLang, setLang] = useState<SupportedLangs>("javascript")

    // @ts-ignore todo fix this
    const { isLoading, data: defaultCode } = useSWR<UserViewLangCodeResponse<boolean>, any>(`${curLang}`, fetcher)

    const [result, setResult] = useState<string>("")


    useEffect(() => {

        if (!isLoading && defaultCode?.success && defaultCode.code) {
            setCode(() => defaultCode.code)
        }
    }, [curLang, isLoading, defaultCode, setCode])




    async function fetcher() {
        const data = await userViewLangCode({ language: curLang, questionId: questionId })
        return data
    }





    async function handleClick() {

        console.log(code)

        const response = await ExecuteCodeAction({ lang: curLang, code: code, questionId: questionId })
        if (response.success) {
            console.log(response.result)
            // setResult(response.result.)
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
                <SelectLanguage lang={curLang} changeLang={(value: SupportedLangs) => setLang(value)} />
            </div>
            <EditorWrapper Icon={Code2} height='h-[530px]' width='w-full' className='border' >
                <MonacoEditor multiFile={false} value={code} setValue={setCode} lang={curLang} />
            </EditorWrapper>
        </div>
    )
}





