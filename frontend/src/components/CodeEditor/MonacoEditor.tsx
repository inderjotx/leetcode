'use client'
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';

interface MonacoEditorProps {
    lang: SupportedLangs,
    editorRef?: any
    defaultValue: string
}



export function MonacoEditor({ lang, editorRef, defaultValue }: MonacoEditorProps) {

    const { theme } = useTheme()

    const editorTheme = (theme === 'dark') ? "vs-dark" : "vs-light"


    function handleEditorDidMount(editor: any, monaco: any) {

        if (editorRef) {
            editorRef.current = editor;
        }
    }



    // to get value editor.current.getValue()
    return (
        <Editor
            language={lang}
            onMount={handleEditorDidMount}
            defaultValue={defaultValue}
            theme={editorTheme}
            options={{
                minimap: { enabled: false }
            }}

        />
    )
}

