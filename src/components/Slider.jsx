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
import bg9 from "./../assets/works/barshop.png";

// ////////////////////////////////////////////
import bg_res_1 from "./../assets/works_res/azer.png";
import bg_res_2 from "./../assets/works_res/baharatci.png";
import bg_res_3 from "./../assets/works_res/myinsure.png";
import bg_res_4 from "./../assets/works_res/wahl.png";
import bg_res_5 from "./../assets/works_res/workr.png";
import bg_res_6 from "./../assets/works_res/cosmo.png";
import bg_res_8 from "./../assets/works_res/securty.png";
import bg_res_7 from "./../assets/works_res/srgroup.png";
import bg_res_9 from "./../assets/works_res/barshop.png";

import "./../css/Slider.css";
import useWindowWidth from "../hooks/useWindowWidth";
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
  let arr = [
    { link: "https://azer-tech-clone.vercel.app/", img: bg1, resImg: bg_res_1 },
    { link: "https://baharatci-clone.vercel.app/", img: bg2, resImg: bg_res_2 },
    { link: "https://1sigorta.az/", img: bg3, resImg: bg_res_3 },
    { link: "https://barbershop-gray.vercel.app/", img: bg4, resImg: bg_res_4 },
    { link: "https://yusifsworkr.vercel.app/", img: bg5, resImg: bg_res_5 },
    { link: "https://cosmo-parkme.vercel.app/", img: bg6, resImg: bg_res_6 },
    { link: "https://sr-group-nu.vercel.app/", img: bg7, resImg: bg_res_7 },
    { link: "https://barshop-clone.vercel.app/", img: bg8, resImg: bg_res_8 },
  ];
  const windowWidth = useWindowWidth();
  return (
    <div className="container-me">
      {arr.map((item, index) => (
        <section key={index} className="card pinned " ref={(el) => pinnedSectionsRef.current.push(el)}>
          <a href={item.link} target="_blank" className="img border-4 rounded-lg border-gray-50 ">
            <img src={windowWidth < 768 ? item.resImg : item.img} alt="bg" />
            <div className="shadow_img"></div>
          </a>
        </section>
      ))}
      <section className="card card-scroll" ref={lastCardRef}>
        <div className="img">
          <img src={windowWidth < 768 ? bg_res_9 : bg9} alt="bg" />
        </div>
      </section>
      <section className="footer-slider" ref={footerRef} />
    </div>
  );
};

export default Slider;
