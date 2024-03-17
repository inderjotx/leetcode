import { cn } from '@/lib/utils'
import React, { HTMLProps } from 'react'


interface HeadingProps extends HTMLProps<HTMLDivElement> {
    title: string,
    description: string
}



export function Heading({ title, description, className }: HeadingProps) {
    return (
        <div className={cn('flex flex-col', className)}>
            <h1 className='text-2xl font-bold '>{title}</h1>
            <h2 className='text-[12px] text-muted-foreground'>{description}</h2>
        </div>
    )
}
