import { CodeEditor } from "@/components/CodeEditor";
import { LoadingCodeEditor } from "@/components/CodeEditor/Loading";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Suspense } from "react";



export default function Home() {



  return (

    <div className='h-screen w-screen'>
      <ResizablePanelGroup direction="horizontal" className="h-screen w-full" >
        <ResizablePanel defaultSize={40} >One</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60} minSize={50}  >
          <Suspense fallback={<LoadingCodeEditor />} >
            <CodeEditor />
          </Suspense>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}


// <div className="h-screen w-full flex ">
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