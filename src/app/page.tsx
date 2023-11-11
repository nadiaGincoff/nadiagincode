import Image from 'next/image'
import Link from 'next/link';

import ProfilePicture from '../../public/profilepicture.jpg';
import CordilleraPicture from '../../public/precordillera.jpg';
import PacificPicture from '../../public/pacifico.jpg';


const skills: string[] = [ 'JavaScript', 'React.JS', 'Node.JS', 'MySQL', 'Sequelize', 'sqlite', 'Postgresql', 'AWS', 'Ant-design', 'styled-system', 'styled-components', 'Team-Viewer', 'Bitbucket', 'Jira', 'Notion']

function TechSkill({ skillName }: { skillName: string}) {
  return (
    <div className='rounded-[64px] bg-secondary w-auto px-4 py-1 flex items-center justify-center'><span className='font-normal text-beige'>{skillName}</span></div>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className='min-h-screen'>
        <div className='max-w-screen-xl'>
          <h1 className="antialiased hover:subpixel-antialiased mt-10 flex flex-col tracking-tightest font-mono font-extrabold text-center sm:text-5xl md:text-8xl lg:text-[140px] text-darkgreen">    
            {`I'm Nadia.`}
          </h1>
        </div>
        <article className="flex sm:flex-col md:flex-col lg:flex-row max-w-screen-xl items-center justify-center mt-20 sm:gap-10 md:gap-20 px-8">
          <aside className='relative -z-10'>
            <div className='absolute left-0 bottom-0 shadow-lg shadow-darkgreen/50  bg-darkgreen w-full h-20 z-0'></div>
            <Image 
              className='sm:rounded-t-[70px] md:rounded-t-full'
              src={ProfilePicture} 
              alt="profile-picture" 
              width="400"
            />
          </aside>
          <aside className="flex flex-col text-left max-w-3xl gap-y-5">
            <h1 className="antialiased hover:subpixel-antialiased tracking-tighter font-mono font-extrabold sm:text-3xl md:text-2xl lg:text-6xl text-darkgreen">    
              A Full Stack Developer working remotely from Copenhagen, Denmark.
            </h1>
            <span className="font-sans text-secondary sm:text-md md:text-xl font-normal leading-relaxed tracking-wide">
              {`I build accessible, inclusive products and digital experiences for the web.
              I've worked in various areas of web, including front-end development, email, back-end, and databases. I'm proud to have worn many hats.`}
            </span>
          </aside>
        </article>
      </section> 

      <section className='flex flex-col items-center mt-10 max-w-screen-xl min-h-screen gap-10'>

        <div className='grid justify-items-stretch px-8'>
          <h1 className="sm:w-full md:justify-self-end md:w-[80%] antialiased hover:subpixel-antialiased tracking-tighter font-mono font-extrabold sm:text-3xl md:text-2xl lg:text-6xl text-darkgreen">    
              {`Let's collaborate if you're committed to sustainability, education, equality, or carbon neutrality.`}                 
          </h1>
          <span className="sm:w-full md:w-2/4 md:justify-self-end font-sans text-secondary sm:text-md md:text-xl font-normal leading-relaxed tracking-wide mt-5">
            {`I believe we should leave this Earth as good as or better than we found it for future generations; my goal is to contribute to those ideals in whatever way I can. If you feel the same, I'd love to talk.`}
          </span>    
        </div>

        <article className='md:max-w-screen-xl w-full bg-white md:rounded-[64px] sm:p-8 md:px-48 md:py-20 mt-20 -z-10'>
          <h1 className="antialiased hover:subpixel-antialiased tracking-tighter font-mono font-extrabold sm:text-3xl md:text-2xl lg:text-6xl text-darkgreen">Experience</h1>
          <p className='font-sans text-secondary sm:text-md md:text-xl font-normal leading-relaxed tracking-wide mt-5'>
            {`Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.

            My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.

            When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seedsKorok seeds.`}
           </p>

          <div className="font-sans">
            <ol className="relative border-s border-gray-200 dark:border-darkgray mt-5">                  
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-darkgreen rounded-full mt-1.5 -start-1.5 border border-white dark:border-darkgray dark:bg-darkgray"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2020 - 2022</time>
                <h3 className="text-xl fons-mono font-semibold text-darkgreen mt-5">Full stack Developer at Keirón</h3>
                <ul className='list-disc list-inside font-sans text-secondary sm:text-md md:text-lg leading-relaxed mt-5'>
                  <li>
                    Developed new features and provided support as full stack engineer, working closely with lead developers using SCRUM methodology.
                  </li>
                  <li>
                    Direct interaction on-site with clients to resolve bugs that occurred in their local machines.
                  </li>
                  <li>
                    Maintained constant communication with different teams such as design and product to plan features or drawbacks.
                  </li>
                  <li>
                    Used to connect to the client server network through pm2 and TeamViewer and update local server migrations or check for local errors.
                  </li>
                  <li>
                    Participated in training new developers. 
                  </li>
                  <li>
                    Created documentation of the API and the functionality of the software.
                  </li>
                </ul>
                <div className='mt-5 flex flex-row flex-wrap gap-2'>
                  {skills.map((skill) => <TechSkill skillName={skill} key={skill} />)}
                </div>
                <Link href={'https://www.keiron.cl/'} className='z-[900]'>
                  <button 
                    className={`shadow-sm shadow-darkgreen/50 inline-flex items-center px-5 py-2 font-semibold  text-beige bg-darkgreen border border-gray-200 rounded- hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-beige dark:bg-darkgreen dark:text-beige dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 mt-10 rounded-full link-transition z-[900]`}
                  >
                    Learn more
                    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                  </button>
                </Link>
              </li>
            </ol>
      
          </div>
        </article>
        <article className='md:max-w-screen-xl w-full flex items-center flex-col mt-10'>
          <h1 className="sm:px-8 text-center font-sans max-w-screen-md text-secondary sm:text-md md:text-xl font-normal leading-relaxed tracking-wide">Outside work, I enjoy good coffee near my home, listening to and playing music, exploring the world with my partner and friends, and playing with my beautiful cats.
          </h1>
          <div className='flex sm:flex-col items-center md:flex-row gap-4 mt-20'>
            <Image src={PacificPicture} className='sm:w-full md:w-1/2 rounded-l-[64px]' alt="photography" data-tooltip-target="tooltip-default" />
            <div className='rounded-full w-4 bg-darkgreen h-4'></div>
            <Image src={CordilleraPicture} className='sm:w-full md:w-1/2 rounded-r-[64px]' alt="photography" />
          </div>
        </article>
      </section>
    </main>
  )
}

