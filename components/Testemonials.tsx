'use client'

import React, { useState } from 'react'
import circle from "@/public/circlesCro.png"
import bgColor from "@/public/bgCol.png"
import p1 from "@/public/p1.jpg"
import p2 from "@/public/p2.jpg"
import p3 from "@/public/p3.jpg"
import p4 from "@/public/p4.jpg"
import p5 from "@/public/p5.jpg"
import Image from 'next/image'

const Testemonials = () => {

    const [active,setActive] = useState<number>(0)


    return (
        <div className='my-24 sections' id='teste'>
            <div className='flex items-center flex-col'>
                <div className='flex items-center flex-col'>
                    <p className='font-medium'>TESTEMONIAL</p>
                    <p className='text-5xl font-bold text-center'>What Our Users <br /> Say About Us?</p>
                </div>

                <div className='grid items-center gap-16 md:grid-cols-2'>
                    <div className='w-full'>
                        <div className='relative flex justify-center items-center h-full w-full overflow-hidden'>
                            <Image src={circle} className='lg:w-[80%]' alt='' />
                            <Image src={p1} alt='' className='absolute rounded-full  w-[40%] h-[40%] md:w-[34%] md:h-[40%] bottom-[35%] z-10 border-2 border-black object-cover' />
                            <Image src={bgColor} alt='' className='absolute left-0 rotat z-0' />
                            <Image src={p2} alt='' className='absolute rounded-full w-[20%] h-[20%] md:w-[15%] md:h-[18%]  top-0 left-0  md:top-20 md:left-10 object-cover  border-2 border-black' />
                            <Image src={p3} alt='' className='absolute rounded-full w-[20%] h-[20%] md:w-[15%] md:h-[18%]  top-0 right-0  md:top-20 md:right-10 object-cover  border-2 border-black' />
                            <Image src={p4} alt='' className='absolute rounded-full w-[20%] h-[20%] md:w-[15%] md:h-[18%]  bottom-0 right-0  md:bottom-20 md:right-10 object-cover  border-2 border-black' />
                            <Image src={p5} alt='' className='absolute rounded-full w-[20%] h-[20%] md:w-[15%] md:h-[18%]  bottom-0 left-0  md:bottom-20 md:left-10 object-cover  border-2 border-black' />

                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p className='text-3xl font-semibold'>The Best Financial Accounting App Ever!</p>
                        <p className='text-lg text-gray-500 font-medium'>Mauris quis tempus mi. Vestibulum ornare tempor lacus, in laoreet sapien. Donec pellentesque sollicitudin purus nec auctor. Nunc id efficitur lacus, sed fringilla libero. Nulla rhoncus quam condimentum orci interdum, mattis dignissim ante varius. Proin aliquet purus lacinia urna rutrum, vitae facilisis ante placerat. Praesent mauris nulla, auctor non sem ac, congue tempus est.</p>
                        <div className='flex gap-2'>
                            <Image src={p1} alt='' className={`rounded-full h-10 object-cover w-10 opacity-55 cursor-pointer ${active == 0 && "opacity-100"}`} onClick={() => setActive(0)}/>
                            <Image src={p2} alt='' className={`rounded-full h-10 object-cover w-10 opacity-55 cursor-pointer ${active == 1 && "opacity-100"}`} onClick={() => setActive(1)}/>
                            <Image src={p3} alt='' className={`rounded-full h-10 object-cover w-10 opacity-55 cursor-pointer ${active == 2 && "opacity-100"}`} onClick={() => setActive(2)}/>
                            <Image src={p4} alt='' className={`rounded-full h-10 object-cover w-10 opacity-55 cursor-pointer ${active == 3 && "opacity-100"}`} onClick={() => setActive(3)}/>
                            <Image src={p5} alt='' className={`rounded-full h-10 object-cover w-10 opacity-55 cursor-pointer ${active == 4 && "opacity-100"}`} onClick={() => setActive(4)}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testemonials