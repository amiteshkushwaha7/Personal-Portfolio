import { useState, useEffect } from 'react'
import git from '../assets/github.png'
import aboutImage from '../assets/aboutImage.jpg'

function Hero() {
  // Track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="flex justify-center items-center-safe min-h-screen">
      <div className="w-9/12 flex justify-between items-center">
        {/* Follow On section - now using writing-mode for consistent vertical text */}
        <div className="flex flex-col justify-center items-center gap-5 max-[480px]:hidden">
          <p className="writing-mode-vertical tracking-[0.25rem]">Follow On</p>
          <div className="w-0.5 bg-black h-26"></div>
          <a href="https://x.com/amitesh037" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-x-twitter cursor-pointer"></i>
          </a>
          <a href="https://linkedin.com/in/amiteshkushwaha" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in cursor-pointer"></i>
          </a>
          <a href="https://github.com/amiteshkushwaha7" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="" className='w-6 cursor-pointer' />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 p-4">
          {/* Content visible on mobile (sm) and medium (md) screens */}
          <div className="md:hidden text-center">
            <p className="mb-2">Hello, I'm</p>
            <p className="mb-2 text-3xl font-semibold">Amitesh Kushwaha</p>
            <p className="mb-3">A Web Designer & Developer</p>
          </div>

          {/* Image - visible on all screens */}
          <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
            <img
              src={aboutImage}
              alt="Amitesh Kushwaha"
              className="w-full h-full rounded-lg object-cover shadow-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
            />
          </div>

          <div className="md:hidden text-center">
            <button className="bg-indigo-300 hover:bg-indigo-400 transition-colors pt-3 pb-3 pl-6 pr-6 rounded-3xl cursor-pointer">
              See My Work <i className="fa-regular fa-user ml-2"></i>
            </button>
          </div>

          <div className="flex justify-center items-center gap-5 mt-4" style={{ display: windowWidth > 480 ? 'none' : 'flex' }}>
            <a href="https://x.com/amitesh037" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter cursor-pointer"></i>
            </a>
            <a href="https://linkedin.com/in/amiteshkushwaha" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in cursor-pointer"></i>
            </a>
            <a href="https://github.com/amiteshkushwaha7" target="_blank" rel="noopener noreferrer">
              <img src={git} alt="" className='w-6 cursor-pointer' />
            </a>
          </div>

          {/* Content visible on large (lg) screens and up */}
          <div className="hidden md:block text-center md:text-left">
            <p className="mb-2">Hello, I'm</p>
            <p className="mb-2 text-3xl font-semibold">Amitesh Kushwaha</p>
            <p className="mb-3">A Web Designer & Developer</p>
            <button className="bg-indigo-300 hover:bg-indigo-400 transition-colors p-3 rounded-3xl cursor-pointer"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              See My Work <i className="fa-regular fa-user ml-2"></i>
            </button>
          </div>
        </div>

        {/* Scroll Down section - now using writing-mode for consistent vertical text */}
        <div className="flex flex-col justify-center items-center gap-5 max-[480px]:hidden animate-bounce hover:text-indigo-400 hover:font-semibold"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
          <i className="fa-solid fa-computer-mouse cursor-pointer"></i>
          <p className="writing-mode-vertical tracking-[0.2rem]">Scroll Down</p>
          <i className="fa-solid fa-greater-than rotate-90 cursor-pointer"></i>
        </div>
      </div>
    </section>
  )
}

export default Hero