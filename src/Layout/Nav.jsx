import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "../Components/Magnetic";
import SideMenu from "./SideMenu";
import { scrollTo } from "./smoothScroll";
import { profile } from "../helpers/profile";

gsap.registerPlugin(ScrollTrigger);

function Nav({ handleClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef(null);
  const location = useLocation();
  // Header text sits on the hero photo on the home page only
  const onPhoto = location.pathname === "/";

  useEffect(() => setMenuOpen(false), [location.pathname]);

  // The floating burger button scales in once the header has scrolled away
  useEffect(() => {
    const burger = burgerRef.current;
    gsap.set(burger, { scale: 0 });
    const st = ScrollTrigger.create({
      start: 0,
      end: 150,
      onLeave: () => gsap.to(burger, { scale: 1, duration: 0.25, ease: "power1.out" }),
      onEnterBack: () => {
        gsap.to(burger, { scale: 0, duration: 0.25, ease: "power1.out" });
        setMenuOpen(false);
      },
    });
    return () => st.kill();
  }, []);

  const textColor = onPhoto ? "text-white" : "text-ink";
  const linkClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

  return (
    <>
      <header className={`absolute top-0 left-0 right-0 z-30 ${textColor}`}>
        <div className="flex items-center justify-between px-5 md:px-10 py-6 md:py-8 text-[15px] md:text-base">
          <Link to="/" className="group flex items-center gap-1.5 overflow-hidden whitespace-nowrap">
            <span className="inline-block group-hover:rotate-[360deg] transition-transform duration-700 ease-expo">©</span>
            <span className="relative inline-flex overflow-hidden">
              <span className="group-hover:-translate-x-full transition-transform duration-500 ease-expo">Code by {profile.firstName}</span>
              <span className="absolute left-full group-hover:-translate-x-full transition-transform duration-500 ease-expo">
                {profile.name}
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <Magnetic>
              <NavLink to="/work" className={linkClass}>
                <span className="block px-4 py-2">Work</span>
              </NavLink>
            </Magnetic>
            <Magnetic>
              <NavLink to="/about" className={linkClass}>
                <span className="block px-4 py-2">About</span>
              </NavLink>
            </Magnetic>
            <Magnetic>
              <button onClick={() => handleClick("/services")} className="nav-link">
                <span className="block px-4 py-2">Services</span>
              </button>
            </Magnetic>
            <Magnetic>
              <button onClick={() => scrollTo("#contact")} className="nav-link">
                <span className="block px-4 py-2">Contact</span>
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.cv}
                download={profile.cvFileName}
                className={`ml-2 block px-5 py-2 rounded-full border transition-colors ${
                  onPhoto ? "border-white/50 hover:bg-white hover:text-ink" : "border-line hover:bg-ink hover:text-white"
                }`}
              >
                Resume ↓
              </a>
            </Magnetic>
          </nav>

          <button onClick={() => setMenuOpen(true)} className="md:hidden flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-current" /> Menu
          </button>
        </div>
      </header>

      <div ref={burgerRef} className="fixed z-50 top-4 right-4 md:top-6 md:right-8">
        <Magnetic>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center gap-2 transition-colors duration-300 ${
              menuOpen ? "bg-accent" : "bg-ink border border-white/15 hover:bg-accent"
            }`}
          >
            <span className={`block w-6 md:w-7 h-px bg-white transition-transform duration-300 ${menuOpen ? "translate-y-[4.5px] rotate-45" : ""}`} />
            <span className={`block w-6 md:w-7 h-px bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
          </button>
        </Magnetic>
      </div>

      <SideMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onServices={() => {
          setMenuOpen(false);
          handleClick("/services");
        }}
      />
    </>
  );
}

export default Nav;
