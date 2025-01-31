import React, { useState } from "react";
import "./Bar.css";
import { useNavigate } from "react-router-dom";
import { animatePageIn } from "./animatePageIn";
const serviceOptions = [
  {slug:"frontend", name:"Front-End Development"},
  {slug:"backend", name:"Backend Development"},
  {slug:"mentoring", name:"Mentoring"},
  {slug:"technical-supporty-frontend", name:"Technical Support (Front-End)"},
  {slug:"technical-supporty-backend", name:"Technical Support (Back-End)"},
  {slug:"online-payment-integration", name:"Online Payment Integration"},
];
function Bars() {
  const [selectedService, setSelectedService] = useState("");
  const navigate = useNavigate();
  function handleNavigate(service, href) {
    console.log(service);
    
    setSelectedService(service)
    navigate(`/services/${href}`);
    animatePageIn();
  }
  return (
    <div className="bars ">
      <div id="banner-1" className="bar bar1 flex justify-center items-center z-40 ">
        <div className=" text-white">
          <h2 className="text-3xl text-center md:text-4xl font-semibold border-b border-white pb-3">
            Which Service Do You Need?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {serviceOptions.map((service, index) => (
              <button
                key={index}
                onClick={() => handleNavigate(service.name, service.slug)}
                className={`uppercase text-lg md:text-xl border py-3 px-6 rounded-full flex items-center justify-center gap-2 
              border-[#F5EEE6] transition-all hover:bg-[#F5EEE6] hover:text-black 
              ${selectedService === service.name ? "bg-[#F5EEE6] text-black" : "bg-transparent"}
            `}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bars;
