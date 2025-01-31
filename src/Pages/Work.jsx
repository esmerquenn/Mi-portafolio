const projects = [
  { name: "Barshop", url: "https://barshop-clone.vercel.app/" },
  { name: "Baharatci", url: "https://baharatci-clone.vercel.app/" },
  { name: "Cosmopark", url: "https://cosmo-parkme.vercel.app/" },
  { name: "Workr", url: "https://yusifsworkr.vercel.app/" },
  { name: "Mi'esta", url: "https://method.kon.az/" },
  { name: "Action", url: null },
  { name: "1sigorta.az", url: "https://1sigorta.az/" },
  { name: "Azer Tech", url: "https://azer-tech-clone.vercel.app/" },
  { name: "SS System", url: "https://www.smartsistem.az/" },
  { name: "Berber.Shop", url: "https://berbershop.az/" },
];

function Work() {
  return (
    <div>
      <div className=" bg-custom-work min-h-screen    pt-28 px-3 lg:px-10 flex flex-col xl:flex-row items-start justify-between">
        <div className=" font-poppins text-white xl:sticky min-h-[50vh] flex justify-end flex-col  md:p-10 top-40 z-10">
          <h5 className=" uppercase text-3xl">WORK</h5>
          <p className=" my-3 text-xl">
            I use a variety of technologies when I make websites. Even though my early work might seem amateurish, I pick things
            up quickly and create all of my own work on my own. My objective is to advance to the position of senior developer
            with a focus on creating intuitive user interfaces. I work to develop and hone my abilities with each project in order
            to realize that goal.
          </p>
        </div>
        <div className="flex flex-col items-start xl:items-end gap-10 2xl:px-[10%]">
          {projects.map((project, index) => (
            <div key={index}>
              <h2 className="uppercase text-white text-4xl md:text-7xl 2xl:text-[100px] tracking-wide font-bold font-fancy leading-[60px] md:mb-7 hover:italic hover:translate-x-1 transition-transform duration-500">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h2>
              <span className="text-white uppercase font-medium font-poppins text-lg italic">- Front-end Developer</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
