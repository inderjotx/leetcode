
import { Section } from '@/components/Section'
import { Braces, Cpu } from 'lucide-react'
import React from 'react'
import { RichTextEditor } from '../RichTextEditor'
import { Textarea } from '../ui/textarea'

export function QuestionHints() {
    return (
        <Section title='Hints' className='h-40' Icon={Cpu}  >
            <Textarea />
        </Section>
    )
}
