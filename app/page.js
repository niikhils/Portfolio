"use client";
import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header1 from './components/Header1';
import POR from './components/POR';
import Certifications from './Certifications';

export default function Home() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
  //       window.matchMedia('(prefers-color-scheme: dark)').matches)){
  //         setIsDarkMode(true)
  //   } else {
  //     setIsDarkMode(false)
  //   }
  // }, [])

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.theme = "dark";
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.theme = "";
  //   }
  // }, [isDarkMode])

  //isDarkMode={isDarkMode}

  return (
    <>
      <Navbar/>
      {/* <Header1/> */}
      <Header/>
      <About/>
      <Services/>
      <Certifications/>
      <Work/>
      <POR/>
      <Contact/>
      <Footer/>
    </>
  );
}
