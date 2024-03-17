'use client'
import { Braces } from "lucide-react";
import { EditorWrapper } from "../CodeEditor/EditorWrapper";
import { MonacoEditor } from "../CodeEditor/MonacoEditor";
import { useCreateQuestion } from "@/store/useCreateQuestion";



export function JsonEditor() {

  const [testCases, setTestCases] = useCreateQuestion((state) => [state.testCases, state.setTestCases])

  return (
    <EditorWrapper height="h-[270px]" width="w-full" Icon={Braces} >
      <MonacoEditor lang="json" value={testCases} multiFile={false} setValue={setTestCases} />
    </EditorWrapper>
  )
}
