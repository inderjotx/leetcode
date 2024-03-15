'use client'
import Editor from '@monaco-editor/react';

interface MonacoEditorProps {
    lang: SupportedLangs,
    editorRef: any
    defaultValue: string
}

export function MonacoEditor({ lang, editorRef, defaultValue }: MonacoEditorProps) {

    // todo : introduce type here  
    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
    }

    // to get value editor.current.getValue()

    return (
        <Editor
            height="90vh"
            language={lang}
            onMount={handleEditorDidMount}
            defaultValue={defaultValue}
            theme='monokai'
        />
    )
}

