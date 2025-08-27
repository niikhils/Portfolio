import React from 'react'
import Image from 'next/image';
import { assets, workData } from '@/assets/assets';
import { motion } from "motion/react";

const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>
                My Portfolio</motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                Worked Upon</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2x1 mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my work project portfolio! Explore a collection of projects showcasing my overall work.</motion.p>

            {/* <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className='grid grid-cols-auto my-10 gap-5 py-3'>
                {workData.map((project, index) => (
                    <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    key={index}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}>

                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                <Image src={assets.send_icon} alt='send icon' className='w-5' />
                            </div>
                        </div>

                    </motion.div>
                ))}
            </motion.div> */}

            {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-auto my-10 gap-5 py-3'
            >
                {workData.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='block'
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                            style={{ backgroundImage: `url(${project.bgImage})` }}
                        >
                            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm text-gray-700'>{project.description}</p>
                                </div>
                                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <Image src={assets.send_icon} alt='send icon' className='w-5' />
                                </div>
                            </div>
                        </motion.div>
                    </a>
                ))}
            </motion.div> */}

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="space-y-8 my-10 px-4"
            >
                {/* First Row: Responsive Grid */}
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {workData.slice(0, 4).map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                                style={{ backgroundImage: `url(${project.bgImage})` }}
                            >
                                <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                                    <div>
                                        <h2 className="font-semibold">{project.title}</h2>
                                        <p className="text-sm text-gray-700">{project.description}</p>
                                    </div>
                                    <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                        <Image src={assets.send_icon} alt="send icon" className="w-5" />
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                    ))}
                </div>

                {/* Second Row: Responsive Flex Centered */}
                <div className="flex flex-wrap justify-center gap-5">
                    {workData.slice(4).map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(25%-1.25rem)] max-w-[320px]"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                                style={{ backgroundImage: `url(${project.bgImage})` }}
                            >
                                <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                                    <div>
                                        <h2 className="font-semibold">{project.title}</h2>
                                        <p className="text-sm text-gray-700">{project.description}</p>
                                    </div>
                                    <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                        <Image src={assets.send_icon} alt="send icon" className="w-5" />
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                    ))}
                </div>
            </motion.div>



            {/* <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500'> 
                Show More <Image src={assets.right_arrow_bold} alt='Right arrow'
                    className='w-4' />

            </motion.a> */}

        </motion.div>
    )
}

export default Work
