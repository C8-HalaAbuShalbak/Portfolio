import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TypeAnimation } from "react-type-animation";
function App() {
  const cursor = useRef(null);
  const innerCursor = useRef(null);

  const [Xcoor, setXcoor] = useState(0);
  const [Ycoor, setYcoor] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowcontact] = useState(false);
  const [showp1, setShowp1] = useState(false);

  //contact//
  const [msg, setMsg] = useState("");

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [thank, setThank] = useState(false);
  const handleThankMsg = () => {
    setThank(true);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_j5381wl",
        "template_c5evtcx",
        form.current,
        "OvNxWqM4ZNoMso80y"
      )
      .then(
        (result) => {
          setMsg("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMsg("FAILED...");
        }
      );
  };
  //   contact //
  const handleShowAbout = () => {
    setShowAbout(!showAbout);
  };
  const handleShowContact = () => {
    setShowcontact(!showContact);
  };
  const handleShowp1 = () => {
    setShowp1(!showp1);
    console.log(showp1);
  };
  const handleShowProjects = () => {
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
  return (
    <>
      <div className=" h-screen w-screen App" onMouseMove={changePosition}>
        {/* <div className="bubbles ">
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
        </div> */}
        <div className="cursor-style delay-[500] " ref={cursor}>
          <div className="inner-cursor-style " ref={innerCursor}></div>
        </div>
        <header className="grid grid-rows-2 mb-2">
          <nav className="flex items-center justify-evenly   p-8 font-semibold  md:font-light font-mono text-lg md:text-xl  text-purple-100 cursor-none border-b-2 border-indigo-50 h-1/2">
            <div className="w-full block justify-between flex-grow sm:flex sm:items-center sm:w-auto  cursor-none   ">
              <div className="block mt-4 sm:inline-block sm:mt-0">logo</div>
              <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50  animate-pulse  hover:animate-none w-[10%] text-center">
                <a
                  className="border-x rounded-xl p-2 "
                  href="#about"
                  onClick={handleShowAbout}
                >
                  About
                </a>
              </div>{" "}
              <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50 animate-pulse  hover:animate-none  w-[10%] text-center">
                <a className="border-x p-2 rounded-xl" href="#projects">
                  Projects
                </a>
              </div>{" "}
              <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50 animate-pulse  hover:animate-none  w-[10%] text-center">
                <a className="border-x p-2 rounded-xl" href="#about">
                  Contact
                </a>
              </div>
            </div>
          </nav>
          <div>
            <img className="h-full w-full" src=".\1.jpg" />
          </div>
        </header>
        <aside className="w-3 h-[200vh] bg-purple-100 m-1 md:ml-[25vw]  rounded relative ">
          <div className=" absolute p-0 top-0 right-[30px] rounded-full w-[20vw] h-[10vh] ">
            <img
              src=".\136089755 (1) (1).png"
              className="bg-transparent rounded-full "
            />
          </div>
          <div className=" absolute p-0 top-0 left-7 rounded-full w-screen">
            <p className="  w-3/5 h-1/2 leading-normal text-lg lg:text-2xl md:leading-loose md:w-2/5 md:h-full text-white ">
              {" "}
              A hard-working developer who craves knowledge and enjoys learning.
              Shifted career because I'm passionate about coding which I believe
              is the future communication language.
            </p>
          </div>

          <div className="rounded-md w-[3rem] h-[1.5rem] absolute top-[25%] left-21 border-red-600 text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce"></div>
          <ul
            className=" flex flex-col rounded absolute font-mono text-left left-20 top-[25%]  text-purple-100 font-extrabold text-[1.5rem] md:w-[35vw] "
            id="about"
            onClick={hadleShowAbout}
          >
            <span className="border-x w-fit rounded-xl p-2 shadow-md shadow-white mb-3">
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
                    className="text-xl block text-green-400 font-semibold bg-black-950/50	mt-2 w-5/6 rounded-md h-[3rem]"
                    repeat={Infinity}
                  />

                  <TypeAnimation
                    sequence={[
                      "My name is Hala-حلا-,I Saw this world for the first time on 27th of July 1997,and loved it!I always dream big ,and work hard to get what I want.. You can see that I love programming! Check my portfolio if you are not sure yet!",
                    ]}
                    wrapper="div"
                    speed={45}
                    deletionSpeed={70}
                    className="text-xl text-amber-200 font-semibold bg-black-950/50	mt-2 w-3/5  lg:w-2/5 rounded-md"
                    repeat={0}
                  />
                </div>
              </>
            )}
          </ul>
          <div className="rounded-md w-[3rem] h-[1.5rem] absolute top-[65%] left-21 border-red-600 text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce"></div>

          <ul
            className="rounded absolute font-mono text-left left-20 top-[65%]  text-purple-100 font-extrabold text-[1.5rem]  w-[40vw]"
            id="projects"
          >
            <span
              onClick={handleShowProjects}
              className=" block border-x w-fit rounded-xl p-2 shadow-md shadow-white mb-7"
            >
              My Projects
            </span>{" "}
            {showProjects && (
              <ul className=" grid grid-rows- list-none text-xl text-yellow-200 cursor-none ">
                {/* <li className="grid grid-cols-2 w-[50vw] hover:text-yellow-300 cursor-none bg-transparent">
                  <a href="#p1" onClick={handleShowp1}>
                    Test Your Memory
                  </a>
                </li> */}
                <li className="  hover:tracking-widest  hover:text-yellow-300 cursor-none">
                  <a href="#projects" onClick={handleShowp1}>
                    My Task Manager
                  </a>
                </li>
                <li className="hover:tracking-widest  hover:text-yellow-300 cursor-none">
                  {" "}
                  <a href="#p3">Easy Knowledge</a>
                </li>
                <li className="hover:tracking-widest  hover:text-yellow-300 cursor-none">
                  {" "}
                  <a href="#p4">Cure App</a>
                </li>
              </ul>
            )}
          </ul>

          <div className="rounded-md w-[3rem] h-[1.5rem] absolute top-[95%] left-21 text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce "></div>
          <ul
            className="rounded absolute font-mono text-left top-[92%]  left-20 text-purple-100 font-extrabold text-[1.5rem]   w-[40vw] cursor-none"
            id="contact"
            onClick={() => {
              handleShowContact();
              setThank(false);
            }}
          >
            <a
              href="#contactMe"
              className=" block border-x w-fit rounded-xl p-2 shadow-md shadow-white mt-2"
            >
              Contact Me
            </a>
          </ul>
        </aside>

        {showContact && (
          <div
            id="contactMe"
            className="flex h-screen rounded-lg m-auto  items-center w-[80vw] justify-self-center justify-center bg-none text-white shadow-lg shadow-white cursor-none"
          >
            <div className="mx-auto w-full max-w-lg">
              <p className="mt-1 mb-3 text-lg">
                Email me at{" "}
                <a
                  className=" underline cursor-none"
                  href="mailto:halaj.abushalbak@gmail.com"
                >
                  halaj.abushalbak@gmail.com
                </a>{" "}
                or message me here:
              </p>
              <h1 className="text-4xl font-medium">Contact Me</h1>

              <form
                action="https://api.web3forms.com/submit"
                className="mt-10"
                ref={form}
                onSubmit={sendEmail}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative z-0">
                    <input
                      type="text"
                      name="name"
                      required
                      className="peer block w-full appearance-none border-0 border-b border-gray-200 bg-transparent py-2.5 px-0  text-violet-100 text-lg focus:border-indigo-200 focus:outline-focus focus:ring-0 cursor-none"
                      placeholder=" "
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <label className="absolute top-0 -z-10 origin-[0] -translate-y-6 scale-0 transform text-md font-normal text-gray-100/75 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-100">
                      Your name
                    </label>
                  </div>
                  <div className="relative z-0">
                    <input
                      type="text"
                      name="email"
                      required
                      className="peer block w-full appearance-none border-0 border-b border-gray-200 bg-transparent py-2.5 px-0  text-violet-100 text-lg focus:border-indigo-200 focus:outline-focus focus:ring-0 cursor-none"
                      placeholder=" "
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <label className="absolute top-0 -z-10 origin-[0] -translate-y-6 scale-0 transform text-md font-normal text-gray-100/75 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-100">
                      Your email
                    </label>
                  </div>
                  <div className="relative z-0 col-span-2">
                    <textarea
                      name="message"
                      rows="5"
                      className="peer block w-full appearance-none border-0 border-b border-gray-200 bg-transparent py-2.5 px-0  text-violet-100 text-lg focus:border-indigo-200 focus:outline-focus focus:ring-0 cursor-none"
                      placeholder=" "
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    ></textarea>
                    <label className="absolute top-0 -z-10 origin-[0] -translate-y-6 scale-0 transform text-md font-normal text-gray-100/75 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-100">
                      Your message
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  value="Send"
                  className="mt-5 rounded-md bg-black px-10 py-2 text-white cursor-none hover:shadow-md hover:shadow-white"
                  onClick={handleThankMsg}
                >
                  Send Message
                </button>
                {thank && name && email && (
                  <TypeAnimation
                    sequence={[
                      "setMessage(true)",
                      1500,
                      "{message ? Thank you for contacting,your message was sent successfully : You are always welcome to share your thoughts}",
                      1500,
                    ]}
                    wrapper="div"
                    speed={45}
                    deletionSpeed={45}
                    className="mt-3  text-lg text-emerald-400 font-normal bg-transparent"
                    repeat={Infinity}
                  />
                )}
              </form>
            </div>
          </div>
        )}
      </div>

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
      <div id="projects" className="grid grid-cols-3 px-1">
        <a
          href="p1"
          className="transition-opacity ease-in duration-700 opacity-70 hover:opacity-100 group  relative bottom-0   text-black"
        >
          {/* <span className="absolute inset-0 border-2 border-dashed border-amber"></span> */}

          <div className=" relative flex  transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className=" h-96 p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
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

              <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                My Task Manager
              </h2>
            </div>

            <div className="absolute grid grid-cols-2 gap-1 p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 w-[70vw] h-96">
              {/* <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                 My Task Manager
                </h3> */}
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
                width="80%"
                height="80%"
              />
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default App;
/*  <div id="projects" className="grid grid-cols-3 px-1">
             {showp1 && (
          <a
            href=""
            className="transition-opacity ease-in duration-700 opacity-70 hover:opacity-100 group  relative bottom-0 block max-h-fit  text-black"
          >
            <span className="absolute inset-0 border-2 border-dashed border-amber"></span>

            <div className=" relative flex  transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
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

                <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                  Your Task Manager
                </h2>
              </div>

              <div className="absolute flex flex-col gap-1 p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 w-[60vw] min-h-fit">
                <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                  Your Task Manager
                </h3>
                <span>
                  <strong>Description</strong>
                </span>
                <br />
                <p className="mt-4 text-sm sm:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, praesentium voluptatem omnis atque culpa
                  repellendus.
                </p>
                <span>
                  <strong>Deployment Link</strong>
                </span>
                <br />
                <a
                  href="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  className=" block mt-4 text-sm sm:text-base"
                >
                  Your Task Manager
                </a>
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
                />

                <p>
                  <strong>Technologies</strong>
                </p>
              </div>
            </div>
          </a>
        )}
          <div id="p2"></div>{" "}
       </div>{" "} */
