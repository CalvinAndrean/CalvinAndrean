'use client'

import React from 'react'
import Card from '../Card/Card'
import projectData from './projectData'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function Projects() {
  return (
    <section id='projects' className='w-full h-full bg-[#e5dfbb]'>
      <div className='flex p-4 h-full max-lg:justify-center max-lg:items-center'>
        <h1 className='text-[#393b2e] font-bold text-4xl mt-10 ml-8'>My projects.</h1>
      </div>

      {/* make card for each project, should be loop the data from projectData */}

      <div className='p-8'>
        <ResponsiveMasonry
          columnsCountBreakPoints={{400: 1, 1300: 2, 1900: 3}}
        >
          <Masonry className='flex justify-center'>
            {projectData.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tech_stack={project.tech_stack}
                link={project.link}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  )
}

export default Projects