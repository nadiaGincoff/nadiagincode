'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import ProfilePicture from '../../public/profilepicture.jpg';
import CordilleraPicture from '../../public/precordillera.jpg';
import PacificPicture from '../../public/pacifico.jpg';
import SectionDivider from './components/SectionDivider';

const skills: string[] = [ 'JavaScript', 'React.JS', 'Node.JS', 'MySQL', 'Sequelize', 'sqlite', 'Postgresql', 'AWS', 'Ant-design', 'styled-system', 'styled-components', 'Team-Viewer', 'Bitbucket', 'Jira', 'Notion']

function TechSkill({ skillName }: { skillName: string}) {
  return (
    <div className='rounded-[64px] bg-secondary w-auto px-4 py-1 flex items-center justify-center'><span className='font-normal text-beige'>{skillName}</span></div>
  )
}

export default function Home() {
  const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <main className="flex flex-col items-center">
      <section className='min-h-screen'>
        <div className='max-w-screen-xl'>
          <motion.h1  
            initial={{ opacity: 0, y: -100}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.3 }}
            className="antialiased hover:subpixel-antialiased mt-10 flex flex-col tracking-tightest font-mono font-extrabold text-center sm:text-5xl md:text-8xl lg:text-[140px] text-darkgreen"
          >    
            {`I'm Nadia.`}
          </motion.h1>
        </div>
        <article className="flex sm:flex-col md:flex-col lg:flex-row max-w-screen-xl items-center justify-center mt-20 sm:gap-10 md:gap-20 px-8">
          <motion.aside
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}} 
            transition={{ duration: 0.5 }}
          >
            <Image 
              className='sm:rounded-t-[70px] md:rounded-t-full'
              src={ProfilePicture} 
              alt="profile-picture" 
              width="400"
            />
          </motion.aside>
          <motion.aside 
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}} 
            transition={{ duration: 0.5 }}
            className="flex flex-col text-left max-w-3xl gap-y-5"
          >
            <h1 className="antialiased hover:subpixel-antialiased tracking-tighter font-mono font-extrabold sm:text-3xl md:text-2xl lg:text-6xl text-darkgreen">    
              A Full Stack Developer working remotely from Copenhagen, Denmark.
            </h1>
            <span className="font-sans text-secondary sm:text-md md:text-xl font-normal leading-relaxed tracking-wide">
              {`I build accessible, inclusive products and digital experiences for the web.
              I've worked in various areas of web, including front-end development, email, back-end, and databases. I'm proud to have worn many hats.`}
            </span>
            <div className='flex flex-row items-center'>
              <Link href={'/contact'}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  className={`shadow-sm shadow-darkgreen/50 inline-flex items-center px-5 py-2 font-medium  text-darkgreen border border-darkgreen focus:outline-none focus:ring-gray-200 focus:text-beige dark:bg-darkgreen dark:text-beige dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-full link-transition`}
                >
                  Contact me here
                  <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </motion.button>
              </Link>
              <p className="ml-2 font-sans text-secondary sm:text-md md:text-xl font-normal leading-relaxed tracking-wide"> || </p>
              <Link href={'https://www.linkedin.com/in/nadia-ginc/'}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  className={`ml-2 shadow-sm shadow-darkgreen/50 inline-flex items-center px-3 py-3 font-semibold  text-beige bg-darkgreen  focus:outline-none focus:ring-gray-200 focus:text-beige dark:bg-darkgreen dark:text-beige dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-full link-transition`}
                >
                  <FaLinkedinIn size={15} />
                </motion.button>
              </Link>
              <Link href={'https://github.com/nadiaGincoff'}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  className={`ml-2 shadow-sm shadow-darkgreen/50 inline-flex items-center px-3 py-3 font-semibold text-beige bg-darkgreen  focus:outline-none focus:ring-gray-200 focus:text-beige dark:bg-darkgreen dark:text-beige dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-full link-transition`}
                >
                  <FaGithub size={15} />
                </motion.button>
              </Link>
            </div>
            
          </motion.aside>
        </article>
      </section> 
      <SectionDivider />

      <section 
        className='flex flex-col items-center md:mt-0 max-w-screen-xl min-h-screen gap-10'
      >
        <div className='grid justify-items-stretch px-8'>
          <h1 className="sm:w-full md:justify-self-end md:w-[80%] antialiased hover:subpixel-antialiased tracking-tighter font-mono font-extrabold sm:text-3xl md:text-2xl lg:text-6xl text-darkgreen">    
              {`Let's collaborate if you're committed to sustainability, education, equality, or carbon neutrality.`}                 
          </h1>
          <span className="sm:w-full md:w-2/4 md:justify-self-end font-sans text-secondary sm:text-md md:text-xl font-normal leading-relaxed tracking-wide mt-5">
            {`I believe we should leave this Earth as good as or better than we found it for future generations; my goal is to contribute to those ideals in whatever way I can. If you feel the same, I'd love to talk.`}
          </span>    
        </div>
        <SectionDivider />
       <motion.div 
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          className='md:max-w-screen-md lg:max-w-screen-xl sm:w-full bg-white md:rounded-[64px] sm:p-8 md:px-48 md:py-20 md:mx-20'
        >
          <h1 className="antialiased hover:subpixel-antialiased tracking-tighter font-mono font-extrabold sm:text-3xl md:text-2xl lg:text-6xl text-darkgreen">Experience</h1>
          <p className='font-sans text-secondary sm:text-md md:text-xl font-normal leading-relaxed tracking-wide mt-5'>
            {`Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.

            My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.

            When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seedsKorok seeds.`}
           </p>

          <div>
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
                <Link href={'https://www.keiron.cl/'}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                    className={`shadow-sm shadow-darkgreen/50 inline-flex items-center px-5 py-2 font-semibold  text-beige bg-darkgreen  focus:outline-none focus:ring-gray-200 focus:text-beige dark:bg-darkgreen dark:text-beige dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 mt-10 rounded-full link-transition`}
                  >
                    Learn more
                    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </motion.button>
                </Link>
              </li>
            </ol>
          </div>
        </motion.div>
        <SectionDivider />
        <article className='md:max-w-screen-xl w-full flex items-center flex-col'>
          <h1 className="sm:px-8 text-center font-sans max-w-screen-md text-secondary sm:text-md md:text-xl font-normal leading-relaxed tracking-wide">Outside work, I enjoy good coffee near my home, listening to and playing music, exploring the world with my partner and friends, and playing with my beautiful cats. 
          <br />
          <span>
            I took the following photographs on a beach in the Pacific Ocean in Chile.
          </span>
          </h1>
          <div className='flex sm:flex-col items-center md:flex-row gap-4 mt-20 px-5'>
            <Image src={PacificPicture} className='sm:w-full md:w-1/2 rounded-l-[64px]' alt="photography" data-tooltip-target="tooltip-default" />
          
            <Image src={CordilleraPicture} className='sm:w-full md:w-1/2 rounded-r-[64px]' alt="photography" />
          </div>
        </article>
      </section>
    </main>
  )
}

