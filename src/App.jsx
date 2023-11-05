import React,{ useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TypeAnimation } from "react-type-animation";

const App = () => {
    //CURSOR=================>
    const cursor = useRef(null);
    const innerCursor = useRef(null);
    const [Xcoor, setXcoor] = useState(0);
    const [Ycoor, setYcoor] = useState(0);
    //<=====================CURSOR
    // ================================================//
    //STATES===================>
    const [showAbout, setShowAbout] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showContact, setShowcontact] = useState(false);
    const [showp1, setShowp1] = useState(false);
    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [thank, setThank] = useState(false);
    //<=====================STATES

    // ================================================//

    //HANDLE FUNCTIONS===============>

    const handleThankMsg = () => {
        setThank(true);
      };
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
    //<=====================HANDLE FUNCTIONS
    // ================================================//
    //CONTACT FORM===================>

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
    //<=====================CONTACT FORM
    // ================================================//

  return (
    <>
    {/* <==========================HEADER===================================> */}
    <header className="grid grid-rows-1 mb-2">
<nav className="flex items-center justify-evenly   p-6 md:font-semibold  font-light font-mono text-md md:text-xl gap-1  text-purple-100 cursor-none border-b-2 border-indigo-50 h-full ">
            <div className="w-full  block justify-around md:flex-grow sm:flex sm:items-center sm:w-auto  cursor-none   ">
              <div className="block mt-4 sm:inline-block sm:mt-0">logo</div>
              <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50  animate-pulse  hover:animate-none w-[10%] text-center">
                <a
                  className="md:border-x rounded-xl p-2 "
                  href="#about"
                  onClick={handleShowAbout}
                >
                  About
                </a>
              </div>{" "}
              <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50 animate-pulse  hover:animate-none  w-[10%] text-center">
                <a className="md:border-x p-2 rounded-xl" href="#projects">
                  Projects
                </a>
              </div>{" "}
              <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50 animate-pulse  hover:animate-none  w-[10%] text-center">
                <a className="md:border-x p-2 rounded-xl" href="#about">
                  Contact
                </a>
              </div>
            </div>
          </nav>
          <div className="grid grid-cols-1 md:grid-cols-4 px-2 bg-black align-middle justify-center">
            <p className="col-start-1 col-end-3 leading-loose text-white font-semibold md:text-2xl text-left m-auto">
            This  is  Hala  who always seeks the best approach believing that:
           
<span className="text-indigo-400">“Pleasure in the job puts perfection in the work.” — Aristotle </span>
            </p>
<img src=".\Untitled design.jpg" className="md:col-start-3 md:col-end-5"></img>
          </div>
    </header>
    {/* >==========================HEADER===================================< */}

    <aside>

    </aside>
    {/* <==========================FOOTER===================================> */}

    <footer className= " fixed bottom-0 text-white grid grid-cols-4 h-36 w-screen justify-between bg-indigo-800 p-3">
       <section id="skills" className=" col-start-1 col-end-4 grid grid-cols-3 gap-1">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolor reiciendis vel aperiam explicabo maxime dolore ut quibusdam repellat incidunt, asperiores eaque commodi blanditiis amet nam impedit suscipit quo tempore.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus rem neque molestias iure aspernatur fugiat ullam soluta. Accusantium vel impedit qui, neque facere eos modi, explicabo debitis exercitationem nostrum eum.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit magnam praesentium nemo eveniet? Atque consequuntur officia veritatis, ea nemo dolores ipsam, beatae qui, quis facilis non ipsum magni facere!</div>
     </section>
       <section id="links" className=" flex justify-center"
       >
        <ul className="flex flex-col"><li>github</li>
        <li>email</li>
        <li>resume</li>
        <li>linkedin</li></ul>

       </section>
    </footer>
    {/* >==========================FOOTER===================================< */}

   </>
  )
}

export default App