import React from 'react'
import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from "motion/react"

const About = () => {
    return (
        <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>
                Introduction</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                About Me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1'>
                    <p className='mb-10 max-w-2xl font-Ovo'
                    >Results-driven keen business professional with 3.5+ years of experience in Product, Business Strategy and Digital transformation in startup environments. Strong business acumen with an MBA from IIM Ahmedabad, carrying first-principles thinking and a zero-to-one approach, Nikhil brings data-driven structured problem-solving with an executional rigor to drive growth.</p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description },
                            index) => (
                            <motion.li
                                whileInView={{ scale: 1.05 }}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[var(--color-light-hover)] hover:-translate-y-1 duration-500 hover:shadow-[var(--shadow-black)]'
                                key={index}>
                                {/* <Image src={icon} alt={title} className='w-7 mt-3' /> */}
                                <div className="mt-3">{icon}</div>
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>
                                    {description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    

                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className='my-6 text-gray-700 font-Ovo'>Tools I Use</motion.h4>
                    <motion.ul 
                    initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{duration: 1.5, delay: 0.6 }}
                    className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li 
                            whileHover={{ scale: 1.05 }}
                            className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                                key={index}>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>


                </motion.div>
            </motion.div>
        </motion.div >


    )
}

export default About



/*
<div className="dark">
  <div className="bg-white dark:bg-black text-black dark:text-white p-4">
    This should be black background and white text in dark mode.
  </div>
</div>

 <div className="bg-lightHover p-4">Test bg-lightHover</div>
                    <div className="bg-red-500 text-white p-4">If this is red, Tailwind is working</div>
                    <div style={{ backgroundColor: 'var(--color-light-hover)' }}>
  If this is light, the CSS variable is working
</div>
                
                    <div style={{ backgroundColor: 'var(--color-light-hover)' }}>
                        Custom color using CSS variable
                    </div>

                    <div className="bg-lightHover p-4">If this is light, Tailwind custom color is working</div>


<div className="shadow-custom-black">Custom shadow</div>

<div className="shadow-[var(--shadow-black)]">Custom shadow</div>
<div className="shadow-[var(--shadow-white)]">Custom shadow</div>

*/