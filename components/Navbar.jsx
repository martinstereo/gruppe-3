import React, { useState, useEffect } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { AiFillGithub } from 'react-icons/ai';

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    if (!dark) {
      document.documentElement.classList.add('dark'); // Add 'dark' class to <html>
      localStorage.setItem('darkMode', 'true'); // Store dark mode preference
    } else {
      document.documentElement.classList.remove('dark'); // Remove 'dark' class from <html>
      localStorage.setItem('darkMode', 'false'); // Store dark mode preference
    }
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      document.documentElement.classList.add('dark');
      setDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDark(false);
    }
  }, []);

    return (
    <nav className="bg-white dark:bg-slate-950 shadow-md">
    <div className="max-w-screen-lg mx-auto px-2 lg:px-8">
        <div className="flex justify-between items-center h-16 max-w-screen-lg mx-auto px-2 lg:px-8">
            {/* Logo Section */}
            <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                Gruppe 3
                </span>
            </div>

            {/* Menu Toggle Button */}
            <div className="lg:hidden flex items-center">
            <button
                className="text-2xl text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-gray-600"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? '✕' : '☰'}
            </button>
            </div>

            {/* Menu Items */}
            <div className="hidden lg:flex space-x-6 items-center">
                <a href="#teamet" className="pt-1 text-gray-800 dark:text-white hover:text-black font-bold dark:hover:text-gray-400">
                    Møt Teamet
                </a>
                <a href="#kontakt_oss" className="pt-1 text-gray-800 dark:text-white hover:text-black font-bold dark:hover:text-gray-400">
                    Kontakt oss
                </a>
                <button className='text-2xl hover:text-black dark:hover:text-gray-600 text-gray-700 dark:text-white px-1 rounded-full transition duration-300 ease-in-out' onClick={()=> darkModeHandler()}>
                    {
                        dark && <IoSunny /> // render sunny when dark is true
                    }
                    {
                        !dark && <IoMoon /> // render moon when dark is false
                    }
                </button>
                <div className='text-3xl flex justify-center lg:justify-start text-gray-700 dark:text-gray-400'>
                <a href="https://github.com/IS-304-Bachelor" target='_blank' rel='noopener noreferrer' className='hover:text-gray-900 dark:hover:text-gray-200 transition-colors'>
                    <AiFillGithub/>
                </a>
                </div>
                
            </div>
        </div>
        {/* Dropdown Menu for Small Screens */}
        <div className={`lg:hidden flex flex-col items-center space-y-4 mt-4 pb-6 ${isOpen ? 'block' : 'hidden'}`}>
            <a href="#teamet" className="text-gray-800 dark:text-white hover:text-black font-bold dark:hover:text-gray-400">
                Møt Teamet
            </a>
            
            <a href="#kontakt_oss" className="text-gray-800 dark:text-white hover:text-black font-bold dark:hover:text-gray-400">
                Kontakt oss
            </a>
            
            <button className="text-2xl hover:text-black dark:hover:text-gray-600 text-gray-700 dark:text-white px-1 rounded-full transition duration-300 ease-in-out"
                onClick={() => darkModeHandler()}
            >
                {dark ? <IoSunny /> : <IoMoon />}
            </button>
            
            <div className="text-3xl text-gray-700 dark:text-gray-400">
                <a
                    href="https://github.com/IS-304-Bachelor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                ><AiFillGithub /></a>
            </div>
            </div>
            
        </div>
    </nav>
    );
};

export default Navbar;
