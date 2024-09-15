import Head from 'next/head';
import React, { useEffect, useState } from "react";
import 'tailwindcss/tailwind.css';
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from 'next/image';
import Footer from '../components/Footer';
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";


export default function Home() {
  const [dark, setDark] = React.useState(false);

  // Dark mode toggle function
  const darkModeHandler = () => {
    setDark(!dark);
    if (!dark) {
      document.documentElement.classList.add("dark"); // Add 'dark' class to <html>
    } else {
      document.documentElement.classList.remove("dark"); // Remove 'dark' class from <html>
    }
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);


return (
  <div className='bg-white dark:bg-slate-950 overflow-hidden'>
    <Head>
      <title>Bachelorgruppe 3</title>
      <link rel="icon" href="/favicon.png" type="image/png" />
    </Head>
    

    {/* Navbar */}
    <nav className="bg-white dark:bg-slate-950 shadow-md">
          <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16 px-4">
                  {/* Logo Section */}
                  <div className="flex-shrink-0">
                      <span className="text-xl font-bold text-gray-800 dark:text-white">
                        Gruppe 3
                      </span>
                  </div>

                  {/* Menu Items */}
                  <div className="flex space-x-8">
                    {/*
                      <a href="#" className="pt-1 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
                          Teamet
                      </a>
                    */}
                      <a href="#" className="pt-1 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
                          Om Oss
                      </a>
                      <button className='text-2xl hover:text-gray-900 text-gray-800 dark:text-white hover:bg-gray-300 px-1 rounded-full transition duration-300 ease-in-out' onClick={()=> darkModeHandler()}>
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
          </div>
      </nav>

    <main className='bg-white dark:bg-slate-950 max-w-screen-lg mx-auto px-4 lg:px-8'>
      
      <section className='bg-white dark:bg-slate-950 my-4'>
        <div className='p-6'>
          {/* Title */}
          <h1 className='text-4xl font-sans mb-6 text-gray-800 dark:text-white'>
            Velkommen, oppdragsgiver!
          </h1>
  
          {/* Image Container (Centered) */}
          <div className='flex justify-center'>
            <Image src="/gruppebilde2.jpg" priority={true} alt="Gruppebilde" width={1600} height={900} unoptimized className='w-full max-w-4xl h-auto rounded-sm'/>
          </div>

          {/* Text Section */}
          <div className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 mt-5'>
            {/* Small Header */}
            <h2 className='text-gray-800 dark:text-white text-2xl font-semibold font-inter mb-2'>
              Dette er oss i Gruppe 3
            </h2>

            {/* Descriptive Text */}
            <p className='text-gray-800 dark:text-white text-lg leading-7'>
              Dette er en introduksjonstekst som beskriver prosjektet og ønsker velkommen til oppdragsgiveren.
            </p>
          </div>
        </div>
      </section>
      
      {/*Møt Teamet*/}
      <section>
        <div>
          {/*Tittel*/}
          <h1 className='text-gray-800 dark:text-white text-center text-4xl font-extralight p-4'>Møt Teamet</h1>
          {/*strek*/}
          <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
          {/*Gruppemedlemmer*/}
          <div>
            {/*Gruppemedlem 1*/}
            <div className='bg-white dark:bg-slate-950 lg:pt-0 px-6 py-4 rounded text-gray-800 dark:text-white'>
              <div className='flex flex-col lg:flex-row lg:items-center'>
                {/* Left Side: Image, Name, Logos */}
                <div className='flex flex-col items-center lg:items-center lg:px-6 lg:pt-4 lg:w-1/3'>
                  {/* Image */}
                  <div className='relative rounded-full w-48 h-48 overflow-hidden mb-4'>
                    <Image
                      src="/johannes.jpg"
                      alt="Johannes"
                      unoptimized
                      width={240}
                      height={240}
                      className="object-cover"
                    />
                  </div>
                  {/* Name */}
                  <h2 className='text-center lg:text-left text-2xl px-14 whitespace-nowrap'>
                    Johannes Tjøstheim
                  </h2>
                  {/* Role */}
                  <h3 className='text-slate-600 dark:text-slate-300 text-center lg:text-left text-base px-14 py-2 whitespace-nowrap'>
                    Fullstack-utvikler / Prosjektleder
                  </h3>
                  {/* Logos */}
                  <div className='text-5xl flex justify-center lg:justify-start gap-3 text-gray-700 dark:text-gray-400 my-4'>
                    <a href="https://www.linkedin.com/in/johannestjoestheim/" target='_blank' rel='noopener noreferrer' className='hover:text-blue-700 transition-colors'>
                      <AiFillLinkedin/>
                    </a>
                    <a href="https://github.com/Johannestj" target='_blank' rel='noopener noreferrer' className='hover:text-gray-900 dark:hover:text-gray-200 transition-colors'>
                      <AiFillGithub/>
                    </a>
                  </div>
                </div>
                {/* Right Side: Text */}
                <div className='lg:flex-grow mt-4 lg:mt-0 lg:px-4'>
                  <p className='text-md leading-7 font-'>
                    <strong>Jonas</strong> har erfaring innen arbeid med digitalisering, bruk av ulike teknologier som programmering, databaser og Docker. Gjennom systemutvikling i team med bruk av Scrum, har både utviklet mine samarbeidsferdigheter og tekniske ferdigheter. Videre har jeg praksis UiA IT, hvor jeg skal konteinerisere UiA tjenesten MeSH (Medical Subject Headings). Målet er å skape et mer isolert og uavhengig miljø for å kjøre applikasjonen på en effektiv måte uavhengig av underliggende infrastruktur. På fritiden liker jeg å være aktiv; jeg driver med klatring, trening og tilbringer tid med venner.
                  </p>
                  <p className='font-semibold py-2'>
                    Interesseområder:
                  </p>
                  <ul className='pl-5 list-disc'>
                    <li className='py-1'>Frontend-utvikling:</li>
                    <li className='py-1'>Backend-utvikling:</li>
                  </ul>
                
                </div>
              </div>
            </div>  
            {/*strek*/}
            <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
            {/*Gruppemedlem 2*/}
            <div className='bg-white dark:bg-slate-950 lg:pt-0 px-6 py-4 rounded text-gray-800 dark:text-white'>
              <div className='flex flex-col lg:flex-row lg:items-center'>
                {/* Left Side: Image, Name, Logos */}
                <div className='flex flex-col items-center lg:items-center lg:px-6 lg:pt-4 lg:w-1/3'>
                  {/* Image */}
                  <div className='relative rounded-full w-48 h-48 overflow-hidden mb-4'>
                    <Image
                      src="/jonas.jpg"
                      alt="Jonas"
                      unoptimized
                      width={240}
                      height={240}
                      className="object-cover"
                    />
                  </div>
                  {/* Name */}
                  <h2 className='text-center lg:text-left text-2xl px-14 whitespace-nowrap'>
                    Jonas Fritzøe Hovdenak
                  </h2>
                  {/* Role */}
                  <h3 className='text-slate-600 dark:text-slate-300 text-center lg:text-left text-base px-14 py-2 whitespace-nowrap'>
                    Frontend-utvikler
                  </h3>
                  {/* Logos */}
                  <div className='text-5xl flex justify-center lg:justify-start gap-3 text-gray-700 dark:text-gray-400 my-4'>
                    <a href="https://www.linkedin.com/in/jonas-fritz%C3%B8e-hovdenak/" target='_blank' rel='noopener noreferrer' className='hover:text-blue-700 transition-colors'>
                      <AiFillLinkedin/>
                    </a>
                    <a href="https://github.com/jonhovd" target='_blank' rel='noopener noreferrer' className='hover:text-gray-900 dark:hover:text-gray-200 transition-colors'>
                      <AiFillGithub/>
                    </a>
                  </div>
                </div>
                {/* Right Side: Text */}
                <div className='lg:flex-grow mt-4 lg:mt-0 lg:px-4'>
                  <p className='text-md leading-7 font-'>
                    <strong>Jonas</strong> har erfaring innen arbeid med digitalisering, bruk av ulike teknologier som programmering, databaser og Docker. Gjennom systemutvikling i team med bruk av Scrum, har både utviklet mine samarbeidsferdigheter og tekniske ferdigheter. Videre har jeg praksis UiA IT, hvor jeg skal konteinerisere UiA tjenesten MeSH (Medical Subject Headings). Målet er å skape et mer isolert og uavhengig miljø for å kjøre applikasjonen på en effektiv måte uavhengig av underliggende infrastruktur. På fritiden liker jeg å være aktiv; jeg driver med klatring, trening og tilbringer tid med venner.
                  </p>
                  <p className='font-semibold py-2'>
                    Interesseområder:
                  </p>
                  <ul className='pl-5 list-disc'>
                    <li className='py-1'>Frontend-utvikling:</li>
                    <li className='py-1'>Backend-utvikling:</li>
                  </ul>
                
                </div>
              </div>
            </div>
            {/*strek*/}
            <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
            {/*Gruppemedlem 3*/}
            <div className='bg-white dark:bg-slate-950 lg:pt-0 px-6 py-4 rounded text-gray-800 dark:text-white'>
              <div className='flex flex-col lg:flex-row lg:items-center'>
                {/* Left Side: Image, Name, Logos */}
                <div className='flex flex-col items-center lg:items-center lg:px-6 lg:pt-4 lg:w-1/3'>
                  {/* Image */}
                  <div className='relative rounded-full w-48 h-48 overflow-hidden mb-4'>
                    <Image
                      src="/sander.jpg"
                      alt="Sander"
                      unoptimized
                      width={240}
                      height={240}
                      className="object-cover"
                    />
                  </div>
                  {/* Name */}
                  <h2 className='text-center lg:text-left text-2xl px-14 whitespace-nowrap'>
                    Sander Javier Nomedal
                  </h2>
                  {/* Role */}
                  <h3 className='text-slate-600 dark:text-slate-300 text-center lg:text-left text-base px-14 py-2 whitespace-nowrap'>
                    Fullstack-utvikler
                  </h3>
                  {/* Logos */}
                  <div className='text-5xl flex justify-center lg:justify-start gap-3 text-gray-700 dark:text-gray-400 my-4'>
                    <a href="https://www.linkedin.com/in/sander-javier-nomedal-75475526a/" target='_blank' rel='noopener noreferrer' className='hover:text-blue-700 transition-colors'>
                      <AiFillLinkedin/>
                    </a>
                    <a href="https://github.com/sanderjn1" target='_blank' rel='noopener noreferrer' className='hover:text-gray-900 dark:hover:text-gray-200 transition-colors'>
                      <AiFillGithub/>
                    </a>
                  </div>
                </div>
                {/* Right Side: Text */}
                <div className='lg:flex-grow mt-4 lg:mt-0 lg:px-4'>
                  <p className='text-md leading-7 font-'>
                    <strong>Jonas</strong> har erfaring innen arbeid med digitalisering, bruk av ulike teknologier som programmering, databaser og Docker. Gjennom systemutvikling i team med bruk av Scrum, har både utviklet mine samarbeidsferdigheter og tekniske ferdigheter. Videre har jeg praksis UiA IT, hvor jeg skal konteinerisere UiA tjenesten MeSH (Medical Subject Headings). Målet er å skape et mer isolert og uavhengig miljø for å kjøre applikasjonen på en effektiv måte uavhengig av underliggende infrastruktur. På fritiden liker jeg å være aktiv; jeg driver med klatring, trening og tilbringer tid med venner.
                  </p>
                  <p className='font-semibold py-2'>
                    Interesseområder:
                  </p>
                  <ul className='pl-5 list-disc'>
                    <li className='py-1'>Frontend-utvikling:</li>
                    <li className='py-1'>Backend-utvikling:</li>
                  </ul>
                
                </div>
              </div>
            </div>
            {/*strek*/}
            <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
            {/*Gruppemedlem 4*/}
            <div className='bg-white dark:bg-slate-950 lg:pt-0 px-6 py-4 rounded text-gray-800 dark:text-white'>
              <div className='flex flex-col lg:flex-row lg:items-center'>
                {/* Left Side: Image, Name, Logos */}
                <div className='flex flex-col items-center lg:items-center lg:px-6 lg:pt-4 lg:w-1/3'>
                  {/* Image */}
                  <div className='relative rounded-full w-48 h-48 overflow-hidden mb-4'>
                    <Image
                      src="/martin.jpg"
                      alt="Gruppebilde"
                      unoptimized
                      width={240}
                      height={240}
                      className="object-cover"
                    />
                  </div>
                  {/* Name */}
                  <h2 className='text-center lg:text-left text-2xl px-14 whitespace-nowrap'>
                    Martin Steiro
                  </h2>
                  {/* Role */}
                  <h3 className='text-slate-600 dark:text-slate-300 text-center lg:text-left text-base px-14 py-2 whitespace-nowrap'>
                    Fullstack-utvikler
                  </h3>
                  {/* Logos */}
                  <div className='text-5xl flex justify-center lg:justify-start gap-3 text-gray-700 dark:text-gray-400 my-4'>
                    <a href="https://www.linkedin.com/in/martin-steiro-8a94432b6/" target='_blank' rel='noopener noreferrer' className='hover:text-blue-700 transition-colors'>
                      <AiFillLinkedin/>
                    </a>
                    <a href="https://github.com/martinstereo" target='_blank' rel='noopener noreferrer' className='hover:text-gray-900 dark:hover:text-gray-200 transition-colors'>
                      <AiFillGithub/>
                    </a>
                  </div>
                </div>
                {/* Right Side: Text */}
                <div className='lg:flex-grow mt-4 lg:mt-0 lg:px-4'>
                  <p className='text-md leading-7 font-'>
                    <strong>Jonas</strong> har erfaring innen arbeid med digitalisering, bruk av ulike teknologier som programmering, databaser og Docker. Gjennom systemutvikling i team med bruk av Scrum, har både utviklet mine samarbeidsferdigheter og tekniske ferdigheter. Videre har jeg praksis UiA IT, hvor jeg skal konteinerisere UiA tjenesten MeSH (Medical Subject Headings). Målet er å skape et mer isolert og uavhengig miljø for å kjøre applikasjonen på en effektiv måte uavhengig av underliggende infrastruktur. På fritiden liker jeg å være aktiv; jeg driver med klatring, trening og tilbringer tid med venner.
                  </p>
                  <p className='font-semibold py-2'>
                    Interesseområder:
                  </p>
                  <ul className='pl-5 list-disc'>
                    <li className='py-1'>Frontend-utvikling:</li>
                    <li className='py-1'>Backend-utvikling:</li>
                  </ul>
                
                </div>
              </div>
            </div>
            {/*strek*/}
            <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
            {/*Gruppemedlem 5*/}
            <div className='bg-white dark:bg-slate-950 lg:pt-0 px-6 py-4 rounded text-gray-800 dark:text-white'>
              <div className='flex flex-col lg:flex-row lg:items-center'>
                {/* Left Side: Image, Name, Logos */}
                <div className='flex flex-col items-center lg:items-center lg:px-6 lg:pt-4 lg:w-1/3'>
                  {/* Image */}
                  <div className='relative rounded-full w-48 h-48 overflow-hidden mb-4'>
                    <Image
                      src="/ruben.jpg"
                      alt="Ruben"
                      unoptimized
                      width={240}
                      height={240}
                      className="object-cover"
                    />
                  </div>
                  {/* Name */}
                  <h2 className='text-center lg:text-left text-2xl px-14 whitespace-nowrap'>
                    Ruben Teikari
                  </h2>
                  {/* Role */}
                  <h3 className='text-slate-600 dark:text-slate-300 text-center lg:text-left text-base px-14 py-2 whitespace-nowrap'>
                    Fullstack-utvikler
                  </h3>
                  {/* Logos */}
                  <div className='text-5xl flex justify-center lg:justify-start gap-3 text-gray-700 dark:text-gray-400 my-4'>
                    <a href="https://www.linkedin.com/in/rubenteikari/" target='_blank' rel='noopener noreferrer' className='hover:text-blue-700 transition-colors'>
                      <AiFillLinkedin/>
                    </a>
                    <a href="https://github.com/Rubenteik" target='_blank' rel='noopener noreferrer' className='hover:text-gray-900 dark:hover:text-gray-200 transition-colors'>
                      <AiFillGithub/>
                    </a>
                  </div>
                </div>
                {/* Right Side: Text */}
                <div className='lg:flex-grow mt-4 lg:mt-0 lg:px-4'>
                  <p className='text-md leading-7 font-'>
                    <strong>Jonas</strong> har erfaring innen arbeid med digitalisering, bruk av ulike teknologier som programmering, databaser og Docker. Gjennom systemutvikling i team med bruk av Scrum, har både utviklet mine samarbeidsferdigheter og tekniske ferdigheter. Videre har jeg praksis UiA IT, hvor jeg skal konteinerisere UiA tjenesten MeSH (Medical Subject Headings). Målet er å skape et mer isolert og uavhengig miljø for å kjøre applikasjonen på en effektiv måte uavhengig av underliggende infrastruktur. På fritiden liker jeg å være aktiv; jeg driver med klatring, trening og tilbringer tid med venner.
                  </p>
                  <p className='font-semibold py-2'>
                    Interesseområder:
                  </p>
                  <ul className='pl-5 list-disc'>
                    <li className='py-1'>Frontend-utvikling:</li>
                    <li className='py-1'>Backend-utvikling:</li>
                  </ul>
                
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </section>


      <Footer></Footer>
    </main>

  </div>
);
};
