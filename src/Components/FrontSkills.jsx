import React from "react";
import FancyButton from "./FancyButton";

function FrontSkills({ skills , skillsName}) {
  return (
    <div>
      <h2 className="text-white uppercase text-3xl font-poppins my-10 border-b border-white p-2 inline-block">{skillsName}</h2>
      <div className="lg:w-1/2 text-white flex flex-wrap gap-4 font-medium font-poppins">
        {skills.map((skill, index) => (
        <FancyButton
              key={index}
              text={skill.name}
              icon={skill.icon}
              style="capitalize text-lg border py-1.5 px-4 border-white rounded-full flex items-center gap-2"
            />
        ))}
      </div>
    </div>
  );
}

export default FrontSkills;
