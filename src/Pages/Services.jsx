// import React from "react";

// import FrontSkills from "../Components/FrontSkills";
// import FrontServices from "../Components/FrontServices";
// import { front_skills, front_services, back_services, back_skills } from "./../helpers/skills";
// import { useParams } from "react-router-dom";

// const Services = () => {
//   const { slug } = useParams();
//   const services = slug === "backend" ? back_services : front_services;
//   const skills = slug === "backend" ? back_skills : front_skills;
//   const servicesName = slug === "backend" ? "BACK-END DEVELOPMENT" : "FRONT-END DEVELOPMENT";

//   return (
//     <div className="bg-custom-services ">
//       <div className=" min-h-screen p-3 md:p-10 pt-28">
//         <FrontServices services={services} servicesName={servicesName} />
//         <FrontSkills skills={skills} skillsName="Skills" />
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from "react";
import FrontSkills from "../Components/FrontSkills";
import FrontServices from "../Components/FrontServices";
import { front_skills, front_services, back_services, back_skills, mentorship_services, soft_skills } from "./../helpers/skills";
import { useParams } from "react-router-dom";

const Services = () => {
  const { slug } = useParams();

  let services, skills, servicesName;

  if (slug === "backend") {
    services = back_services;
    skills = back_skills;
    servicesName = "BACK-END DEVELOPMENT";
  } else if (slug === "mentoring") {
    services = mentorship_services;
    skills = [];
    servicesName = "MENTORSHIP SERVICES";
  } else {
    services = front_services;
    skills = front_skills;
    servicesName = "FRONT-END DEVELOPMENT";
  }

  return (
    <div>
      <div className="bg-custom-services p-3 md:p-10 ">
        <FrontServices services={services} servicesName={servicesName} />
      </div>
      <div className="min-h-screen bg-mybrown shadow_me p-3 md:p-10 pt-28">
      {skills.length > 0 && <FrontSkills skills={skills} skillsName="Skills" />}
       <FrontSkills skills={soft_skills} skillsName="Soft Skills" />
      </div>
    </div>
  );
};

export default Services;
