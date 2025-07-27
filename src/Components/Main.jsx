import React from "react";
import { Link } from "react-router-dom";
import esmer from "./../assets/mee.jpg";
import WorksMain from "./WorksMain";
function Main() {
  return (
    <div className="bg-black">
      <div className="  flex flex-col lg:flex-row px-10 items-center justify-evenly py-5">
        <div className=" lg:w-3/5">
          <h3 className="font-fancy uppercase text-3xl md:text-5xl mb-10">Hello I'M Esmer</h3>
          <div className=" font-poppins text-lg md:text-2xl  flex flex-col gap-5 pb-2">
            <p>
              I work as a fullstack developer. I have worked as a front-end developer for two startups, completing more than 15 websites and 5 dashboards. From one-page
              sites to full e-commerce platforms and cargo tracking systems, I tailor functionality and design to meet client needs.
            </p>
            <p>
              I take a patient, problem-solving approach to development, transforming designs into clean, responsive, and
              functional code.
            </p>
            <p>
              With a background in photography, I have a keen eye for aesthetics, ensuring visually appealing and user-friendly
              interfaces. 
            </p>
            <p>I adapt quickly, learn fast, and always bring fresh ideas to projects.</p>
            <button className=" bg-custom-btn capitalize text-lg font-medium w-[200px] border py-1.5 px-4 border-white rounded-full flex items-center justify-center gap-2">
              <a target="_blank" href="mailto:esmereshraty@gmail.com">
                Let’s collaborate!
              </a>
            </button>
          </div>
        </div>
        <div className=" md:w-1/2 lg:w-1/4">
          <img className="w-full opacity-50 border-4 border-white" src={esmer} alt="esmer" />
        </div>
      </div>
      <WorksMain />
      <div className="pb-20 flex justify-center items-center ">
        <button className=" transition-button bg-white text-black px-4 py-2  rounded-2xl ">
          <Link className=" uppercase font-fancy" to="/work">
            see my works
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Main;
