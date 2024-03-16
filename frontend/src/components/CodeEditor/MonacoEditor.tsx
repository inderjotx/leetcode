'use client'
import { Editor, loader } from '@monaco-editor/react';
import { useTheme } from 'next-themes';
import { useState } from 'react';

interface MonacoEditorProps {
    lang: SupportedLangs,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<any>>,
    activeFile?: string
}



export function MonacoEditor({ lang, value, setValue, activeFile }: MonacoEditorProps) {

    const { theme } = useTheme()

    const editorTheme = (theme === 'dark') ? "vs-dark" : "vs-light"



    function handleChange(val: (string | undefined)) {
        if ((val == "" || val) && activeFile) {
            setValue((prev: any) => ({ ...prev, [activeFile]: val }))

        }
        else if (val == "" || val) {
            setValue(val)
        }
    }


    // to get value editor.current.getValue()
    return (
        <Editor
            language={lang}
            theme={editorTheme}
            value={value}
            onChange={handleChange}
            options={{
                minimap: { enabled: false }
            }}
            beforeMount={() => loader.init()}

        />
    )
}

