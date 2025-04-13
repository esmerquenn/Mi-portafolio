import { socialLinks } from "../helpers/intrestes";

const SocialMediaLinks = () => {
 
  return (
    <div className="flex text-sm md:text-xl gap-2 pt-4 pb-6">
      {socialLinks.map((link, idx) => (
        <a
          key={idx}
          className="uppercase font-poppins text-white font-medium"
          target="_blank"
          rel="noopener noreferrer"
          href={link.href}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
