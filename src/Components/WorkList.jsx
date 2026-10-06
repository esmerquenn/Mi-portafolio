import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { domainOf } from "../helpers/works";

function Preview({ project }) {
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: project.color }}>
      {project.image ? (
        <img src={project.image} alt="" loading="lazy" className="w-[80%] h-auto shadow-lg" />
      ) : (
        <span className="text-white/90 text-3xl mix-blend-difference">{project.name}</span>
      )}
    </div>
  );
}

// Desktop: bordered rows with a preview that follows the cursor. Mobile: a card grid.
function WorkList({ projects, showColumns = false }) {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const modalRef = useRef(null);
  const cursorRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const movers = [modalRef, cursorRef, labelRef].map((ref, i) => {
      const duration = [0.8, 0.5, 0.45][i];
      return {
        x: gsap.quickTo(ref.current, "left", { duration, ease: "power3" }),
        y: gsap.quickTo(ref.current, "top", { duration, ease: "power3" }),
      };
    });
    const onMove = (e) => movers.forEach((m) => (m.x(e.clientX), m.y(e.clientY)));
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const open = (project) => project.url && window.open(project.url, "_blank", "noopener,noreferrer");

  return (
    <>
      {showColumns && (
        <div className="hidden md:grid grid-cols-[2fr_1fr_1fr] px-[4vw] pb-6 text-xs uppercase tracking-wider text-muted">
          <span>Project</span>
          <span>Website</span>
          <span className="text-right">Status</span>
        </div>
      )}

      <div className="hidden md:block" onMouseLeave={() => setModal((m) => ({ ...m, active: false }))}>
        {projects.map((project, index) => (
          <div
            key={project.name}
            role="link"
            tabIndex={0}
            onClick={() => open(project)}
            onKeyDown={(e) => e.key === "Enter" && open(project)}
            onMouseEnter={() => setModal({ active: true, index })}
            className={`group grid grid-cols-[2fr_1fr_1fr] items-center px-[4vw] py-[3.2vw] border-t border-line last:border-b transition-[opacity,padding] duration-300 hover:opacity-50 ${
              project.url ? "cursor-pointer" : "cursor-default"
            }`}
          >
            <h3 className="text-[clamp(2.25rem,4.5vw,5.5rem)] leading-none tracking-tight group-hover:-translate-x-3 transition-transform duration-500">
              {project.name}
            </h3>
            <p className="text-lg group-hover:translate-x-3 transition-transform duration-500">{domainOf(project.url)}</p>
            <p className="text-lg text-right group-hover:translate-x-3 transition-transform duration-500">
              {project.url ? "Live" : "Private"}
            </p>
          </div>
        ))}
      </div>

      {/* Floating preview */}
      <div
        ref={modalRef}
        className={`hidden md:block fixed z-20 pointer-events-none w-[400px] h-[350px] -translate-x-1/2 -translate-y-1/2 overflow-hidden transition-transform duration-300 ease-out ${
          modal.active ? "scale-100" : "scale-0"
        }`}
      >
        <div className="h-full w-full transition-[top] duration-500 ease-expo absolute" style={{ top: `${modal.index * -100}%` }}>
          {projects.map((project) => (
            <div key={project.name} className="h-full w-full">
              <Preview project={project} />
            </div>
          ))}
        </div>
      </div>
      <div
        ref={cursorRef}
        className={`hidden md:block fixed z-20 pointer-events-none w-20 h-20 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
          modal.active ? "scale-100" : "scale-0"
        }`}
      />
      <div
        ref={labelRef}
        className={`hidden md:flex fixed z-20 pointer-events-none w-20 h-20 items-center justify-center text-white text-sm -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${
          modal.active ? "scale-100" : "scale-0"
        }`}
      >
        {projects[modal.index]?.url ? "View" : "Private"}
      </div>

      {/* Mobile cards */}
      <div className="md:hidden grid sm:grid-cols-2 gap-x-4 gap-y-10">
        {projects.map((project) => {
          const Tag = project.url ? "a" : "div";
          return (
            <Tag
              key={project.name}
              {...(project.url ? { href: project.url, target: "_blank", rel: "noopener noreferrer" } : {})}
              className="block"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Preview project={project} />
              </div>
              <h3 className="text-3xl tracking-tight mt-4 pb-3 border-b border-line">{project.name}</h3>
              <p className="text-muted mt-3 flex justify-between">
                <span>{domainOf(project.url)}</span>
                <span>{project.url ? "Live" : "Private"}</span>
              </p>
            </Tag>
          );
        })}
      </div>
    </>
  );
}

export default WorkList;
