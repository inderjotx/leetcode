'use client'

import { EditorWrapper } from "@/components/CodeEditor/EditorWrapper";
import { MonacoEditor } from "@/components/CodeEditor/MonacoEditor";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { cn } from "@/lib/utils";
import { Code2, Divide } from "lucide-react";
import { useState } from "react";


interface CodeFiles {
    validationLogicClass: string,
    userViewClass: string,
    solutionClass: string
}



export default function Page({ params }: { params: { questionId: string, lang: SupportedLangs } }) {

    const [codeFiles, setCodeFiles] = useState<CodeFiles>({
        validationLogicClass: "",
        userViewClass: "",
        solutionClass: ""
    })

    const fileNames = Object.keys(codeFiles)
    const [fileNowEditing, setFileNowEditing] = useState<keyof CodeFiles>("validationLogicClass")

    console.log(codeFiles)


    return (
        <div className="flex h-screen">
            <div className="w-16 border border-r-0">

            </div>
            <ResizablePanelGroup direction="horizontal" className="pr-4 border " >
                <ResizablePanel minSize={0} defaultSize={10}  >
                    <div className={cn("w-full truncate py-2 border pl-2 text-[13px] hover:cursor-pointer bg-muted-foreground/10")} >Files</div>
                    {
                        fileNames.map((name) => (
                            <div key={name} className={cn("w-full truncate py-2 border pl-2 border-x-0 text-[13px] hover:cursor-pointer hover:bg-muted-foreground/5", fileNowEditing === name && "bg-muted-foreground/5")} onClick={() => setFileNowEditing(name as keyof CodeFiles)} >{name}</div>
                        ))
                    }
                </ResizablePanel>

                <ResizableHandle />
                <ResizablePanel minSize={0} defaultSize={90} >
                    <EditorWrapper Icon={Code2} height='h-screen' width='w-full' className='' >
                        <MonacoEditor multiFile value={codeFiles[fileNowEditing]} activeFile={fileNowEditing} setValue={setCodeFiles} lang={params.lang} />
                    </EditorWrapper>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}

