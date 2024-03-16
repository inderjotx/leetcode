import { LucideIcon } from "lucide-react";
import { IconHeading } from "./Heading/IconHeading";
import { HTMLProps } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLProps<HTMLDivElement> {
    Icon: LucideIcon,
    title: string,
    children: Readonly<React.ReactNode>
}


export function Section({ Icon, title, children, className, ...props }: SectionProps) {
    return (
        <div className={cn("flex flex-col gap-4 w-full p-3 px-8 bg-muted-foreground/5 pb-10 rounded-md", className)} {...props}  >
            <IconHeading Icon={Icon} title={title} />
            {children}
        </div>
    )
}
