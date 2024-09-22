'use client'
import { projects } from '@/data'
import { div } from 'three/webgpu'

import React, { useEffect, useState } from 'react';
import PinContainer from './ui/3D-Pin';
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {

  const [projects, setProjects] = useState([]);

  // Fetch the project data from the Django API when the component mounts
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://epheyhertzportfoliobackend.onrender.com/apis/projects/");
        const projectData = await res.json();
        setProjects(projectData);
        
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-purple'>Recent Projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>            
        {projects.length > 0 ? (projects.map(({ id, title, description, image_url, technologies=[], link,demolink }) => (
          <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] sm:w-[570px] flex items-center justify-center  w-[80vw] lg:h-[30vh] mb-10'>
            <PinContainer title={link} href={link}>
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] overflow-hidden h-[30vh]'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={image_url}
                  alt={title}
                  className='z-10 absolute bottom-0'
                />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {description}
              </p>
              <div className='flex items-center justify-between mt-7 mb-3 '>
                <div className='flex items-center'>
                  {technologies.map((tech, index) => (
                    <div key={index} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                     <p className='text-xs'>{tech}</p>

                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center'>
  <a href={demolink} target="_blank" rel="noopener noreferrer" className='flex lg:text-xl md:text-xs text-sm text-purple hover:underline transition duration-200'>
    Check Live Site
    <FaLocationArrow className='ms-3' color="#CBACF9" />
  </a>
</div>

              </div>
            </PinContainer>
          </div>
        ))) : (
          <p>No projects found</p>
        )}
      </div>
    </div>
  );
}

export default RecentProjects;
