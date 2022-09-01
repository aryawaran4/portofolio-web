import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Education from "./Education";
import Work from "./Work";
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("education");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to education
    setActiveTab("education");
  };
  const handleTab2 = () => {
    // update the state to work
    setActiveTab("work");
  };
  return (
    <div className="w-full flex flex-col items-center py-24">
      <ul className="flex gap-10 items-center">
        <li
          className={activeTab === "education" ? "active text-tertiary cursor-pointer" : "text-secondary text-opacity-40 cursor-pointer"}
          onClick={handleTab1}
        >
          <p className="flex items-center gap-1 font-medium"><FontAwesomeIcon className="relative" icon={faGraduationCap} size="xl"/> <span className="text-xl">Education</span> </p>
        </li>
        <li
          className={activeTab === "work" ? "active text-tertiary cursor-pointer" : "text-secondary text-opacity-40 cursor-pointer"}
          onClick={handleTab2}
        >
          <p className="flex items-center gap-1 font-medium"><FontAwesomeIcon className="relative" icon={faBriefcase} size="xl"/> <span className="text-xl">Work</span> </p>
        </li>
      </ul>
 
      <div className="py-10 w-full">
        {activeTab === "education" ? <Education /> : <Work />}
      </div>
    </div>
  );
};
export default Tabs;