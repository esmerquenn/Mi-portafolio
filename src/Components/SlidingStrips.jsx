import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../helpers/works";

gsap.registerPlugin(ScrollTrigger);

const withImages = projects.filter((p) => p.image);
const rowOne = withImages.slice(0, 6);
const rowTwo = withImages.slice(6).concat(withImages.slice(0, Math.max(0, 12 - withImages.length)));

// Two rows of screenshots that slide in opposite directions while scrolling past
function SlidingStrips() {
  const sectionRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const common = { ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true } };
      gsap.fromTo(oneRef.current, { xPercent: 0 }, { xPercent: -12, ...common });
      gsap.fromTo(twoRef.current, { xPercent: -12 }, { xPercent: 0, ...common });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const tile = (project) => (
    <div
      key={project.name}
      className="shrink-0 w-[46vw] md:w-[24vw] aspect-[16/11] flex items-center justify-center"
      style={{ backgroundColor: project.color }}
    >
      <img src={project.image} alt={project.name} loading="lazy" className="w-[80%] h-auto shadow-md" />
    </div>
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-24 md:pt-40 pb-4">
      <div ref={oneRef} className="flex gap-[3vw] w-max ml-[-5vw]">
        {rowOne.map(tile)}
      </div>
      <div ref={twoRef} className="flex gap-[3vw] w-max mt-[3vw] ml-[-5vw]">
        {rowTwo.map(tile)}
      </div>
    </section>
  );
}

export default SlidingStrips;
