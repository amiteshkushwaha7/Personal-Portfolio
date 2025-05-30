import React, { useState } from 'react';
import ankit from '../assets/ankit.jpg'

function Client() {
  const clients = [
    {
      name: "Johnson Yadav",
      role: "Student",
      testimonial: "Working with you was a fantastic experience. The project was delivered on time and exceeded our expectations.",
      image: ankit
    },
    {
      name: "Michael Smith",
      role: "Product Manager, InnovateX",
      testimonial: "Your attention to detail and commitment to quality is unmatched. Highly recommended!",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Patel",
      role: "Founder, StartupHub",
      testimonial: "You brought our vision to life with professionalism and creativity. Thank you for your hard work.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "David Lee",
      role: "CTO, FinEdge",
      testimonial: "The collaboration was smooth and the results were outstanding. Looking forward to future projects together.",
      image: "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
      name: "Sara Müller",
      role: "Marketing Lead, BrightIdeas",
      testimonial: "Exceptional service and communication throughout the project. We are thrilled with the outcome.",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevClient = () => {
    setCurrentIndex((prev) => (prev === 0 ? clients.length - 1 : prev - 1));
  };

  const nextClient = () => {
    setCurrentIndex((prev) => (prev === clients.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className='flex justify-center items-center mb-32'>
      <div className="w-9/12 max-w-6xl">
        <div className='text-center mb-12'>
          <h4 className='text-2xl font-bold mb-2'>Awesome Clients</h4>
          <p className='text-gray-600'>Words From My Clients</p>
        </div>

        <div className='flex justify-around items-center gap-5 px-5'>
          <div className='cursor-pointer transform hover:scale-105 duration-300' onClick={prevClient}>
            <i className="fa-solid fa-less-than text-4xl text-indigo-400"></i>
          </div>

          <div className='container px-4'>
            <div className='flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4'>
              <div className='w-full md:w-1/3 flex justify-center items-center'>
                <img
                  src={clients[currentIndex].image}
                  alt={clients[currentIndex].name}
                  className='w-1/3 object-cover rounded-lg'
                />
              </div>
              <div className='w-full md:w-1/2 max-md:text-center'>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{clients[currentIndex].name}</h3>
                <p className='text-gray-600 text-lg mb-2'>{clients[currentIndex].role}</p>
                <p className="text-gray-600 text-base max-md:hidden">{clients[currentIndex].testimonial}</p>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-3 max-md:hidden">
              {clients.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full border-2 ${idx === currentIndex
                    ? 'bg-indigo-400 border-indigo-100 scale-125 shadow-md shadow-indigo-500/50'
                    : 'bg-gray-200 border-gray-300 hover:bg-gray-300 hover:border-gray-400'
                    } transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className='cursor-pointer transform hover:scale-105 duration-300' onClick={nextClient}>
            <i className="fa-solid fa-greater-than text-4xl text-indigo-600"></i>
          </div>
        </div>

        <div className='text-center md:hidden'>
          <div className='w-full md:w-1/2 max-md:text-center'> 
            <p className="text-gray-600 text-base">{clients[currentIndex].testimonial}</p>
          </div>
        </div>
        <div className="flex justify-center mt-8 gap-3 md:hidden">
              {clients.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full border-2 ${idx === currentIndex
                    ? 'bg-indigo-400 border-indigo-100 scale-125 shadow-md shadow-indigo-500/50'
                    : 'bg-gray-200 border-gray-300 hover:bg-gray-300 hover:border-gray-400'
                    } transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
      </div>
    </section>
  );
}

export default Client;
