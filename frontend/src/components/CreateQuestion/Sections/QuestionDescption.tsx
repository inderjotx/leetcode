'use client'
import { Section } from '@/components/Section'
import { Braces } from 'lucide-react'
import React from 'react'
import { RichTextEditor } from '@/components/RichTextEditor'
import { useCreateQuestion } from '@/store/useCreateQuestion'

export function QuestionDescription() {
    const [description, setDescription] = useCreateQuestion((state) => [state.description, state.setDescription])
    return (

        <Section title='Description' className='h-60' Icon={Braces}  >
            <RichTextEditor val={description} setVal={setDescription} />
        </Section>
    )
}
