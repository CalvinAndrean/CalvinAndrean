'use client'
import React, { Component, useEffect, useState } from 'react'
import './Navbar.css'
import './Glassmorphism.css'
import { Link } from 'react-scroll';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
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

  return (
    <div className="flex w-full justify-center z-20">
      <div
        className={`flex justify-center lg:w-[800px] h-[80px] items-center 
          ${showNavbar ? 'glassmorphism-container shown' : 'glassmorphism-container visible'}
        `}
      >
        <div className="flex justify-between w-[400px] lg:w-[500px] z-30"> {/* Menambahkan z-30 untuk menempatkan navbar di lapisan terdepan */}
          <Link 
            activeClass="active" 
            to="home" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
          >
            <a href="#" className="nav-link">
              Home
            </a>
          </Link>
          <Link 
            activeClass="active" 
            to="projects" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
          >
            <a href="#" className="nav-link">
              Projects
            </a>
          </Link>

          <Link 
            activeClass="active" 
            to="contact" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
          >
            <a href="#" className="nav-link">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
