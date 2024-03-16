import React from 'react'
import { ThemeToggle } from '../ThemeToggle'

export function Navbar() {
    return (
        <nav className='sticky top-0  w-full flex justify-between'>
            <h1>Logo</h1>
            <ThemeToggle />
        </nav>
    )
}
