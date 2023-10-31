import { useRef } from "react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
function App() {
  const cursor = useRef(null);
  const innerCursor = useRef(null);

  const [Xcoor, setXcoor] = useState(0);
  const [Ycoor, setYcoor] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const hadleShowAbout = () => {
    setShowAbout(!showAbout);
  };
  const hadleShowProjects = () => {
    setShowProjects(!showProjects);
    console.log(showProjects);
  };
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  };
  const changeInnerPosition = (e) => {
    innerCursor.current.style.top = `${e.clientY}px`;
    innerCursor.current.style.left = `${e.clientX}px`;
  };
  window.addEventListener("mousemove", (e) => {
    setXcoor(e.clientX);
    setYcoor(e.clientY);
  });
  // console.log(Xcoor,Ycoor)
  return (
    <>
      <div
        className="grid-cols-1 App"
        style={{ minHeight: "100vh", minWidth: "100vw" }}
        onMouseMove={changePosition}
      >
        <div className="bubbles">
          <span id="s1"></span>
          <span id="s3"></span>
          <span id="s5"></span>
          <span id="s7"></span>

          <span id="s2"></span>
          <span id="s1"></span>
          <span id="s3"></span>
          <span id="s3"></span>
          <span id="s4"></span>
          <span id="s5"></span>
          <span id="s6"></span>
          <span id="s7"></span>
          <span id="s8"></span>
          <span id="s9"></span>
          <span id="s10"></span>
          <span id="s11"></span>
          <span id="s12"></span>
          <span id="s13"></span>
          <span id="s14"></span>
          <span id="s2"></span>
          <span id="s4"></span>
          <span id="s3"></span>
          <span id="s6"></span>
          <span id="s5"></span>
          <span id="s8"></span>
          <span id="s9"></span>
          <span id="s11"></span>
          <span id="s9"></span>
          <span id="s3"></span>
          <span id="s7"></span>
          <span id="s12"></span>
          <span id="s5"></span>
          <span id="s13"></span>
          <span id="s9"></span>
          <span id="s11"></span>
          <span id="s7"></span>
        </div>

        <div className="cursor-style delay-[500]" ref={cursor}>
          <div className="inner-cursor-style " ref={innerCursor}>
            {" "}
          </div>
        </div>
        <nav className="flex items-center justify-evenly   p-8  font-semibold  md:font-light font-mono text-lg md:text-xl  text-purple-100 ">
          <div className="w-full block justify-between flex-grow sm:flex sm:items-center sm:w-auto    ">
            <div className="block mt-4 sm:inline-block sm:mt-0">logo</div>
            <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50  hover:animate-pulse">
              <a href="#about">About</a>
            </div>{" "}
            <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50 hover:animate-pulse ">
              <a href="#projects">Projects</a>
            </div>{" "}
            <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50 hover:animate-pulse ">
              <a href="#about">Contact</a>
            </div>
          </div>
        </nav>
        <aside className="w-3 h-[90vh] bg-purple-100 ml-[25vw] mt-[2rem] rounded relative ">
          <div className="rounded-md w-[3rem] h-[1.5rem] absolute top-4 left-21 border-red-600 text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce"></div>
          <ul
            className=" flex flex-col rounded absolute font-mono text-left left-20 top-0  text-purple-100 font-extrabold text-[1.5rem]  w-[40vw]"
            id="about"
            onClick={hadleShowAbout}
          >
            About Me{" "}
            {showAbout && (
              <TypeAnimation
                sequence={[
                  "My name is Hala,I Saw this world for the first time on 27th of July 1997,and loved it!",
                  1500,
                  "I always dream big ,and work hard to get what I want..",
                  1500,

                  "I am a Front-End Developer",
                  1000,
                  "I am a Back-End Developer",
                  1000,

                  "I am a Full-Stack Developer  ",
                  1000,
                  "You can see that I love programming! Check my portfolio if you are not sure yet!",
                  1500,
                ]}
                wrapper="div"
                speed={45}
                deletionSpeed={45}
                className="text-xl text-amber-200 font-semibold"
                repeat={Infinity}
              />
            )}
          </ul>
          <div className="rounded-md w-[3rem] h-[1.5rem] absolute top-[50%] left-21 border-red-600 text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce"></div>

          <ul
            className="rounded absolute font-mono text-left left-20 top-[48%] text-purple-100 font-extrabold text-[1.5rem]   w-[40vw]"
            id="projects"
            onClick={hadleShowProjects}
          >
            My Projects{" "}
            {showProjects && (
              <ul className=" flex gap-2 flex-col list-none text-xl text-yellow-200 ">
                <li className="hover:tracking-widest">
                  <a href="#p1">Test Your Memory</a>
                </li>
                <li className="hover:tracking-widest">
                  <a href="#p2">My Task Manager</a>
                </li>
                <li className="hover:tracking-widest">
                  {" "}
                  <a href="#p3">Easy Knowledge</a>
                </li>
                <li className="hover:tracking-widest">
                  {" "}
                  <a href="#p4">Cure App</a>
                </li>
              </ul>
            )}
          </ul>

          <div className="rounded-md w-[3rem] h-[1.5rem] absolute bottom-[5%] left-21 text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce "></div>
          <ul
            className="rounded absolute font-mono text-left bottom-[3%]  left-20 text-purple-100 font-extrabold text-[1.5rem]   w-[40vw]"
            id="contact"
          >
            Contact Me{" "}
          </ul>
        </aside>
      </div>
      <div
        id="p1"
        className=" ml-[25vw] grid-col-4 justify-center border-solid border-white w-full h-full "
      >
        <img src="public\p1.jpg" className="w-3/12 h-3/12"></img>
      </div>
    </>
  );
}

export default App;
