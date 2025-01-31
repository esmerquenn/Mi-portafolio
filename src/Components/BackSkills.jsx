import React from "react";

function FrontSkills({ skills , skillsName}) {
  return (
    <div>
      <h2 className="text-white uppercase text-3xl font-poppins my-10 border-b border-white p-2 inline-block">{skillsName}</h2>
      <div className="lg:w-1/2 text-white flex flex-wrap gap-4 font-medium font-poppins">
        {skills.map((skill, index) => (
          <button key={index} className="capitalize text-lg border py-1.5 px-4 border-white rounded-full flex items-center gap-2">
          {skill.icon} {skill.name}
        </button>
        ))}
      </div>
    </div>
  );
}

export default FrontSkills;
