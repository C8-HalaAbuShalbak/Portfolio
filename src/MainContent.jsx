import React, { useState } from "react";

const MainContent = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowcontact] = useState(false);
  const [showpcards, setShowpcards] = useState(false);
  const handleShowAbout = () => {
    setShowAbout(!showAbout);
  };
  const handleShowContact = () => {
    setShowcontact(!showContact);
  };
  const handleshowpcards = () => {
    setShowpcards(!showpcards);
  };
  const handleShowProjects = () => {
    setShowProjects(!showProjects);
  };
  return (
    <>
      <aside className="w-3 min-h-screen bg-purple-100 m-2 md:ml-[25vw]  rounded relative mb-[20vh] ">
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
                  className="text-sm md:text-xl block text-green-400 font-semibold bg-black-950/50	mt-2 w-5/6 rounded-md h-[3rem]"
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
        <div className="rounded-md w-[3rem] h-[1.5rem] absolute top-[65%] left-21 border-red-600 text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce"></div>
        <ul
          className="rounded absolute font-mono text-left left-20 top-[65%]  text-purple-100 font-extrabold text-[1.5rem]  w-[40vw]"
          id="Myprojects"
        >
          <span
            onClick={handleShowProjects}
            className=" border-x w-[7rem] align-middle justify-center rounded-xl p-2 text-xl shadow-md shadow-white "
          >
            My Projects
          </span>{" "}
          {showProjects && (
            <ul className=" mt-5 felx flex-col gap-2 list-none text-xl text-yellow-200 cursor-none ">
              <li className="  hover:tracking-widest  hover:text-yellow-300 cursor-none">
                <a href="#projects" onClick={handleshowpcards}>
                  My Task Manager
                </a>
              </li>
              <li className="hover:tracking-widest  hover:text-yellow-300 cursor-none">
                {" "}
                <a href="#projects" onClick={handleshowpcards}>
                  Easy Knowledge
                </a>
              </li>
              <li className="hover:tracking-widest  hover:text-yellow-300 cursor-none">
                {" "}
                <a href="#projects" onClick={handleshowpcards}>
                  Cure App
                </a>
              </li>
            </ul>
          )}
        </ul>

        {/* >==========================PART THREE===================================< */}
        {/* /* <===================PART FOUR==================> */}
        <div className="rounded-md w-[3rem] h-[1.5rem] absolute top-[95%] left-21 text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce "></div>
        <ul
          className="rounded absolute font-mono text-left top-[92%]  left-20 text-purple-100 font-extrabold text-[1.5rem]   w-[40vw] cursor-none"
          id="contact"
          onClick={() => {
            setThank(false);
          }}
        >
          <a
            id="skills"
            className=" block border-x w-fit rounded-xl p-2 shadow-md shadow-white mt-2"
          >
            My Skills
          </a>
        </ul>
        {/* /* >===================PART FOUR==================< */}
      </aside>
      {showpcards && (
        <section
          id="projects"
          className="bg-slate/90 h-[70vh] grid gap-1 grid-cols-1 md:grid-cols-3 mt-2 p-3"
        >
          <div>
            <a
              href="p1"
              className="transition-opacity ease-in duration-700 opacity-70 hover:opacity-100 group  relative bottom-0   text-black"
            >
              <span className="absolute inset-0 border-2 border-dashed border-white"></span>

              <div className=" relative   transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 justify-center ">
                <div className="flex flex-col gap-2 h-96 p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 justify-center  align-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-50 w-50 sm:h-12 sm:w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="indigo"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <h2 className="text-xl font-medium sm:text-2xl">
                    My Task Manager
                  </h2>
                </div>

                <div className="absolute felx flex-col gap-1 p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 w-full h-96">
                  <p className=" col-start-1 col-end-2">
                    <strong>Description</strong>
                    <p className=" text-sm sm:text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate, praesentium voluptatem omnis atque culpa
                      repellendus.
                    </p>
                  </p>

                  <p>
                    <strong>Deployment Link</strong>

                    <a
                      href="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                      className=" mt-1 text-sm sm:text-base"
                    >
                      Your Task Manager
                    </a>
                  </p>

                  <span>
                    <strong>Demo Video</strong>
                  </span>
                  <br />
                  <iframe
                    src="https://www.youtube.com/embed/lkIFF4maKMU?si=HDTG425mr_eh2oBl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
                    allowfullscreen="ture"
                    sandbox="true"
                    className="mt-4 text-sm sm:text-base"
                    width="100%"
                    height="50%"
                  />
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              href="p1"
              className="transition-opacity ease-in duration-700 opacity-70 hover:opacity-100 group  relative bottom-0   text-black"
            >
              <span className="absolute inset-0 border-2 border-dashed border-white"></span>

              <div className=" relative   transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 justify-center ">
                <div className="flex flex-col gap-2 h-96 p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 justify-center  align-middle">
                  <img
                    src=".\icons8-brain-100.png"
                    className=" h-50 w-50 sm:h-12 sm:w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="indigo"
                  />

                  <h2 className="text-xl font-medium sm:text-2xl">
                    Easy Knowledge
                  </h2>
                </div>

                <div className="absolute felx flex-col gap-1 p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 w-full h-96">
                  <p className=" col-start-1 col-end-2">
                    <strong>Description</strong>
                    <p className=" text-sm sm:text-sm">
                      Solo built full-stack web application that provides
                      E-learning services for a learner and an instructor.
                    </p>
                  </p>

                  <p>
                    <strong>Deployment Link:</strong>

                    <a
                      href=""
                      className=" mt-1 text-sm sm:text-base underline text-indigo-600"
                    >
                      Easy Knowledge
                    </a>
                  </p>

                  <span>
                    <strong>Demo Video</strong>
                  </span>
                  <br />
                  <iframe
                    src="https://drive.google.com/file/d/13HhXnuHYXazE2BbfbGUwXDLJ_9NsWyjv/view?usp=sharing"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
                    allowfullscreen="ture"
                    sandbox="true"
                    className="mt-4 text-sm sm:text-base"
                    width="100%"
                    height="50%"
                  />
                </div>
              </div>
            </a>
          </div>
          <div>
            <a
              href="p1"
              className="transition-opacity ease-in duration-700 opacity-70 hover:opacity-100 group  relative bottom-0   text-black"
            >
              <span className="absolute inset-0 border-2 border-dashed border-white"></span>

              <div className=" relative   transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 justify-center ">
                <div className="flex flex-col gap-2 h-96 p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 justify-center  align-middle">
                  <img
                    src=".\Provider (1).jpg"
                    className=" h-50 w-50 sm:h-12 sm:w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="indigo"
                  />

                  <h2 className="text-xl font-medium sm:text-2xl">Cure App</h2>
                </div>

                <div className="absolute felx flex-col gap-2 p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 w-full h-96">
                  <p className=" col-start-1 col-end-2">
                    <strong>Description</strong>
                    <p className=" text-sm sm:text-sm">
                      Team Full stack web application,the application provides
                      home medical specialized services besides general personal
                      services.
                    </p>
                  </p>

                  <p>
                    <strong>Deployment Link:</strong>

                    <a
                      href="https://65380cdc9958bf0097b05849--bejewelled-alpaca-3369ed.netlify.app/"
                      className=" mt-1 text-sm sm:text-base  text-indigo-600 underline"
                    >
                      Cure App
                    </a>
                  </p>

                  <span>
                    <strong>Demo Video</strong>
                  </span>
                  <br />
                  <iframe
                    width="100%"
                    height="50%"
                    src="https://www.youtube.com/embed/2a3Oxq4uooE?si=eSxMMZ1M7VEVbucG"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}
    </>
  );
};

export default MainContent;
