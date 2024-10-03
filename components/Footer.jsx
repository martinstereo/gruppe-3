import React from 'react';
import {AiFillLinkedin} from "react-icons/ai";



const Footer = () => {
    return (
        <footer id='kontakt_oss' className="bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-300 mt-5 pb-6">

        <div className="container mx-auto px-4 lg:px-8 text-center pt-8 space-y-6 pb-10">
            <h1 id='ProskjektArbeid' className='text-gray-800 dark:text-white text-center text-4xl font-extralight py-1'>
                Kontakt Oss
            </h1>
            {/*strek*/}
            <hr className="h-px my-10 border-0 bg-gray-200 dark:bg-gray-700" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0 w-auto px-10">
                {/* E-post Section */}
                <div className="flex flex-col items-center pb-2">
                    <p className="font-semibold">E-post</p>
                    <a
                        href="mailto:johannestjo@gmail.com"
                        className="text-black dark:text-blue-400 hover:underline pt-1"
                    >
                        johannetjo@gmail.com
                    </a>
                </div>

                {/* Phone Number Section (Centered) */}
                <div className="flex flex-col items-center">
                    <p className="font-semibold">Telefon</p>
                    <p className="text-black dark:text-blue-400 pt-1 pb-2">+47 978 74 147</p>
                </div>

                {/* LinkedIN Section */}
                <div className="flex flex-col items-center">
                    <p className="font-semibold">LinkedIn</p>
                    <div className="flex items-center text-gray-700 dark:text-gray-400 pb-2">
                        <a
                            href="https://www.linkedin.com/in/johannestjoestheim/"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-blue-700 transition-colors'
                        >
                            <AiFillLinkedin className="text-4xl" />
                        </a>
                    </div>
                </div>
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-400">
            Nettside utviklet av gruppe 3 - 2024
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
