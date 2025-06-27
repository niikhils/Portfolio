import { assets } from '@/assets/assets'
import React from 'react'
import Image from "next/image";
import { motion } from "motion/react"

const Contact = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-url-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>

            <motion.h4 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-center mb-2 text-lg font-Ovo'>
                Connect With Me</motion.h4>
            
            <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='text-center text-5xl font-Ovo'>
                Get In Touch</motion.h2>

            <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className='text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo'>
                I'd love to hear from you! If you have any questions, comments, or feedback, kindly contact.</motion.p>

            {/* <motion.form 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                    <motion.input 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    type="text" placeholder='Enter Your Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                    
                    <motion.input 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    type="email" placeholder='Enter Your Email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                </div>
                <motion.textarea 
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                rows='6' placeholder='Enter Your Message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></motion.textarea>

                <motion.button 
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.3 }}
                type='submit'
                    className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'
                >Submit <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </motion.button>

                <p className='mt-4'>sending....</p>
            </motion.form> */}

        </motion.div>
    )
}

export default Contact
