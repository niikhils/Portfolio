'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  BadgeCheck,
  BarChart2,
  LayoutTemplate,
  ClipboardList,
} from 'lucide-react';

const certificationData = [
  {
    title: 'Digital & Performance Marketing',
    issuer: 'Certified by Google',
    icon: <BarChart2 className="w-5 h-5 text-white" />,
    iconBg: 'bg-yellow-500',
  },
  {
    title: 'User Experience (UI/UX) Design',
    issuer: 'Certified by Google',
    icon: <LayoutTemplate className="w-5 h-5 text-white" />,
    iconBg: 'bg-indigo-500',
  },
  {
    title: 'Agile Project Management',
    issuer: 'Certified by Google',
    icon: <ClipboardList className="w-5 h-5 text-white" />,
    iconBg: 'bg-green-500',
  },
  {
    title: 'Spreadsheet Modeling by HBR',
    issuer: 'Certified by HBR',
    icon: <BadgeCheck className="w-5 h-5 text-white" />,
    iconBg: 'bg-pink-500',
  },
];

const Certifications = () => {
  return (
    <motion.div
      id='certifications'
      className='w-full px-[12%] py-16 scroll-mt-20 mb-25 bg-white'
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
        Credentials & Learning
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='text-center text-5xl font-Ovo text-gray-800'
      >
        Certifications
      </motion.h2>

      <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
        {certificationData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.3 }}
            className='relative group p-6 rounded-2xl border border-gray-300 bg-white hover:bg-[var(--color-light-hover)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] transition-all duration-300'
          >
            <div
              className={`absolute -top-4 -left-4 ${item.iconBg} text-white w-9 h-9 flex items-center justify-center rounded-full shadow-md`}
            >
              {item.icon}
            </div>

            <h3 className='text-lg font-semibold text-gray-800 mb-1'>{item.title}</h3>
            <p className='text-sm text-gray-600 italic'>{item.issuer}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certifications;
