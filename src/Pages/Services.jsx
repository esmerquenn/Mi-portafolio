

import React from "react";
import { TbBrandTypescript, TbBrandAlpineJs } from "react-icons/tb";
import { FaConnectdevelop, FaReact, FaHtml5 } from "react-icons/fa";
import { AiOutlineDesktop, AiOutlineRocket, AiOutlineInteraction } from "react-icons/ai";
import {
  SiTailwindcss,
  SiRedux,
  SiProgress,
  SiTrustedshops,
  SiMaterialdesign,
  SiPayloadcms,
  SiMui,
  SiAntdesign,
} from "react-icons/si";
import { MdOutlineAnimation, MdOutlineDashboard } from "react-icons/md";
import { RiJavascriptLine, RiNextjsLine } from "react-icons/ri";
import { GrCss3 } from "react-icons/gr";
import { GoVersions } from "react-icons/go";
import { IoPulseOutline } from "react-icons/io5";
import FrontSkills from "../Components/FrontSkills";
import FrontServices from "../Components/FrontServices";

const services = [
  { name: "Responsive Web Design", icon: <AiOutlineDesktop className="text-4xl" /> },
  { name: "Microinteractions", icon: <AiOutlineInteraction className="text-4xl" /> },
  { name: "High-Performance", icon: <AiOutlineRocket className="text-4xl" /> },
  { name: "Modern UI/UX Design", icon: <SiMaterialdesign className="text-4xl" /> },
  { name: "E-Commerce", icon: <SiTrustedshops className="text-4xl" /> },
  { name: "Web Dashboards", icon: <MdOutlineDashboard className="text-4xl" /> },
  { name: "Animations & Interactive Elements", icon: <MdOutlineAnimation className="text-4xl" /> },
  { name: "SEO & Accessibility Optimization", icon: <IoPulseOutline className="text-4xl" /> },
  { name: "Headless CMS", icon: <SiPayloadcms className="text-4xl" /> },
  { name: "API & Backend Integration", icon: <FaConnectdevelop className="text-4xl" /> },
  { name: "Progressive Web Apps", icon: <SiProgress className="text-4xl" /> },
];

const skills = [
  { name: "React", icon: <FaReact className="text-2xl" /> },
  { name: "TypeScript", icon: <TbBrandTypescript className="text-2xl" /> },
  { name: "JavaScript", icon: <RiJavascriptLine className="text-2xl" /> },
  { name: "CSS", icon: <GrCss3 className="text-2xl" /> },
  { name: "HTML", icon: <FaHtml5 className="text-2xl" /> },
  { name: "Redux", icon: <SiRedux className="text-2xl" /> },
  { name: "Redux Toolkit", icon: <SiRedux className="text-2xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl" /> },
  { name: "REST API", icon: <FaConnectdevelop className="text-2xl" /> },
  { name: "Version Control", icon: <GoVersions className="text-2xl" /> },
  { name: "Next.js", icon: <RiNextjsLine className="text-2xl" /> },
  { name: "Alpine JS", icon: <TbBrandAlpineJs className="text-2xl" /> },
  { name: "Material UI", icon: <SiMui className="text-2xl" /> },
  { name: "ANT Design", icon: <SiAntdesign className="text-2xl" /> },
];


const Services = () => {

  return (
    <div className="bg-mybrown ">
     
      <div className=" min-h-screen p-3 md:p-10 pt-28">
        <FrontServices services={services} servicesName="FRONT-END DEVELOPMENT" />
        <FrontSkills skills={skills} skillsName="Skills" />
      </div>
    </div>
  );
};

export default Services;
