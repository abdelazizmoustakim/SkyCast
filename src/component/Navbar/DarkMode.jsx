import React, { useState, useEffect } from 'react';
import { CiDark } from "react-icons/ci";
import { PiSunDuotone } from "react-icons/pi";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      
      if (navbar) { 
        const navbarHeight = navbar.offsetHeight; 
        const scrollPosition = window.scrollY;

        if (scrollPosition > navbarHeight) {
          setShowFloatingIcon(true);
        } else {
          setShowFloatingIcon(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      {/* DarkMode Toggle inside Navbar */}
      <div onClick={toggleTheme} className='cursor-pointer'>
        {theme === 'light' ? (
          <PiSunDuotone className="w-6 h-6 text-gray-800" />
        ) : (
          <CiDark className="w-6 h-6 text-gray-100" />
        )}
      </div>
    </>
  );
};

export default DarkMode;
