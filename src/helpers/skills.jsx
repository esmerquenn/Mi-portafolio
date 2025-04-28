import { TbBrandTypescript, TbBrandAlpineJs } from "react-icons/tb";
import { FaConnectdevelop, FaReact, FaHtml5, FaNode, FaNodeJs, FaDocker, FaLinux } from "react-icons/fa";
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
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiGraphql,
} from "react-icons/si";
import { MdOutlineAnimation, MdOutlineDashboard, MdOutlineTipsAndUpdates } from "react-icons/md";
import { RiJavascriptLine, RiNextjsLine, RiSecurePaymentLine, RiServerFill, RiTeamLine } from "react-icons/ri";
import { GrCss3 } from "react-icons/gr";
import { GoVersions } from "react-icons/go";
import { IoPulseOutline } from "react-icons/io5";
import { BiBroadcast } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";

export const back_services = [
  { name: "Backend Development", icon: <FaNode className="text-4xl" /> },
  { name: "REST & GraphQL APIs", icon: <FaConnectdevelop className="text-4xl" /> },
  { name: "Database Management", icon: <SiPostgresql className="text-4xl" /> },
  { name: "Authentication & Security", icon: <RiSecurePaymentLine className="text-4xl" /> },
  { name: "Server-Side Rendering (SSR)", icon: <RiServerFill className="text-4xl" /> },
  { name: "Performance Optimization", icon: <AiOutlineRocket className="text-4xl" /> },
];

export const back_skills = [
  { name: "Node.js", icon: <FaNodeJs className="text-2xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-2xl" /> },
  { name: "PHP", icon: <SiExpress className="text-2xl" /> },
  { name: "SQL", icon: <SiExpress className="text-2xl" /> },
  { name: "MySQL", icon: <SiExpress className="text-2xl" /> },
  { name: "ORM", icon: <SiExpress className="text-2xl" /> },
  { name: "Entity Framework", icon: <SiExpress className="text-2xl" /> },
  { name: "Dapper", icon: <SiExpress className="text-2xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-2xl" /> },
  { name: "TypeORM", icon: <SiMongodb className="text-2xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl" /> },
  { name: "Redis", icon: <SiRedis className="text-2xl" /> },
  { name: "REST API", icon: <FaConnectdevelop className="text-2xl" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-2xl" /> },
  { name: "WebSockets", icon: <BiBroadcast className="text-2xl" /> },
  { name: "JWT & OAuth", icon: <RiSecurePaymentLine className="text-2xl" /> },
  { name: "Docker", icon: <FaDocker className="text-2xl" /> },
];

export const front_services = [
  { name: "Responsive Web Design", icon: <AiOutlineDesktop className=" text-2xl md:text-4xl" /> },
  { name: "Microinteractions", icon: <AiOutlineInteraction className="text-2xl md:text-4xl" /> },
  { name: "High-Performance", icon: <AiOutlineRocket className="text-2xl md:text-4xl" /> },
  { name: "Modern UI/UX Design", icon: <SiMaterialdesign className="text-2xl md:text-4xl" /> },
  { name: "E-Commerce", icon: <SiTrustedshops className="text-2xl md:text-4xl" /> },
  { name: "Web Dashboards", icon: <MdOutlineDashboard className="text-2xl md:text-4xl" /> },
  { name: "Animations & Interactive Elements", icon: <MdOutlineAnimation className="text-2xl md:text-4xl" /> },
  { name: "SEO & Accessibility Optimization", icon: <IoPulseOutline className="text-2xl md:text-4xl" /> },
  { name: "Headless CMS", icon: <SiPayloadcms className="text-2xl md:text-4xl" /> },
  { name: "API & Backend Integration", icon: <FaConnectdevelop className="text-2xl md:text-4xl" /> },
  { name: "Progressive Web Apps", icon: <SiProgress className="text-2xl md:text-4xl" /> },
];

export const front_skills = [
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


export const mentorship_services = [
    { name: "Front-End Mentorship", icon: <RiTeamLine className="text-4xl" /> },
    { name: "Code Reviews & Best Practices", icon: <MdOutlineTipsAndUpdates className="text-4xl" /> },
    { name: "Pair Programming Sessions", icon: <BsPeopleFill className="text-4xl" /> },
    { name: "Career & Portfolio Guidance", icon: <AiOutlineRocket className="text-4xl" /> },
  ];
  
  export const soft_skills = [
    { name: "Problem Solving", icon: <MdOutlineTipsAndUpdates className="text-2xl" /> },
    { name: "Team Collaboration", icon: <RiTeamLine className="text-2xl" /> },
    { name: "Effective Communication", icon: <BsPeopleFill className="text-2xl" /> },
    { name: "Time Management", icon: <AiOutlineRocket className="text-2xl" /> },
    { name: "Quick Learning", icon: <AiOutlineRocket className="text-2xl" /> },
    { name: "Critical Thinking", icon: <AiOutlineRocket className="text-2xl" /> },
    { name: "Work Ethic", icon: <AiOutlineRocket className="text-2xl" /> },
    { name: "Time Management", icon: <AiOutlineRocket className="text-2xl" /> },
  ];

 