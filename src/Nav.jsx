import React,{useState} from "react";

const Nav = () => {
    const [showAbout, setShowAbout] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [showContact, setShowcontact] = useState(false);
    const handleShowProjects = () => {
        setShowProjects(!showProjects);
        console.log(showProjects);
      };

      const handleShowAbout = () => {
        setShowAbout(!showAbout);
      };
      const handleShowContact = () => {
        setShowcontact(!showContact);
      };





  return (
    <nav className="flex items-center justify-evenly  py-1 p-4 md:font-semibold  font-light font-mono text-md md:text-xl gap-1  text-purple-100 cursor-none mb-0  h-1/4 ">
      <div className="w-full  block justify-around md:flex-grow sm:flex sm:items-center sm:w-auto  cursor-none   ">
        <div className="block mt-4 sm:inline-block sm:mt-0">logo</div>
        <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50  animate-pulse  hover:animate-none w-[10%] text-center">
          <a
            className="md:border-x border-indigo-300  rounded-xl p-2 "
            href="#about"
            onClick={handleShowAbout}
          >
            About
          </a>
        </div>{" "}
        <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50 animate-pulse  hover:animate-none  w-[10%] text-center">
          <a className="md:border-x p-2 border-indigo-300 rounded-xl" href="#Myprojects">
            Projects
          </a>
        </div>{" "}
         <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50 animate-pulse  hover:animate-none  w-[10%] text-center">
          <a className="md:border-x p-2 border-indigo-300 rounded-xl" href="#skills">
            Skills
          </a>
        </div>
        <div className="block mt-4 sm:inline-block sm:mt-0  hover:text-purple-50 animate-pulse  hover:animate-none  w-[10%] text-center">
          <a className="md:border-x p-2  border-indigo-300 rounded-xl" href="#contactMe">
            Contact
          </a>
        </div>
       
      </div>
    </nav>
  );
};

export default Nav;
