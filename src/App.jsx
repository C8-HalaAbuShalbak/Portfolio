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
  const hadleShowAbout = () => {
    setShowAbout(!showAbout);
  };
  const hadleShowContact = () => {
    setShowcontact(!showContact);
  };
  const handleShowp1=()=>{
    setShowp1(!showp1)
    console.log(showp1)

  }
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
        <nav className="flex items-center justify-evenly   p-8 font-semibold  md:font-light font-mono text-lg md:text-xl  text-purple-100 cursor-none border-b-2 border-indigo-50 ">
          <div className="w-full block justify-between flex-grow sm:flex sm:items-center sm:w-auto  cursor-none   ">
            <div className="block mt-4 sm:inline-block sm:mt-0">logo</div>
            <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50  animate-pulse  hover:animate-none border-x p-2 rounded-md w-[10%] text-center">
              <a href="#about">About</a>
            </div>{" "}
            <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50 animate-pulse  hover:animate-none border-x p-2 rounded-md w-[10%] text-center">
              <a href="#projects">Projects</a>
            </div>{" "}
            <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50 animate-pulse  hover:animate-none border-x p-2 rounded-md w-[10%] text-center">
              <a href="#about">Contact</a>
            </div>
          </div>
        </nav>
        <img src=".\1.jpg" className="w-full min-h-full"/>
        <aside className="w-3 h-screen bg-purple-100 ml-[25vw] mt-1 rounded relative ">
      
        <div className=" absolute p-0 top-0 right-[30px] rounded-full w-[20vw] h-[10vh] " ><img src=".\136089755 (1) (1).png" className="bg-transparent rounded-full " /></div> 
        <div className="absolute p-0 top-0 left-[30px] rounded-full w-[40vw] h-[10vh] leading-loose text-xl text-white">
         A hard-working developer who craves knowledge and enjoys learning. Shifted career because I'm passionate about coding which I believe is the future communication language.
        </div>
          
          <div className="rounded-md w-[3rem] h-[1.5rem] absolute top-[35%] left-21 border-red-600 text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce"></div>
          <ul
            className=" flex flex-col rounded absolute font-mono text-left left-20 top-[34%]  text-purple-100 font-extrabold text-[1.5rem]  w-[40vw]"
            id="about"
            onClick={hadleShowAbout}
          >
            About Me{" "}
            {showAbout && (
              <> <TypeAnimation
                sequence={[
                  "My name is Hala-حلا-,I Saw this world for the first time on 27th of July 1997,and loved it!",
                
  
                ]}
                wrapper="div"
                speed={45}
                deletionSpeed={45}
                className="text-xl text-amber-200 font-semibold bg-black-950/50	  rounded-md"
                repeat={Infinity}
              />
              <TypeAnimation
                sequence={[
                 
                  "I always dream big ,and work hard to get what I want..",
                

                 
                ]}
                wrapper="div"
                speed={45}
                deletionSpeed={45}
                className="text-xl text-amber-200 font-semibold bg-black-950/50	  rounded-md"
                repeat={Infinity}
              />
                 <TypeAnimation
                sequence={[
                 
                  "I am a Front-End Developer",
                  1000,
                  "I am a Back-End Developer",
                  1000,

                  "I am a Full-Stack Developer  ",
                  1000,
                 
                ]}
                wrapper="div"
                speed={45}
                deletionSpeed={45}
                className="text-xl text-amber-200 font-semibold bg-black-950/50	  rounded-md"
                repeat={Infinity}
              />
                 <TypeAnimation
                sequence={[
                
                  "You can see that I love programming! Check my portfolio if you are not sure yet!",
                  1500,
                ]}
                wrapper="div"
                speed={45}
                deletionSpeed={45}
                className="text-xl text-amber-200 font-semibold bg-black-950/50	  rounded-md"
                repeat={Infinity}
              />
                 
              </>
            )}
          </ul>
          <div className="rounded-md w-[3rem] h-[1.5rem] absolute top-[70%] left-21 border-red-600 text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce"></div>

          <ul
            className="rounded absolute font-mono text-left left-20 top-[69%] text-purple-100 font-extrabold text-[1.5rem]   w-[40vw]"
            id="projects"
           
          >
           <span  onClick={hadleShowProjects} >My Projects</span> {" "}
            {showProjects && (
              <ul className=" flex gap-2 flex-col list-none text-xl text-yellow-200 cursor-none ">
                <li className=" hover:text-yellow-300 cursor-none bg-transparent">

                  <a href="#p1" onClick={handleShowp1}>Test Your Memory</a>
                
                

         
                </li>
                <li className="hover:tracking-widest  hover:text-yellow-300 cursor-none">
                  <a href="#p2">My Task Manager</a>
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

          <div className="rounded-md w-[3rem] h-[1.5rem] absolute bottom-[2%] left-21 text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce "></div>
          <ul
            className="rounded absolute font-mono text-left bottom-[1%]  left-20 text-purple-100 font-extrabold text-[1.5rem]   w-[40vw] cursor-none"
            id="contact"
            onClick={()=>{
              hadleShowContact()
              setThank(false)
            }}
          >
            <a href="#contactMe"> Contact Me </a>
          </ul>
        </aside>
        {showContact && (
          <div
            id="contactMe"
            className="flex min-h-screen rounded-lg m-auto  items-center w-[50vw] justify-self-center justify-center bg-none text-white shadow-lg shadow-white cursor-none"
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
                {thank&&name&&email&&<TypeAnimation
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
                  }
              </form>
          
            </div>
          </div>
        )}
      
      </div>
    </>
  );
}

export default App;
