import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bachelorgruppe 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-neutral-100 px-10'>
        <section className=' bg-red-100'>
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-inter'>Bachelorgruppe 3</h1>
            <ul className=' flex items-center'>
              <li>
                <a className='bg-sky-300 px-4 py-2 rounded-md ml-8' href="#">Hjem</a>
              </li>
              <li>
                <a className='bg-sky-300 px-4 py-2 rounded-md ml-8' href="#">Team-medlemmene</a>
              </li>
              <li>
                <a className='bg-sky-300 px-4 py-2 rounded-md ml-8' href="#">Om gruppen</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            {/*Gruppebilde*/}
            <div>
              <Image src="/gruppebilde.jpg" alt="Gruppebilde" width={500} height={300}/>
            </div>
            {/*Tittel*/}
            <h1 className='text-center text-5xl font-medium'>Velkommen, oppdragsgiver!</h1>
          </div>
        </section>

        <section>
          <div>
            {/*Tittel*/}
            <h1 className='text-center text-4xl p-10'>Møt Teamet</h1>
            {/*Gruppemedlemmer*/}
            <div>
                {/*Gruppemedlem 1*/}
                <div className='bg-slate-300'>
                  {/*Bilde*/}
                  <div className='relative mx-auto rounded-full w-60 h-60 overflow-hidden'>
                    <Image src="/martin.jpg" alt="Gruppebilde" layout='fill' objectFit='cover'/>
                  </div>
                  {/*Navn*/}
                  <h2 className='text-center text-2xl py-2'>Jonas Fritzøe Hovdenak</h2>
                  {/*Logoer*/}
                  <div className='text-5xl flex justify-center gap-3 text-gray-700'>
                    <a href="https://www.linkedin.com/in/martin-steiro-8a94432b6/" target='blank' rel='noopener norefferer' className='hover:text-blue-700 transition-colors'>
                      <AiFillLinkedin/>
                    </a>
                    <a href="https://github.com/martinstereo" target='blank' rel='noopener norefferer' className='hover:text-blue-700 transition-colors'>
                      <AiFillGithub/>
                    </a>
                  </div>
                  {/*tekst*/}
                  <p>Jeg har erfaring innen arbeid med digitalisering, bruk av ulike teknologier som programmering, databaser og Docker. Gjennom systemutvikling i team med bruk av Scrum, har både utviklet mine samarbeidsferdigheter og tekniske ferdigheter. Videre har jeg praksis UiA IT, hvor jeg skal konteinerisere UiA tjenesten MeSH (Medical Subject Headings). Målet er å skape et mer isolert og uavhengig miljø for å kjøre applikasjonen på en effektiv måte uavhengig av underliggende infrastruktur. På fritiden liker jeg å være aktiv; jeg driver med klatring, trening og tilbringer tid med venner.</p>
                </div>
            </div>



          </div>
        </section>
      </main>

    </div>
  );
}
