import React from "react";
import Hero from "../Components/Hero";
import Intro from "../Components/Intro";
import WorkList from "../Components/WorkList";
import RoundButton from "../Components/RoundButton";
import SlidingStrips from "../Components/SlidingStrips";
import { projects } from "../helpers/works";

const featured = projects.filter((p) => p.image).slice(0, 5);

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <section className="px-5 md:px-[8vw]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-wider text-muted mb-8 md:mb-10 md:px-[4vw]">Recent work</p>
          <WorkList projects={featured} />
          <div className="flex justify-center mt-14 md:mt-20">
            <RoundButton to="/work" className="border border-line px-14 py-6 text-base md:text-lg">
              More work <sup className="text-xs">{projects.length}</sup>
            </RoundButton>
          </div>
        </div>
      </section>
      <SlidingStrips />
    </>
  );
}

export default Home;
