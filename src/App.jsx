import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TypeAnimation } from "react-type-animation";
import Footer from "./Footer";
import Nav from "./Nav";
import Header from "./Header";
import Contact from "./Contact";
import MainContent from "./MainContent";

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
  const [showpcards, setShowpcards] = useState(false);
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [thank, setThank] = useState(false);
  //<=====================STATES

  // ================================================//

  //HANDLE FUNCTIONS===============>

 
 
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
     
      <div className="">
         <div className="App" onMouseMove={changePosition}>
        <Nav/>
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
        
     <Header/>
     <MainContent/>
        
        
       

     
     
            <Contact/>
        <Footer />
      <div className="cursor-style " ref={cursor}>
        <div className="inner-cursor-style " ref={innerCursor}></div>
     </div> </div> 
      
        </div>
    </>
  );
};

export default App;
