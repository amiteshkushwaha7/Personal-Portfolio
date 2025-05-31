import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    // <section className='flex justify-center items-center bg-indigo-100'>
    //   <div className="w-9/12 max-w-6xl">
    <section id='contact' className='flex justify-center items-centerpy-8 px-4 sm:px-6 lg:px-8 bg-gray-100'>
        <div className="w-full max-w-6xl mx-4 bg-white rounded-t-xl shadow-lg p-8">
      <div className='my-10 p-6 rounded-lg s'>
        <h3 className='text-center font-semibold text-xl mb-4'>AMITESH KUSHWAHA</h3>
        <div>
          <ul className='flex flex-wrap justify-center items-center gap-6 mb-4'>
            <li><Link to="/" className=' hover:bg-indigo-400 p-2 rounded-lg'>HOME</Link></li>
            <li><Link to="/about" className=' hover:bg-indigo-300 p-2 rounded-lg'>ABOUT</Link></li>
            <li><Link to="/skills" className=' hover:bg-indigo-300 p-2 rounded-lg'>SKILLS</Link></li>
            <li><Link to="/services" className=' hover:bg-indigo-300 p-2 rounded-lg'>SERVICES</Link></li>
            <li><Link to="/projects" className=' hover:bg-indigo-300 p-2 rounded-lg'>PROJECTS</Link></li>
            <li><Link to="/clients" className=' hover:bg-indigo-300 p-2 rounded-lg'>CLIENTS</Link></li>
            <li><Link to="/contact" className=' hover:bg-indigo-300 p-2 rounded-lg'>CONTACT</Link></li>

          </ul>
        </div>
        <p className='text-center text-gray-600'>&#169; All rights reserved by AMITESH KUSHWAHA</p>
      </div>
      </div>
    </section>
  )
}

export default Footer