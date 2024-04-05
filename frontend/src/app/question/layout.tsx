import React from 'react'

interface LayoutProps {
    children: Readonly<React.ReactNode>
}

export default function layout({ children }: LayoutProps) {

    return (
        <div>{children}</div>
    )
}

