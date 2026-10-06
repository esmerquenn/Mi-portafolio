import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoundButton from "./RoundButton";
import Magnetic from "./Magnetic";
import avatar from "../assets/avatar-art.webp";
import { socialLinks } from "../helpers/intrestes";
import { profile } from "../helpers/profile";

gsap.registerPlugin(ScrollTrigger);

const bakuTime = () =>
  new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Baku" });

function Footer() {
  const footerRef = useRef(null);
  const curveRef = useRef(null);
  const buttonRef = useRef(null);
  const [time, setTime] = useState(bakuTime);

  useEffect(() => {
    const id = setInterval(() => setTime(bakuTime()), 15000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = { trigger: footerRef.current, start: "top bottom", end: "top 30%", scrub: true };
      // The white curve above the footer flattens as it comes into view
      gsap.fromTo(curveRef.current, { height: "12vh" }, { height: 0, ease: "none", scrollTrigger: trigger });
      gsap.fromTo(buttonRef.current, { x: "-15vw" }, { x: 0, ease: "none", scrollTrigger: trigger });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" ref={footerRef} className="relative bg-ink text-white">
      <div ref={curveRef} className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-10">
        <div className="absolute left-[-10%] w-[120%] h-[750%] -top-[650%] bg-white rounded-[0_0_50%_50%]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-[8vw] pt-28 md:pt-48">
        <div className="flex items-center gap-4 md:gap-6">
          <img src={avatar} alt={profile.name} className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover" />
          <h2 className="text-[clamp(2.75rem,7vw,6.5rem)] leading-[1] tracking-tight">Let&apos;s work</h2>
        </div>
        <h2 className="text-[clamp(2.75rem,7vw,6.5rem)] leading-[1] tracking-tight">together</h2>

        <div className="relative mt-16 md:mt-24 border-t border-white/20">
          <div ref={buttonRef} className="absolute right-0 md:right-[8%] -translate-y-1/2 top-0">
            <RoundButton
              href={`mailto:${profile.email}`}
              fill="bg-accentDark"
              className="w-32 h-32 md:w-44 md:h-44 bg-accent text-white text-base md:text-lg"
            >
              Get in touch
            </RoundButton>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-24 md:pt-28">
          <RoundButton href={`mailto:${profile.email}`} className="border border-white/30 px-8 py-5 md:py-6 text-base md:text-lg">
            {profile.email}
          </RoundButton>
          <RoundButton href={profile.cv} download={profile.cvFileName} className="border border-white/30 px-8 py-5 md:py-6 text-base md:text-lg">
            Download CV ↓
          </RoundButton>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 mt-24 md:mt-36 pb-8 text-sm">
          <div className="flex gap-10">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-muted mb-3">Version</p>
              <p>{new Date().getFullYear()} © Edition</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-muted mb-3">Local time</p>
              <p>{time} GMT+4</p>
            </div>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-muted mb-3">Socials</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map((link) => (
                <Magnetic key={link.name}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="nav-link capitalize">
                    {link.name}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
