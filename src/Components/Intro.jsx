import React from "react";
import RoundButton from "./RoundButton";
import { stats, coreStack } from "../helpers/profile";

function Intro() {
  return (
    <section className="px-5 md:px-[8vw] pt-24 md:pt-40 pb-16 md:pb-28">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[1.7fr_1fr] gap-10 md:gap-16">
        <h2 className="text-[1.75rem] md:text-[2.4rem] leading-[1.3] font-normal">
          Helping companies ship fast, reliable web products. I build both sides of the web — clean interfaces and solid
          back-ends — and care about every detail in between.
        </h2>
        <div className="relative">
          <p className="text-muted md:text-lg leading-relaxed">
            The combination of my passion for design, code &amp; mentoring positions me in a unique place in the web
            development world.
          </p>
          <div className="mt-10 md:absolute md:mt-0 md:top-[calc(100%+3rem)] md:left-0">
            <RoundButton to="/about" className="w-36 h-36 md:w-44 md:h-44 bg-ink text-white text-base md:text-lg">
              About me
            </RoundButton>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-16 md:mt-56 grid grid-cols-2 lg:grid-cols-4 border-t border-line">
        {stats.map((stat) => (
          <div key={stat.label} className="pt-6 md:pt-8 pb-2 pr-4">
            <p className="text-5xl md:text-6xl tracking-tight">{stat.value}</p>
            <p className="text-muted mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto mt-10 md:mt-14 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="text-xs uppercase tracking-wider text-muted shrink-0">Core stack</p>
        <div className="flex flex-wrap gap-2">
          {coreStack.map((tech) => (
            <span key={tech} className="px-4 py-2 rounded-full border border-line text-sm md:text-[15px]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Intro;
