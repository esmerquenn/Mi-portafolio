import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./../css/Slider.css";
import bg from './22.jpg'
gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  useEffect(() => {
    const footer = document.querySelector(".footer");
    const lastCard = document.querySelector(".card.scroll");
    const pinnedSections = Array.from(document.querySelectorAll(".pinned"));

    pinnedSections.forEach((section, index) => {
      const img = section.querySelector(".img");
      const nextSection = pinnedSections[index + 1] || lastCard;
      const endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: index === pinnedSections.length - 1 ? `+=${lastCard.offsetHeight / 2}` : footer.offsetTop - window.innerHeight,
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

    const heroH1 = document.querySelector(".hero h1");
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "+=400vh",
      scrub: 1,
      onUpdate: (self) => {
        const opacityProgress = self.progress;
        heroH1.style.opacity = 1 - opacityProgress;
      },
    });
  }, []);

  return (
    <div className="container">
      <section className="hero pinned">
        <h1>
          Sclupted Zen <br />
          play ground
        </h1>
      </section>
      <section className="card pinned">
        <div className="img">
          <img src={bg} alt="bg" />
        </div>
        aaaaaaaaaa
      </section>
      <section className="card pinned">
        <div className="img">
          <img src={bg}  alt="bg" />
        </div>
      </section>
      <section className="card pinned">
        <div className="img">
          <img  src={bg}  alt="bg" />
        </div>
      </section>
      <section className="card scroll">
        <div className="img">
          <img  src={bg}  alt="bg" />
        </div>
      </section>
      <section className="footer">
        <h1>Footer</h1>
      </section>
    </div>
  );
};

export default Slider;
