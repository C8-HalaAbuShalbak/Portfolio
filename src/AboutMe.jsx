import React ,{useState}from "react";
import { TypeAnimation } from "react-type-animation";

const AboutMe = () => {
  const [showAbout, setShowAbout] = useState(false);
  const handleShowAbout = () => {
    setShowAbout(!showAbout);
  };
  return (
    <>
      <div className="rounded-md w-[3rem] h-[1.5rem] absolute top-[30%] left-21text-purple-100 font-extrabold text-[2rem] bg-purple-50 animate-bounce"></div>
      <ul
        className=" flex flex-col rounded absolute font-mono text-left left-20 top-[30%]  text-purple-100 font-extrabold text-[1.5rem] md:w-[35vw] "
        id="about"
        onClick={handleShowAbout}
      >
        <span className="border-x w-[7rem] align-middle justify-center rounded-xl p-2 text-xl shadow-md shadow-white mb-3">
          About Me{" "}
        </span>

       

       {showAbout&& <div className="w-screen md:w-screen">
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
            className="text-sm leading-tight md:text-xl block text-indigo-400 font-semibold bg-black-950/50	mt-2 w-5/6 rounded-md h-[1.5rem]"
            repeat={Infinity}
          />

          <TypeAnimation
            sequence={[
              "My name is Hala-حلا-,I Saw this world for the first time on 27th of July 1997,and loved it!I always dream big ,and work hard to get what I want.. You can see that I love programming! Check my portfolio if you are not sure yet!",
            ]}
            wrapper="div"
            speed={45}
            deletionSpeed={70}
            className=" text-sm md:text-xl  text-indigo-100 font-semibold bg-black-950/50	mt-2 w-3/5  lg:w-2/5 rounded-md"
            repeat={0}
          />
        </div>}
      </ul>
    </>
  );
};

export default AboutMe;
