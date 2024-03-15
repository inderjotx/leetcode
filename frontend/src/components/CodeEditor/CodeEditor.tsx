import React from 'react'

import { SelectLanguage } from './SelectLanguage';
import { ExecuteCodeAction } from '@/actions/executeCode';

// ui
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


export function CodeEditor() {
    return (
        <form className="h-full" action={ExecuteCodeAction} >
            <div className="flex items-center justify-between py-3">
                <div> <Button type="submit" >Submit </Button> </div>
                <SelectLanguage />
            </div>
            <Textarea name="code" className="h-full" />
        </form>
    )
}

