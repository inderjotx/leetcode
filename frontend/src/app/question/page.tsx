import { getQuestion } from '@/lib/db'
import Link from 'next/link'
import React from 'react'

export default async function page() {

    const questions = await getQuestion()

    return (
        <div>
            {
                questions.map((question) => (
                    <div key={question.id} className='w-full p-2'>
                        <Link href={`/question/${question.id}`} >
                            {question.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
