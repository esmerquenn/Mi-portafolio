import React from "react";

function FrontServices({services, servicesName}) {
  return (
    <div className="text-white pt-20 flex flex-col gap-4 lg:flex-row lg:gap-0 justify-between items-center">
      <h2 className="font-poppins text-2xl md:text-5xl border-b border-white p-2">{servicesName}</h2>
      <div className="lg:w-[50%]">
        <div className="flex flex-wrap gap-4 font-medium font-poppins">
          {services.map((service, index) => (
            <button
              key={index}
              className="uppercase text-lg md:text-2xl border py-2 px-4 border-[#F5EEE6] rounded-full flex items-center gap-2"
            >
              {service.icon} {service.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FrontServices;
