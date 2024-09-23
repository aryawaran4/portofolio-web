import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// Data for education
const educationData = [
    {
        institution: "Universitas Sumatera Utara",
        location: "Medan, North Sumatera, Indonesia",
        degree: "Bachelor of Computer Science (Honours)",
        period: "2018 - 2022",
    },
    {
        institution: "Harapan 3 Senior High School",
        location: "Medan, North Sumatera, Indonesia",
        degree: "Enrolled in Science Stream Class",
        period: "2015 - 2018",
    },
];

// Reusable component for each education entry
const EducationItem = ({ institution, location, degree, period, isLeft }) => (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-[450px] md:max-w-none md:w-1/2">
        {/* Conditional rendering based on isLeft prop */}
        {isLeft ? (
            <>
                <div className="relative bottom-1 w-full md:max-w-none mb-12 md:w-1/2">
                    <div className="flex flex-col gap-3">
                        <p className="text-secondary font-medium">{institution}</p>
                        <div className="text-secondary text-opacity-70">
                            <p>{location}</p>
                            <p className="font-medium">{degree}</p>
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
                        <p className="text-secondary font-medium">{institution}</p>
                        <div className="text-secondary text-opacity-70">
                            <p>{location}</p>
                            <p className="font-medium">{degree}</p>
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

const Education = () => {
    return (
        <div className="Education flex flex-col gap-0 items-center">
            {educationData.map((edu, index) => (
                <EducationItem
                    key={index}
                    institution={edu.institution}
                    location={edu.location}
                    degree={edu.degree}
                    period={edu.period}
                    isLeft={index % 2 === 0}
                />
            ))}
        </div>
    );
};

export default Education;
