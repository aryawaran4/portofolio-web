import { Swiper, SwiperSlide } from "swiper/react";
import sibada from "./slider-img/sibada.svg";
import tirtanadiDashboard from "./slider-img/tirtanadi_dashboard.svg";
import awsToba from "./slider-img/aws_toba.svg";
import pramuwisma from "./slider-img/pramuwisma.svg";
import movieApp from "./slider-img/movie_app.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./Slider.css";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import { useState, useEffect } from "react";

const SliderContent = [
  {
    imgSrc: sibada,
    title: "SIBADA",
    description:
      "Creating and maintaining features such as questionnaire for every subdistrict area in Batubara District. My first project as an official front-end developer...",
    tech: "Angular, Angular Material, Tailwind",
  },
  {
    imgSrc: tirtanadiDashboard,
    title: "TIRTANADI Dashboard Apps",
    description:
      "Establishing a system for showing calculated data of water volume, production, and other parameters in water companies...",
    tech: "Angular, Angular Material, Tailwind, Fusion Charts",
  },
  {
    imgSrc: awsToba,
    title: "AWS Toba",
    description:
      "This app integrates with BMKG API to monitor wind speed, direction, water temperature, and more for local sailing conditions...",
    tech: "Angular, Angular Material, Tailwind",
  },
  {
    imgSrc: pramuwisma,
    title: "Pramuwisma Web App",
    description:
      "An app for managing tasks between staff, managers, and government admins for maid task management...",
    tech: "Angular, Angular Material, Tailwind",
  },
  {
    imgSrc: movieApp,
    title: "Movie App",
    description:
      "Implementation of PWA and MOVIE TMDB API. Create an account and add your favorite movies and TV shows...",
    tech: "Angular",
    link: "https://movie-app-blue-five-73.vercel.app/",
  },
];

const Slider = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full md:w-4/5 pb-24">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={!isMobile} // Disable arrows if mobile view
        autoplay={{
          delay: 5000, // Auto-slide every 5 seconds
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {SliderContent.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-row-2 md:grid-cols-2 py-20 md:px-20 w-4/5 items-center">
              <div className="px-8">
                <img
                  src={slide.imgSrc}
                  alt={`${slide.title}_screenshot`}
                  className="rounded-md shadow-md"
                />
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="flex flex-col gap-3 text-left justify-center mt-6 md:mt-0 w-4/5">
                  <p className="text-2xl font-semibold">{slide.title}</p>
                  <p className="text-secondary text-base text-opacity-70">
                    {slide.description}
                  </p>
                  {slide.link && (
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-opacity-70 text-[#8443ce] hover:underline"
                    >
                      Website Link
                    </a>
                  )}
                  <p className="text-secondary text-opacity-40 font-medium">
                    Tech: {slide.tech}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
