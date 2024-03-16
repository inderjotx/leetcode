import { Section } from '@/components/Section'
import { Braces } from 'lucide-react'
import React from 'react'
import { RichTextEditor } from '../RichTextEditor'

export function QuestionDescription() {
    return (
        <Section title='Description' className='h-60' Icon={Braces}  >
            <RichTextEditor />
        </Section>
    )
}
