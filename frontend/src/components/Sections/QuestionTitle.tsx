import { Section } from '@/components/Section'
import { Captions, Heading } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'

export function QuestionTitle() {
    return (
        <Section title='Title' Icon={Captions}  >
            <Input />
        </Section>
    )
}
