import { useState } from 'react';

function Service() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Frontend Development',
      longDescription: 'I build modern, responsive React interfaces with clean code and great user experience.',
      provides: [
        'Building dynamic React.js user interfaces',
        'Creating reusable components',
        'Implementing Context API for state management',
        'Following clean code and best practices',
        'Optimizing for performance and accessibility'
      ]
    },
    {
      title: 'Backend Development',
      longDescription: 'I create secure, scalable Node.js backends and REST APIs with MongoDB integration.',
      provides: [
        'Developing RESTful APIs with Node.js and Express.js',
        'Integrating MongoDB for efficient data storage',
        'Implementing JWT authentication & authorization',
        'Ensuring secure and performant server-side applications',
        'Following clean code and best practices'
      ]
    },
    {
      title: 'Full Stack Solutions',
      longDescription: 'I deliver complete MERN stack apps, from frontend to backend, ready to deploy.',
      provides: [
        'End-to-end MERN stack development',
        'Designing intuitive React frontends',
        'Building secure Express.js backends',
        'Integrating MongoDB databases',
        'Deploying scalable applications'
      ]
    }
  ];


  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="flex justify-center items-center mt-20 mb-40">
      <div className="w-11/12 md:w-9/12 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h4 className="font-bold text-xl md:text-2xl mb-2">Services</h4>
          <p className="text-gray-600">What I Provide</p>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row gap-4 md:gap-6">
          {/* Frontend Development */}
          <div className="w-2/3 md:w-1/3 p-6 md:p-8 text-center border-b-4 border-b-indigo-400 bg-white rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out md:h-[280px]">
            <div className="flex flex-col items-center justify-between">
              <div>
                <i className="fa-solid fa-tv text-3xl md:text-4xl mb-3 md:mb-4 text-indigo-400"></i>
                <p className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Frontend Development</p>
                <p className="text-center mb-3 md:mb-4 text-gray-600 text-sm md:text-base line-clamp-3">
                  React.js applications with attractive & responsive design and state management
                </p>
              </div>
              <p className="text-indigo-500 hover:text-indigo-700 transition">
                <button
                  type="button"
                  className="focus:outline-none cursor-pointer"
                  onClick={() => openModal(services[0])}
                >
                  See more <i className="fa-solid fa-arrow-right ml-1"></i>
                </button>
              </p>
            </div>
          </div>

          {/* Backend Development */}
          <div className="w-2/3 md:w-1/3 p-6 md:p-8 text-center border-b-4 border-b-indigo-400 bg-white rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out md:h-[280px]">
            <div className="flex flex-col items-center justify-between">
              <div>
                <i className="fa-solid fa-server text-3xl md:text-4xl mb-3 md:mb-4 text-indigo-400"></i>
                <p className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Backend Development</p>
                <p className="text-center mb-3 md:mb-4 text-gray-600 text-sm md:text-base line-clamp-3">
                  Node.js, Express.js server development with MongoDB database integration
                </p>
              </div>
              <p className="text-indigo-500 hover:text-indigo-700 transition">
                <button
                  type="button"
                  className="focus:outline-none cursor-pointer"
                  onClick={() => openModal(services[1])}
                >
                  See more <i className="fa-solid fa-arrow-right"></i>
                </button>
              </p>
            </div>
          </div>

          {/* Full Stack Solutions */}
          <div className="w-2/3 md:w-1/3 p-6 md:p-8 text-center border-b-4 border-b-indigo-400 bg-white rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out md:h-[280px]">
            <div className="flex flex-col items-center justify-between">
              <div>
                <i className="fa-solid fa-database text-3xl md:text-4xl mb-3 md:mb-4 text-indigo-400"></i>
                <p className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Full Stack Solutions</p>
                <p className="text-center mb-3 md:mb-4 text-gray-600 text-sm md:text-base line-clamp-3">
                  Complete MERN stack applications with RESTful API & Database integration
                </p>
              </div>
              
              <p className="text-indigo-500 hover:text-indigo-700 transitio">
                <button
                  type="button"
                  className="focus:outline-none cursor-pointer"
                  onClick={() => openModal(services[2])}
                >
                  See more <i className="fa-solid fa-arrow-right"></i>
                </button>
              </p>
            </div>
          </div>
        </div>


        {isModalOpen && selectedService && (
          <div className="fixed inset-0 backdrop-blur-lg bg-opacity-500/50 flex justify-center items-center z-50">
            <div className="bg-white shadow-2xl rounded-lg p-6 w-11/12 md:w-3/5 max-w-lg">
              <div className="flex justify-end mb-4">
                <button
                  className="text-gray-500 hover:text-gray-700 text-xl"
                  onClick={closeModal}
                >
                  <i className="fa-solid fa-times cursor-pointer"></i>
                </button>
              </div>
              <h3 className="text-lg font-bold mb-2 text-center uppercase">{selectedService.title}</h3>
              <p className="text-gray-500 text-sm mb-4 text-center">
                {selectedService.longDescription}
              </p>
              <h4 className="text-md font-semibold mb-3">What I Provide</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                {selectedService.provides.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex justify-center items-center gap-1">
                      <i className="fa-solid fa-circle-check text-indigo-400"></i>
                      <p>{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Service;