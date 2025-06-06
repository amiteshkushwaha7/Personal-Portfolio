import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <section id='header' className='flex justify-center items-center pt-8 px-4 sm:px-6 lg:px-8 bg-gray-100 fixed w-full z-10 '>
      <div className="w-full flex justify-between items-center max-w-6xl mx-4 bg-white rounded-t-xl shadow-lg p-2">
        <div className='p-2 text-2xl font-semibold max-md:text-xl ml-4'>Amitesh Kushwaha.</div>
        <div className='flex justify-center items-center gap-6 mr-5'>
          <div className='md:hidden'>
            <Link to="/contact">
              <i className="fa-solid fa-comment text-3xl max-md:text-2xl"></i>
            </Link>
          </div>
          <Link
            to="/contact"
            className='hidden md:block border text-black-600 px-6 py-2 rounded-full font-medium hover:bg-indigo-50 transition-colors'
          >
            Let's talk
          </Link>
          <i className="fa-solid fa-moon text-3xl max-md:text-2xl cursor-pointer"></i>
        </div>
      </div>
    </section>
  )
}

export default Header