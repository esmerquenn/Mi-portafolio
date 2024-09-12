import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container").offsetWidth,
      },
    });
  }, []);

  return (
    <div className="container" style={{ display: "flex", height: "100vh" }}>
      <div className="panel" style={{ flex: "1 0 100%", backgroundColor: "#FF6347" }}>
        Panel 1
      </div>
      <div className="panel" style={{ flex: "1 0 100%", backgroundColor: "#4682B4" }}>
        Panel 2
      </div>
      <div className="panel" style={{ flex: "1 0 100%", backgroundColor: "#32CD32" }}>
        Panel 3
      </div>
    </div>
  );
};

export default HorizontalScroll;
