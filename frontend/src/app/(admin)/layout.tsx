import { redirect } from 'next/navigation'
import React from 'react'

interface LayoutProps {
    children: Readonly<React.ReactNode>
}

export default function layout({ children }: LayoutProps) {

    // todo : check if the user is admin
    const isAdmin: boolean = true

    if (!isAdmin) {
        redirect('/')
    }



    return (
        <div>{
            children
        }</div>
    )
}
