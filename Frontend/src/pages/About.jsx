import React from 'react'
import aboutImage from '../assets/aboutImage.jpg'

function About() {
  return (
    <section id='about' className='flex justify-center items-center py-8 px-4 sm:px-6 lg:px-8 bg-gray-100 '>
      <div className="w-full max-w-6xl mx-4">
        <div className='text-center mb-12'>
          <h4 className='text-2xl font-bold mb-2'>About Me</h4>
          <p className='text-gray-600'>What I do</p>
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 bg-white rounded-xl shadow-lg p-5'>
          <div className='w-full lg:w-1/3 flex justify-center'>
            <img
              src={aboutImage}
              alt="Profile"
              className="w-full h-full rounded-lg object-cover shadow-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
            />
          </div>

          <div className="w-full lg:w-2/3">
            <h3 className='text-lg max-lg:text-center font-bold text-gray-800 mb-4'>I'm a Web Designer & Developer</h3>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              I specialize in building modern, scalable web applications using MongoDB, Express.js, React, and Node.js.
              With expertise in both frontend and backend development, <br /> I create seamless, high-performance digital experiences.
              Whether it's RESTful APIs, dynamic UIs, or database optimization, I bring ideas to life with clean, efficient code.
            </p>
            <div className='flex flex-wrap gap-4 mb-8'>
              <div className='flex justify-center items-center gap-4 py-4 px-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                <div className='text-4xl font-bold text-[#95B9ED]'>2+</div>
                <div className='text-gray-600'>
                  <p>Years of Coding</p>
                  <p className='font-medium'>Experience</p>
                </div>
              </div>

              <div className='flex justify-center items-center gap-4 py-4 px-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                <div className='text-4xl font-bold text-[#95B9ED]'>5+</div>
                <div className='text-gray-600'>
                  <p>Complete</p>
                  <p className='font-medium'>Projects</p>
                </div>
              </div>

              <div className='flex justify-center items-center gap-4 py-4 px-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'>
                <div className='text-4xl font-bold text-[#95B9ED]'>3+</div>
                <div className='text-gray-600'>
                  <p>Satisfied</p>
                  <p className='font-medium'>Customers</p>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap gap-4'>
              <button className='bg-[#81A6DB] text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-500 cursor-pointer transition-colors flex items-center'>
                Hire Me <i className="fa-regular fa-user ml-2"></i>
              </button>
              <a
                className='border px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors flex items-center'
                href="/CV.pdf"
                download
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About