import React from "react";
import { Link } from "react-router-dom";
const months = [
  "Jan",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

import esmer from "./../assets/mee.jpg";
import bah from "./../assets/bah.png";
import bar from "./../assets/bar.png";
import my from "./../assets/my.png";
import workr from "./../assets/workr.png";
function Home() {
  return (
    <div className=" text-white">
      <div className="bg-custom  text-white   pt-20 px-10">
        <div className="flex flex-col lg:flex-row  items-end   justify-between">
          <div className=" mt-40 sm:mt-28 xl:w-2/5 flex items-end">
            <h1 className=" font-fancy uppercase text-[2rem] sm:text-[7vw] md:text-[5.7vw] font-bold ">
              <span className="flex items-end ">Web developer</span>
              <span>mentor</span>
            </h1>
          </div>
          <div className=" flex flex-col justify-between xl:w-2/5">
            <div className=" flex items-center justify-start absolute top-[100px] right-[20%] lg:static ">
              <h3 className=" font-fancy  text-[5rem]  lg:text-[7vw]">{new Date().getDate()}</h3>
              <div className=" w-[80px]">
                <h6 className=" font-fancy text-2xl ">{months[new Date().getMonth()]}</h6>
                <span className="font-poppins text-sm">Available for work</span>
              </div>
            </div>
            <p className=" font-poppins text-lg md:text-2xl  text-right pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iusto tenetur eaque dolores adipisci, at culpa
              voluptatibus obcaecati ducimus neque itaque animi nostrum magnam ullam natus ut beatae accusantium minus iste atque
              <span className=" hidden md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisci sequi officiis dolorum quaerat vel
                animi ad fuga ab veniam.
              </span>
            </p>
          </div>
        </div>
        <div className=" h-[40vh]"></div>
      </div>
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
      <div className="bg-custom2  text-white   pt-20 px-10">
        <div className=" mt-10 sm:mt-28 flex lg:items-end  flex-col lg:flex-row gap-3 lg:gap-14">
          <h1 className=" lg:w-2/5 font-tusker  uppercase text-[6rem] sm:text-[120px] lg:text-[198px]  tracking-wide ">LET'S CONNECT</h1>
          <div className=" flex flex-col justify-between gap-10">
            <div>
              <h3 className=" font-fancy uppercase font-bold  text-[4vw] md:text-2xl my-4">I'M always interested about</h3>
              <div className=" flex flex-wrap gap-4 font-medium  font-poppins text-lg sm:text-xl">
                <button className="uppercase md:text-3xl lg:text-4xl border p-2  border-[#F5EEE6] rounded-full">Frontend development</button>
                <button className="uppercase md:text-3xl lg:text-4xl border p-2  border-[#F5EEE6] rounded-full">photography</button>
                <button className="uppercase md:text-3xl lg:text-4xl border p-2  border-[#F5EEE6] rounded-full">Web development</button>
                <button className="uppercase md:text-3xl lg:text-4xl border p-2  border-[#F5EEE6] rounded-full">new bussiness</button>
                <button className="uppercase md:text-3xl lg:text-4xl border p-2  border-[#F5EEE6] rounded-full">Software development</button>
                <button className="uppercase md:text-3xl lg:text-4xl border p-2  border-[#F5EEE6] rounded-full">Mentoring</button>
                <button className="uppercase md:text-3xl lg:text-4xl border p-2  border-[#F5EEE6] rounded-full">chocolates</button>
                <button className="uppercase md:text-3xl lg:text-4xl border p-2  border-[#F5EEE6] rounded-full">startups</button>
              </div>
            </div>
            <div>
              <div className=" flex justify-between items-center py-5 border-b border-white ">
                <h6 className=" text-sm md:text-2xl uppercase font-poppins font-medium text-white ">
                  Are you minding a project?
                </h6>
                <button className=" text-brown bg-white px-3 py-1 text-xl sm:text-2xl md:text-3xl  w-[120px] sm:w-[150px] md:w-[200px]  uppercase font-poppins rounded-full font-medium">
                  <a target="_blank" href="mailto:esmereshraty@gmail.com">
                    CONTACT
                  </a>
                </button>
              </div>
              <div className=" flex text-sm md:text-xl gap-2 pt-4 pb-6">
                <a className=" uppercase font-poppins text-white font-medium" target="_blank" href="">
                  Github
                </a>
                <a className=" uppercase font-poppins text-white font-medium" target="_blank" href="">
                  linkedin
                </a>
                <a className=" uppercase font-poppins text-white font-medium" target="_blank" href="">
                  instagram
                </a>
                <a className=" uppercase font-poppins text-white font-medium" target="_blank" href="">
                  leetcode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
