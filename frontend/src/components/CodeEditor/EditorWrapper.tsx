import { cn } from '@/lib/utils'
import { Code2, LucideIcon } from 'lucide-react'
import React from 'react'

interface EditorWrapperProps {
    height: string,
    width: string,
    children: Readonly<React.ReactNode>,
    className?: string,
    Icon: LucideIcon
}



export function EditorWrapper({ children, height, width, className, Icon = Code2 }: EditorWrapperProps) {
    return (
        <div className={cn('flex flex-col rounded-sm bg-white dark:bg-[#1e1e1e]', className)}>

            {/* banner */}
            <nav className='h-6 w-full border-b text-primary dark:bg-zinc-900 flex items-center p-2'>
                <Icon size={16} />
            </nav>

            {/* editor */}
            <div className={cn('w-full pb-2 rounded-sm pr-4 pl-1  h-full bg-white dark:bg-[#1e1e1e] ', height, width)}>
                {children}
            </div>
        </div>
    )
}
