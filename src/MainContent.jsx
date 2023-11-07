import React, { useState } from "react";
import MySkills from "./MySkills";
import Modle from "./Modle";

import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";

const MainContent = () => {


  return (
    <>
      <aside className="w-3 min-h-[120vh] bg-purple-100 m-2 md:ml-[25vw]  rounded relative mb-[70vh] ">
        <div className=" absolute p-0 top-0 sm:right-12   rounded-full w-[20vw] h-48 ">
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

        <AboutMe />
        <MyProjects />

       
    <MySkills/>
      </aside>

    </>
  );
};

export default MainContent;
