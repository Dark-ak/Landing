import Image from 'next/image'
import React from 'react'
import iphone from "@/public/iPhone-13-Pro-Front-1.png"
import strip from "@/public/strip.png"
import bgCol from "@/public/bgCol.png"
import circles from "@/public/circles.png"

const Hero = () => {
  return (
    <div className='h-[80vh] relative -z-10 sections'  id='home'>
      <div className=' flex relative justify-between mt-20  items-start w-full'>
        <Image src={bgCol} alt='' className='absolute -z-20 -top-20' />
        <div className='flex flex-col mt-16 -z-10'>
          <p className='font-medium text-6xl'>
            Disover our App
          </p>
          <p>The best app for all your needs </p>

          <div className='flex flex-col md:flex-row gap-3 my-8 items-start'>
            <button className={`bg-black flex gap-1 items-center text-white pl-6 pr-4 hover:bg-white hover:text-black hover:border py-4 rounded`}>Download Now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </button>
            <button className={' flex gap-1 items-center border-black border rounded px-6  py-4'}>Featues</button>
          </div>
        </div>

        <div className='relative md:flex items-start hidden  w-[30vw]'>
          <Image src={iphone} alt='' height={500} className='absolute z-30' />
          <Image src={iphone} alt='' height={500} className='absolute z-20 left-28 top-20' />
          <Image src={iphone} alt='' height={500} className='absolute z-10 left-48 top-28' />
          <Image src={bgCol} alt='' className=' rotate-180 absolute left-0 top-80' />

        </div>
        
        <Image src={circles} alt='' className='absolute w-[50%] hidden md:block -right-32 z-0 -top-14'/>

      </div>

      <Image src={strip} alt='strip' className='sm:w-[100%] md:w-[65%] lg:w-[50%]  absolute' />

    </div>
  )
}

export default Hero