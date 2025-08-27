import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from "motion/react";
import profile_img1 from '@/assets/Nikhil-profile-img-1.png';
import { FaLinkedin } from 'react-icons/fa';
// import { Linkedin } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={profile_img1} alt="Nikhil Profile" className='rounded-full w-32' />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
      >
        Hi! I'm Nikhil S <Image src={assets.hand_icon} alt='' className='w-6' />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
      >
        Product, Strategy and Business Excellence
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo'
      >
        MBA from IIM Ahmedabad | Strategy & Growth Professional | CEO's Office | Product Enthusiast
      </motion.p>

      {/* <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
        >
          Contact Me <Image src={assets.right_arrow_white} alt="" className='w-4' />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Resume_Nikhil_S.pdf"
          download
          onClick={handleDownload}
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'
        >
          My Resume <Image src={assets.download_icon} alt="" className='w-4' />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className='px-10 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600 transition'
        >
          <Linkedin size={18} /> LinkedIn
          <FontAwesomeIcon icon={faLinkedin} size="sm" /> LinkedIn
        </motion.a>


      </div> */}
        {/* <Buttons/> */}

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        className='flex flex-col sm:flex-row items-center gap-4 mt-4'
      >
        <a
          href="#contact"
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
        >
          Contact Me <Image src={assets.right_arrow_white} alt="" className='w-4' />
        </a>

        <a
          href="/Resume_Nikhil_S..pdf"
          download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition'
        >
          My Resume <Image src={assets.download_icon} alt="" className='w-4' />
        </a>

        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className='px-10 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:border hover:border-blue-600 hover:bg-white hover:text-blue-600 transition'
        >
          <FaLinkedin size={18} /> LinkedIn
        </a>
      </motion.div>


      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full shadow-md z-50 text-sm transition-opacity duration-300">
          Resume Download Started
        </div>
      )}
    </div>
  );
};

export default Header;
