import React from 'react'
import i from "@/public/i.png"
import Image from 'next/image'
import circles from "@/public/cirWhite.png"
import iphone from "@/public/iPhone 13 Pro.png"
import bgColor from "@/public/bgCol.png"

const FAQ = () => {
    return (
        <div id='faq' className='sections'>
            <div>
                <p className='font-medium text-lg text-[#FF5555] tracking-widest'>FAQ</p>
                <p className='font-bold text-5xl '>Frequently Asked <br /> Questions</p>
            </div>

            <div className='grid lg:grid-cols-2 gap-8 mt-16'>
                <div className='bg-[#FF5555] px-6 rounded-xl py-3'>
                    <p className='text-white text-[28px] font-semibold'>The Best Financial Accounting App Ever!</p>
                    <p className='space-x-4 text-white text-lg'>Aliquam risus justo, mattis sed enim id, egestas tempor justo. Praesent a convallis libero. In mattis accumsan dolor, in tristique tellus vestibulum eget.</p>
                </div>
                <div className=' px-6 rounded-xl py-3'>
                    <p className='text-[28px] font-semibold'>The Best Financial Accounting App Ever!</p>
                    <p className='space-x-4 text-lg'>Aliquam risus justo, mattis sed enim id, egestas tempor justo. Praesent a convallis libero. In mattis accumsan dolor, in tristique tellus vestibulum eget.</p>
                </div>
                <div className=' px-6 rounded-xl py-3'>
                    <p className='text-[28px] font-semibold'>The Best Financial Accounting App Ever!</p>
                    <p className='space-x-4 text-lg'>Aliquam risus justo, mattis sed enim id, egestas tempor justo. Praesent a convallis libero. In mattis accumsan dolor, in tristique tellus vestibulum eget.</p>
                </div>
                <div className='bg-[#FF5555] px-6 rounded-xl py-3'>
                    <p className='text-white text-[28px] font-semibold'>The Best Financial Accounting App Ever!</p>
                    <p className='space-x-4 text-white text-lg'>Aliquam risus justo, mattis sed enim id, egestas tempor justo. Praesent a convallis libero. In mattis accumsan dolor, in tristique tellus vestibulum eget.</p>
                </div>
                <div className='bg-[#FF5555] px-6 rounded-xl py-3'>
                    <p className='text-white text-[28px] font-semibold'>The Best Financial Accounting App Ever!</p>
                    <p className='space-x-4 text-white text-lg'>Aliquam risus justo, mattis sed enim id, egestas tempor justo. Praesent a convallis libero. In mattis accumsan dolor, in tristique tellus vestibulum eget.</p>
                </div>
                <div className=' px-6 rounded-xl py-3'>
                    <p className='text-[28px] font-semibold'>The Best Financial Accounting App Ever!</p>
                    <p className='space-x-4 text-lg'>Aliquam risus justo, mattis sed enim id, egestas tempor justo. Praesent a convallis libero. In mattis accumsan dolor, in tristique tellus vestibulum eget.</p>
                </div>
            </div>

            <div className='bg-black relative rounded-xl h-[70vh] grid lg:grid-cols-2 items-center px-5 md:px-32 my-40'>
                <div className='flex flex-col gap-4 items-start'> 
                    <p className='text-white text-5xl font-bold'>Ready To Get Started?</p>
                    <p className='text-white text-lg'>Praesent a convallis libero. In mattis accumsan dolor, in tristique tellus vestibulum eget.</p>
                    <div className='cursor-pointer px-6 py-4 z-10 gap-2 rounded hover:bg-slate-200 bg-white flex items-center'>
                        <p className='text-lg  font-medium '>Download App</p>
                        <Image src={i} alt='' width={20}/>
                    </div>
                </div>

                <Image src={circles} alt='' className='absolute right-0 rotate-180 top-0'/>
                <Image src={circles} alt='' className='absolute z-0 bottom-0'/>
                <Image src={iphone} alt='' className='absolute hidden lg:block right-0 z-10'/>
                <Image src={bgColor} alt='' className='absolute hidden lg:block rotate-180 bottom-5 -right-10 z-0'/>
            </div>
        </div>
    )
}

export default FAQ