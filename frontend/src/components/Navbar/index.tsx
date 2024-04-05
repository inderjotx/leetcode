import React from 'react'
import { ThemeToggle } from '../ThemeToggle'
import { Button } from '../ui/button'
import { auth, signIn, signOut } from '@/lib/auth'
import { site } from '@/config'

export async function Navbar() {

    const session = await auth()
    const user = session?.user



    return (
        <nav className='sticky z-10   backdrop-blur-lg border-b top-0 px-6 h-16 w-full flex justify-between items-center  '>
            <h1 className=''> {site.name} </h1>

            <form
                className='flex justify-between gap-3 items-center '
                action={async () => {
                    "use server"

                    if (user) {
                        await signOut()
                    }
                    else {
                        await signIn()
                    }
                }} >
                {
                    user ?
                        <Button className='px-1' size={"sm"}>
                            SignOut
                        </Button>
                        :
                        <Button className='px-3 h-11/12 py-1 text-sm' size={"sm"}>
                            Log In
                        </Button>

                }
                <ThemeToggle />
            </form>
        </nav>
    )
}
