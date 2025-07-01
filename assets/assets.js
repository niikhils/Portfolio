import user_image from '@/assets/nikhil-user-vertical.png';
// import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import chatgpt from './chatgpt.png';
import perplexity from './perplexity.png';
import excel from './excel.png';
import tableau from './tableau.png';
import right_arrow_white from './right-arrow-white.png';
// import logo from './logo.png';
import logo from './logo-nikhil1.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from '@/assets/nikhil-profile-img-1.jpg'; 
// import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    chatgpt,
    perplexity,
    excel,
    tableau,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

// export const workData = [
//     {
//         title: 'Healthcard Dashboard',
//         description: 'KPI Prototype',
//         bgImage: '/work-1.png',
//     },
//     {
//         title: 'Pack8 Official Website',
//         description: 'Web Development',
//         bgImage: '/work-2.png',
//     },
//     {
//         title: 'Corporate Pitch Deck',
//         description: 'Presentation Design',
//         bgImage: '/work-3.png',
//     },
//     {
//         title: 'AMUL Sales & Marketing',
//         description: 'Work Overview',
//         bgImage: '/work-4.png',
//     },
// ]

export const workData = [
  {
    title: 'Healthcard Dashboard',
    description: 'KPI Prototype',
    bgImage: '/work-1.png',
    link: 'https://www.figma.com/proto/45h4vBds6vCaUN4dfe8swz/Pack8-Dashboard?node-id=2982-1122&starting-point-node-id=2982%3A1122&t=pH5ziy6KGu2EHcHa-1',
  },
  {
    title: 'Pack8 Official Website',
    description: 'Web Development',
    bgImage: '/work-2.png',
    link: 'https://www.pack8.in/',
  },
  {
    title: 'Corporate Pitch Deck',
    description: 'Presentation Design',
    bgImage: '/work-3.png',
    link: 'https://www.figma.com/proto/lmRlCFEYipLbVQPgK7qHEd/Sorting-Automation--Copy-?node-id=8-681&t=XUd7Hs1mEVQWT0pF-1&scaling=contain&content-scaling=fixed&page-id=0%3A1',
  },
  {
    title: 'AMUL Sales & Marketing',
    description: 'Work Overview',
    bgImage: '/work-4.png',
    link: 'https://www.figma.com/proto/9ea1SxVD2LwOYLOaJvABQ0/Amul-Work-Experience?node-id=1-141&t=uOR8rx0YSyrSTKfu-1&scaling=contain&content-scaling=fixed&page-id=0%3A1',
  },
];


import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import {
  Briefcase,
  Rocket,
  Store,
  PieChart,
  ArrowRight
} from 'lucide-react';

export const serviceData = [
  {
    icon: <Briefcase className="w-10 h-10 text-indigo-600" />,
    title: 'CEO’s Office | Product & Strategy | Pack8',
    description:
      'Led strategic growth & digital transformation of sustainable transit packaging startup firm.',
    link: '',
  },
  {
    icon: <Rocket className="w-10 h-10 text-pink-600" />,
    title: 'Product  | SketchitUp Solutions',
    description:
      'Led & ideated one stop solution for businesses looking to scale, innovate, and stand out.',
    link: '',
  },
  {
    icon: <Store className="w-10 h-10 text-green-600" />,
    title: 'Area Business Manager | Amul (GCMMF)',
    description:
      'Sales & Marketing of Amul’s Dairy, Fresh Milk & Frozen Foods segments',
    link: '',
  },
  {
    icon: <PieChart className="w-10 h-10 text-yellow-600" />,
    title: 'Marketing Research Intern | Amul (GCMMF)',
    description:
      'Studied changing behaviour of millennials for milk beverages & led qualitative research.',
    link: '',
  },
];

// export const serviceData = [
//     { icon: assets.web_icon, title: 'CEOs Office | Strategy & Product | Pack8', description: 'Driving strategic growth and digital transformation at a sustainable packaging startup through cross-functional leadership in product, operations, and business strategy.', link: '' },
//     { icon: assets.mobile_icon, title: 'Founder | SketchitUp Solutions', description: 'Built and led a consulting and digital solutions venture, delivering GTM strategies, ERP systems, and digital transformation for SMEs across manufacturing and retail sectors.', link: '' },
//     { icon: assets.ui_icon, title: 'Area Business Manager | Amul (GCMMF)', description: 'Managed sales and supply chain for dairy and frozen foods, driving revenue growth, retail reach, and efficiency through data insights and distributor coordination.', link: '' },
//     { icon: assets.graphics_icon, title: 'Marketing Research Intern | Amul (GCMMF)', description: 'Conducted consumer behavior research on millennials preferences for milk-based beverages, leading surveys and interviews to generate actionable market insights.', link: '' },
// ]
// export const serviceData = [
//     { icon: assets.web_icon, title: 'CEOs Office - PACK8', description: 'Driving strategic growth and digital transformation at a sustainable packaging startup through cross-functional leadership in product, operations, and business strategy.', link: '' },
//     { icon: assets.mobile_icon, title: 'Founder - SketchitUp', description: 'Built and led a consulting and digital solutions venture, delivering GTM strategies, ERP systems, and digital transformation for SMEs across manufacturing and retail sectors.', link: '' },
//     { icon: assets.ui_icon, title: 'Business Manager - AMUL (GCMMF)', description: 'Managed sales and supply chain for dairy and frozen foods, driving revenue growth, retail reach, and efficiency through data insights and distributor coordination.', link: '' },
//     { icon: assets.graphics_icon, title: 'Summer Intern - AMUL (GCMMF)', description: 'Conducted consumer behavior research on millennials preferences for milk-based beverages, leading surveys and interviews to generate actionable market insights.', link: '' },
// ]

// export const infoList = [
//     { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Strategy & Growth Frameworks', description: 'Data Analysis & Problem Solving' },
//     { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Product Management & Growth', description: 'Cross-functional Leadership' },
//     { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Corporate Decks & Reporting', description: 'KPIs Tracking & SLA Management' }
// ];

import {
  BarChartBig,
  Brain,
  Layers3,
  LineChart,
  ClipboardList
} from 'lucide-react';

export const infoList = [
  {
    icon: <BarChartBig className="w-5 h-5 text-lime-600" />,
    title: 'Strategy & Growth Frameworks',
    description: 'Data Analysis & Problem Solving',
  },
  {
    icon: <Layers3 className="w-5 h-5 text-indigo-600" />,
    title: 'Product Management & Growth',
    description: 'Cross-functional Leadership',
  },
  {
    icon: <ClipboardList className="w-5 h-5 text-pink-500" />,
    title: 'Corporate Decks & Reporting',
    description: 'KPIs Tracking & SLA Management',
  },
];


export const toolsData = [
    assets.figma, assets.chatgpt, assets.perplexity, assets.excel, assets.tableau
];