import { Swiper, SwiperSlide } from "swiper/react";
import sibada from './slider-img/sibada.svg'
import tirtanadiDashboard from './slider-img/tirtanadi_dashboard.svg'
import awsToba from './slider-img/aws_toba.svg'
import pramuwisma from './slider-img/pramuwisma.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Navigation, Pagination } from "swiper";

const Slider = () => {
  return (
      <div className='w-full md:w-4/5 pb-24'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-row-2 md:grid-cols-2 py-20 md:px-20 w-4/5 items-center">
              <div className="px-8">
                <img src={sibada} alt="sibada_screenshoot" className="rounded-md shadow-md" />
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="flex flex-col gap-3 text-left justify-center mt-6 md:mt-0 w-4/5">                
                    <p className="text-2xl font-semibold">SIBADA</p>
                    <p className='text-secondary text-base text-opacity-70'>
                          Creating and maintaining features such as questionnaire for every subdistrict area in Batubara District.
                          My first project as an official front-end developer, with approximately 1 month given time to doing the project,
                          me and my backend successfully complete the apps by integrating each others everyday.
                    </p>
                    <p className="text-secondary text-opacity-40 font-medium">Tech : Angular, Angular Material, Tailwind</p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-row-2 md:grid-cols-2 py-20 md:px-20 w-4/5 items-center">
              <div className="px-8">
                <img src={tirtanadiDashboard} alt="td_screenshoot" className="rounded-md shadow-md" />
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="flex flex-col gap-3 text-left justify-center mt-6 md:mt-0 w-4/5">                
                    <p className="text-2xl font-semibold">TIRTANADI Dashboard Apps</p>
                    <p className='text-secondary text-base text-opacity-70'>
                          Estabilishment system to showing the calculated data of a water volume, production, selling, and others parameters in water companies.
                          Displaying the data with Fusion Charts, and managing the design of the dashboard to keep it readable for people in general.
                    </p>
                    <p className="text-secondary text-opacity-40 font-medium">Tech : Angular, Angular Material, Tailwind, Fusion Charts</p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-row-2 md:grid-cols-2 py-20 md:px-20 w-4/5 items-center">
              <div className="px-8">
                <img src={awsToba} alt="awstoba_screenshoot" className="rounded-md shadow-md" />
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="flex flex-col gap-3 text-left justify-center mt-6 md:mt-0 w-4/5">                
                    <p className="text-2xl font-semibold">AWS Toba</p>
                    <p className='text-secondary text-base text-opacity-70'>
                          This apps is integrating with BMKG API and made for monitoring the wind speed, wind direction, water temperature, water level, etc.
                          This apps made locals know when they should go sailing or not.
                    </p>
                    <p className="text-secondary text-opacity-40 font-medium">Tech : Angular, Angular Material, Tailwind</p>
                </div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-row-2 md:grid-cols-2 py-20 md:px-20 w-4/5 items-center">
              <div className="px-8">
                <img src={pramuwisma} alt="pramuwisma_screenshoot" className="rounded-md shadow-md" />
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="flex flex-col gap-3 text-left justify-center mt-6 md:mt-0 w-4/5">                
                    <p className="text-2xl font-semibold">Pramuwisma Web App</p>
                    <p className='text-secondary text-base text-opacity-70'>
                          Apps to manage task between staff, manager, and admin from government especially task meanagement for maid staff, and 
                          the superior of them.
                    </p>
                    <p className="text-secondary text-opacity-40 font-medium">Tech : Angular, Angular Material, Tailwind</p>
                </div>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
  );
};

export default Slider;