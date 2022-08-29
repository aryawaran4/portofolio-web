import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";

const Work = () => {
  return (
    <div className="Work">        
        <div className="flex flex-col gap-0 items-center">
          <div className="flex gap-8" style={{width:"50%"}}> 
              <div style={{width:"49%"}} className="relative bottom-1">
                  <div className='flex flex-col gap-3'>
                      <p className="text-secondary font-medium">XTEND INDONESIA</p>                        
                      <div className="text-secondary text-opacity-70">
                          <p>Medan, North Sumatera, Indonesia</p>
                          <p className='font-medium'>Frontend Developer</p>
                          <p>Developing & responsible to maintaining client's website.</p>
                      </div>
                      <p className='text-secondary text-opacity-40'><span><FontAwesomeIcon icon={faCalendarAlt}/></span> 2022 - Present</p>
                  </div>
              </div>
              <div className="flex flex-col items-center" style={{width:"2%"}}>
                  <p className="w-4 h-4 bg-tertiary rounded-full"></p>
                  <p className='w-0.5 -mt-1 h-full bg-tertiary bg-opacity-70'></p>
              </div>
              <div style={{width:"49%"}}></div>
          </div>
          <div className="flex gap-8" style={{width:"50%"}}> 
              <div style={{width:"49%"}}></div>
              <div className="flex flex-col items-center" style={{width:"2%"}}>
                  <p className="w-4 h-4 bg-tertiary rounded-full"></p>
                  <p className='w-0.5 -mt-1 h-full bg-tertiary bg-opacity-70'></p>
              </div>
              <div style={{width:"49%"}} className="relative bottom-1">
                  <div className='flex flex-col gap-3'>
                      <p className="text-secondary font-medium">XTEND INDONESIA Internship</p>                        
                      <div className="text-secondary text-opacity-70">
                          <p>Medan, North Sumatera, Indonesia</p>
                          <p className='font-medium'>Frontend Developer</p>
                          <p>Developing a company website using Angular framework.</p>
                      </div>
                      <p className='text-secondary text-opacity-40'><span><FontAwesomeIcon icon={faCalendarAlt}/></span> 2021 - 2022</p>
                  </div>
              </div>
          </div>
          <div className="flex gap-8" style={{width:"50%"}}> 
              <div style={{width:"49%"}} className="relative bottom-1">
                  <div className='flex flex-col gap-3'>
                      <p className="text-secondary font-medium">PELINDO I Internship</p>
                      <div className="text-secondary text-opacity-70">
                          <p>Belawan, North Sumatera, Indonesia</p>
                          <p className='font-medium'>Frontend Developer</p>
                          <p>Making a website to monitoring AKHLAK report in all PELINDO Branch.</p>
                      </div>
                      <p className='text-secondary text-opacity-40'><span><FontAwesomeIcon icon={faCalendarAlt}/></span> 2021 - 2021</p>
                  </div>
              </div>
              <div className="flex flex-col items-center" style={{width:"2%"}}>
                  <p className="w-4 h-4 bg-tertiary rounded-full"></p>
              </div>
              <div style={{width:"49%"}}></div>
          </div>
      </div>
    </div>
  );
};

export default Work;