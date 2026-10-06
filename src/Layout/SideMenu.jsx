import React from "react";
import { NavLink } from "react-router-dom";
import { socialLinks } from "../helpers/intrestes";
import { profile } from "../helpers/profile";
import { scrollTo } from "./smoothScroll";

function SideMenu({ open, onClose, onServices }) {
  const item = "group flex items-center gap-4 text-5xl md:text-6xl font-light py-1";
  const dot = (active) =>
    `w-2.5 h-2.5 rounded-full bg-white transition-transform duration-300 ${active ? "scale-100" : "scale-0 group-hover:scale-100"}`;

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      <aside
        className={`fixed z-40 top-0 right-0 h-full w-full sm:w-[480px] bg-ink text-white transition-transform duration-[800ms] ease-expo ${
          open ? "translate-x-0" : "translate-x-[calc(100%+100px)]"
        }`}
      >
        {/* Curved left edge */}
        <svg className="hidden sm:block absolute top-0 -left-[99px] w-[100px] h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <path
            d={open ? "M100 0 L100 100 Q100 50 100 0" : "M100 0 L100 100 Q-100 50 100 0"}
            fill="#0F1B2D"
            className="transition-all duration-700 ease-expo"
          />
        </svg>

        <div className="h-full flex flex-col justify-between px-10 sm:px-20 pt-28 pb-10">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted border-b border-white/20 pb-6 mb-10">Navigation</p>
            <nav className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/work", label: "Work" },
                { to: "/about", label: "About" },
              ].map((link) => (
                <NavLink key={link.to} to={link.to} end onClick={onClose} className={item}>
                  {({ isActive }) => (
                    <>
                      <span className={dot(isActive)} />
                      {link.label}
                    </>
                  )}
                </NavLink>
              ))}
              <button onClick={onServices} className={item}>
                <span className={dot(false)} />
                Services
              </button>
              <button
                onClick={() => {
                  onClose();
                  scrollTo("#contact");
                }}
                className={item}
              >
                <span className={dot(false)} />
                Contact
              </button>
            </nav>
          </div>

          <div>
            <a href={profile.cv} download={profile.cvFileName} className="inline-block mb-8 text-lg underline underline-offset-4">
              Download resume ↓
            </a>
            <p className="text-xs uppercase tracking-wider text-muted mb-3">Socials</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="capitalize hover:underline">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SideMenu;
