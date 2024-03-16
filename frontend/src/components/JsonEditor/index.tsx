import { Braces } from "lucide-react";
import { EditorWrapper } from "../CodeEditor/EditorWrapper";
import { MonacoEditor } from "../CodeEditor/MonacoEditor";

interface JsonEditorProps {
  ref?: React.RefObject<any>

}


export function JsonEditor({ ref }: JsonEditorProps) {

  return (
    <EditorWrapper height="h-[270px]" width="w-full" Icon={Braces} >
      <MonacoEditor lang="json" defaultValue="" editorRef={ref} />
    </EditorWrapper>
  )
}
