import React from "react";
const MySkills = ({ tech,icon }) => {
  console.log(tech)
  return (
    <>
      <code className="text-white ">{icon }{tech.skill} {tech.index<tech.lengh&&<span>-</span>} </code>
    </>
  );
};

export default MySkills;
