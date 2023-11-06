import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import MySkills from "./MySkills";
import Modle from "./Modle";
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

const MainContent = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [n, setn] = useState(-1);

  const skills = {
    backend: [
      {
        skill: "MongoDb",
        icon: <SiMongodb className="inline" />,
        category: "b.e",
        index: n,
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
    ],
    frontend: [
      {
        skill: "Postman",
        icon: <SiPostman className="inline" />,
        category: "f.e",
      },
      {
        skill: "Vite",
        icon: <SiVite className="inline" />,
        category: "f.e",
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
  const handleShowAbout = () => {
    setShowAbout(!showAbout);
  };
  const handleShowSkills = () => {
    setShowSkills(!showSkills);
  };

  const handleShowProjects = () => {
    setShowProjects(!showProjects);
  };
  return (
    <>
      <aside className="w-3 min-h-[120vh] bg-purple-100 m-2 md:ml-[25vw]  rounded relative mb-[50vh] ">
        <div className=" absolute p-0 top-0 sm:right-12   rounded-full w-[20vw] h-48 ">
          {/* <==========================PART ONE===================================> */}
          <img
            src=".\136089755 (1) (1).png"
            className="absolute bg-transparent rounded-full "
          />
        </div>
        <div className=" absolute p-0 top-7 left-20 rounded-full w-screen">
          <p className="  w-3/5 h-1/2 leading-normal text-md lg:text-2xl md:leading-loose md:w-2/5 md:h-full text-white ">
            {" "}
            A hard-working developer who craves knowledge and enjoys learning.
            Shifted career because I'm passionate about coding which I believe
            is the future communication language.
          </p>
        </div>
        {/* >==========================PART ONE===================================< */}
        {/* <==========================PART TWO===================================> */}
        <div className="rounded-md w-[3rem] h-[1.5rem] absolute top-[30%] left-21 border-red-600 text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce"></div>
        <ul
          className=" flex flex-col rounded absolute font-mono text-left left-20 top-[30%]  text-purple-100 font-extrabold text-[1.5rem] md:w-[35vw] "
          id="about"
          onClick={handleShowAbout}
        >
          <span className="border-x w-[7rem] align-middle justify-center rounded-xl p-2 text-xl shadow-md shadow-white mb-3">
            About Me{" "}
          </span>

          {showAbout && (
            <>
              {" "}
              <div className="w-screen md:w-screen">
                <TypeAnimation
                  sequence={[
                    "I am a Front-End Developer",
                    1500,
                    "I am a Back-End Developer",
                    1500,
                    "I am a Full-Stack Developer  ",
                    1500,
                  ]}
                  wrapper="div"
                  speed={45}
                  deletionSpeed={70}
                  cursor={false}
                  className="text-sm leading-tight md:text-xl block text-green-400 font-semibold bg-black-950/50	mt-2 w-5/6 rounded-md h-[1.5rem]"
                  repeat={Infinity}
                />

                <TypeAnimation
                  sequence={[
                    "My name is Hala-حلا-,I Saw this world for the first time on 27th of July 1997,and loved it!I always dream big ,and work hard to get what I want.. You can see that I love programming! Check my portfolio if you are not sure yet!",
                  ]}
                  wrapper="div"
                  speed={45}
                  deletionSpeed={70}
                  className=" text-sm md:text-xl  text-amber-200 font-semibold bg-black-950/50	mt-2 w-3/5  lg:w-2/5 rounded-md"
                  repeat={0}
                />
              </div>
            </>
          )}
        </ul>
        {/* >==========================PART TWO===================================< */}
        {/* <==========================PART .THREE===================================> */}
        <div className="rounded-md w-[3rem] h-[1.5rem] absolute top-[69%] left-21 border-red-600 text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce"></div>
        <ul
          className="rounded absolute font-mono text-left left-20 top-[70%]  text-purple-100 font-extrabold text-[1.5rem]  w-[40vw]"
          id="Myprojects"
        >
          <span
            onClick={handleShowProjects}
            className=" border-x w-[7rem] align-middle justify-center rounded-xl p-2 text-xl shadow-md shadow-white "
          >
            My Projects
          </span>{" "}
          {showProjects && (
            <>
              <li className="mt-3 md:hover:tracking-widest  hover:text-yellow-300 cursor-none">
                <a href="#easyK">Easy Knowledge</a>
              </li>
              <li className="mt-3 md:hover:tracking-widest  hover:text-yellow-300 cursor-none">
                <a href="#cure"> Cure App</a>
              </li>
            </>
          )}
        </ul>

        {/* >==========================PART THREE===================================< */}
        {/* /* <===================PART FOUR==================> */}
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
          <div>
            <p className="text-blue-500">{"<backend>"}</p>
            {showSkills &&
              skills.backend.map((skill) => {
                return (
                  <MySkills key={skill.skill} tech={skill} icon={skill.icon} />
                );
              })}
            <p className="text-blue-500">{"</backend>"}</p>
          </div>
          {/* =======================FE====================== */}
          <div>
            <p className="text-blue-500">{"<frontend>"}</p>
            {showSkills &&
              skills.frontend.map((skill) => {
                return (
                  <MySkills key={skill.skill} tech={skill} icon={skill.icon} />
                );
              })}
            <p className="text-blue-500">{"</frontend>"}</p>
          </div>
        </ul>
        {/* /* >===================PART FOUR==================< */}
      </aside>

      {showProjects && <Modle />}
    </>
  );
};

export default MainContent;
