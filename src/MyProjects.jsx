import React, { useState } from "react";
import PopUp from "./PopUp";
const MyProjects = () => {
  const [showProjects, setShowProjects] = useState(false);
    const [popProject, setPopProject] = useState(null);

  const handleShowProjects = () => {
    setShowProjects(!showProjects);
  };

  const projects = [
    {
      id: "easyK",
      src: "./icons8-brain-100.png",
      title: "Easy Knowledge",
      description:
        "A solo built full-stack web application that provides E-learning services for a learner and an instructor.",
      deployment: "https://easy-knowledge.netlify.app/",
      repo:"https://github.com/C8-HalaAbuShalbak/MERAKI_Academy_Project_4.git",
      video: "https://www.youtube.com/embed/m04h1GzMiNc?si=Rm7IQ19OFqj_JPB7",
    },
    {
      id: "cure",
      src: "./Provider (1).jpg",
      title: "Cure App",
      description:
        " Team Full stack web application,the application provides home medical specialized services besides general personal services.",
      deployment: "https://bejewelled-alpaca-3369ed.netlify.app/",
      repo:"https://github.com/Girl-Power2/MERAKI_Academy_Project_5.git",
      video: "https://www.youtube.com/embed/2a3Oxq4uooE?si=8m94Ea41Isbht5gd",
    },
  ];
  return (
    <>
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
        {popProject && <PopUp popProject={popProject} />}

        {showProjects &&
          projects.map((project) => {
      
            return (
              <li className="mt-3 md:hover:tracking-widest  hover:text-indigo-400 cursor-none">
                <button
                  onClick={() => {
                    setPopProject(project);
                 
                   
                  }}
                >
                  {project.title}
                </button>

               
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MyProjects;
