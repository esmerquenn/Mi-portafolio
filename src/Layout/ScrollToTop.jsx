import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollTo } from "./smoothScroll";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollTo(0, { immediate: true });
    // Page height changed, so scroll-linked animations need new positions
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
