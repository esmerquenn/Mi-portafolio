import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

function Nav({ handleClick }) {
  useEffect(() => {
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        gsap.to(nav, {
          backdropFilter: "blur(10px)",
          duration: 0.3,
        });
      } else {
        gsap.to(nav, {
          backdropFilter: "blur(0px)",
          backgroundColor: "transparent",
          duration: 0.3,
        });
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <nav className="fixed z-30 top-0 left-0 right-0 px-10">
        <div className="flex justify-between items-center py-1 text-white border-b border-white">
          <div className="font-fancy text-3xl pt-2">
            <Link to="/">
              <strong className="uppercase mr-3">esmer</strong>
            </Link>
          </div>
          <ul className="pt-3 flex gap-6">
            <li>
              <Link to="/work" className="uppercase font-poppins font-medium sm:text-lg">
                Work
              </Link>
            </li>
            <li>
              <button onClick={() => handleClick("/services")} className="uppercase font-poppins font-medium sm:text-lg">
                Services
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
