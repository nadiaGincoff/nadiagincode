import Image from 'next/image'
import NavBar from  '../components/NavBar';
import ProfilePicture from '../../public/profilepicture.jpg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className='max-w-screen-xl'>
        <h1 className="antialiased hover:subpixel-antialiased mt-10 flex flex-col tracking-tightest font-mono font-extrabold text-center sm:text-5xl md:text-8xl lg:text-9xl text-darkgreen">    
          {`Hi. I'm Nadia.`}
        </h1>
      </div>
      <article className="flex sm:flex-col md:flex-row max-w-screen-xl items-center justify-center mt-20 sm:gap-10 md:gap-20 px-10">
        <aside className='relative'>
          <div className='absolute left-0 bottom-0 bg-darkgreen w-full h-20 z-10'></div>
          <Image 
            className='sm:rounded-t-[70px] md:rounded-t-full'
            src={ProfilePicture} 
            alt="profile-picture" 
            width="350"
            height="350"
          />
        </aside>
        <aside className="flex flex-col text-left max-w-3xl gap-y-5">
          <h1 className="antialiased hover:subpixel-antialiased flex flex-col tracking-tighter font-mono font-extrabold sm:text-3xl md:text-2xl lg:text-6xl text-darkgreen">    
            A Full Stack Developer working remotely from Copenhagen, Denmark.
          </h1>
          <span className="font-sans text-secondary sm:text-md md:text-xl font-normal leading-relaxed tracking-wide">
            {`I build accessible, inclusive products and digital experiences for the web.
            I've worked in various areas of web, including front-end development, email, back-end, and databases. I'm proud to have worn many hats.`}
          </span>
        </aside>
      </article>
    </main>
  )
}
