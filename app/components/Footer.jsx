import { assets } from '@/assets/assets'
import React from 'react'
import Image from "next/image";
import { Phone } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='' className='w-6' />
                    a19nikhils@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Nikhil S. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-gray-600" />
                        <a href="tel:+919561280118">+91 95612 80118</a>
                    </li>

                    <li className="flex items-center gap-2">
                        <FaLinkedin className="w-4 h-4 text-blue-600" />
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nikhil-s-8616b0179">LinkedIn</a>
                    </li>


                    {/* <li><a target='_blank' href="https://instagram.com/greatstackdev">Twitter</a>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Footer
