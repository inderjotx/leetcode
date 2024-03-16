import React from 'react'


interface HeadingProps {
    title: string,
    description: string
}



export function Heading({ title, description }: HeadingProps) {
    return (
        <div className='flex flex-col'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <h2 className='text-[12px] text-muted-foreground'>{description}</h2>
        </div>
    )
}
