import { Heading } from '@/components/Heading/Heading'
import { IconHeading } from '@/components/Heading/IconHeading'
import { Section } from '@/components/Section'
import { QuestionDescription } from '@/components/Sections/QuestionDescption'
import QuestionDifficulty from '@/components/Sections/QuestionDifficulty'
import { QuestionHints } from '@/components/Sections/QuestionHints'
import QuestionJsonViewer from '@/components/Sections/QuestionJsonViewer'
import { QuestionTitle } from '@/components/Sections/QuestionTitle'
import { MessageCircleQuestion, Notebook, } from 'lucide-react'
import React from 'react'

// only admin can add  
export default function page() {

    // todo : i am admin redirect


    // question statment 

    // test cases , in form of json 


    // contructor for each supported language 

    // method user that to define 

    // method already defined 



    // solution to the problem

    // 

    return (
        // <Heading title='Add Question' description='Complete all fields' />
        <div className='w-full h-full grid grid-cols-1 gap-6 md:grid-cols-2 px-4 '>


            <div className='flex flex-col gap-4'>
                <QuestionTitle />
                <QuestionDescription />
                <QuestionHints />
            </div>

            <div className='flex flex-col gap-4'>
                <QuestionJsonViewer />
                <QuestionDifficulty />

                {/* hints */}
                {/* difficulty */}
            </div>

        </div>
    )
}
