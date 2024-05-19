'use client'
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);
  // const height = useRef(window.innerHeight - 79);
  const [windowHeight, setWindowHeight] = useState(0);
  const controlsImage = useAnimation();
  const [typedText, setTypedText] = useState(''); // Teks yang akan diketik
  const controlsText = useAnimation(); // Mengontrol animasi ketikan

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setWindowHeight(window.innerHeight - 79);

    controlsImage.start({ opacity: 1, y: 0 });

    const textToType = "Hi, Calvin here. I'm a Software Engineer.";
    animateTyping(textToType);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  const animateTyping = async (text) => {
    for (let i = 0; i <= text.length; i++) {
      setTypedText(text.slice(0, i));
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  };

  return (
    <section id='home' className={`${showNavbar ? 'mt-[79px]' : ''}`}>
      <div className="flex flex-col lg:flex-row">
       <div className="lg:w-1/2 lg:hidden flex break-inside-avoid justify-center items-center">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={controlsImage}
            transition={{ type: 'spring', stiffness: 260, damping: 100 }}
            src="https://robohash.org/156"
            className="mt-[100px]"
            width={200}
            height={200}
          />
        </div>
        <div className={`lg:w-1/2 flex justify-center text-center items-center`}>
          <motion.h1
            className={`flex font-bold text-[#393b2e] text-4xl lg:text-8xl items-center justify-center h-full text-center lg:text-right px-10 py-4 lg:px-0 lg:ml-[100px]`}
            // style={{ height: `${height.current}px` }}
          >
            {typedText}
          </motion.h1>
        </div>
        <div className="flex max-lg:hidden justify-center items-center">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={controlsImage}
            transition={{ type: 'spring', stiffness: 260, damping: 100 }}
            src="https://robohash.org/156"
            className="ml-[60px]"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}