'use client'
import { Heading } from '@/components/Heading/Heading'
import { QuestionDescription } from '@/components/Sections/QuestionDescption'
import QuestionDifficulty from '@/components/Sections/QuestionDifficulty'
import { QuestionHints } from '@/components/Sections/QuestionHints'
import QuestionJsonViewer from '@/components/Sections/QuestionJsonViewer'
import { QuestionTitle } from '@/components/Sections/QuestionTitle'
import { Button } from '@/components/ui/button'
import React, { useEffect, useRef } from 'react'

// only admin can add  
export default function Page() {

    function handleSubmit() {
    }




    return (
        <div className='h-full w-full flex flex-col  px-4 gap-6'>
            <div className='flex items-center justify-between px-2'>
                <Heading title='Add Question' description='complete all fields' className='ml-2' />
                <Button onClick={handleSubmit}>Save</Button>

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
