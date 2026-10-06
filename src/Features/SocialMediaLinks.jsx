import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { socialLinks } from "../helpers/intrestes";

const icons = {
  github: <FaGithub />,
  linkedin: <FaLinkedinIn />,
  instagram: <FaInstagram />,
  leetcode: <SiLeetcode />,
};

const SocialMediaLinks = ({ className = "" }) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          aria-label={link.name}
          title={link.name}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-lg text-white/80 hover:text-black hover:bg-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          href={link.href}
        >
          {icons[link.name.toLowerCase()]}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
