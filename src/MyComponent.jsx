import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // const tl = gsap.timeline();
    // tl.from(".orange", { xPercent: -100 }).from(".purple", { xPercent: 100 }).from(".green", { yPercent: -100 });
    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: containerRef.current,
    //   start: "top top",
    //   end: "+=4000",
    //   scrub: true,
    //   pin: true,
    //   anticipatePin: 1,
    // });
    // ScrollTrigger.create({
    //   trigger: "#orange",
    //   start: "top top",
    //   end: "+=300px",
    //   pinSpacing: false,
    //   pin: true,
    // });
    gsap.utils.toArray(".panel").forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  return (
    <div ref={containerRef} id="container">
      <div className="panel purple">Purple Panel</div>
      <div id="orange" className="panel orange">
        Orange Panel
      </div>
      <div className="panel green">Green Panel</div>
      <div>saalm</div>
    </div>
  );
};

export default MyComponent;
