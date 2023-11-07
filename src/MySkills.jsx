import React, { useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiJsonwebtokens,
  SiFirebase,
  SiPostman,
  SiVite,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiCanva,
  SiTrello,
} from "react-icons/si";
const MySkills = () => {
  const [showSkills, setShowSkills] = useState(false);

  const [showSkillBe, setShowSkillsBe] = useState(false);
  const [showSkillsFe, setShowSkillsFe] = useState(false);
  const [showMore1, setShowMore1] = useState(true);
  const [showMore2, setShowMore2] = useState(true);

  const skills = {
    backend: [
      {
        skill: "MongoDb",
        icon: <SiMongodb className="inline" />,
        category: "b.e",
      },
      {
        skill: "PostgreSQL",
        icon: <SiPostgresql className="inline" />,
        category: "b.e",
      },
      {
        skill: "Nodejs",
        icon: <FaNodeJs className="inline" />,
        category: "b.e",
      },
      {
        skill: "JWT",
        icon: <SiJsonwebtokens className="inline" />,
        category: "b.e",
      },
      {
        skill: "FireBase",
        icon: <SiFirebase className="inline" />,
        category: "b.e",
      },
       {
        skill: "Postman",
        icon: <SiPostman className="inline" />,
        category: "f.e",
      },
    ],
    frontend: [
     
      {
        skill: "Vite",
        icon: <SiVite className="inline" />,
        category: "f.e",
      },
      { skill: "React", icon: <FaReact className="inline" />, category: "f.e" },
      { skill: "Redux", icon: <SiRedux className="inline" />, category: "f.e" },
      { skill: "HTML", icon: <SiHtml5 className="inline" />, category: "f.e" },
      { skill: "CSS", icon: <SiCss3 className="inline" />, category: "f.e" },
      {
        skill: "TailwindCSS",
        icon: <SiTailwindcss className="inline" />,
        category: "f.e",
      },
      { skill: "Canva", icon: <SiCanva className="inline" />, category: "f.e" },
      {
        skill: "Trello",
        icon: <SiTrello className="inline" />,
        category: "f.e",
      },
    ],
  };

  const handleShowSkillsBe = () => {
    setShowSkillsBe(!showSkillBe); 
    setShowMore1(!showMore1);
  };
  const handleShowSkills = () => {
   
    setShowSkills(!showSkills);
  };
  const handleShowSkillsFe = () => {
    setShowSkillsFe(!showSkillsFe);
    setShowMore2(!showMore2);
  };

  return (
    <>
      <div className="rounded-md w-[3rem] h-[1.5rem] absolute top-[95%] left-21 text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce "></div>
      <ul
        className="rounded absolute font-mono text-left top-[94%]  left-20 text-purple-100 font-extrabold text-[1.5rem]   w-[40vw] cursor-none"
        id="contact"
      >
        <span
          id="Myskills"
          className=" border-x w-[7rem] align-middle justify-center rounded-xl p-2 text-xl shadow-md shadow-white "
          onClick={handleShowSkills}
        >
          My Skills
        </span>
        {showSkills && (
          <section className=" text-sm items-center  grid grid-cols-1 md:grid-cols-2 md:text-xl mt-10 gap-6  ">
            <div >
              <p className="text-indigo-400 " onClick={handleShowSkillsBe}>{"<backend>"}</p>
              {showMore1 && (
                <p className="block"
                  onClick={() => {
                    handleShowSkillsBe();
                    setShowMore1(false);
                  }}
                >
                  ...
                </p>
              )}
<div className="flex flex-wrap w-full h-full content-between gap-3">
              {showSkillBe &&
                skills.backend.map((skill) => {
                  console.log(skill);
                  return (
                    <code className=" font-normal text-indigo-100 text-md md:inline">
                      {skill.skill}
                      {skill.icon}
                    </code>
                  );
                })}</div>
              <p className="text-indigo-400  ">{"</backend>"}</p>
            </div>
            {/* =======================FE====================== */}
            <div >
              <p className="text-indigo-400 " onClick={handleShowSkillsFe}>
                {"<frontend>"}{" "}
              </p>
              <div className="flex flex-wrap w-full h-full content-between gap-3">
              {showMore2 && <p onClick={() => {
                    handleShowSkillsFe();
                    setShowMore2(false);
                  }}>...</p>}
              {showSkillsFe &&
                skills.frontend.map((skill) => {
                  return (
                    <code className=" font-normal text-indigo-100  text-md md:inline">
                      {skill.skill}
                      {skill.icon}
                    </code>
                  );
                })}
                </div>
              <p className="text-indigo-400 ">{"</frontend>"}</p>
            </div>
          </section>
        )}
      </ul>
    </>
  );
};

export default MySkills;
// <code className="text-amber-300 text-md md:block inline">{icon}{tech.skill}  </code>
