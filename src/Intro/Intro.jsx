import React from "react";

function Intro() {
  return (
    <div
      id="intro-slider"
      className="h-[100vh] p-10 bg-gray-50  absolute top-0 left-0 font-spaceGrotesk z-30 w-full flex flex-col items-start justify-center gap-10 tracking-tight"
    >
      <h1 className="text-5xl md:text-9xl" id="title-1">
        Front-End Developer
      </h1>
      <h1 className="text-5xl md:text-9xl" id="title-2">
        Freelancer
      </h1>
    </div>
  );
}

export default Intro;
