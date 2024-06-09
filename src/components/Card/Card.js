import React from 'react';

function Card({
  title,
  description,
  image,
  tech_stack,
  link // Add a link prop for the target URL
}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='flex flex-col justify-center items-center'>
      <div className='group relative m-4 p-4 bg-white hover:bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-md shadow-md w-[400px] lg:w-[600px] transform transition-all duration-300 hover:scale-105 cursor-pointer'>
        <img src={image ? image : 'https://robohash.org/200'} alt='project' className='w-full h-80 object-contain rounded-md' />
        <h1 className='text-[#393b2e] font-bold text-2xl mt-2'>{title ? title : 'Title'}</h1>
        <p className='text-[#393b2e]'>{description ? description : 'Lorem ipsum'}</p>
        <div className='flex justify-between items-center mt-6'>
          <div className='flex flex-wrap gap-2 w-3/4'>
            {tech_stack.map((tech, index) => (
              <span key={index} className='bg-[#393b2e] text-white py-1 px-2 rounded-md'>{tech}</span>
            ))}
          </div>
          <button className='hidden group-hover:flex bg-transparent border border-[#393b2e] text-[#393b2e] py-1 px-4 rounded-md hover:bg-[#393b2e] hover:text-white transition-all duration-300'>{'->'}</button>
        </div>
      </div>
    </a>
  );
}

export default Card;