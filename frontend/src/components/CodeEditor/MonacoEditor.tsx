'use client'
import Editor from '@monaco-editor/react';
import { useTheme } from 'next-themes';

interface MonacoEditorProps {
    lang: SupportedLangs,
    editorRef: any
    defaultValue: string
}


// const myDarkTheme = {
//     base: 'vs-dark',
//     inherit: true,
//     rules: [
//         { background: '#020817' },
//     ],
// };


export function MonacoEditor({ lang, editorRef, defaultValue }: MonacoEditorProps) {

    // todo : introduce type here  
    const { theme } = useTheme()
    const editorTheme = theme === 'dark' ? "vs-dark" : "vs-light"

    function handleEditorDidMount(editor: any, monaco: any) {

        editorRef.current = monaco.editor;
    }

    // to get value editor.current.getValue()
    return (
        <Editor
            className='z-20'
            height="90vh"
            language={lang}
            onMount={handleEditorDidMount}
            options={{
                minimap: {
                    enabled: false,
                },
                selectOnLineNumbers: true,
                roundedSelection: false,
                readOnly: false,
                cursorStyle: 'line',
            }}
            defaultValue={defaultValue}
            theme={editorTheme}
        />
    )
}

