import { getYoutubeVideos } from "@/actions/getYoutubeVideos";
import { CodeEditor } from "@/components/CodeEditor";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { getQuestionWithId } from "@/lib/db";
import { redirect } from "next/navigation";



export default async function Question({ params }: { params: { questionId: string } }) {

    const question = await getQuestionWithId(parseInt(params.questionId))

    if (!question) {
        redirect('/')
    }

    // const youtubeData = await getYoutubeVideos(question.title)


    // const vidoeUrl = youtubeData.data?.map(e => {
    //     return `https://www.youtube.com/embed/${e.id?.videoId}`
    // })



    return (

        <div className="flex  mt-4 mx-4 gap-2">

            <ResizablePanelGroup direction="horizontal" className=" gap-2 " >
                <ResizablePanel minSize={0} defaultSize={40} className="rounded-md border dark:bg-[#1e1e1e] "  >
                    {/* <div className={cn("w-full truncate py-2 pl-2 text-[13px] bg-muted dark:bg-zinc-900")} >Files</div> */}

                    <div className="flex flex-col w-full">


                        {/* todo:  separe component */}
                        <div className="text-xl font-medium" >
                            {question.title}
                        </div>

                        {/* description */}
                        <div className="" dangerouslySetInnerHTML={{ __html: question.description }}  >
                        </div>


                        {/*todo: beutiful testcase compoentn */}
                        <div>
                        </div>




                    </div>

                </ResizablePanel>

                <ResizableHandle className="bg-background" />
                <ResizablePanel minSize={0} defaultSize={60} >
                    <CodeEditor questionId={parseInt(params.questionId)} />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )

}

