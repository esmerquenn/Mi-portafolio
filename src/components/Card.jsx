import React from "react";

function Card({bg, icon, name, header}) {
  return (
    <div className={`card flex  border rounded-3xl p-5 flex-col items-center ${bg}`}>
      <span className=" border-b-[3px] text-krem border-krem pb-2 w-full flex justify-center">
        <h3 className="text-3xl font-[510]">{header}</h3>
      </span>
      <span className="flex flex-col justify-center items-center py-2">
        <img className="w-[200px]" src={icon} alt="" />
        <h5 className="text-2xl text-krem font-[510]">{name}</h5>
      </span>
      <span className=" span_with_after text-sm text-krem font-[500]">
        <b className=" px-1">Projects</b>
      </span>
    </div>
  );
}

export default Card;
