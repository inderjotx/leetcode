'use client'

import { useClient } from '@/hooks/useClient';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function RichTextEditor() {
    const [value, setValue] = useState('');
    const isClient = useClient()

    // during ssr 
    if (!isClient) {
        return (
            <div> loading... </div>
        )
    }

    else {
        return (
            <div className='bg-background relative h-[200px]  '>
                <ReactQuill className='h-[95px]  bg-background' theme="snow" value={value} onChange={setValue} />
            </div>
        );
    }

}
