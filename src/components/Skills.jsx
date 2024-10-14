import React from "react";
import Card from "./Card";
import SwitchButton from "./SwitchButton";
import { useDispatch, useSelector } from "react-redux";
import { resetSkill, skillsData } from "../api1/slice/skillsSlice";
function Skills() {
  const data = useSelector(skillsData);
  const dispatch = useDispatch();
  return (
    <div className="pb-4 bg-krem  min-h-screen overflow-hidden shadow-inner  shadow-brown">
      <div className=" w-[96%]  md:w-[90%] lg:w-[80%] mx-auto my-5 pb-4 bg-krem   rounded-2xl overflow-hidden shadow-inner  shadow-brown">
        <div className=" bg-brown text-krem py-5 px-16 mb-8 flex flex-wrap justify-between  items-center ">
          <div className=" w-1/3">
            <button onClick={() => dispatch(resetSkill())} className=" button-daire  inline-block">
              All
            </button>
          </div>
          <h2 className=" text-5xl font-[510]  font-montserrat text-center w-1/3 ">Skills</h2>
          <SwitchButton />
        </div>
        <div className=" flex flex-wrap gap-10 justify-center items-center">
          {data.map((item, i) => (
            <Card key={i} bg={item.bg} icon={item.icon} name={item.name} header={item.header} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
