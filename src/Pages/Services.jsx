// import React from "react";
// import { TbBrandTypescript, TbBrandAlpineJs } from "react-icons/tb";
// import { FaConnectdevelop, FaReact, FaHtml5 } from "react-icons/fa";

// import { AiOutlineDesktop, AiOutlineRocket ,AiOutlineInteraction} from "react-icons/ai";

// import {SiTailwindcss, SiRedux, SiTrustedshops, SiMaterialdesign, SiPayloadcms, SiMui, SiAntdesign } from "react-icons/si";

// import { MdOutlineAnimation, MdOutlineDashboard } from "react-icons/md";
// import { RiJavascriptLine,RiNextjsLine } from "react-icons/ri";
// import { GrCss3 } from "react-icons/gr";
// import { GoVersions } from "react-icons/go";
// import { IoPulseOutline } from "react-icons/io5";

// const Services = () => {
//   return (
//     <div className="bg-mybrown min-h-screen p-3 md:p-10 pt-28">
//       <div className=" text-white  pt-20 flex flex-col gap-4 lg:flex-row lg:gap-0 justify-between items-center ">
//         <h2 className=" font-poppins text-2xl md:text-5xl border-b border-white p-2">FRONT-END DEVELOPMENT</h2>
//         <div className=" lg:w-[50%]">
//           <div className=" flex flex-wrap gap-4 font-medium  font-poppins ">
//             <button className="uppercase text-lg  md:text-2xl  border py-2 px-4  border-[#F5EEE6] rounded-full flex items-center gap-2">
//               <AiOutlineDesktop className=" text-4xl" /> Responsive Web Design
//             </button>
//             <button className="uppercase text-lg  md:text-2xl  border py-2 px-4  border-[#F5EEE6] rounded-full flex items-center gap-2">
//               <AiOutlineInteraction className=" text-4xl" /> Microinteractions
//             </button>

//             <button className="uppercase  md:text-2xl   border py-2 px-4  border-[#F5EEE6] rounded-full flex items-center gap-2">
//               <AiOutlineRocket className=" text-4xl" />
//               High-Performance
//             </button>
//             <button className="uppercase  md:text-2xl   border py-2 px-4  border-[#F5EEE6] rounded-full flex items-center gap-2">
//               <SiMaterialdesign className=" text-4xl" />
//               Modern UI/UX Design
//             </button>

//             <button className="uppercase  md:text-2xl   border py-2 px-4  border-[#F5EEE6] rounded-full flex items-center gap-2">
//               <SiTrustedshops className=" text-4xl" /> E-Commerce
//             </button>
//             <button className="uppercase  md:text-2xl   border py-2 px-4  border-[#F5EEE6] rounded-full flex items-center gap-2">
//               <MdOutlineDashboard className=" text-4xl" />
//               Web Dashboards
//             </button>
//             <button className="uppercase  md:text-2xl   border py-2 px-4  border-[#F5EEE6] rounded-full flex items-center gap-2">
//               <MdOutlineAnimation className=" text-4xl" /> Animations & Interactive Elements
//             </button>
//             <button className="uppercase  md:text-2xl   border py-2 px-4  border-[#F5EEE6] rounded-full flex items-center gap-2">
//               <IoPulseOutline className=" text-4xl" />
//               SEO & Accessibility Optimization
//             </button>
//             <button className="uppercase  md:text-2xl   border py-2 px-4  border-[#F5EEE6] rounded-full flex items-center gap-2">
//               <SiPayloadcms className=" text-4xl" />
//               Headless CMS
//             </button>
//             <button className="uppercase  md:text-2xl   border py-2 px-4  border-[#F5EEE6] rounded-full flex items-center gap-2">
//               <FaConnectdevelop className=" text-4xl" />
//               API & Backend Integration
//             </button>
//             <button className="uppercase text-lg  md:text-2xl  border py-2 px-4  border-[#F5EEE6] rounded-full flex items-center gap-2">
//               <AiOutlineDesktop className=" text-4xl" /> Progressive Web Apps
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="">
//         <h2 className=" text-white uppercase text-3xl font-poppins my-10 border-b border-white p-2 inline-block">skills</h2>
//         <div className="w-1/2 text-white flex flex-wrap gap-4 font-medium  font-poppins ">
//           <button className=" capitalize text-lg   border px-4  border-white rounded-full flex items-center gap-2">
//             <FaReact className=" text-2xl" /> React
//           </button>
//           <button className=" capitalize text-lg   border py-1.5 px-4  border-white rounded-full flex items-center gap-2">
//             <TbBrandTypescript className=" text-2xl" /> TypeScript
//           </button>
//           <button className=" capitalize text-lg   border py-1.5 px-4  border-white rounded-full flex items-center gap-2">
//             <RiJavascriptLine className=" text-2xl" /> JavaScript
//           </button>
//           <button className=" capitalize text-lg   border py-1.5 px-4  border-white rounded-full flex items-center gap-2">
//             <GrCss3 className=" text-2xl" /> CSS
//           </button>
//           <button className=" capitalize text-lg   border py-1.5 px-4  border-white rounded-full flex items-center gap-2">
//             <FaHtml5 className=" text-2xl" /> HTML
//           </button>
//           <button className=" capitalize text-lg   border py-1.5 px-4  border-white rounded-full flex items-center gap-2">
//             <SiRedux className=" text-2xl" /> Redux
//           </button>
//           <button className=" capitalize text-lg   border py-1.5 px-4  border-white rounded-full flex items-center gap-2">
//             <SiRedux className=" text-2xl" /> redux toolkit
//           </button>
//           <button className=" capitalize text-lg   border py-1.5 px-4  border-white rounded-full flex items-center gap-2">
//             <SiTailwindcss className=" text-2xl" /> Tailwind CSS
//           </button>

//           <button className=" capitalize text-lg   border py-1.5 px-4  border-white rounded-full flex items-center gap-2">
//             <FaConnectdevelop className=" text-2xl" />
//             REST API
//           </button>
//           <button className=" capitalize text-lg   border py-1.5 px-4  border-white rounded-full flex items-center gap-2">
//             <GoVersions className=" text-2xl" /> Version controls
//           </button>
//           <button className=" capitalize text-lg   border py-1.5 px-4  border-white rounded-full flex items-center gap-2">
//             <RiNextjsLine className=" text-2xl" />
//             Next JS
//           </button>
//           <button className=" capitalize text-lg   border py-1.5 px-4  border-white rounded-full flex items-center gap-2">
//             <TbBrandAlpineJs className=" text-2xl" />
//             Alpine JS
//           </button>
//           <button className=" capitalize text-lg   border py-1.5 px-4  border-white rounded-full flex items-center gap-2">
//             <SiMui className=" text-2xl" /> Material UI
//           </button>
//           <button className=" capitalize text-lg   border py-1.5 px-4  border-white rounded-full flex items-center gap-2">
//             <SiAntdesign className=" text-2xl" /> ANT Design
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

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
    <div>
      <div>
        <h2 className="font-poppins text-2xl md:text-5xl border-b border-white p-2">Which</h2>
      </div>
      <div className="bg-mybrown min-h-screen p-3 md:p-10 pt-28">
        <FrontServices services={services} servicesName="FRONT-END DEVELOPMENT" />
        <FrontSkills skills={skills} skillsName="Skills" />
      </div>
    </div>
  );
};

export default Services;
