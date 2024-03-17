'use client'

import dynamic from 'next/dynamic';
import React, { useState, useMemo } from 'react';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditor {
    val: string,
    setVal: (val: string) => void
}


export function RichTextEditor({ val, setVal }: RichTextEditor) {

    // no ssr only import when required d
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

    return (
        <div className='bg-background relative h-[200px]   '>
            <ReactQuill className='h-[95px] bg-background' theme="snow" value={val} onChange={setVal} />
        </div>
    );

}
