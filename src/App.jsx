import React, { useRef, useState, useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Header from "./Header";
import Contact from "./Contact";
import MainContent from "./MainContent";

const App = () => {
  //CURSOR=================>
  const cursor = useRef(null);
  const innerCursor = useRef(null);
  // const [Xcoor, setXcoor] = useState(0);
  // const [Ycoor, setYcoor] = useState(0);
  //<=====================CURSOR

  //HANDLE FUNCTIONS===============>

  //  console.log("aaaaaaaaa")
  useEffect(() => {
    const changePosition = (e) => {
      cursor.current.style.top = `${e.clientY}px`;
      cursor.current.style.left = `${e.clientX}px`;
    };

    window.addEventListener(
      "mousemove",

      changePosition
    );

    return () => {
      window.removeEventListener("mousemove", changePosition);
    };
  }, []);


  return (
    <>
      <div className="">
        <div className="App">
          <Nav />
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
          <Header />
          <MainContent />
          <Contact />
          <Footer />
          <div className="cursor-style" ref={cursor}>
            <div className="inner-cursor-style" ref={innerCursor}></div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default App;
