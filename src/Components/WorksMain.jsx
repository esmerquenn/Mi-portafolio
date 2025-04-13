import React, { useEffect, useRef } from "react";
import bah from "./../assets/bah.png";
import bar from "./../assets/bar.png";
import my from "./../assets/my.png";
import workr from "./../assets/workr.png";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../helpers/works";
function WorksMain() {
  const cardsContainerRef = useRef();
  const cardsRef = useRef([]);

  let cardsSection = [];
  for (let i = 0; i < projects.length; i++) {
    cardsSection.push(
      <div
        key={i}
        ref={(ref) => (cardsRef.current[i] = ref)}
        className=" w-[320px] md:w-[100vh] rounded-md h-[40vh] md:h-[60vh] shrink-0 overflow-hidden bg-white flex justify-center items-center"
      >
        <h2 className=" font-fancy text-mybrown text-[10vw]">{projects[i].name[0]}</h2>
        <a href={projects[i].url} target="_blank" className=" font-fancy text-mybrown text-[2rem] md:text-[4vw]">
          {projects[i].name.slice(1)}
        </a>
      </div>
    );
  }
  console.log(cardsRef.current, "a");
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(cardsRef.current, {
      xPercent: -100 * (cardsRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: cardsContainerRef.current,
        scrub: 1,
        end: "+=" + cardsContainerRef.current.offsetWidth,
        pin: true,
        snap: 1 / (cardsRef.current.length - 1),
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // lenis

  const lenis = new Lenis();
  lenis.on("scroll", () => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  return (
    <div ref={cardsContainerRef} className="pt-20 min-h-screen  overflow-x-hidden">
      <h3 className=" font-fancy px-10 uppercase text-3xl md:text-5xl mb-10">Featured work</h3>
      <div className=" flex flex-nowrap space-x-2 md:space-x-10 items-center">{cardsSection}</div>
    </div>
  );
}

export default WorksMain;
