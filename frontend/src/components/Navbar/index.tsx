import React from 'react'
import { ThemeToggle } from '../ThemeToggle'
import { Button } from '../ui/button'
import { auth, signIn, signOut } from '@/lib/auth'

export async function Navbar() {

    const session = await auth()
    const user = session?.user



    return (
        <nav className='sticky z-10   backdrop-blur-lg border-b top-0 px-6 h-16 w-full flex justify-between items-center  '>
            <h1 className='text-xl'>Logo</h1>

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
                        <Button size={"sm"}>
                            SignOut
                        </Button>
                        :
                        <Button size={"sm"}>
                            SignIn
                        </Button>

                }
                <ThemeToggle />
            </form>
        </nav>
    )
}
