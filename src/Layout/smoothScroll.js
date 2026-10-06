import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis = null;
// Remembers a stop request made before Lenis exists (the preloader mounts first)
let stopped = false;

export function initSmoothScroll() {
  lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  const tick = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  if (stopped) lenis.stop();

  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    lenis = null;
  };
}

export function scrollTo(target, options = {}) {
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.4, ...options });
    return;
  }
  const el = typeof target === "string" ? document.querySelector(target) : null;
  if (el) el.scrollIntoView({ behavior: options.immediate ? "auto" : "smooth" });
  else window.scrollTo(0, typeof target === "number" ? target : 0);
}

export function stopScroll(stop) {
  stopped = stop;
  document.documentElement.style.overflow = stop ? "hidden" : "";
  if (lenis) stop ? lenis.stop() : lenis.start();
}
