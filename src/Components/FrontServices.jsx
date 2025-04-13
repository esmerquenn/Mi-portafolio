import React from "react";
import FancyButton from "./FancyButton";

function FrontServices({ services, servicesName }) {
  return (
    <div className="text-white pt-20 flex flex-col gap-10 sm:gap-20 xl2:flex-row xl2:gap-1 justify-between items-center">
      <h2 className="font-poppins text-2xl md:text-3xl xl2:text-5xl border-b border-white p-2">{servicesName}</h2>
      <div className="xl2:w-1/2">
        <div className="flex flex-wrap md:justify-center xl2:justify-start gap-3 md:gap-4 font-medium font-poppins">
          {services.map((service, index) => (
            // <button
            //   key={index}
            //   className="uppercase text-sm sm:text-lg md:text-2xl border py-1.5 md:py-2 px-3 md:px-4 border-[#F5EEE6] rounded-full flex items-center gap-2"
            // >
            //   {service.icon} {service.name}
            // </button>
            <FancyButton
              key={service.name}
              text={service.name}
              icon={service.icon}
              style="uppercase text-sm sm:text-lg md:text-2xl border py-1.5 md:py-2 px-3 md:px-4 border-[#F5EEE6] rounded-full flex items-center gap-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FrontServices;
