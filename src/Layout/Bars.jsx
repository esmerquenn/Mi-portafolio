import React, { useState } from "react";
import "./Bar.css";
import { useNavigate } from "react-router-dom";
import { HiX } from "react-icons/hi";
import { animatePageIn } from "./animatePageIn";

const serviceOptions = [
  { slug: "frontend", name: "Front-End Development" },
  { slug: "backend", name: "Back-End Development" },
  { slug: "mentoring", name: "Mentoring" },
  { slug: "technical-supporty-frontend", name: "Technical Support (Front-End)" },
  { slug: "technical-supporty-backend", name: "Technical Support (Back-End)" },
  { slug: "online-payment-integration", name: "Online Payment Integration" },
];

function Bars() {
  const [selectedService, setSelectedService] = useState("");
  const navigate = useNavigate();

  function handleNavigate(service, href) {
    setSelectedService(service);
    navigate(`/services/${href}`);
    animatePageIn();
  }

  return (
    <div className="bars">
      <div id="banner-1" className="bar bar1 flex justify-center items-center z-40 px-5">
        <button
          onClick={animatePageIn}
          aria-label="Close"
          className="absolute top-6 right-6 md:top-8 md:right-10 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white text-2xl hover:bg-accent transition-colors"
        >
          <HiX />
        </button>
        <div className="text-white w-full max-w-4xl">
          <p className="text-xs uppercase tracking-wider text-muted mb-4">Services</p>
          <h2 className="text-4xl md:text-6xl tracking-tight">Which service do you need?</h2>

          <div className="mt-10 md:mt-14 border-b border-white/15">
            {serviceOptions.map((service) => (
              <button
                key={service.slug}
                onClick={() => handleNavigate(service.name, service.slug)}
                className={`group w-full flex items-center justify-between text-xl md:text-3xl border-t border-white/15 py-5 md:py-6 text-left transition-colors hover:text-muted ${
                  selectedService === service.name ? "text-accent" : ""
                }`}
              >
                <span className="group-hover:translate-x-3 transition-transform duration-500">{service.name}</span>
                <span className="text-base">↗</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bars;
