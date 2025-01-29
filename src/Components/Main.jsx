import React from "react";
import { Link } from "react-router-dom";
import esmer from "./../assets/mee.jpg";
import bah from "./../assets/bah.png";
import bar from "./../assets/bar.png";
import my from "./../assets/my.png";
import workr from "./../assets/workr.png";
function Main() {
  return (
    <div className="bg-black">
      <div className="  flex flex-col lg:flex-row px-10 items-center justify-evenly py-5">
        <div className=" lg:w-1/3">
          <h3 className="font-fancy uppercase text-3xl md:text-5xl mb-10">Hello I'M Esmer</h3>
          <p className=" font-poppins text-lg md:text-2xl  pb-2">
            I use my passion and skills to create digital products and experiences. National and international customers rely on
            me for design, implementation, and management of their digital products. As an independent, I work also with web
            agencies, companies, startups and individuals to create a blueprint for the digital business. Advisor and partner of
            some digital and fintech startups. Also, Judge at CSSDA and The Webby.
          </p>
        </div>
        <div className=" md:w-1/2 lg:w-1/4">
          <img className="w-full opacity-50 border-4 border-white" src={esmer} alt="esmer" />
        </div>
      </div>
      <div className=" py-20 ">
        <h3 className="px-10 font-fancy uppercase text-3xl md:text-5xl mb-10">Featured work</h3>
        <div className="my-grid px-10 grid grid-cols-3 gap-10">
          <a target="_blank" href="https://baharatci-clone.vercel.app/" className=" flex items-center gap-2">
            <span className="hidden md:block uppercase  text-right">
              <h3 className="font-fancy text-2xl md:text-3xl font-bold">Baharatci.az</h3>
              <h6 className=" font-poppins text-sm">html/css/js</h6>
            </span>
            <img className="w-[340px] opacity-50 border-4 border-white " src={bah} alt="baharatci" />
          </a>
          <a target="_blank" href="https://barshop-clone.vercel.app/" className=" flex items-center flex-row-reverse gap-2">
            <span className=" hidden md:block uppercase  text-left">
              <h3 className="font-fancy text-2xl md:text-3xl  font-bold">Barshop.az</h3>
              <h6 className=" font-poppins text-sm">html/tailwind/js</h6>
            </span>
            <img className="w-[340px] opacity-50 border-4 border-white " src={bar} alt="barshop" />
          </a>
          <a target="_blank" href="https://my-insure.vercel.app/" className=" flex items-center gap-2">
            <span className="hidden md:block uppercase  text-right">
              <h3 className="font-fancy text-2xl md:text-3xl font-bold">myinsure.az</h3>
              <h6 className=" font-poppins text-sm">html/css/alpine.js/js</h6>
            </span>
            <img className="w-[340px] opacity-50 border-4 border-white " src={my} alt="1sigorta.az" />
          </a>
          <a target="_blank" href="https://barshop-clone.vercel.app/" className=" flex items-center flex-row-reverse gap-2">
            <span className=" hidden md:block uppercase  text-left">
              <h3 className="font-fancy text-2xl md:text-3xl  font-bold">workr.az</h3>
              <h6 className=" font-poppins text-sm">html/tailwind/js</h6>
            </span>
            <img className="w-[340px] opacity-50 border-4 border-white " src={workr} alt="workr" />
          </a>
        </div>
      </div>

      <div className="py-20 flex justify-center items-center ">
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
