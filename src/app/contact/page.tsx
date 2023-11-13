import ContactForm  from './ContactForm';

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <article className='lg:max-w-screen-xl w-full bg-white md:rounded-[64px] sm:p-8 md:px-32 md:py-32 mt-20 flex sm:flex-col md:flex-col lg:flex-row gap-8 items-center justify-center'>
        <div className="flex flex-col sm:w-full lg:w-1/2 gap-5">
          <h1 className="antialiased hover:subpixel-antialiased tracking-tighter font-mono font-extrabold sm:text-3xl md:text-5xl lg:text-6xl text-secondary ">Get in <span className="text-darkgreen">Touch</span></h1>
          <p className='font-sans text-secondary sm:text-md md:text-xl font-normal leading-relaxed tracking-wide'>Let's chat about how I can bring value to your team and collaborate on something extraordinary. Reach out and let's make the tech world a little more awesome together!</p>
          <ContactForm />
        </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72000.61242277485!2d12.5938239!3d55.67126735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d23%3A0x4dd7edde69467b8!2sCopenhagen!5e0!3m2!1sen!2sdk!4v1699715973530!5m2!1sen!2sdk" 
            className='sm:w-[400px] md:w-[500] h-[500px]'
          />
      </article>
    </main>
  )
}

