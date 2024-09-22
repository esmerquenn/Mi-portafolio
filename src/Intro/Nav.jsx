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
      // gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        // .to(".menu-link-item-holder", {
        //   y: 0,
        //   duration: 1,
        //   stagger: 0.1,
        //   ease: "power4.inOut",
        //   delay: -0.75,
        // });
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
      <div className="menu-bar text-lightGreen fixed top-0 left-0 w-screen p-8 flex justify-between  z-20 items-center">
        <div className="menu-logo">
          <Link to="/">Esmer</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay  fixed  top-0 left-0 w-screen p-8 h-screen bg-lightGreen z-10 flex ">
        <div className="menu-overlay-bar ">
          <div className="menu-logo">
            <Link to="/">Esmer</Link>
          </div>
          <div className="menu-close hidden md:block" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>
        <div style={{ flex: 2 }} className="menu-close-icon flex  cursor-pointer items-end">
          <p>&#x2715;</p>
        </div>
        <div style={{ flex: 4 }} className="menu-copy pt-32  flex flex-col justify-between md:pt-8">
          <div className="menu-links">
            {menuLinks.map((item, index) => (
              <div key={index} className="menu-link-item">
                <div className="menu-link-item-holder relative" onClick={handleClick}>
                  <Link
                    className="menu-link text-black  text-6xl md:text-7xl font-normal tracking-tighter leading-none"
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info flex">
            <div className="menu-info-col flex flex-col justify-end">
              <a href="#">X &#8599;</a>
              <a href="#">Instagram &#8599;</a>
              <a href="#">LinkedIn &#8599;</a>
              <a href="#">Behance &#8599;</a>
              <a href="#">Dribbble &#8599;</a>
            </div>

            <div className="menu-info-col">
              <p>esmereshraty@gmail.com</p>
              <p>+994503344549</p>
            </div>
          </div>
        </div>
        <div style={{ flex: 4 }} className="menu-preview flex justify-end items-end">
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  );
}

export default Nav;
