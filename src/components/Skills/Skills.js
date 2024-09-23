import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faSwatchbook, faEllipsis } from "@fortawesome/free-solid-svg-icons";

// Reusable component for individual skills
const SkillItem = ({ skill, level }) => (
  <div className="font-semibold">
    <div className="flex justify-between">
      <p className="mb-2">{skill}</p>
      <p className="text-secondary text-opacity-70">{level}</p>
    </div>
  </div>
);

// Reusable component for each skill section
const SkillSection = ({ icon, title, experience, skills }) => (
  <div className="flex gap-4 w-full md:w-1/3">
    <div className="relative top-2 text-tertiary">
      <FontAwesomeIcon icon={icon} size="2xl" />
    </div>
    <div className="flex flex-col gap-6 w-full">
      <div>
        <p className="font-semibold text-xl">{title}</p>
        <p className="text-secondary text-opacity-70 text-sm">{experience}</p>
      </div>
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill.name} level={skill.level} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Expert" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Jquery", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Angular", level: "Intermediate" },
    { name: "React JS", level: "Intermediate" },
  ];

  const designSkills = [
    { name: "Figma", level: "Intermediate" },
    { name: "Adobe XD", level: "Intermediate" },
    { name: "Photoshop", level: "Intermediate" },
  ];

  const otherSkills = [
    { name: "Firebase", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "Google Tag Manager", level: "Intermediate" },
    { name: "Google Analytic 4", level: "Intermediate" },
  ];

  return (
    <div id="skills" className="w-3/4 flex flex-col items-center z-0 pt-28 section">
      <div className="w-fit font-semibold text-center">
        <p className="text-5xl mb-2">Skills</p>
        <p className="text-secondary text-opacity-70">My technical level</p>
      </div>

      <div className="flex items-center py-24 justify-center w-full">
        <div className="flex flex-col md:flex-row justify-around gap-10 w-full">
          <SkillSection
            icon={faCode}
            title="Frontend Developer"
            experience="3 years"
            skills={frontendSkills}
          />
          <SkillSection
            icon={faSwatchbook}
            title="Web Design"
            experience="More than 1 year"
            skills={designSkills}
          />
          <SkillSection
            icon={faEllipsis}
            title="Others"
            experience="More than 1 year"
            skills={otherSkills}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
