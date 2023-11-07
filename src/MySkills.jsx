import React from "react";
const MySkills = ({ tech,icon }) => {
  console.log(tech)
  return (
    <>
      <code className="text-amber-200 text-md md:block inline">{icon}{tech.skill}  </code>
    </>
  );
};

export default MySkills;
