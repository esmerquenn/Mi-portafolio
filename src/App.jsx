import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import { animatePageIn, animatePageOut } from "./components/animatePageIn";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Nav from "./components/Nav";
import Bars from "./components/Bars";
import gsap from "gsap";
function App() {
  const location = useLocation();
  const [start, setStart] = useState(false)
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
            setStart(true)
          },
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: .3,
        })
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="relative " ref={comp}>
        <div
          id="intro-slider"
          className="h-screen p-10 bg-gray-50  absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col items-start justify-center gap-10 tracking-tight"
        >
          <h1 className="text-5xl md:text-9xl" id="title-1">
            Front-End Developer
          </h1>
          <h1 className="text-5xl md:text-9xl" id="title-2">
            Freelancer
          </h1>
        </div>
        <Bars />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
