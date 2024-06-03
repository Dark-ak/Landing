import React from 'react'
import logo from "@/public/logo.png"
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='mt-40'>
            <div className='w-full'>
                <div className='grid grid-cols-1 gap-5 justify-center md:grid-cols-3 md:gap-10 lg:grid-cols-5 lg:gap-16'>
                    <div className='flex flex-col gap-2 justify-start items-center md:items-start'>
                        <div className='flex items-center gap-1'>
                            <Image src={logo} width={40} alt='' />
                            <p className='text-3xl font-bold'>uifry</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#ff5555]">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                            <p className='font-medium text-lg'>Aaakash@Frybix.com</p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#ff5555]">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                            </svg>

                            <p className='font-medium text-lg'>+123 456 679 889</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 items-center md:items-start'>
                        <p className='text-3xl font-medium'>Links</p>
                        <p className='text-[16px] font-medium'>Home</p>
                        <p className='text-[16px] font-medium'>About Us</p>
                        <p className='text-[16px] font-medium'>Bookings</p>
                        <p className='text-[16px] font-medium'>Blog</p>
                    </div>

                    <div className='flex flex-col gap-4 items-center md:items-start'>
                        <p className='text-3xl font-medium'>Legal</p>
                        <p className='text-[16px] font-medium'>Terms of Use</p>
                        <p className='text-[16px] font-medium'>Privacy Policy</p>
                        <p className='text-[16px] font-medium'>Cookies Policy</p>
                    </div>

                    <div className='flex flex-col gap-4 items-center md:items-start'>
                        <p className='text-3xl font-medium'>Product</p>
                        <p className='text-[16px] font-medium'>Take Tour</p>
                        <p className='text-[16px] font-medium'>Live Chat</p>
                        <p className='text-[16px] font-medium'>Reviews</p>
                    </div>

                    <div className='flex flex-col gap-4 items-center md:items-start'>
                        <p className='text-3xl font-medium'>Newsletter</p>
                        <p className='text-[16px] font-medium'>Stay Up To Date</p>
                        <div className='flex'>
                            <input type="email" className='py-3 focus:outline-none w-[120px]' placeholder='Your email' />
                            <button className=' bg-black text-white px-4 rounded'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='my-16 flex text-center justify-center'>
                    Copyright 2024 Uifry.com All rights Reserved
                </div>
            </div>



        </div>
    )
}

export default Footer