import React, { useState } from "react";
import "./../css/about.css";
import me from "./../assets/me.jpg";
function About() {
  return (
   <div>
     <div className=" w-[96%]  md:w-[90%] lg:w-[80%] mx-auto">
      <div className="text-2xl md:mt-5 mx-10 md:text-7xl font-bold text-gray-900  text-center font-montserrat flex flex-col justify-center items-center gap-2 md:gap-5">
        <h6 className=" text-[#9F9F9F] text-sm font-medium">Get to know me</h6>
        <h1 className=" capitalize text-[#f0f0f0] text-2xl  sm:text-5xl font-bold ">About me</h1>
        <div>
          <div class="loader">
            <div class="rotating-box">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  gap-12 my-5 md:my-10 ">
        <div className=" md:w-1/3 ">
          <img className="w-full h-full  object-cover" src={me} alt="men" />
        </div>

        <div className="md:w-2/3 flex flex-col  gap-6 md:pr-10">
          <div className="border-b border-[#555]">
            <h2 className=" text-[#009E66] font-medium text-2xl font-montserrat">Who am I ?</h2>
            <h2 className=" text-[#F0F0F0] font-bold text-2xl md:text-4xl">I'm Esmer Eshraty, a Software Developer</h2>
            <p className=" text-base font-montserrat text-[#9F9F9F] my-6 leading-8 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, id harum. Et aliquam doloribus facilis ut laborum at
              sint officiis recusandae perferendis sunt debitis veniam nemo impedit eveniet, nesciunt incidunt magni perspiciatis
              cupiditate repudiandae praesentium provident temporibus. Asperiores, dicta itaque.
            </p>
          </div>
          <div className=" flex flex-col md:flex-row justify-between md:items-center gap-10 text-[#ddd]">
            <div className=" flex flex-col justify-between gap-4">
              <span>
                <b className="text-white font-medium">Name</b> : Esmer Eshraty
              </span>
              <span>
                <b className="text-white font-medium">Age</b> : 24
              </span>
            </div>
            <div className=" flex flex-col justify-between gap-4">
              <span>
                <b className="text-white font-medium">Email</b> :{" "}
                <a target="_blank" className=" text-[#009E66]" href="mailto:esmereshraty@gmail.com">
                  esmereshraty@gmail.com
                </a>
              </span>
              <span>
                <b className="text-white font-medium">From</b> : Baku, AZE
              </span>
            </div>
          </div>
          <button className=" bg-[#009E66] text-white w-48 py-2 rounded-full my-10">Download CV</button>
        </div>
      </div>
    </div>
    <div className=" h-40 text-white">
      later will be ready
    </div>
   </div>
  );
}

export default About;
