import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bg1 from "./../assets/works/azer-min.png";
import bg2 from "./../assets/works/baharatci-min.png";
import bg3 from "./../assets/works/myinsure-min.png";
import bg4 from "./../assets/works/wahl-min.png";
import bg5 from "./../assets/works/workr-min.png";
import bg6 from "./../assets/works/cosmo-min.png";
import bg8 from "./../assets/works/securty-min.png";
import bg7 from "./../assets/works/srgroup-min.png";

import "./../css/Slider.css";
gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const footerRef = useRef(null);
  const lastCardRef = useRef(null);
  const pinnedSectionsRef = useRef([]);

  useEffect(() => {
    const pinnedSections = pinnedSectionsRef.current;

    pinnedSections.forEach((section, index, sections) => {
      const img = section.querySelector(".img");
      const nextSection = sections[index + 1] || lastCardRef.current;
      const endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop}px top`;

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end:
            index === sections.length - 1
              ? `+=${lastCardRef.current.offsetHeight / 2}px`
              : footerRef.current.offsetTop - window.innerHeight,
          pin: true,
          pinSpacing: false,
          scrub: 1,
        },
      });

      gsap.fromTo(
        img,
        { scale: 1 },
        {
          scale: 0.5,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: endScalePoint,
            scrub: 1,
          },
        }
      );
    });
  }, []);
let arr = [bg1, bg2, bg3,bg4,bg5,bg6,bg7,]
  return (
    <div className="container-me">
      {arr
        .map((item, index) => (
          <section key={index} className="card pinned" ref={(el) => pinnedSectionsRef.current.push(el)}>
            <div className="img">
              <img src={item} alt="bg" />
              <div className="shadow_img"></div>
            </div>
          </section>
        ))}
      <section className="card card-scroll" ref={lastCardRef}>
        <div className="img">
          <img src={bg8} alt="bg" />
        </div>
      </section>
      <section className="footer-slider" ref={footerRef} />
    </div>
  );
};

export default Slider;
