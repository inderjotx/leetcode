import React from 'react'
import { Section } from '../Section'
import { Shield } from 'lucide-react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"





export default function QuestionDifficulty() {
    return (
        <Section title='Difficulty' Icon={Shield}  >
            <RadioGroup defaultValue="easy" className='flex gap-6 ' >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="easy" id="easy" />
                    <Label htmlFor="easy">Easy</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="hard" id="hard" />
                    <Label htmlFor="hard">Hard</Label>
                </div>
            </RadioGroup>

        </Section>
    )
}