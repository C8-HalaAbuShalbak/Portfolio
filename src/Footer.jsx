import React from "react";
import {
  BsFillTelephoneFill,
  BsGithub,
  BsFileEarmarkPdf,
  BsLinkedin,

  
} from "react-icons/bs";
import{AiOutlineMail}from "react-icons/ai"
import{ SiVite,
  SiTailwindcss,SiReact} from "react-icons/si"
const Footer = () => {
  const CustomClass =
    "inline text-[2rem] border-2 border-indigo-600 shadow-sm shadow-gray-50 rounded-full p-1 text-indigo-400 ";
  return (
    <footer className=" flex  bottom-0 mt-12 text-indigo-100  md:h-38 w-screen justify-around  border-t-2  ">
      <div className="flex flex-col gap-2 text-md  justify-center ">
        <strong>Contact</strong>
        <a  className="hover:animate-pulse" href="https://drive.google.com/file/d/1znNnwkk2DIZkAl0CsiElhbmf-7bRO0Vx/view?usp=sharing">
          <BsFileEarmarkPdf className={CustomClass} />
          Resume
        </a>
        <a className="hover:animate-pulse" href="tel:00962798967357">
          <BsFillTelephoneFill className={CustomClass} />
          +962798967357
        </a>
        <a className="hover:animate-pulse" href="https://github.com/HalaAbuShalbak">
          <BsGithub className={CustomClass} />
          HalaAbuShalbak
        </a>
        <a className="hover:animate-pulse" href="https://www.linkedin.com/in/halaabushalbak/">
          {" "}
          <BsLinkedin className={CustomClass} />
          hala-joudehabushalbak
        </a>
        <a className="hover:animate-pulse underline"  href="mailto:halaj.abushalbak@gmail.com">
          <AiOutlineMail className={CustomClass} />
          halaj.abushalbak@gmail.com
        </a>
      </div>
      <div className="flex flex-col gap-2 text-md justify-evenly align-middle">
        <strong>Built Using</strong>
        
        <p><SiReact className="inline"/>React</p>
        <p><SiVite className="inline"/>Vite</p>
        <p><SiTailwindcss className="inline"/> Tailwind-CSS</p>
        <p><AiOutlineMail className="inline"/> Email JS</p>

      </div>
      <div className="flex flex-col gap-2 text-md justify-evenly  ">
        <strong>Useful Links</strong>
        <a className="hover:animate-pulse underline" href="#about">About Me</a>
        <a className="hover:animate-pulse underline" href="#Myprojects">Full-Stack Projects</a>
        <a className="hover:animate-pulse underline" href="#MySkills">Skills</a>
        <a className="hover:animate-pulse underline" href="#contactMe">Contact Me</a>
      </div>
      
    </footer>
  );
};

export default Footer;
