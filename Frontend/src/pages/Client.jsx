import React, { useState } from 'react';
import ankit from '../assets/ankit.jpg';
import rajan from '../assets/rajan.jpg';
import ankur from '../assets/ankur.jpg';

function Client() {
  const clients = [
    {
      name: "Ankit Yadav",
      role: "Student",
      testimonial: "Working with you was a fantastic experience. The project was delivered on time and exceeded our expectations.",
      image: ankit
    },
    {
      name: "Michael Smith",
      role: "Product Manager, InnovateX",
      testimonial: "Your attention to detail and commitment to quality is unmatched. Highly recommended!",
      image: rajan
    },
    {
      name: "David Lee",
      role: "CTO, FinEdge",
      testimonial: "The collaboration was smooth and the results were outstanding. Looking forward to future projects together.",
      image: ankur
    },
    {
      name: "Priya Patel",
      role: "Founder, StartupHub",
      testimonial: "You brought our vision to life with professionalism and creativity. Thank you for your hard work.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
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
    <section className="flex justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20 mb-10 sm:mb-16 md:mb-24 lg:mb-32">
      <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-gray-800">
            Awesome Clients
          </h4>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Words From My Clients
          </p>
        </div>

        {/* Carousel */}
        <div className="flex justify-between items-center gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
          {/* Previous Button */}
          <button
            className="cursor-pointer transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
            onClick={prevClient}
            aria-label="Previous client"
          >
            <i className="fa-solid fa-chevron-left text-2xl sm:text-3xl md:text-4xl text-indigo-400"></i>
          </button>

          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
              {/* Image */}
              <div className="w-2/3 sm:w-1/2 md:w-1/3 flex justify-center">
                <img
                  src={clients[currentIndex].image}
                  alt={clients[currentIndex].name}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-lg shadow-md"
                />
              </div>
              {/* Text Content */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-1 sm:mb-2">
                  {clients[currentIndex].name}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 sm:mb-3">
                  {clients[currentIndex].role}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  {clients[currentIndex].testimonial}
                </p>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
              {clients.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 ${
                    idx === currentIndex
                      ? 'bg-indigo-400 border-indigo-100 scale-125 shadow-md shadow-indigo-500/50'
                      : 'bg-gray-200 border-gray-300 hover:bg-gray-300 hover:border-gray-400'
                  } transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            className="cursor-pointer transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
            onClick={nextClient}
            aria-label="Next client"
          >
            <i className="fa-solid fa-chevron-right text-2xl sm:text-3xl md:text-4xl text-indigo-600"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Client;