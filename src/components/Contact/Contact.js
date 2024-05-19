import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#F5EEC8] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#393b2e] mb-8">Business Potential</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='flex justify-center flex-col'>
            <h3 className="text-2xl font-bold text-[#393b2e] mb-4">Reach Me</h3>
            <p className="text-gray-700 mb-2">
              <FaInstagram className="inline-block mr-2" /> Instagram: <a href="https://www.instagram.com/clvnand" target="_blank" rel="noopener noreferrer" className="text-[#393b2e] hover:underline">@clvnand</a>
            </p>
            <p className="text-gray-700 mb-2">
              <FaLinkedin className="inline-block mr-2" /> LinkedIn: <a href="https://www.linkedin.com/in/calvinandrean" target="_blank" rel="noopener noreferrer" className="text-[#393b2e] hover:underline">Calvin Andrean</a>
            </p>
            <p className="text-gray-700 mb-2">
              <FaEnvelope className="inline-block mr-2" /> Email: <a href="mailto:calvinandrean456@gmail.com" className="text-[#393b2e] hover:underline">calvinandrean456@gmail.com</a>
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#393b2e] mb-4">Send a Message</h3>
            <form className="bg-white p-8 rounded-md shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" className="w-full p-2 border border-gray-300 rounded-md" rows="5"></textarea>
              </div>
              <button type="submit" className="bg-[#393b2e] text-white py-2 px-4 rounded-md hover:bg-[#2f2f22] transition-colors duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;