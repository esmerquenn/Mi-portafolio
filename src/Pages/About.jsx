import React from "react";
import PageHeader from "../Components/PageHeader";
import RoundButton from "../Components/RoundButton";
import portrait from "../assets/portrait-art.webp";
import { profile, stats, focusAreas } from "../helpers/profile";
import { front_skills, back_skills, soft_skills } from "../helpers/skills";

const groups = [
  { title: "Front-End", skills: front_skills },
  { title: "Back-End", skills: back_skills },
  { title: "Soft skills", skills: soft_skills },
];

function About() {
  return (
    <>
      <PageHeader title="Helping brands thrive in the digital world" />

      <section className="px-5 md:px-[8vw] pb-24 md:pb-36">
        <div className="max-w-[1400px] mx-auto border-t border-line pt-12 md:pt-20 grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-start">
          <div className="md:pt-10">
            <svg viewBox="0 0 14 14" className="w-5 h-5 mb-10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M1 1l12 12M13 3v10H3" />
            </svg>
            <p className="text-xl md:text-2xl leading-relaxed">
              I&apos;m {profile.name}, a {profile.role.toLowerCase()} based in {profile.location}. I build responsive
              websites, e-commerce platforms and admin dashboards from the database to the last pixel.
            </p>
            <p className="text-muted md:text-lg leading-relaxed mt-6">
              I learn fast, take ownership of what I build and enjoy sharing what I know with developers who are just
              starting out. Currently open to full-time roles and freelance projects.
            </p>
            <div className="mt-12">
              <RoundButton
                href={profile.cv}
                download={profile.cvFileName}
                className="w-36 h-36 md:w-44 md:h-44 bg-ink text-white text-base md:text-lg"
              >
                Download CV
              </RoundButton>
            </div>
          </div>
          <img src={portrait} alt={profile.name} className="w-full aspect-[4/5] object-cover object-top" />
        </div>
      </section>

      <section className="px-5 md:px-[8vw] pb-24 md:pb-36">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[clamp(2.25rem,5vw,4.5rem)] leading-none tracking-tight mb-12 md:mb-20">I can help you with ...</h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-10">
            {focusAreas.map((area, i) => (
              <div key={area.title}>
                <p className="text-sm text-muted pb-6 border-b border-line">0{i + 1}</p>
                <h3 className="text-3xl md:text-4xl tracking-tight mt-8 mb-5">{area.title}</h3>
                <p className="leading-relaxed">{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-[8vw] pb-24 md:pb-36">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 border-t border-line">
          {stats.map((stat) => (
            <div key={stat.label} className="pt-8 pr-4">
              <p className="text-5xl md:text-6xl tracking-tight">{stat.value}</p>
              <p className="text-muted mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-[8vw] pb-28 md:pb-40">
        <div className="max-w-[1400px] mx-auto">
          {groups.map((group) => (
            <div key={group.title} className="grid md:grid-cols-[1fr_3fr] gap-6 py-10 border-t border-line">
              <h3 className="text-2xl tracking-tight">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill.name} className="px-4 py-2 rounded-full border border-line text-sm md:text-[15px]">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
