const SocialMediaLinks = ({ links }) => {
  return (
    <div className="flex text-sm md:text-xl gap-2 pt-4 pb-6">
      {links.map((link, idx) => (
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
