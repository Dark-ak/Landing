import React from 'react'
import Image from 'next/image'
import f1 from "@/public/f1.png"
import bgColor from "@/public/bgCol.png"
import circles from "@/public/circles.png"

const Features = () => {
    return (
        <div className='p-3 mt-32 sections' id='feat'>
            <div>
                <div>
                    <div className='flex flex-col-reverse md:flex-row md:gap-20 lg:gap-0  items-center justify-around mt-10'>
                        <div className='w-full relative flex'>
                            <Image src={f1} alt="" className='z-30 w-[80%]' />
                            <Image src={bgColor} alt='' className='absolute top-0 z-0' />
                        </div>
                        <div className='mt-8  flex flex-col'>
                            <p className='font-medium text-xl text-[#FF5555] tracking-widest'>FEATURES</p>
                            <p className='font-bold text-5xl '>Uifry Premium</p>
                            <div className='flex flex-col justify-end gap-5 my-5'>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex  items-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-pink-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                        <p className='font-semibold text-lg'>Budgeting Intervals</p>
                                    </div>
                                    <p className='text-gray-500 font-medium text-lg w-fit lg:w-[35vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam dapibus, ullamcorper erat quis, blandit massa.</p>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex  items-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-pink-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                        <p className='font-semibold text-lg'>Budgeting Intervals</p>
                                    </div>
                                    <p className='text-gray-500 font-medium text-lg w-fit lg:w-[35vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam dapibus, ullamcorper erat quis, blandit massa.</p>
                                </div><div className='flex flex-col gap-3'>
                                    <div className='flex  items-center gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-pink-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                        <p className='font-semibold text-lg'>Budgeting Intervals</p>
                                    </div>
                                    <p className='text-gray-500 font-medium text-lg w-fit lg:w-[35vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam dapibus, ullamcorper erat quis, blandit massa.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col-reverse md:flex-row-reverse gap-10 lg:gap-20 items-center justify-around mt-16'>
                        <div className='w-full relative flex'>
                            <Image src={f1} alt="" className='z-30 w-[90%]' />
                            <Image src={bgColor} alt='' className='absolute top-0 z-0' />
                        </div>
                        <div className='mt-8 w-full  flex flex-col'>
                            <p className='font-medium text-lg text-[#FF5555]'>ADVANTAGES</p>
                            <p className='font-bold text-5xl '>Why chose Uifry?</p>
                            <div className='flex flex-col justify-end gap-5 my-5'>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex  items-center gap-2'>
                                        <div className='bg-[#FF5555] rounded-full p-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white rounded-full  ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                            </svg>
                                        </div>

                                        <p className='font-semibold text-2xl lg:text-3xl'>Clever Notifications</p>
                                    </div>
                                    <p className='text-gray-500 font-medium text-lg lg:w-[30vw] '>
                                        Fusce non convallis lectus. Integer bibendum quam eu erat commodo rutrum. Curabitur iaculis in ante non efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis metus, congue eget efficitur et, tincidunt ut nulla. Phasellus laoreet lectus vitae fringilla sodales. Sed venenatis nisi elit, at pharetra magna auctor a.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col-reverse md:flex-row items-center gap-10 justify-around mt-16'>
                    <div className='w-full relative flex'>
                            <Image src={f1} alt="" className='z-30 w-[80%]' />
                            <Image src={bgColor} alt='' className='absolute top-0 z-0' />
                        </div>
                        <div className='mt-8  flex flex-col'>
                            <div className='flex flex-col justify-end gap-5 my-5'>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex  items-center gap-2'>
                                        <div className='bg-[#FF5555] rounded-full p-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                            </svg>
                                        </div>

                                        <p className='font-semibold text-2xl lg:text-3xl'>Fully Customizable</p>
                                    </div>
                                    <p className='text-gray-500 text-lg font-medium lg:w-[30vw] '>
                                        Fusce non convallis lectus. Integer bibendum quam eu erat commodo rutrum. Curabitur iaculis in ante non efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis metus, congue eget efficitur et, tincidunt ut nulla. Phasellus laoreet lectus vitae fringilla sodales. Sed venenatis nisi elit, at pharetra magna auctor a.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Features