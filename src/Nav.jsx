import React, { useState } from "react";

const Nav = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleShowAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <nav className="flex items-center justify-evenly  py-6 p-4 md:font-semibold  font-light font-mono text-md md:text-xl gap-1  text-purple-100 cursor-none mb-1  h-1/2 ">
      <div className="w-full  block justify-around md:flex-grow sm:flex sm:items-center sm:w-auto  cursor-none   ">
        <div className="block mt-4 sm:inline-block sm:mt-0">
          {/* <p className="flex items-center max-w-full p-0 font-[Consolas]  ">
            <span className=" text-[6.25rem]  translate-x-[125%] h-14 font-extralight z-20  text-indigo-500 ">
              ح
            </span> 
            <span className=" text-[4.5rem] translate-y-8 translate-x-[150%]  font-thin text-indigo-200   ">
          ا
            </span>
            <span className=" text-[5rem] translate-y-6 font-light z-40 w-full text-indigo-300 mt-2">
            ل
            </span>
           
          </p> */}
          <img src=".\logo.jpg"/>
        </div>
        <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50  animate-pulse  hover:animate-none w-[10%] text-center">
          <a
            className="md:border-x border-indigo-300  rounded-xl p-2 "
            href="#about"
            onClick={handleShowAbout}
          >
            About
          </a>
        </div>{" "}
        <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50 animate-pulse  hover:animate-none  w-[10%] text-center">
          <a
            className="md:border-x p-2 border-indigo-300 rounded-xl"
            href="#Myprojects"
          >
            Projects
          </a>
        </div>{" "}
        <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50 animate-pulse  hover:animate-none  w-[10%] text-center">
          <a
            className="md:border-x p-2 border-indigo-300 rounded-xl"
            href="#Myskills"
          >
            Skills
          </a>
        </div>
        <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50 animate-pulse  hover:animate-none  w-[10%] text-center">
          <a
            className="md:border-x p-2  border-indigo-300 rounded-xl"
            href="#contactMe"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
