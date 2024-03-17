'use client'

import { Section } from '@/components/Section'
import { Cpu } from 'lucide-react'
import React from 'react'
import { Textarea } from '../../ui/textarea'
import { useCreateQuestion } from '@/store/useCreateQuestion'

export function QuestionHints() {


    const [hints, setHints] = useCreateQuestion((state) => [state.hints, state.setHints])

    return (
        <Section title='Hints' className='h-40' Icon={Cpu}  >
            <Textarea value={hints} onChange={(e) => setHints(e.target.value)} />
        </Section>
    )
}
