import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { stopScroll } from "./smoothScroll";

const words = ["Hello", "Salam", "Bonjour", "Ciao", "Olà", "Merhaba", "Hallå", "Guten Tag", "Hallo"];

// Flat and curved bottom edges of the curtain (viewBox 0 0 100 100)
const curved = "M0 0 L100 0 L100 0 Q50 100 0 0 Z";
const flat = "M0 0 L100 0 L100 0 Q50 0 0 0 Z";

function Preloader() {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const rootRef = useRef(null);
  const wordRef = useRef(null);
  const pathRef = useRef(null);

  // Lock scrolling for as long as the curtain is up
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    stopScroll(true);
    return () => stopScroll(false);
  }, []);

  // First word fades in, the rest flick through quickly
  useEffect(() => {
    if (index === 0) {
      gsap.fromTo(wordRef.current, { opacity: 0, y: 20 }, { opacity: 0.85, y: 0, duration: 0.8, ease: "power3.out" });
    }
    if (index === words.length - 1) return;
    const t = setTimeout(() => setIndex(index + 1), index === 0 ? 1000 : 150);
    return () => clearTimeout(t);
  }, [index]);

  // After the last word, lift the curtain while its curved edge flattens
  useEffect(() => {
    if (index !== words.length - 1) return;
    const tl = gsap.timeline({
      delay: 0.35,
      onComplete: () => {
        stopScroll(false);
        setDone(true);
      },
    });
    tl.to(wordRef.current, { opacity: 0, y: -40, duration: 0.4, ease: "power2.in" })
      .to(rootRef.current, { yPercent: -100, duration: 0.9, ease: "power3.inOut" }, "-=0.1")
      .to(pathRef.current, { attr: { d: flat }, duration: 0.6, ease: "power3.inOut" }, "<0.3");
    return () => tl.kill();
  }, [index]);

  if (done) return null;

  return (
    <div ref={rootRef} className="fixed inset-0 z-[100] bg-night text-white">
      <div className="h-full flex items-center justify-center">
        <p ref={wordRef} className="flex items-center gap-3 text-4xl md:text-6xl opacity-0">
          <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white" />
          {words[index]}
        </p>
      </div>
      {/* Curved bottom edge that trails the curtain as it lifts */}
      <svg className="absolute top-[calc(100%-1px)] left-0 w-full h-[18vh]" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <path ref={pathRef} d={curved} fill="#0A1322" />
      </svg>
    </div>
  );
}

export default Preloader;
