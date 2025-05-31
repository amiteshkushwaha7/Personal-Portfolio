import React, { useRef, useState } from 'react';
import git from '../assets/github.png';

function Contact() {
  const formRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false); // <-- Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const email = formData.get('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    setLoading(true); // <-- Set loading to true

    try {
      await fetch('https://getform.io/f/aejlrzpb', {
        method: 'POST',
        body: formData,
      });

      // Reset the form after successful submission
      formRef.current.reset();
      setModalOpen(true); // Open modal
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    } finally {
      setLoading(false); // <-- Set loading to false after submission
    } 
  };

  // Modal component
  const SuccessModal = ({ open, onClose }) => (
    open ? (
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-opacity-500/50 z-50">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-sm w-full text-center">
          <h2 className="text-xl font-bold mb-4 text-green-600">Success!</h2>
          <p className="mb-6">Message sent successfully!</p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-indigo-400 text-white rounded-full hover:bg-indigo-600 transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>
    ) : null
  );

  return (
    <>
      <SuccessModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <section id='contact' className='flex justify-center items-center min-h-screen py-8 px-4 sm:px-6 lg:px-8 pb-20 bg-gray-100'>
        <div className="w-full max-w-6xl mx-4">
          <div className='text-center mb-8 md:mb-12'>
            <h4 className='font-bold text-xl md:text-2xl mb-2'>Contact Me</h4>
            <p className='text-gray-600'>Get in Touch</p>
          </div>

          <div className='flex flex-col lg:flex-row gap-8 bg-white rounded-xl shadow-lg p-8'>
            {/* Left Column - Contact Info */}
            <div className='flex flex-col flex-1'>
              <div className='p-2'>
                <p className='font-semibold text-lg'>CONTACT INFO</p>
              </div>

              <div className='flex items-center gap-4 p-4'>
                <div className='p-3 rounded-lg'>
                  <i className="fa-solid fa-envelope text-xl"></i>
                </div>
                <div>
                  <p className='text-gray-600'>E-Mail</p>
                  <p className='font-semibold'>amiteshkushwaha2020@gmail.com</p>
                  <p className='mt-1'>
                    <a href="mailto:amiteshkushwaha2020@gmail.com" className='text-indigo-600 hover:text-indigo-800 flex items-center'>
                      Send <i className="fa-solid fa-arrow-right ml-2 text-indigo-400"></i>
                    </a>
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4 p-4'>
                <div className='p-3 rounded-lg'>
                  <i className="fa-brands fa-linkedin-in text-xl"></i>
                </div>
                <div>
                  <p className='text-gray-600'>LinkedIn</p>
                  <p className='font-semibold'>Amitesh Kushwaha</p>
                  <p className='mt-1'>
                    <a href="https://www.linkedin.com/in/amiteshkushwaha" target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-800 flex items-center'>
                      Connect <i className="fa-solid fa-arrow-right ml-2 text-indigo-400"></i>
                    </a>
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4 p-4'>
                <div className='p-3 rounded-lg'>
                  <i className="fa-brands fa-x-twitter text-xl"></i>
                </div>
                <div>
                  <p className='text-gray-600'>X</p>
                  <p className='font-semibold'>amitesh037</p>
                  <p className='mt-1'>
                    <a href="https://x.com/amitesh037" target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-800 flex items-center'>
                      Message <i className="fa-solid fa-arrow-right ml-2 text-indigo-400"></i>
                    </a>
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4 p-4'>
                <div className='p-3 rounded-lg'>
                  <img src={git} alt="GitHub" className='w-6 h-6' />
                </div>
                <div>
                  <p className='text-gray-600'>GitHub</p>
                  <p className='font-semibold'>amiteshkushwaha7</p>
                  <p className='mt-1'>
                    <a href="https://github.com/amiteshkushwaha7" target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-800 flex items-center'>
                      View <i className="fa-solid fa-arrow-right ml-2 text-indigo-400"></i>
                    </a>
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className='p-4'>
                <div className='p-2'>
                  <p className='font-semibold text-lg text-center mb-2'>SOCIAL INFO</p>
                </div>
                <div className='flex justify-between max-w-xs mx-auto'>
                  <a href="mailto:amiteshkushwaha2020@gmail.com" className='cursor-pointer flex justify-center items-center p-3 bg-indigo-200 rounded-full hover:bg-indigo-300 transition-colors duration-300'>
                    <i className="fa-solid fa-envelope text-xl"></i>
                  </a>
                  <a href="https://linkedin.com/in/amiteshkushwaha" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex justify-center items-center p-3 bg-indigo-200 rounded-full hover:bg-indigo-300 transition-colors duration-300'>
                    <i className="fa-brands fa-linkedin-in text-xl"></i>
                  </a>
                  <a href="https://x.com/amitesh037" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex justify-center items-center p-3 bg-indigo-200 rounded-full hover:bg-indigo-300 transition-colors duration-300'>
                    <i className="fa-brands fa-x-twitter text-xl"></i>
                  </a>
                  <a href="https://github.com/amiteshkushwaha7" target="_blank" rel="noopener noreferrer" className='cursor-pointer flex justify-center items-center p-3 bg-indigo-200 rounded-full hover:bg-indigo-300 transition-colors duration-300'>
                    <img src={git} alt="GitHub" className='w-5 h-5' />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className='flex-1 p-6 flex flex-col'>
              <div className='mb-6'>
                <h1 className='text-2xl md:text-3xl font-bold mb-3'>LET'S WORK <span className='text-indigo-400'>TOGETHER.</span></h1>
                <p className='text-gray-600'>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday.</p>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='flex flex-col flex-1'
              >
                <div className='mb-4'>
                  <input
                    type="text"
                    name="name"
                    placeholder='Name *'
                    required
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                  />
                </div>

                <div className='mb-4'>
                  <input
                    type="email"
                    name="email"
                    placeholder='Email *'
                    required
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                </div>

                <div className='mb-4'>
                  <input
                    type="text"
                    name="subject"
                    placeholder='Your Subject *'
                    required
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
                  />
                </div>

                <div className='mb-6 flex-1'>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder='Message *'
                    required
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-full'
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className='cursor-pointer px-6 py-3 bg-indigo-400 text-white rounded-full hover:bg-indigo-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  disabled={loading} // <-- Disable button when loading
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
