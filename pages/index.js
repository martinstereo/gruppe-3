import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Bachelorgruppe 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/*Imported Navbar*/}
      <Navbar></Navbar>

      <main className='bg-white max-w-screen-lg mx-auto px-4 lg:px-8'>
        
        <section className='bg-white my-10'>
          <div className='p-6'>
            {/* Title */}
            <h1 className='text-6xl font-sans mb-6'>Velkommen, oppdragsgiver!</h1>
    
            {/* Image Container (Centered) */}
            <div className='flex justify-center'>
              <Image src="/gruppebilde2.jpg" priority={true} alt="Gruppebilde" width={1600} height={900} unoptimized className='w-full max-w-4xl h-auto rounded-sm'/>
            </div>

            {/* Text Section */}
            <div className='mt-6 max-w-3xl mx-auto'>
              {/* Small Header */}
              <h2 className='text-2xl font-semibold font-inter mb-2'>Dette er oss i Gruppe 3</h2>

              {/* Descriptive Text */}
              <p className='text-lg leading-7'>Dette er en introduksjonstekst som beskriver prosjektet og ønsker velkommen til oppdragsgiveren.</p>
            </div>
          </div>
        </section>
        {/*Strek*/}
        <hr className="h-px my-8 border-0 dark:bg-slate-200"/>

        <section>
          <div>
            {/*Tittel*/}
            <h1 className='text-center text-4xl font-extralight p-4'>Møt Teamet</h1>
            {/*strek*/}
            <hr className="h-px my-8 border-0 dark:bg-slate-200"/>

            {/*Gruppemedlemmer*/}
            <div>
              {/*Gruppemedlem 1*/}
              <div className='bg-white lg:pt-0 px-6 py-4 rounded'>
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
                    <h2 className='text-center lg:text-left text-2xl px-14 whitespace-nowrap'>Jonas Fritzøe Hovdenak</h2>
                    {/* Role */}
                    <h3 className='text-zinc-800 text-center lg:text-left text-base px-14 py-2 whitespace-nowrap'>Fullstack utvikler</h3>
                    {/* Logos */}
                    <div className='text-5xl flex justify-center lg:justify-start gap-3 text-gray-700 my-4'>
                      <a href="https://www.linkedin.com/in/martin-steiro-8a94432b6/" target='_blank' rel='noopener noreferrer' className='hover:text-blue-700 transition-colors'>
                        <AiFillLinkedin/>
                      </a>
                      <a href="https://github.com/martinstereo" target='_blank' rel='noopener noreferrer' className='hover:text-blue-700 transition-colors'>
                        <AiFillGithub/>
                      </a>
                    </div>
                  </div>
                  {/* Right Side: Text */}
                  <div className='lg:flex-grow mt-4 lg:mt-0 lg:px-4'>
                    <p className='text-md leading-7'>
                      <strong>Jonas Fritzøe Hovdenak</strong> har erfaring innen arbeid med digitalisering, bruk av ulike teknologier som programmering, databaser og Docker. Gjennom systemutvikling i team med bruk av Scrum, har både utviklet mine samarbeidsferdigheter og tekniske ferdigheter. Videre har jeg praksis UiA IT, hvor jeg skal konteinerisere UiA tjenesten MeSH (Medical Subject Headings). Målet er å skape et mer isolert og uavhengig miljø for å kjøre applikasjonen på en effektiv måte uavhengig av underliggende infrastruktur. På fritiden liker jeg å være aktiv; jeg driver med klatring, trening og tilbringer tid med venner.
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
              <hr className="h-px my-8 border-0 dark:bg-slate-200"/>

              {/*Gruppemedlem 2*/}
              <div className='bg-white lg:pt-0 px-6 py-4 rounded'>
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
                    <h2 className='text-center lg:text-left text-2xl px-14 whitespace-nowrap'>Jonas Fritzøe Hovdenak</h2>
                    {/* Role */}
                    <h3 className='text-zinc-800 text-center lg:text-left text-base px-14 py-2 whitespace-nowrap'>Fullstack utvikler</h3>
                    {/* Logos */}
                    <div className='text-5xl flex justify-center lg:justify-start gap-3 text-gray-700 my-4'>
                      <a href="https://www.linkedin.com/in/martin-steiro-8a94432b6/" target='_blank' rel='noopener noreferrer' className='hover:text-blue-700 transition-colors'>
                        <AiFillLinkedin/>
                      </a>
                      <a href="https://github.com/martinstereo" target='_blank' rel='noopener noreferrer' className='hover:text-blue-700 transition-colors'>
                        <AiFillGithub/>
                      </a>
                    </div>
                  </div>
                  {/* Right Side: Text */}
                  <div className='lg:flex-grow mt-4 lg:mt-0 lg:px-4'>
                    <p className='text-md leading-7'>
                      <strong>Jonas Fritzøe Hovdenak</strong> har erfaring innen arbeid med digitalisering, bruk av ulike teknologier som programmering, databaser og Docker. Gjennom systemutvikling i team med bruk av Scrum, har både utviklet mine samarbeidsferdigheter og tekniske ferdigheter. Videre har jeg praksis UiA IT, hvor jeg skal konteinerisere UiA tjenesten MeSH (Medical Subject Headings). Målet er å skape et mer isolert og uavhengig miljø for å kjøre applikasjonen på en effektiv måte uavhengig av underliggende infrastruktur. På fritiden liker jeg å være aktiv; jeg driver med klatring, trening og tilbringer tid med venner.
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

              {/*Gruppemedlem 3*/}

              {/*Gruppemedlem 4*/}
            </div>
            

          </div>
        </section>


        <Footer></Footer>
      </main>

    </div>
  );
};
