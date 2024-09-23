import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const workData = [
  {
    company: "IDEKU",
    location: "Jakarta, Indonesia",
    position: "Middle Frontend Developer",
    description: "Developing Point Of Sales Web System Product.",
    period: "June 2024 - Present",
  },
  {
    company: "Transcosmos Indonesia",
    location: "South Jakarta, Jakarta, Indonesia",
    position: "Frontend Developer",
    description: "Developing offshores web projects.",
    period: "November 2022 - May 2024",
  },
  {
    company: "XTEND Integrasi Indonesia",
    location: "Medan, North Sumatera, Indonesia",
    position: "Frontend Developer",
    description: "Developing & responsible to maintaining client's website.",
    period: "January 2022 - October 2022",
  },
  {
    company: "XTEND Integrasi Indonesia Internship",
    location: "Medan, North Sumatera, Indonesia",
    position: "Frontend Developer",
    description: "Developing a company website using Angular framework.",
    period: "September 2021 - January 2022",
  },
  {
    company: "PELINDO I Internship",
    location: "Belawan, North Sumatera, Indonesia",
    position: "Frontend Developer",
    description: "Making a website to monitor AKHLAK report in all PELINDO branches.",
    period: "June 2021 - July 2021",
  },
];

const WorkItem = ({ company, location, position, description, period, isLeft }) => (
  <div className="flex flex-col md:flex-row gap-8 w-full max-w-[450px] md:max-w-none md:w-1/2">
    {/* Conditional rendering based on isLeft prop */}
    {isLeft ? (
      <>
        <div className="relative bottom-1 w-full md:max-w-none mb-12 md:w-1/2">
          <div className="flex flex-col gap-3">
            <p className="text-secondary font-medium">{company}</p>
            <div className="text-secondary text-opacity-70">
              <p>{location}</p>
              <p className="font-medium">{position}</p>
              <p>{description}</p>
            </div>
            <p className="text-secondary text-opacity-40">
              <FontAwesomeIcon icon={faCalendarAlt} /> {period}
            </p>
          </div>
        </div>
        {/* Only show this section on larger screens */}
        <div className="hidden md:flex flex-col items-center w-[2%]">
          <p className="w-4 h-4 bg-tertiary rounded-full"></p>
          <p className="w-0.5 -mt-1 h-full bg-tertiary bg-opacity-70"></p>
        </div>
        <div className="hidden md:block w-1/2"></div>
      </>
    ) : (
      <>
        <div className="hidden md:block w-1/2"></div>
        <div className="hidden md:flex flex-col items-center w-[2%]">
          <p className="w-4 h-4 bg-tertiary rounded-full"></p>
          <p className="w-0.5 -mt-1 h-full bg-tertiary bg-opacity-70"></p>
        </div>
        <div className="relative bottom-1 w-full md:max-w-none mb-12 md:w-1/2">
          <div className="flex flex-col gap-3">
            <p className="text-secondary font-medium">{company}</p>
            <div className="text-secondary text-opacity-70">
              <p>{location}</p>
              <p className="font-medium">{position}</p>
              <p>{description}</p>
            </div>
            <p className="text-secondary text-opacity-40">
              <FontAwesomeIcon icon={faCalendarAlt} /> {period}
            </p>
          </div>
        </div>
      </>
    )}
  </div>
);

const Work = () => {
  return (
    <div className="Work flex flex-col gap-0 items-center">
      {workData.map((work, index) => (
        <WorkItem
          key={index}
          company={work.company}
          location={work.location}
          position={work.position}
          description={work.description}
          period={work.period}
          isLeft={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Work;
