import { useState } from 'react';

function Skills() {
  const [educationClick, setEducationClick] = useState(true);
  const [experienceClick, setExperienceClick] = useState(false);
  const [skillClick, setSkillClick] = useState(false);
  const [activeButton, setActiveButton] = useState('education');

  const handleButtonClick = (button) => {
    setEducationClick(button === 'education');
    setExperienceClick(button === 'experience');
    setSkillClick(button === 'skill');
  };

  return (
    <section id='service' className='flex justify-center items-center  py-8 px-4 sm:px-6 lg:px-8 bg-gray-100'>
      <div className="w-full max-w-6xl mx-4">
        <div className='text-center mb-8'>
          <h4 className='text-2xl font-bold mb-2'>My Resume</h4>
          <p className='text-gray-600'>Combination Of Skills & Experience</p>
        </div>

        <div className='bg-white rounded-xl shadow-lg p-3'>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 mt-4">
            <div className={`p-2 pl-3 pr-3 cursor-pointer rounded-full hover:bg-indigo-300 transition-all duration-200 ${activeButton === "education" ? "bg-indigo-300" : ""}`}
              onClick={() => { handleButtonClick('education'); setActiveButton('education'); }}>
              <i className="fa-solid fa-graduation-cap mr-2"></i>
              <span>Education</span>
            </div>
            <div className={`p-2 pl-3 pr-3 cursor-pointer rounded-full hover:bg-indigo-300 transition-all duration-200 ${activeButton === "experience" ? "bg-indigo-300" : ""}`}
              onClick={() => { handleButtonClick('experience'); setActiveButton('experience'); }}>
              <i className="fa-solid fa-chart-line mr-2"></i>
              <span>Experience</span>
            </div>
            <div className={`p-2 pl-3 pr-3 cursor-pointer rounded-full hover:bg-indigo-300 transition-all duration-200 ${activeButton === "skill" ? "bg-indigo-300" : ""}`}
              onClick={() => { handleButtonClick('skill'); setActiveButton('skill'); }}>
              <i className="fa-solid fa-user mr-2"></i>
              <span>Personal Skills</span>
            </div>
          </div>

          {/* Education */}
          {educationClick &&
            <div className="max-w-4xl mx-auto py-4 px-4">
              <div className="relative">
                {/* <!-- Vertical timeline line --> */}
                <div className="absolute md:left-1/2 w-1 bg-indigo-400 h-full -translate-x-1/2"></div>

                {/* <!-- Education Entry 1 --> */}
                <div className="mb-8 flex flex-col md:flex-row items-start w-full">
                  {/* <!-- Timeline dot --> */}
                  <div className="absolute md:left-1/2 w-4 h-4 bg-indigo-400 rounded-full -translate-x-1/2 mt-20 z-10"></div>
                  {/* <!-- Content card --> */}
                  <div className="w-full md:w-5/12 md:mr-8 mt-8 md:mt-0">
                    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                      <div className="flex items-center gap-3">
                        <i className="fa-solid fa-graduation-cap text-2xl text-indigo-400"></i>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">High School</h3>
                          <p className="text-gray-600">Garg Inter College</p>
                          <p className="mt-2 inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                            2019 - 2020
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Spacer --> */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>

                {/* <!-- Education Entry 2 --> */}
                <div className="mb-8 flex flex-col md:flex-row-reverse items-start w-full">
                  {/* <!-- Timeline dot --> */}
                  <div className="absolute md:left-1/2 w-4 h-4 bg-indigo-400 rounded-full -translate-x-1/2 mt-14 z-10"></div>
                  {/* <!-- Content card --> */}
                  <div className="w-full md:w-5/12 md:ml-8 mt-8 md:mt-0">
                    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                      <div className="flex items-center gap-3">
                        <i className="fa-solid fa-graduation-cap text-2xl text-indigo-400"></i>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">Intermediate</h3>
                          <p className="text-gray-600">SBD Inter College</p>
                          <p className="mt-2 inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                            2020 - 2022
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Spacer --> */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>

                {/* <!-- Education Entry 3 --> */}
                <div className="mb-4 flex flex-col md:flex-row items-start w-full">
                  {/* <!-- Timeline dot --> */}
                  <div className="absolute md:left-1/2 w-4 h-4 bg-indigo-400 rounded-full -translate-x-1/2 mt-14 z-10"></div>
                  {/* <!-- Content card --> */}
                  <div className="w-full md:w-5/12 md:mr-8 mt-8 md:mt-0">
                    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                      <div className="flex items-center gap-3">
                        <i className="fa-solid fa-graduation-cap text-2xl text-indigo-400"></i>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">Bacheloar Of Computer Applications</h3>
                          <p className="text-gray-600">Babu Banarasi Das University</p>
                          <p className="mt-2 inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                            2022 - 2025
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Spacer --> */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            </div>
          }

          {/* Experience */}
          {experienceClick &&
            <div className="max-w-4xl mx-auto py-8 px-4">
              <div className="relative">
                {/* <!-- Vertical timeline line --> */}
                <div className="absolute md:left-1/2 w-1 bg-indigo-400 h-full -translate-x-1/2"></div>

                {/* <!-- Experience Entry 1 --> */}
                <div className="mb-8 flex flex-col md:flex-row items-start w-full">
                  {/* <!-- Timeline dot --> */}
                  <div className="absolute md:left-1/2 w-4 h-4 bg-indigo-400 rounded-full -translate-x-1/2 mt-20 z-10"></div>
                  {/* <!-- Content card --> */}
                  <div className="w-full md:w-5/12 md:mr-8 mt-8 md:mt-0">
                    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                      <div className="flex items-center gap-3">
                        <i className="fa-solid fa-graduation-cap text-2xl text-indigo-400"></i>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">Intership (Frontend)</h3>
                          <p className="text-gray-600">Oasis Infobyte</p>
                          <p className="mt-2 inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                            Sep 2024 - Oct 2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Spacer --> */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>

                {/* <!-- Experience Entry 2 --> */}
                <div className="mb-8 flex flex-col md:flex-row-reverse items-start w-full">
                  {/* <!-- Timeline dot --> */}
                  <div className="absolute md:left-1/2 w-4 h-4 bg-indigo-300
                 rounded-full -translate-x-1/2 mt-14 z-10"></div>
                  {/* <!-- Content card --> */}
                  <div className="w-full md:w-5/12 md:ml-8 mt-8 md:mt-0">
                    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                      <div className="flex items-center gap-3">
                        <i className="fa-solid fa-graduation-cap text-2xl text-indigo-400"></i>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">Front-End Developer</h3>
                          <p className="text-gray-600">N/A</p>
                          <p className="mt-2 inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                            N/A
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Spacer --> */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>

                {/* <!-- Experience Entry 3 --> */}
                <div className="mb-8 flex flex-col md:flex-row items-start w-full">
                  {/* <!-- Timeline dot --> */}
                  <div className="absolute md:left-1/2 w-4 h-4 bg-indigo-400 rounded-full -translate-x-1/2 mt-14 z-10"></div>
                  {/* <!-- Content card --> */}
                  <div className="w-full md:w-5/12 md:mr-8 mt-8 md:mt-0">
                    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                      <div className="flex items-center gap-3">
                        <i className="fa-solid fa-graduation-cap text-2xl text-indigo-400"></i>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">Back-End Developer</h3>
                          <p className="text-gray-600">N/A</p>
                          <p className="mt-2 inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                            N/A
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Spacer --> */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            </div>
          }


          {/* Personal Skills */}
          {skillClick &&
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-3 md:p-5 mt-8 md:mt-12">

              <div className="w-full md:w-1/3 p-6 md:p-10 text-center cursor-pointer border-b-5 border-b-indigo-400 bg-white rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="mb-6 md:mb-8 p-2">
                  <i className="fa-solid fa-tv text-xl mr-4 text-indigo-400"></i> <br />
                  <span className="font-semibold text-lg md:text-xl">Front-End Developer</span>
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">HTML</p>
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">CSS</p>
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">JavaScript</p>
                      <p>Intermediate</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">React</p>
                      <p>Intermediate</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">Bootstrap</p>
                      <p>Intermediate</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">Tailwind</p>
                      <p>Intermediate</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend  */}
              <div className="w-full md:w-1/3 p-6 md:p-10 text-center cursor-pointer border-b-5 border-b-indigo-400 bg-white rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="mb-6 md:mb-8 p-2">
                  <i className="fa-solid fa-server text-xl mr-4 text-indigo-400"></i>
                  <span className="font-semibold text-lg md:text-xl">Back-End Developer</span>
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">Node Js</p>
                      <p>Intermediate</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">Express Js</p>
                      <p>Intermediate</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">API</p>
                      <p>Basic</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">MongoDB</p>
                      <p>Intermediate</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">MySQL</p>
                      <p>Basic</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DSA  */}
              <div className="w-full md:w-1/3 p-6 md:p-10 text-center cursor-pointer border-b-5 border-b-indigo-400 bg-white rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="mb-6 md:mb-8 p-2">
                  <i className="fa-solid fa-code text-xl mr-4 text-indigo-400"></i>
                  <span className="font-semibold text-lg md:text-xl">DSA Knowledge</span>
                </div>

                <div className="flex flex-wrap justify-center-safe gap-3 md:gap-4">
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">Data Structures</p>
                      <p>Intermediate</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">Algorithms</p>
                      <p>Intermediate</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">Problem Solving</p>
                      <p>Intermediate</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-3 md:gap-4 p-1 md:p-2">
                    <i className="fa-solid fa-circle-check text-indigo-400"></i>
                    <div>
                      <p className="font-semibold">Time Complexity</p>
                      <p>Intermediate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

        </div>
      </div>
    </section>
  );
}

export default Skills