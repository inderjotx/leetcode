'use client'
import React, { useState } from 'react'
import { site } from '@/config'
import { cn, poppins } from '@/lib/utils'
import { motion } from 'framer-motion'

const gradients = [
    'from-indigo-300',
    'from-purple-300',
    'from-pink-300',
    'from-red-600',
    'from-orange-500',
    'from-yellow-500',
    'from-green-600',
    'from-teal-500',
    'from-blue-600',
    'from-gray-700'
]

// add smooth scroll
export const Features = () => {

    const sizeOfComponent = (site.features.length + 1) * 50
    const viewPort = `h-[${sizeOfComponent}vh]`

    const [number, setNumber] = useState<number>(0)


    return (

        <div className='flex flex-col w-full h-full border items-center' >

            <h2>Feature</h2>

            {/* features tab */}
            <div className={cn(`${viewPort} top-10  flex bg-zinc-800 w-11/12`)}>
                <div className='w-full mt-36 h-full  '>
                    {
                        site.features.map((d, index) => (
                            <motion.div
                                onViewportEnter={() => setNumber(index)}
                                viewport={{ once: true, amount: 0.9 }}
                                key={d.title}
                                className='h-[50vh] flex flex-col  items-center justify-center border' >
                                <div className={cn(`flex  justify-center text-center border size-[300px] border-black flex-col gap-2 `, number === index ? "text-white" : "text-muted-foreground")} >
                                    <h2 className='text-2xl font-bold ' >{d.title}</h2>
                                    <h4 className='text-sm' >{d.description}</h4>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
                <div className='sticky flex items-center justify-center right-0  top-20 bg-zinc-700 h-screen  w-1/2'>
                    <div className={`size-60 flex items-center justify-center text-black text-4xl border bg-gradient-to-br rounded-lg ${gradients[number]} to-white `} >
                        <div className={`size-60 flex items-center justify-center text-black text-4xl border bg-gradient-to-br rounded-lg ${gradients[number]} to-white `} >
                            {number}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}