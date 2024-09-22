import React, { useEffect } from "react";
import "./../css/Cursor2.css";
function Cursor2() {
  useEffect(() => {
    let allBlocks = document.querySelectorAll(".my-block");

    allBlocks.forEach((block) => {
      let timeOutId;
      block.addEventListener("mouseover", () => {
        clearTimeout(timeOutId);
        block.classList.add("active");
        timeOutId = setTimeout(() => {
          block.classList.remove("active");
        }, 300);
      });
    });
  }, []);

  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[500px] h-[500px] relative overflow-hidden">
          <div className=" absolute  w-full h-full">
            <img className=" w-full h-auto object-cover" src="./../public/riri.jpeg" alt="" />
          </div>
          <div className=" absolute w-full h-full bg-[#ff2323] mix-blend-screen"></div>
          <div className=" absolute  w-full h-full flex flex-wrap content-between justify-between">
            {Array.from({ length: 100 }).map((_, index) => (
              <div
                key={index}
                className=" my-block w-[50px] h-[50px]  opacity-0 mix-blend-hard-light bg-[#ffc30f] transition-opacity duration-300 ease-in"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cursor2;
