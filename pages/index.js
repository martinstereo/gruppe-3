import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


export default function Home() {
return (
  <div className='bg-white dark:bg-slate-950 overflow-hidden'>
    <Head>
      <title>Bachelorgruppe 3</title>
      <link rel="icon" href="/favicon.png" type="image/png" />
    </Head>

    {/* Navbar */}
    <Navbar></Navbar>

    <main className='bg-white dark:bg-slate-950 max-w-screen-lg mx-auto px-2 lg:px-8'>
      
      <section className='bg-white dark:bg-slate-950 my-4'>
        <div className='pb-6'>
          {/* Title */}
          <div className='pt-6 lg:px-8'>
            <h1 className='text-gray-800 dark:text-white text-left text-4xl font-semibold pt-3'>
              Velkommen, oppdragsgiver!
            </h1>
            <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
          </div>

  
          {/* Image Container (Centered) */}
          <div className='flex justify-center'>
            <Image src="/gruppebilde2.jpg" priority={true} alt="Gruppebilde" width={1600} height={900} unoptimized className='w-full max-w-4xl h-auto rounded-sm'/>
          </div>

          {/* Text Section */}
          <div className='max-w-screen-lg mx-auto lg:px-8 mt-5'>
            {/* Small Header */}
            <h2 className='text-gray-800 dark:text-white text-2xl font-inter mb-2 py-2'>
              Dette er oss i Gruppe 3
            </h2>

            {/* Descriptive Text */}
            <p className='text-gray-800 dark:text-white leading-8'>
              <strong>Gruppe 3</strong> er et team på fem dedikerte IT-studenter med en gjennomtenkt gruppesammensetning. Teamet består av to frontend-utviklere (Jonas og Martin), to backend-utviklere (Ruben og Sander), og en fullstack-utvikler (Johannes) som også er prosjektleder.
            </p>
            <p className='text-gray-800 dark:text-white leading-8 pt-4'>
              <strong>Sammen</strong> har vi lyst til å skape samfunnsnyttige løsninger av kvalitet med fokus på god prosjektgjennomføring, kommunikasjon og godt samarbeid med <strong>dere.</strong>
            </p>
          </div>
        </div>
      </section>
      
      {/*Møt Teamet*/}
      <section>
        <div>
          {/*Tittel*/}
          <h1 id='teamet' className='text-gray-800 dark:text-white text-center text-4xl font-extralight py-6'>
            Møt Teamet
          </h1>
          {/*strek*/}
          <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
          {/*Gruppemedlemmer*/}
          <div>
            {/*Gruppemedlem 1*/}
            <div className='bg-white dark:bg-slate-950 rounded text-gray-800 dark:text-white'>
              <div className='flex flex-col lg:flex-row lg:items-center'>
                {/* Left Side: Image, Name, Logos */}
                <div className='flex flex-col items-center lg:items-center lg:px-6 lg:pt-4 lg:w-1/3 lg:flex-shrink-0'>
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
                  <h2 className='text-center lg:text-left text-2xl whitespace-nowrap'>
                    Johannes Tjøstheim
                  </h2>
                  {/* Role */}
                  <h3 className='text-slate-600 dark:text-slate-300 text-center lg:text-left text-base py-2 whitespace-nowrap'>
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
                <div className='lg:flex-grow mt-4 lg:mt-0 lg:px-4 text-md leading-8'>
                  <p>
                    <strong>Johannes Tjøstheim</strong> er en energisk og nysgjerrig person med sterk interesse for programvareutvikling og cybersikkerhet. Gjennom sin erfaring som IT-support i Dyreparken har han utviklet gode evner til å være løsningsorientert, spesielt i krevende og tidssensitive situasjoner. Gjennom sin praksis hos Capgemini får han videre utviklet sin kompetanse innen programvareutvikling. Videre er han også leder for Kristiansand Studentklatring – med over 250 medlemmer – der både leder- og samarbeidsevnene hans blir styrket. Samlet har disse erfaringene forsterket hans lidenskap for IT-bransjen, og han er motivert og klar for nye, spennende og utfordrende oppgaver.
                  </p>
                  <p className='font-semibold py-2'>
                    Interesseområder:
                  </p>
                  <ul className='pl-5 list-disc'>
                    <li className='py-1'>Frontend-utvikling: React, Tailwind</li>
                    <li className='py-1'>Backend-utvikling: C#, Python</li>
                    <li className='py-1'>Annet: KI, Cybersikkerhet, Linux, Docker, API, Ledelse</li>
                  </ul>
                
                </div>
              </div>
            </div>  
            {/*strek*/}
            <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
            {/*Gruppemedlem 2*/}
            <div className='bg-white dark:bg-slate-950 rounded text-gray-800 dark:text-white'>
              <div className='flex flex-col lg:flex-row lg:items-center'>
                {/* Left Side: Image, Name, Logos */}
                <div className='flex flex-col items-center lg:items-center lg:px-6 lg:pt-4 lg:w-1/3 lg:flex-shrink-0'>
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
                  <h2 className='text-center lg:text-left text-2xl whitespace-nowrap'>
                    Jonas Fritzøe Hovdenak
                  </h2>
                  {/* Role */}
                  <h3 className='text-slate-600 dark:text-slate-300 text-center lg:text-left text-base py-2 whitespace-nowrap'>
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
                <div className='lg:flex-grow mt-4 lg:mt-0 lg:px-4 text-md leading-8'>
                  <p>
                    <strong>Jonas Fritzøe Hovdenak</strong> har gjennom studiene bygd både erfaring og interesse innen arbeid med digitalisering og bruk av ulike teknologier. Han har gjennom systemutvikling i team med bruk av Scrum, har utviklet sine samarbeidsferdigheter og tekniske ferdigheter. Videre har Jonas praksis UiA IT, hvor han skal konteinerisere UiA tjenesten MeSH (Medical Subject Headings). Målet er å skape et mer isolert og uavhengig miljø for å kjøre applikasjonen på en effektiv måte uavhengig av underliggende infrastruktur. På fritiden er Jonas aktiv, der han blant annet driver med klatring, trening, og tilbringer tid med venner.
                  </p>
                  <p className='font-semibold py-2'>
                    Interesseområder:
                  </p>
                  <ul className='pl-5 list-disc'>
                    <li className='py-1'>Frontend-utvikling: React, Tailwind, TS og JS</li>
                    <li className='py-1'>Backend-utvikling: C#, Python</li>
                    <li className='py-1'>Annet: Generativ KI, Docker, Linux, Databasehåntering</li>
                  </ul>
                
                </div>
              </div>
            </div>
            {/*strek*/}
            <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
            {/*Gruppemedlem 3*/}
            <div className='bg-white dark:bg-slate-950 rounded text-gray-800 dark:text-white'>
              <div className='flex flex-col lg:flex-row lg:items-center'>
                {/* Left Side: Image, Name, Logos */}
                <div className='flex flex-col items-center lg:items-center lg:px-6 lg:pt-4 lg:w-1/3 lg:flex-shrink-0'>
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
                  <h2 className='text-center lg:text-left text-2xl whitespace-nowrap'>
                    Sander Javier Nomedal
                  </h2>
                  {/* Role */}
                  <h3 className='text-slate-600 dark:text-slate-300 text-center lg:text-left text-base py-2 whitespace-nowrap'>
                    Backend-utvikler
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
                <div className='lg:flex-grow mt-4 lg:mt-0 lg:px-4 text-md leading-8'>
                  <p>
                    <strong>Sander Javier Nomedal</strong> er en engasjert IT-student med stor interesse for teknologi, backend-utvikling og tjenestedesign, og har gjennom studiene opparbeidet seg bred kompetanse innen disse områdene. For tiden er Sander i praksis hos DigIn i Kristiansand, der han jobber med GeoAI:HUB prosjektet. Målet er å samle initiativer, ekspertise og teknologi på tvers av fagområdene geomatikk og kunstig intelligens (AI), samt fremme utveksling av kompetanse og erfaring på tvers av sektorer og bransjer.
                  </p>
                  <p className='font-semibold py-2'>
                    Interesseområder:
                  </p>
                  <ul className='pl-5 list-disc'>
                    <li className='py-1'>Frontend-utvikling: HTML, CSS, JavaScript</li>
                    <li className='py-1'>Backend-utvikling: C#, Python</li>
                    <li className='py-1'>Annet: AI, Cybersikkerhet, Tjenestedesign</li>
                  </ul>
                
                </div>
              </div>
            </div>
            {/*strek*/}
            <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
            {/*Gruppemedlem 4*/}
            <div className='bg-white dark:bg-slate-950 rounded text-gray-800 dark:text-white'>
              <div className='flex flex-col lg:flex-row lg:items-center'>
                {/* Left Side: Image, Name, Logos */}
                <div className='flex flex-col items-center lg:items-center lg:px-6 lg:pt-4 lg:w-1/3 lg:flex-shrink-0'>
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
                  <h2 className='text-center lg:text-left text-2xl whitespace-nowrap'>
                    Martin Steiro
                  </h2>
                  {/* Role */}
                  <h3 className='text-slate-600 dark:text-slate-300 text-center lg:text-left text-base py-2 whitespace-nowrap'>
                    Frontend-utvikler
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
                <div className='lg:flex-grow mt-4 lg:mt-0 lg:px-4 text-md leading-8'>
                  <p>
                    <strong>Martin Steiro</strong> engasjerer seg svært for utvikling og den menneskelige kontakten i møte med teknologi. Gjennom studiet har Martin fått en interesse for utvikling gjennom de ulike teknologiene han satt seg inn i. Martin har utviklet en spesielt stor interesse for koding, og setter han seg ned med et problem, jobber han intensivt med det til en løsning er funnet. Han er interessert i mye innenfor både frontend og backend, og er alltid klar for å lære noe nytt.
                    </p>
                  <p className='pt-3'>
                    Martin er for tiden i en praksisperiode hos Kartverket hvor han arbeider i KartAi-prosjektet med RAG-arkitektur og generativ KI.
                  </p>
                  <p className='font-bold pt-3'>
                    Interesseområder:
                  </p>
                  <ul className='pl-5 list-disc'>
                    <li className='py-1'>Frontend-utvikling: React, Tailwind, JS, TS</li>
                    <li className='py-1'>Backend-utvikling: C#, Golang, Python, m.m. </li>
                    <li className='py-1'>Annet: Databasehåndtering, generativ KI</li>
                  </ul>
                
                </div>
              </div>
            </div>
            {/*strek*/}
            <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
            {/*Gruppemedlem 5*/}
            <div className='bg-white dark:bg-slate-950 rounded text-gray-800 dark:text-white'>
              <div className='flex flex-col lg:flex-row lg:items-center'>
                {/* Left Side: Image, Name, Logos */}
                <div className='flex flex-col items-center lg:items-center lg:px-6 lg:pt-4 lg:w-1/3 lg:flex-shrink-0'>
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
                  <h2 className='text-center lg:text-left text-2xl whitespace-nowrap'>
                    Ruben Teikari
                  </h2>
                  {/* Role */}
                  <h3 className='text-slate-600 dark:text-slate-300 text-center lg:text-left text-base py-2 whitespace-nowrap'>
                    Backend-utvikler
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
                <div className='lg:flex-grow mt-4 lg:mt-0 lg:px-4 text-md leading-8'>
                  <p>
                    <strong>Ruben Teikari</strong> er en teamorientert og engasjert person som trives med å løse utfordringer og bidra til utviklingen av produkter og tjenester som skaper verdi for andre. Han har en god forståelse for viktigheten av å beherske ulike teknologier og deres praktiske anvendelser. Denne høsten er Ruben i praksis hos Kristiansand kommune, der han jobber på KartAI-prosjektet. Han bidrar der med å utvikle AI-baserte deteksjoner og håndtering av geojson-fildata. På fritiden liker han å være fysisk aktiv, blant annet klatring og kroppsvekt styrketrening. Ved siden av studiet og fritid er Ruben også styremedlem i NITO studentene.
                  </p>
                  <p className='font-semibold py-2'>
                    Interesseområder:
                  </p>
                  <ul className='pl-5 list-disc'>
                    <li className='py-1'>Frontend-utvikling: JavaScript, TypeScript, React</li>
                    <li className='py-1'>Backend-utvikling: Python, C#</li>
                    <li className='py-1'>Annet: Geografisk Informasjonssystem, KI, Databasehåndtering</li>
                  </ul>
                
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <br></br>
      <br></br>
      <br></br>

      <section>
        <div>
          {/*Tittel*/}
          <h1 id='ProskjektArbeid' className='text-gray-800 dark:text-white text-center text-4xl font-extralight py-6'>
            Hvordan vi jobber med prosjekter
          </h1>
          {/*strek*/}
          <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
          <div>
            {/* Descriptive Text */}
            <div>
              <h2 id='MerOmTeamet' className='text-gray-800 dark:text-white text-left text-2xl font-inter pb-3'>
                Mer om Teamet
              </h2>
              <p className='text-gray-800 dark:text-white leading-8'>
                Alle teammedlemmene i bachelorgruppen har høye forventninger til hverandres gjennomføring av oppgavene og utfordringene vi står ovenfor. Samt har teamet høy tillit til hverandres ferdigheter, kunnskap og arbeidsmoral. Videre har det vært et stort fokus på å danne et team som er komfortable med sine egne ferdigheter, og som med disse ferdighetene kan bidra til arbeidet. Teamet er dannet på et grunnlag av tillit og respekt, hvor mye tid og energi er lagt inn i samarbeidet. Åpen dialog er viktig i vårt samarbeid, og vi ønsker et miljø der ideer og tanker kan deles fritt uten frykt for latterligjørelse.
              </p>
              <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
            </div>

            <div>
              <h2 id='Prosjekt/bedrift' className='text-gray-800 dark:text-white text-left text-2xl font-inter pb-3'>
                Tanker om prosjekt/bedrift
              </h2>
              <p className='text-gray-800 dark:text-white leading-8'>
                Teamet har gjennom studiet erfart ulike typer prosjekter, blant annet UX retter prosjekter, programmerings prosjekter, tjenestedesign prosjekter og mer helhetlige prosjekter. Basert på disse erfaringene ønsker teamet å samarbeide med en bedrift som kan tilby en helhetlig utviklingserfaring. Teamet ønsker å utvikle en bred kompetanse som både er fremtidsrettet og spennende.
              </p>
              <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
            </div>

            <div>
              <h2 id='Arbeidsprosessen' className='text-gray-800 dark:text-white text-left text-2xl font-inter pb-3'>
                Arbeidsprosessen
              </h2>
              <p className='text-gray-800 dark:text-white leading-8'>
                Teamet har et stort fokus på kontinuerlig kompetanseheving og fremdrift i prosjektet. For å sikre jevn progresjon vil teamet ha statusoppdateringer på daily standups. Teamet ønsker samt å ha jevnlige møter med oppdragsgiver for å sikre at produktutviklingen går i tråd med deres forventninger.
              </p>
              <hr className="h-px my-8 border-0 bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        </div>

        {/* Image Container (Centered) */}
        <div className='flex justify-center'>
          <Image src="/gruppebilde.jpg" priority={true} alt="GruppebildeKlatring" width={900} height={450} unoptimized className='h-auto rounded-sm'/>
        </div>

      </section>


      <Footer></Footer>
    </main>

  </div>
);
};
