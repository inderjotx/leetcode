'use client'

import { addValidationCode } from "@/actions/addValidationCode";
import { getValidationCode } from "@/actions/getValidationCode";
import { EditorWrapper } from "@/components/CodeEditor/EditorWrapper";
import { MonacoEditor } from "@/components/CodeEditor/MonacoEditor";
import { Java, Python, Cpp, Javascript } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { getExtension } from "@/lib/extension";
import { cn } from "@/lib/utils";
import { validationCodeSchema } from "@/lib/validators/schema";
import { ValidationCodeSchema } from "@/types/zodTypes";
import { Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useSWR from "swr";






const StaticData: Record<SupportedLangs, CodeFiles> = {
    "javascript": {
        validationClass: "",
        userClass: "",
        solutionClass: ""
    },

    "python": {
        validationClass: "",
        userClass: "",
        solutionClass: ""
    }

    ,
    "cpp": {
        validationClass: "",
        userClass: "",
        solutionClass: ""
    }

}


export default function Page({ params }: { params: { questionId: string } }) {

    const { data, isLoading } = useSWR<GetValidationCodeResponse<boolean>, any>(`${params.questionId}`, fetcher)

    const [codeFiles, setCodeFiles] = useState<Record<SupportedLangs, CodeFiles>>(StaticData)

    const [curLanguage, setLanguage] = useState<SupportedLangs>("javascript")

    const extension = getExtension(curLanguage)
    const fileNames = Object.keys(codeFiles[curLanguage])
    const [fileNowEditing, setFileNowEditing] = useState<keyof CodeFiles>("validationClass")



    useEffect(() => {

        if (data && data.success) {
            setCodeFiles(() => data.validationData)
        }


    }, [data, isLoading])



    async function fetcher() {

        const data = await getValidationCode(parseInt(params.questionId))
        return data

    }





    return (
        <div className="flex  mt-4 mx-4 gap-2">
            <div className="w-16 rounded-t-md flex items-center flex-col">

                <form action={async () => {

                    const data: ValidationCodeSchema = { language: curLanguage, questionId: parseInt(params.questionId), codeFiles: codeFiles[curLanguage] }

                    const isValid = validationCodeSchema.safeParse(data)

                    if (isValid.success) {
                        console.log('valid')

                        const promise = addValidationCode(isValid.data)

                        toast.promise(promise, {
                            loading: 'Loading...',
                        })

                        const result = await promise

                        if (result.success) {
                            toast.success(`Validation Logic Added For ${curLanguage}`)
                        }


                        else {
                            toast.error(result.error)
                        }

                    }


                    else {
                        toast.error(isValid.error.errors[0].message)
                    }


                }
                } >
                    <Button type="submit" className="mb-3 rounded-[20px]" >Add</Button>
                </form>
                <Python className={cn("size-14 transition-all py-2 w-full dark:bg-[#1e1e1e]  border rounded-t-md ", curLanguage === "python" && "dark:bg-black bg-muted p-3")} onClick={() => { setLanguage('python') }} />
                {/* <Java className={cn("size-14 py-2 w-full dark:bg-[#1e1e1e]  border rounded-t-md ", curLanguage=== "java" && "bg-zinc-900")} /> */}
                <Javascript className={cn("size-14 transition-all py-2 w-full dark:bg-[#1e1e1e]  border  ", curLanguage === "javascript" && "dark:bg-black bg-muted   p-3")} onClick={() => { setLanguage('javascript') }} />
                <Cpp className={cn("size-14 py-2 transition-all w-full dark:bg-[#1e1e1e]  border rounded-b-md ", curLanguage === "cpp" && "dark:bg-black bg-muted p-3")} onClick={() => { setLanguage('cpp') }} />
            </div>
            <ResizablePanelGroup direction="horizontal" className=" gap-2 " >
                <ResizablePanel minSize={0} defaultSize={17} className="rounded-md border dark:bg-[#1e1e1e] "  >
                    <div className={cn("w-full truncate py-2 pl-2 text-[13px] bg-muted dark:bg-zinc-900")} >Files</div>
                    {
                        fileNames.map((name) => (
                            <div key={name} className={cn("w-full truncate py-2 border pl-2 border-x-0 text-[13px] hover:cursor-pointer hover:bg-muted-foreground/5", fileNowEditing === name && "bg-muted-foreground/5")} onClick={() => setFileNowEditing(name as keyof CodeFiles)} > {name}{extension}</div>
                        ))
                    }
                </ResizablePanel>

                <ResizableHandle className="bg-background" />
                <ResizablePanel minSize={0} defaultSize={83} >
                    <EditorWrapper Icon={Code2} height='h-[560px]' width='w-full' className='border' >
                        <MonacoEditor multiFile value={codeFiles[curLanguage][fileNowEditing]} activeFile={fileNowEditing} setValue={setCodeFiles} lang={curLanguage} />
                    </EditorWrapper>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}

