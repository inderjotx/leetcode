'use client'

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function RichTextEditor() {
    const [value, setValue] = useState('');

    return (
        <div className='bg-background relative h-[200px]  '>
            <ReactQuill className='h-[95px]  bg-background' theme="snow" value={value} onChange={setValue} />
        </div>
    );
}
