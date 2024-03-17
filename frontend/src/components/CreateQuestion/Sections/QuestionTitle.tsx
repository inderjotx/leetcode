'use client'
import { Section } from '@/components/Section'
import { Captions } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useCreateQuestion } from '@/store/useCreateQuestion';



export const QuestionTitle = () => {

    const [title, setTitle] = useCreateQuestion((state) => [state.title, state.setTitle])
    return (
        <Section title='Title' Icon={Captions}>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Section>
    );
};




