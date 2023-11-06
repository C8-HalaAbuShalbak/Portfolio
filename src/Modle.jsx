import React from "react";

const Modle = () => {
  return (
    <div >
    <div className=" m-auto group relative block h-64 sm:h-80 lg:h-96 w-full md:w-1/2 ">
      <span className="absolute inset-0 border-2 border-dashed border-white rounded-md"></span>

      <div id="easyK" className="relative flex h-full transform items-center border-2 border-black bg-white/80 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 align-middle  justify-center rounded-md">
        <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8 border-4 rounded-md shadow-md shadow-black  border-black">
          <img
            src=".\icons8-brain-100.png"
            className="h-10 w-10 sm:h-12 sm:w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          />
          

          <h2 className="mt-4 text-xl text-black font-medium sm:text-2xl">
            Easy Knowledge
          </h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 text-black">
          <h3 className="mt-4 text-sm font-medium md:text-2xl  ">
           Easy Knowledge
          </h3>

          <p className="mt-4 text-sm sm:text-base">
          A solo built full-stack web application that provides E-learning services for a learner and an instructor.
          </p>
          <p className="text-md font-medium">Deployment Link</p>
          <label className="text-sm font-medium ">Demo Video
          <embed
            width="80%"
            height="30%"
            src="https://drive.google.com/file/d/1JUy1fFRj1KvLpMgpNaJUeWTQYbZgnfkF/view?usp=sharing"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-md"

          ></embed></label>

        </div>
      </div>
    </div>
    {/* // ======================================2============================== */}

    <div className="m-auto mt-1 group relative block h-64 sm:h-80 lg:h-96 w-full md:w-1/2 ">
      <span className="absolute inset-0 border-2 border-dashed border-white rounded-md"></span>

      <div id="cure" className="relative flex h-full transform items-center border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 align-middle  justify-center text-black rounded-md">
        <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
          <img
            src=".\Provider (1).jpg"
            className="h-10 w-10 sm:h-12 sm:w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          
          />
          

          <h2 className="mt-4 text-xl text-black font-medium sm:text-2xl">
            Cure App
          </h2>
        </div>

        <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 className="mt-4 text-sm font-medium md:text-xl">
       Cure App
          </h3>

          <p className="mt-4 text-sm sm:text-base">
          Team Full stack web application,the application provides home medical specialized services besides general personal services.
          </p>
         <label className="mt-4  font-medium text-md">Deployment Link:<a href='https://bejewelled-alpaca-3369ed.netlify.app/' className="text-black underline">Cure App</a></label>
       
          <label className="block  text-md font-medium ">Demo Video
          <embed
            width="80%"
            height="30%"
            src="https://www.youtube.com/embed/2a3Oxq4uooE?si=8m94Ea41Isbht5gd"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-md"
          ></embed></label>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Modle;
