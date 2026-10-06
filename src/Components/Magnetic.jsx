import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Pulls its child toward the cursor while hovered, then springs back.
function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const onMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      xTo((e.clientX - (left + width / 2)) * strength);
      yTo((e.clientY - (top + height / 2)) * strength);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}

export default Magnetic;
