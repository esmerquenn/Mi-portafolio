import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import { animatePageIn} from "./components/animatePageIn";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Nav from "./components/Nav";
import Bars from "./components/Bars";
import gsap from "gsap";
import Intro from "./components/Intro";
import Work from "./Pages/Work";
import Lab from "./Pages/Lab";
function App() {
  const location = useLocation();
  const [start, setStart] = useState(false);
  useEffect(() => {
    animatePageIn();

  }, [location, start]);

  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title-1", "#title-2"], {
        opacity: 0,
        delay: 1.3,
        y: "+=30",
        stagger: 0.5,
      })
        .to(["#title-1", "#title-2"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
          onComplete: () => {
            setStart(true);
          },
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 0.3,
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className={`relative ${!start ? "h-screen overflow-hidden bg-red": ""}`} ref={comp}>
        <Intro />
        <Bars />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/lab" element={<Lab />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
