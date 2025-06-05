import { useState } from 'react';
import ExamMatrix from '../assets/ExamMatrix.jpg'
import WonderLust from '../assets/WonderLust.png'
import BhopalMetroStation from '../assets/BhopalMetroStation.jpeg'

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Exam Matrix',
      shortDescription: 'Online Examination Platform',
      longDescription:
        `Exam Matrix is a robust web-based Internet Based Testing (IBT) system designed to streamline university-level exam management. It automates exam registration, scheduling, and report generation, reducing manual errors and delays. Key features include: easy examinee registration, seamless exam management, auto-generated detailed reports, and advanced search by college, course, or enrollment number. This platform delivers speed, accuracy, and efficiency for educational institutions.`,
      githubLink: 'https://github.com/amiteshkushwaha7/Exam-Matrix.git',
      image: ExamMatrix,
    },
    {
      title: 'WonderLust',
      shortDescription: 'Travel Marketplace Platform',
      longDescription:
        "Wonder Lust is a dynamic marketplace for travelers and hosts. It connects people seeking unique stays and experiences with property owners worldwide. The platform features intuitive search, secure bookings, and user reviews, making travel planning seamless and enjoyable. Driven by a passion for exploration, Wonder Lust empowers users to discover new places, cultures, and adventures.",
      githubLink: 'https://github.com/amiteshkushwaha7/WonderLust.git',
      image: WonderLust,
    },
    {
      title: 'Bhopal Metro Station',
      shortDescription: 'Metro Station Distance Finder',
      longDescription:
        "This project visualizes Bhopal's metro network and implements Dijkstra's algorithm to find the shortest path between stations. Users can select a source station and instantly view the shortest routes and distances to all other stations. The interactive interface and efficient algorithm make it a practical tool for commuters and city planners.",
      githubLink:
        'https://github.com/amiteshkushwaha7/DSA-PROJECTS/tree/09e55ccefacd5cea65e207fde04e1dcc8c05f58a/Bhopal%20Metro%20Station',
      image: BhopalMetroStation,
    },
  ];


  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id='project' className='flex justify-center items-center  py-8 px-4 sm:px-6 lg:px-8 bg-gray-100'>
      <div className="w-full max-w-6xl mx-4">
        <div className="text-center mb-8 md:mb-12">
          <h4 className="font-bold text-xl md:text-2xl mb-2">Projects</h4>
          <p className="text-gray-600">My Creative Works</p>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row gap-4 md:gap-6 bg-white rounded-xl shadow-lg p-8">
          {/* Project 1 */}
          <div className="w-2/3 md:w-1/3 p-0 text-center border-b-4 border-b-indigo-400 bg-white hover:rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out md:h-[350px]">
            <div
              className="cursor-pointer"
              onClick={() => openModal(projects[0])}
            >
              <div>
                <img
                  src={ExamMatrix}
                  alt={projects[0].title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="flex flex-col items-center p-6">
                <div className="w-full text-center">

                  <p className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{projects[0].title}</p>
                  <p className="text-center mb-3 md:mb-4 text-gray-600 text-sm md:text-base line-clamp-3">
                    Online Examination Platform
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-2/3 md:w-1/3 p-0 text-center border-b-4 border-b-indigo-400 bg-white hover:rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out md:h-[350px]">
            <div
              className="cursor-pointer"
              onClick={() => openModal(projects[1])}
            >
              <div>
                <img
                  src={WonderLust}
                  alt={projects[1].title}
                  className="w-full h-48 object-cover object-left rounded-t-lg"
                />
              </div>
              <div className="flex flex-col items-center p-6">
                <div className="w-full text-center">
                  <p className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{projects[1].title}</p>
                  <p className="text-center mb-3 md:mb-4 text-gray-600 text-sm md:text-base line-clamp-3">
                    A Marketplace for Homes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="w-2/3 md:w-1/3 p-0 text-center border-b-4 border-b-indigo-400 bg-white hover:rounded-lg hover:shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out md:h-[350px]">
            <div
              className="cursor-pointer"
              onClick={() => openModal(projects[2])}
            >
              <div>
                <img
                  src={BhopalMetroStation}
                  alt={projects[2].title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="flex flex-col items-center p-6">
                <div className="w-full text-center">
                  <p className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{projects[2].title}</p>
                  <p className="text-center mb-3 md:mb-4 text-gray-600 text-sm md:text-base line-clamp-3">
                    Metro Station Distance Finder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {isModalOpen && selectedProject && (
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
              <h3 className="text-lg font-bold mb-1 text-center uppercase">{selectedProject.title}</h3>
              <p className="text-gray-600 text-sm md:text-base line-clamp-3 text-center mb-2">{selectedProject.shortDescription}</p>
              <p className="text-gray-500 text-sm mb-4 text-center">
                {selectedProject.longDescription}
              </p>
              <p className='text-center mb-3'>
                <a href={selectedProject.githubLink} className='bg-indigo-300 p-2 rounded-md text-gray-800 hover:bg-indigo-400 transition-colors duration-300 ease-in-out ' target="_blank" rel="noopener noreferrer">Source Code</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Project;