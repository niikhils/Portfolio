import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import { assets } from '@/assets/assets';

const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} className='w-full' alt='' />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="#top">
          <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt='' />
        </a>

        {/* <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "": "bg-white shadow-sm  bg-opacity-50"} `}></ul> */}

        {/* <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'> */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm  bg-opacity-50"} `}>
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About Me</a></li>
          <li><a className="font-Ovo" href="#services">Experience</a></li>
          <li><a className="font-Ovo" href="#certifications">Certifications</a></li>
          <li><a className="font-Ovo" href="#work">My Work</a></li>
          <li><a className="font-Ovo" href="#por">POR</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          {/* <button>
            <Image src={assets.moon_icon} alt="" className='w-6' />
          </button> */}
          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-b-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={assets.arrow_icon} alt="" className='w-3' /></a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6' />
          </button>

        </div>

        {/* Mobile Menu */}
        {/* <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

          <div className='absolute top-6 right-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer ' />
          </div>

          <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#about">About Me</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#services">Experience</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#certifications">Certifications</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#POR">POR</a></li>
          <li><a className="font-Ovo" onClick={closeMenu} href="#contact">Contact Me</a></li>
        </ul> */}

        {/* <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-20 px-8 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white shadow-2xl transition-transform duration-500 ease-in-out border-l border-gray-200"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="" className="w-5 cursor-pointer" />
          </div>

          <li>
            <a onClick={closeMenu} href="#top" className="font-Ovo text-gray-800 hover:text-lime-600 transition">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about" className="font-Ovo text-gray-800 hover:text-lime-600 transition">
              About Me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#services" className="font-Ovo text-gray-800 hover:text-lime-600 transition">
              Experience
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#certifications" className="font-Ovo text-gray-800 hover:text-lime-600 transition">
              Certifications
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#work" className="font-Ovo text-gray-800 hover:text-lime-600 transition">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#por" className="font-Ovo text-gray-800 hover:text-lime-600 transition">
              POR
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact" className="font-Ovo text-gray-800 hover:text-lime-600 transition">
              Contact
            </a>
          </li>
        </ul> */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-20 px-8 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white shadow-lg transition-transform duration-500 ease-in-out border-l border-gray-200  rounded-l-xl"
        >
          <div className="absolute top-5 right-5" onClick={closeMenu}>
            <Image src={assets.close_black} alt="close menu" className="w-5 cursor-pointer" />
          </div>

          <li>
            <a onClick={closeMenu} href="#top" className="block font-Ovo text-gray-800 hover:text-lime-600 transition duration-300">
              Home
            </a>
          </li>

          <li>
            <a onClick={closeMenu} href="#about" className="block font-Ovo text-gray-800 hover:text-lime-600 ">
              About Me
            </a>
          </li>

          <li>
            <a onClick={closeMenu} href="#services" className="block font-Ovo text-gray-800 hover:text-lime-600">
              Experience
            </a>
          </li>

          <li>
            <a onClick={closeMenu} href="#certifications" className="block font-Ovo text-gray-800 hover:text-lime-600">
              Certifications
            </a>
          </li>

          <li>
            <a onClick={closeMenu} href="#work" className="block font-Ovo text-gray-800 hover:text-lime-600">
              My Work
            </a>
          </li>

          <li>
            <a onClick={closeMenu} href="#por" className="block font-Ovo text-gray-800 hover:text-lime-600">
              POR
            </a>
          </li>

          <li className="pt-4 border-t border-gray-200">
            <a
              onClick={closeMenu}
              href="#contact"
              className="block text-center px-4 py-2 font-Ovo bg-black text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-black transition duration-300"
            >
              Contact Me
            </a>
          </li>
        </ul>




      </nav>
    </>
  )
}

export default Navbar
