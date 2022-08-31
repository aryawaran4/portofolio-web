import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Education = () => {
  return (
    <div className="Education w-full">
      <div className="flex flex-col gap-0 items-center">
            <div className="flex gap-8 w-full md:w-1/2"> 
                <div style={{width:"49%"}} className="relative bottom-1">
                    <div className='flex flex-col gap-3'>
                        <p className="text-secondary font-medium">Universitas Sumatera Utara</p>                        
                        <div className="text-secondary text-opacity-70">
                            <p>Medan, North Sumatera, Indonesia</p>
                            <p>Bachelor of Computer Science (Honours)</p>
                        </div>
                        <p className='text-secondary text-opacity-40'><span><FontAwesomeIcon icon={faCalendarAlt}/></span> 2018 - 2022</p>
                    </div>
                </div>
                <div className="flex flex-col items-center" style={{width:"2%"}}>
                    <p className="w-4 h-4 bg-tertiary rounded-full"></p>
                    <p className='w-0.5 -mt-1 h-full bg-tertiary bg-opacity-70'></p>
                </div>
                <div style={{width:"49%"}}></div>
            </div>
            <div className="flex gap-8 w-full md:w-1/2"> 
                <div style={{width:"49%"}}></div>
                <div className="flex flex-col items-center" style={{width:"2%"}}>
                    <p className="w-4 h-4 bg-tertiary rounded-full"></p>
                    {/* <p className='w-0.5 -mt-1 h-full bg-tertiary bg-opacity-70'></p> */}
                </div>
                <div style={{width:"49%"}} className="relative bottom-1">
                    <div className='flex flex-col gap-3'>
                        <p className="text-secondary font-medium">Harapan 3 Senior High School</p>
                        <div className="text-secondary text-opacity-70">
                            <p>Medan, North Sumatera, Indonesia</p>
                            <p>Enrolled in Science Stream Class</p>
                        </div>
                        <p className='text-secondary text-opacity-40'><span><FontAwesomeIcon icon={faCalendarAlt}/></span> 2015 - 2018</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  };
  export default Education;
  