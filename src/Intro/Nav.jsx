import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./../css/Menu.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About Me" },
  { path: "/projects", label: "Project" },
  { path: "/lab", label: "Lab" },
];
function Nav() {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const tl = useRef();
  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    isMenuOpen ? tl.current.play() : tl.current.reverse();
  }, [isMenuOpen]);

  const handleClick = () => {
    toggleMenu();
  };
  return (
    <div className="menu-container uppercase " ref={container}>
      <div className="menu-bar text-darkKrem font-montserrat font-[600] bg-darkBrown w-screen p-8 flex justify-between  z-20 items-center">
        <div className="menu-logo">
          <Link to="/">Esmer</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay  fixed  top-0 left-0 w-screen p-8 h-screen bg-lightGreen z-30 flex flex-col ">
        <div className="menu-overlay-bar flex justify-between items-center  font-montserrat font-[510] text-2xl">
          <Link to="/">Esmer</Link>
          <div onClick={toggleMenu} className="menu-close-icon flex  cursor-pointer items-end">
            &#x2715;
          </div>
        </div>
        <div>
          <div className=" flex h-full items-center justify-center">
            <div className="menu-link ">
              {menuLinks.map((item, index) => (
                <div key={index} className="menu-link-item">
                  <div className="menu-link-item-holder relative" onClick={handleClick}>
                    <Link
                      className="menu-link text-black font-montserrat   text-6xl md:text-7xl font-normal tracking-tighter leading-none"
                      to={item.path}
                    >
                      {item.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="menu-info flex flex-col md:flex-row  md:items-center justify-around">
            <div className="menu-info-col flex flex-col justify-end">
              <a className=" font-montserrat" target="_blank" href="#">
                X &#8599;
              </a>
              <a className=" font-montserrat" target="_blank" href="https://www.instagram.com/esiquerela/">
                Instagram &#8599;
              </a>
              <a className=" font-montserrat" target="_blank" href="https://www.linkedin.com/in/esmereshreti/">
                LinkedIn &#8599;
              </a>
              <a className=" font-montserrat" target="_blank" href="https://github.com/esmerquenn">
                Github &#8599;
              </a>
            </div>

            <div className="menu-info-col flex flex-col justify-end">
              <a target="_blank" href="mailto:esmereshraty@gmail.com" className=" font-montserrat lowercase">
                esmereshraty@gmail.com
              </a>
              <a target="_blank" href="https://wa.me/+994503344549" className=" font-montserrat">
                +994 50 334 45 49
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
