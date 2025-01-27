import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
function Nav() {
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
    <nav className="  fixed  top-0 left-0 right-0  px-10 ">
      <div className=" flex justify-between py-4 text-white border-b border-slate-50">
        <div className="font-fancy text-3xl">
          <Link to="/">
            <strong className=" uppercase mr-3 ">esmer</strong>
          </Link>
          <strong>Front end developer</strong>
        </div>
        <ul>
          <li>aaa</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
