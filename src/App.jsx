import React, { useLayoutEffect, useRef } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import gsap from "gsap";
import Work from "./Pages/Work";
import Lab from "./Pages/Lab";
import Intro from "./Intro/Intro";
import Nav from "./Intro/Nav";
import Cursor from "./components/Cursor";
function App() {
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
        })
        .to("#intro-slider", {
          yPercent: "-100",
          duration: 0.8,
          stagger: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="relative" ref={comp}>
       <Cursor/>

        <Intro />
        {/* <Nav /> */}
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
