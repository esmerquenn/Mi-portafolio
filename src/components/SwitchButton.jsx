import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterSkill } from "../api/slice/skillsSlice";

const SwitchButton = () => {
  const [isToggled, setIsToggled] = useState("Basic");
  const dispatch = useDispatch();
  const handleToggle = (header) => {
    setIsToggled(header);
    dispatch(filterSkill(header));
  };

  return (
    <div className=" w-1/3  flex  justify-end items-center ">
      <div className="  flex items-center bg-krem  rounded-full border-2 border-darkBrown shadow-krem   shadow-sm  overflow-hidden">
        <div
          onClick={() => handleToggle("Basics")}
          className={`font-[540] font-spaceGrotesk transition duration-200 py-2 px-4 ${
            isToggled == "Basics" ? "bg-brown text-krem " : "bg-krem text-brown border-r-2 border-brown"
          }`}
        >
          Basic
        </div>
        <div
          onClick={() => handleToggle("Framework")}
          className={`font-[540] font-spaceGrotesk transition duration-200 py-2 px-4 ${
            isToggled == "Framework" ? "bg-brown text-krem" : "bg-krem text-brown border-r-2 border-brown"
          }`}
        >
          Framework
        </div>
        <div
          onClick={() => handleToggle("Tool")}
          className={` font-[540] font-spaceGrotesk transition duration-200 py-2 px-4 ${
            isToggled == "Tool" ? "bg-brown text-krem" : "bg-krem text-brown border-r-2 border-brown"
          }`}
        >
          Tool
        </div>
        <div
          onClick={() => handleToggle("Animation")}
          className={` font-[540] font-spaceGrotesk transition duration-200 py-2 px-4 ${
            isToggled == "Animation" ? "bg-brown text-krem" : "bg-krem text-brown"
          }`}
        >
          Animation
        </div>
      </div>
    </div>
  );
};

export default SwitchButton;
