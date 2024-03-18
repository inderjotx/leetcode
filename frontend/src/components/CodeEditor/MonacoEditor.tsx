'use client'
import { Editor, loader } from '@monaco-editor/react';
import { useTheme } from 'next-themes';

interface MultiFile<T> {
    lang: SupportedLangs,
    setValue: React.Dispatch<React.SetStateAction<any>>,
    activeFile: string,
    multiFile: T
    value: string
}

interface SingleFile<T> {
    lang: SupportedLangs,
    setValue: (val: string) => void,
    multiFile: T,
    value: string
}


type EditorProps<TMulti extends boolean> = TMulti extends true ? MultiFile<true> : SingleFile<false>




export function MonacoEditor(data: EditorProps<boolean>) {

    const { theme } = useTheme()

    const editorTheme = (theme === 'dark') ? "vs-dark" : "vs-light"



    function handleChange(val: (string | undefined)) {

        if (val === undefined) return

        if (data.multiFile) {

            data.setValue(
                (prev: any) => ({
                    ...prev,
                    [data.lang]: {
                        ...prev[data.lang],
                        [data.activeFile]: val
                    }
                })
            )
        }

        else {
            data.setValue(val)
        }
    }


    // to get value editor.current.getValue()
    return (
        <Editor
            language={data.lang}
            theme={editorTheme}
            value={data.value}
            onChange={handleChange}
            options={{
                // quickSuggestions: false,
                minimap: { enabled: false }
            }}
            beforeMount={() => loader.init()}

        />
    )
}

