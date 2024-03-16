import { LucideIcon } from "lucide-react"


interface HeadingProps {
    title: string,
    Icon: LucideIcon
}



export function IconHeading({ title, Icon }: HeadingProps) {
    return (
        <div className='flex gap-2 items-center'>
            <div className="bg-muted-foreground/30  p-2 rounded-full">
                <Icon className='size-5' />
            </div>
            <h1 className='text-xl font-semibold'>{title}</h1>
        </div>
    )
}
