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
        <div className='flex  flex-col rounded-sm bg-white dark:bg-[#1e1e1e]'>

            {/* banner */}
            <nav className='h-6 w-full border-b  flex items-center p-2'>
                <Icon size={16} color='orange' />
            </nav>

            {/* editor */}
            <div className={cn('w-full pb-2 rounded-sm pr-4 pl-1  h-full bg-white dark:bg-[#1e1e1e] ', height, width, className)}>
                {children}
            </div>
        </div>
    )
}
