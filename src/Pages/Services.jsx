import React from "react";
import { useParams } from "react-router-dom";
import { front_skills, front_services, back_services, back_skills, mentorship_services, soft_skills } from "./../helpers/skills";
import PageHeader from "../Components/PageHeader";

const Services = () => {
  const { slug } = useParams();

  let services, skills, servicesName;

  if (slug === "backend") {
    services = back_services;
    skills = back_skills;
    servicesName = "Back-End Development";
  } else if (slug === "mentoring") {
    services = mentorship_services;
    skills = [];
    servicesName = "Mentorship";
  } else {
    services = front_services;
    skills = front_skills;
    servicesName = "Front-End Development";
  }

  const skillGroups = [...(skills.length > 0 ? [{ title: "Technologies", skills }] : []), { title: "Soft skills", skills: soft_skills }];

  return (
    <>
      <PageHeader title={servicesName} />

      <section className="px-5 md:px-[8vw] pb-20 md:pb-32">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-wider text-muted mb-8">What I offer</p>
          {services.map((service, i) => (
            <div
              key={service.name}
              className="group grid grid-cols-[3rem_1fr_auto] md:grid-cols-[6rem_1fr_auto] items-center gap-4 py-6 md:py-8 border-t border-line last:border-b"
            >
              <span className="text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-2xl md:text-4xl tracking-tight group-hover:translate-x-3 transition-transform duration-500">
                {service.name}
              </h3>
              <span className="text-muted group-hover:text-accent transition-colors [&>svg]:!text-2xl md:[&>svg]:!text-3xl">
                {service.icon}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 md:px-[8vw] pb-28 md:pb-40">
        <div className="max-w-[1400px] mx-auto">
          {skillGroups.map((group) => (
            <div key={group.title} className="grid md:grid-cols-[1fr_3fr] gap-6 py-10 border-t border-line">
              <h2 className="text-2xl tracking-tight">{group.title}</h2>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill.name} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line text-sm md:text-[15px] [&>svg]:!text-lg">
                    {skill.icon}
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
};

export default Services;
