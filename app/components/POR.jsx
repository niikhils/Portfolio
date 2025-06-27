'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Telescope, Medal, Clapperboard, PartyPopper } from 'lucide-react'; // Lucide icons

const positionsData = [
  {
    title: 'Coordinator, Stargazers (The Astronomy Club of IIMA)',
    duration: 'Feb 2020 – Jan 2021',
    description:
      'Recruited & led a 40-member team; organized quizzes, created blogposts; initiated Monthly Magazine "Voyager" which garnered 4.95K+ impressions over 3 issues.',
    icon: <Telescope className='w-5 h-5 text-white' />,
    iconBg: 'bg-indigo-500',
  },
  {
    title: 'Sports Secretary, SAC (Undergrad Institute)',
    duration: 'Mar 2017 – Feb 2018',
    description:
      'Organized 12 games for 225+ students during Annual Sports Week and managed a budget of ₹45,000.',
    icon: <Medal className='w-5 h-5 text-white' />,
    iconBg: 'bg-green-500',
  },
  {
    title: 'Scholastic Achievements',
    duration: 'Sep 2019 – Mar 2021',
    description:
      'Received IIMA SNBS Scholarship worth Rs.1.5 Lakh ; Secured AIR 283 in GATE 2019 Engineering Exam. ',
    icon: <Clapperboard className='w-5 h-5 text-white' />,
    iconBg: 'bg-pink-500',
  },
  {
    title: 'Sports & Allied Activities',
    duration: 'Jul 2018 – Mar 2021',
    description:
      'Gold Medallist in TT (Shaurya, IIMA) ; Core Team Member of Movies & Design Club (MAD), IIMA ; Captained – Undergrad Chess and TT Teams.',
    icon: <PartyPopper className='w-5 h-5 text-white' />,
    iconBg: 'bg-yellow-500',
  },
];

const POR = () => {
  return (
    <motion.div
      id='por'
      className='w-full px-[12%] py-16 scroll-mt-20 bg-white'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='text-center mb-2 text-lg font-Ovo text-gray-500'
      >
        Postions of Responsibility
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='text-center text-5xl font-Ovo text-gray-800'
      >
        Roles & Achievements
      </motion.h2>

      <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
        {positionsData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className='relative group p-6 rounded-2xl border border-gray-300 bg-[#F4F5F7] shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-shadow duration-300'
          >
            <div
              className={`absolute -top-4 -left-4 ${item.iconBg} text-white w-9 h-9 flex items-center justify-center rounded-full shadow-md`}
            >
              {item.icon}
            </div>

            <h3 className='text-lg font-semibold text-gray-800 mb-1'>
              {item.title}
            </h3>
            <p className='text-sm text-gray-500 italic mb-3'>{item.duration}</p>
            <p className='text-sm text-gray-700 leading-relaxed'>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default POR;
