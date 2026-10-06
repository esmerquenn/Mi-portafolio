import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portrait from "../assets/portrait-art.webp";
import { profile } from "../helpers/profile";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const sliderRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const photoRef = useRef(null);

  // Endless name marquee: rAF loop whose direction flips with the scroll direction
  useEffect(() => {
    let xPercent = 0;
    let direction = -1;
    let frame;

    const st = gsap.to(sliderRef.current, {
      x: "-300px",
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
    });

    const animate = () => {
      if (xPercent < -100) xPercent = 0;
      else if (xPercent > 0) xPercent = -100;
      gsap.set([firstRef.current, secondRef.current], { xPercent });
      xPercent += 0.05 * direction;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    const parallax = gsap.to(photoRef.current, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: { trigger: photoRef.current, start: "top top", end: "bottom top", scrub: true },
    });

    return () => {
      cancelAnimationFrame(frame);
      st.scrollTrigger?.kill();
      st.kill();
      parallax.scrollTrigger?.kill();
      parallax.kill();
    };
  }, []);

  const name = `${profile.name} — `;

  return (
    <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-[#36597A] text-white">
      <div ref={photoRef} className="absolute inset-0 flex justify-center">
        <img
          src={portrait}
          alt={profile.name}
          className="h-full w-full md:w-auto object-cover object-top [mask-image:linear-gradient(to_right,transparent,black_18%,black_82%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]"
        />
      </div>
      {/* Darkens the bottom so the white marquee stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />

      {/* Location pill */}
      <div className="hidden md:flex absolute left-0 top-[38%] items-center gap-6 bg-ink rounded-r-full pl-10 pr-4 py-4">
        <p className="leading-tight text-[15px]">
          Located
          <br />
          in Azerbaijan
        </p>
        <span className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-9 h-9 animate-[spin_8s_linear_infinite]" fill="none" stroke="white" strokeWidth="1" aria-hidden>
            <circle cx="12" cy="12" r="10" />
            <ellipse cx="12" cy="12" rx="4.5" ry="10" />
            <path d="M2 12h20M4 7h16M4 17h16" />
          </svg>
        </span>
      </div>

      {/* Role */}
      <div className="absolute right-5 md:right-[12%] bottom-[24vh] md:bottom-auto md:top-[36%] text-right md:text-left">
        <svg viewBox="0 0 14 14" className="w-4 h-4 md:w-5 md:h-5 mb-6 md:mb-10 ml-auto md:ml-0" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M1 1l12 12M13 3v10H3" />
        </svg>
        <p className="text-2xl md:text-[2.1rem] leading-[1.15]">
          Full-Stack
          <br />
          Developer &amp; Mentor
        </p>
      </div>

      {/* Name marquee */}
      <div className="absolute bottom-[4vh] md:bottom-[6vh] w-full">
        <div ref={sliderRef} className="relative whitespace-nowrap w-max">
          <p ref={firstRef} className="relative m-0 inline-block text-marquee leading-none pr-[0.25em]">
            {name}
          </p>
          <p ref={secondRef} className="absolute left-full top-0 m-0 inline-block text-marquee leading-none pr-[0.25em]">
            {name}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
