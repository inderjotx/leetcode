import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const URL = "http://localhost:5000/code"


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
        <form className="h-full" action={async (formData: FormData) => {
          "use server"
          console.log(formData.get('code'))
          const response = await fetch(URL, {
            method: "POST",
            body: JSON.stringify({ code: formData.get("code") }),
            headers: {
              'Content-Type': "application/json"
            }
          })



        }} >
          <div className="flex items-center justify-between px-4 py-3">
            <div> code </div>

            <div> <Button type="submit" >Submit </Button> </div>
          </div>
          <Textarea name="code" className="h-full" />
        </form>
      </div>
    </div>
  );
}
