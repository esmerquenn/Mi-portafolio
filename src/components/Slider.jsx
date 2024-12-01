
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bg from "./22.jpg";
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
          // opacity: 0,
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

  return (
    <div className="container-me">
      {Array(3)
        .fill()
        .map((_, index) => (
          <section key={index} className="card pinned" ref={(el) => pinnedSectionsRef.current.push(el)}>
            <div className="img">
              <img src={`../assets/bg1.jpg`} alt="bg" />
            </div>
          </section>
        ))}
      <section className="card card-scroll" ref={lastCardRef}>
        <div className="img">
          <img src={bg} alt="bg" />
        </div>
      </section>
      <section className="footer-slider" ref={footerRef} />
    </div>
  );
};

export default Slider;
