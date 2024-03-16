
import { CodeEditor } from "@/components/CodeEditor";
import { LoadingCodeEditor } from "@/components/CodeEditor/Loading";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Suspense } from "react";



export default function Question(params: { params: { questionId: string } }) {

    return (
        <ResizablePanelGroup direction="horizontal" className="px-4" >
            <ResizablePanel minSize={5} defaultSize={40} >
                Question data
            </ResizablePanel>

            <ResizableHandle withHandle className="bg-background" />
            <ResizablePanel minSize={5} defaultSize={60} >
                <Suspense fallback={<LoadingCodeEditor />} >
                    <CodeEditor />
                </Suspense>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
