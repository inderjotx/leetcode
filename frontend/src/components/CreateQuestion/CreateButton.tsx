'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useCreateQuestion } from '@/store/useCreateQuestion'
import { QuestionSchema } from '@/lib/validators/schema'
import { toast } from 'sonner'
import { createQuestion } from '@/actions/createQuestion'

export default function CreateButton() {

    const { difficulty, title, description, testCases, hints } = useCreateQuestion((state) => state)



    return (
        <form action={async () => {
            const isValid = QuestionSchema.safeParse({ difficulty, title, description, testCases, hints })
            if (isValid.success) {
                console.log('valid')

                const promise = createQuestion(isValid.data)

                toast.promise(promise, {
                    loading: 'Loading...',
                })

                const result = await promise

                if (result.success) {
                    toast.success("Question Create")
                }
                else {
                    toast.error(result.error)
                }

            }

            else {
                console.log('Invalid')
                toast.error(isValid.error.errors[0].message)
            }

        }}>
            <Button type='submit'  >Save</Button>
        </form>
    )
}
