import { CodeEditor } from "@/components/CodeEditor/CodeEditor";


export default function Home() {



  return (
    <div className="h-screen w-full flex ">
      <div className="flex flex-col w-1/2 h-full ">
        <div>question</div>
        <div>description</div>
        <div>testcase1</div>
        <div>testcase2</div>
        <div>some tags and suggestions ... </div>
      </div>
      <div className="flex flex-col w-1/2 h-full gap-2 px-3 py-3">
        <CodeEditor />
      </div>
    </div>
  );
}
