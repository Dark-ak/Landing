'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logo from "@/public/logo.png"

const Nav = () => {

    const [drawr, setDrawer] = useState<boolean>(false)
    const [active, setActive] = useState<string>("home")

    useEffect(() => {
        const sections = document.querySelectorAll('.sections')
        console.log(sections)
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        }

        const observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    setActive(entry.target.id)
                }
            })
        }, options)

        sections.forEach((section) => {
            observer.observe(section)
        })

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section)
            })
        }
    }, [])

    console.log(active)

    return (
        <div className='fixed top-0 z-50 bg-white w-full px-8 md:px-24 py-3 md:py-5 bg-opacity-70'>
            <div className='flex items-center justify-between z-50'>
                <div className='flex gap-10 items-center'>
                    <div className='flex items-center'>
                        <Image src={logo} width={30} height={20} alt={''} className='' />
                        <p className='md:relative font-semibold text-4xl'>uifry</p>
                    </div>
                    <div className='md:flex gap-6 hidden '>
                        <a href='#home' className={`font-bold text-xl ${active == "home" && "text-[#ff5555]"}`} onClick={() => setActive("home")} >Home</a>
                        <a href="#feat" className={`font-bold text-xl ${active == "feat" && "text-[#ff5555]"}`} onClick={() => setActive("feat")}>Features</a>
                        <a href='#teste' className={`font-bold text-xl ${active == "teste" && "text-[#ff5555]"}`} onClick={() => setActive("teste")}>Testemonials</a>
                        <a href="#faq" className={`font-bold text-xl ${active == "faq" && "text-[#ff5555]"}`} onClick={() => setActive("faq")}>FAQs</a>
                    </div>
                </div>

                <button className={`hidden md:flex bg-black text-white px-14 py-4 text-lg rounded hover:bg-white hover:text-black border-black border-2 hover:border-black `}>Download</button>

                <div className='relative md:hidden' onClick={() => setDrawer(!drawr)}>
                    <button className='border rounded p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>

                    <div className={`absolute ${drawr ? "flex" : "hidden"} bg-white z-60 px-4 py-2 rounded items-center flex-col gap-4 -left-24  border`}>
                        <a href='#home' className={`font-medium  ${active == "home" && "text-[#ff5555]"}`} onClick={() => setActive("home")} >Home</a>
                        <a href="#feat" className={`font-medium  ${active == "feat" && "text-[#ff5555]"}`} onClick={() => setActive("feat")}>Features</a>
                        <a href='#teste' className={`font-medium  ${active == "teste" && "text-[#ff5555]"}`} onClick={() => setActive("teste")}>Testemonials</a>
                        <a href="#faq" className={`font-medium  ${active == "faq" && "text-[#ff5555]"}`} onClick={() => setActive("faq")}>FAQs</a>
                        <button className={`bg-black text-white px-3 py-2 rounded `}>Download</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Nav