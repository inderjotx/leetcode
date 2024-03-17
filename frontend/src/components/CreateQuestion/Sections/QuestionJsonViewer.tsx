import React from 'react'
import { Section } from '../../Section'
import { FlaskConical } from 'lucide-react'
import { JsonEditor } from '../../JsonEditor'

export default function QuestionJsonViewer() {
    return (
        <Section title='Test Cases' Icon={FlaskConical}  >
            <JsonEditor />
        </Section>
    )
}
