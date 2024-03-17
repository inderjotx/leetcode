import { Heading } from '@/components/Heading/Heading'
import { QuestionDescription } from '@/components/CreateQuestion/Sections/QuestionDescption'
import QuestionDifficulty from '@/components/CreateQuestion/Sections/QuestionDifficulty'
import { QuestionHints } from '@/components/CreateQuestion/Sections/QuestionHints'
import QuestionJsonViewer from '@/components/CreateQuestion/Sections/QuestionJsonViewer'
import { QuestionTitle } from '@/components/CreateQuestion/Sections/QuestionTitle'
import { Button } from '@/components/ui/button'
import CreateButton from '@/components/CreateQuestion/CreateButton'

// only admin can add  
export default function Page() {




    return (
        <div className='h-full w-full flex flex-col my-3  px-4 gap-6'>
            <div className='flex items-center justify-between px-2'>
                <Heading title='Add Question' description='complete all fields' className='ml-2' />
                <CreateButton />

            </div>
            <div className='w-full h-full grid grid-cols-1 gap-6 md:grid-cols-2'>


                <div className='flex flex-col gap-4'>
                    <QuestionTitle />
                    <QuestionDescription />
                    <QuestionHints />
                </div>

                <div className='flex flex-col gap-4'>
                    <QuestionJsonViewer />
                    <QuestionDifficulty />
                </div>
            </div>
        </div>
    )
}
