import React from 'react'
import { ThemeToggle } from '../ThemeToggle'
import { Button } from '../ui/button'
import { auth, signIn } from '@/lib/auth'

export async function Navbar() {

    const session = await auth()
    const user = session?.user



    return (
        <nav className='sticky border-b top-0 px-6 h-16 w-full flex justify-between items-center  '>
            <h1 className='text-xl'>Logo</h1>

            <form
                className='flex justify-between gap-3 items-center '
                action={async () => {
                    "use server"
                    await signIn()
                }} >
                {
                    user ?
                        <Button size={"sm"}>
                            SignIn
                        </Button>
                        :
                        <Button size={"sm"}>
                            SignOut
                        </Button>

                }
                <ThemeToggle />
            </form>
        </nav>
    )
}
