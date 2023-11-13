import React from "react";

const Modle = ({ project }) => {
  return (
    <div>
      <div className=" m-auto group relative block h-64 sm:h-80 lg:h-96 w-full md:w-1/2 text-sm">
        <span className="absolute inset-0 border-2 border-dashed border-indigo-100 rounded-md"></span>

        <div
          id={project.id}
          className="relative flex h-full transform items-center border-2 border-black bg-indigo-50 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 align-middle  justify-center rounded-md p-4 hover:shadow-md hover:shadow-white"
        >
          <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8  w-full rounded-md  ">
            <img
              src={project.src}
              className="h-1/4 w-1/4  rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            />

            <h2 className="mt-4 text-xl text-black font-medium sm:text-2xl">
              {project.title}
            </h2>
          </div>

          <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 text-black">
            <h3 className="mt-4 text-sm font-medium md:text-2xl  ">
              {project.title}
            </h3>

            <p className="mt-4 text-sm sm:text-base">{project.description}</p>
            <p className=" font-medium">Deployment Link</p>
            <a href={project.deployment} target="blank" className="block text-md underline">{project.title}-deployed</a>
            <p className="font-medium">Github Repo</p>
            <a href={project.repo} target="blank" className="block text-md underline">{project.title}-github</a>
            <label className="font-medium ">
              Demo Video
              <embed
                width="90%"
                height="30%"
                src={project.video}
                title="YouTube video player"
                alt={project.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-md mb-1"
              ></embed>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modle;
