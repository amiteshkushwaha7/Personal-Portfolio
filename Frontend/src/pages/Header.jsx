import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <section className='flex justify-center items-center fixed w-full z-10 bg-[#f9fafc]'>
      <div className="w-9/12 max-w-6xl py-2">
        <div className='flex justify-between'>
          <div className='p-2 text-2xl font-semibold max-md:text-xl'>Amitesh Kushwaha</div>
          <div className='flex justify-center items-center gap-6'>
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
      </div>
    </section>
  )
}

export default Header