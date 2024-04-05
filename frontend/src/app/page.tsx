import { Features } from '@/components/Features'
import { site } from '@/config'
import { cn, poppins } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className='w-full  relative min-h-screen px-4 md:justify-center justify-start flex flex-col items-center '>


            {/* square background */}
            <div className="absolute -z-10 inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]">
            </div>


            <div className={cn('text-center space-y-3', poppins.className, "md:mt-[5%] mt-[15%]")}>
                <h3 className='text-[12px] p-2 inline-block bg-muted rounded-full px-3 moving_border'>
                    <span className='moving_border_element flex items-center justify-center' > {site.description} </span>

                </h3>

                <h1 className='text-5xl  font-bold bg-gradient-to-r from-primary to-foreground text-transparent bg-clip-text lg:text-[150px] md:text-[100px]'>
                    {site.name}
                </h1>
            </div>


            {/* hero image */}
            <div className='bg_blur relative' >
                <Image src={cn('/site/image.png')} alt='hero-image-showing-analytical data ' height={100} width={200} unoptimized className='object-contain relative   w-full h-[500px]  -mt-20 md:-mt-4 ' />
            </div>




            <Features />



        </div>
    )
}
