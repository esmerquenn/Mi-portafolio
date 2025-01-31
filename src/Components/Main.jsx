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
        <div className=" lg:w-3/5">
          <h3 className="font-fancy uppercase text-3xl md:text-5xl mb-10">Hello I'M Esmer</h3>
          <div className=" font-poppins text-lg md:text-2xl  flex flex-col gap-5 pb-2">
            {/* <p>
              I have worked as a front-end developer for two startups and have experience with 13 actual website projects and
              three dashboards. From one-page websites to complete e-commerce platforms, I have created them all, always modifying
              the functionality and design to satisfy the needs of my clients.
            </p>
            <p>
              I take a methodical, patient, and problem-solving approach to development. Any design can be converted into clear,
              useful, and responsive code by me.
            </p>
            <p>
              I have a strong visual perspective and an eye for aesthetics because of my photography background, which aids me in
              situations quickly, and always approach projects with a fresh viewpoint. designing interfaces that are both
              aesthetically pleasing and easy to use.
            </p>
            <p> I'm quick to adjust, quick to pick things up, and always approach projects with a fresh idea. </p>
            <p> Get in touch if you want to work together on a project!</p> */}
            <p>
              I have worked as a front-end developer for two startups, completing 13 websites and three dashboards. From one-page
              sites to full e-commerce platforms, I tailor functionality and design to meet client needs.
            </p>
            <p>
              I take a patient, problem-solving approach to development, transforming designs into clean, responsive, and
              functional code.
            </p>
            <p>
              With a background in photography, I have a keen eye for aesthetics, ensuring visually appealing and user-friendly
              interfaces.
            </p>
            <p>
              I adapt quickly, learn fast, and always bring fresh ideas to projects.
            </p>
              <button className=" bg-custom-btn capitalize text-lg font-medium w-[200px] border py-1.5 px-4 border-white rounded-full flex items-center justify-center gap-2">
               <a target="_blank" href="mailto:esmereshraty@gmail.com"> Let’s collaborate!</a>
              </button>
          </div>
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
