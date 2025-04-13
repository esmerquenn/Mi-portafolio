
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const FancyButton = ({ text, color, bg }) => {
  const wrapperRef = useRef(null);
  const boxesRef = useRef(null);
  const defaultTextRef = useRef(null);

  useEffect(() => {
    const wrapperEl = wrapperRef.current;
    const boxesEl = boxesRef.current;
    boxesEl.innerHTML += boxesEl.innerHTML;

    const singleWidth = boxesEl.scrollWidth / 2;
    const anim = gsap.to(boxesEl, {
      x: -singleWidth,
      duration: singleWidth / 100,
      ease: "linear",
      repeat: -1,
      paused: true,
    });

    const handleMouseEnter = () => {
      gsap.to(defaultTextRef.current, { opacity: 0, duration: 0.3 });
      gsap.to(boxesEl, { opacity: 1, duration: 0.3 });
      anim.play();
    };

    const handleMouseLeave = () => {
      anim.pause();
      gsap.to(boxesEl, { opacity: 0, duration: 0.3 });
      gsap.to(defaultTextRef.current, { opacity: 1, duration: 0.3 });
      gsap.set(boxesEl, { x: 0 });
    };

    wrapperEl.addEventListener("mouseenter", handleMouseEnter);
    wrapperEl.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapperEl.removeEventListener("mouseenter", handleMouseEnter);
      wrapperEl.removeEventListener("mouseleave", handleMouseLeave);
      anim.kill();
    };
  }, []);

  return (
    <button
      ref={wrapperRef}
      className={`wrapper overflow-hidden  uppercase md:text-3xl lg:text-4xl border p-2 md:px-4 border-[] rounded-full relative ${bg} ${color}`}
    >
      <div ref={defaultTextRef} className="default-text">
        {text}
      </div>
      <div ref={boxesRef} className="boxes flex gap-2.5 absolute inset-0 items-center" style={{ opacity: 0 }}>
        <div className="shrink-0">{text}</div>
        <div className="shrink-0">{text}</div>
        <div className="shrink-0">{text}</div>
      </div>
    </button>
  );
};

export default FancyButton;

