
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
        <div className="w-full h-full flex">
            <ResizablePanelGroup direction="horizontal"  >
                <ResizablePanel minSize={10} defaultSize={40} >
                    Question data
                </ResizablePanel>

                <ResizableHandle withHandle />
                <ResizablePanel minSize={10} defaultSize={60} >
                    <Suspense fallback={<LoadingCodeEditor />} >
                        <CodeEditor />
                    </Suspense>
                </ResizablePanel>

            </ResizablePanelGroup>
        </div>
    )
}


// <div className="h-screen w-full flex "
//   <div className="flex flex-col w-1/2 h-full ">
//     <div>question</div>
//     <div>description</div>
//     <div>testcase1</div>
//     <div>testcase2</div>
//     <div>some tags and suggestions ... </div>
//   </div>
//   <div className="flex flex-col w-1/2 h-full gap-2 px-3 py-3">
//     <CodeEditor />
//   </div>
// </div>);