import React from "react";
import gsap from "gsap";

function Card({ bg, icon, name, header }) {
  return (
    <div
      onMouseEnter={() => gsap.to("#cursor", { scale: 7, duration: 0.3 })}
      onMouseLeave={() => gsap.to("#cursor", { scale: 1, duration: 0.3 })}
      className={`card flex cursor-pointer  border rounded-3xl p-5 flex-col items-center shadow-inner shadow-brown ${bg}`}
    >
      <span className=" border-b-[3px] text-krem border-krem pb-2 w-full flex justify-center">
        <h3 className="text-2xl font-[510] font-montserrat">{header}</h3>
      </span>
      <span className="flex flex-col justify-center items-center py-2">
        <img className="w-[200px]" src={icon} alt="" />
        <h5 className="text-xl text-krem font-[510] font-montserrat">{name}</h5>
      </span>
      <span className=" span_with_after text-sm text-krem">
        <b className=" px-1 font-montserrat font-[500]">Projects</b>
      </span>
    </div>
  );
}

export default Card;
