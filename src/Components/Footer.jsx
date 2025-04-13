import React from "react";
import CvButton from "./CvButton";
import SocialMediaLinks from "../Features/SocialMediaLinks";
import { interests } from "../helpers/intrestes";
import FancyButton from "./FancyButton";

function Footer() {

  return (
    <div className="bg-custom2  text-white   pt-20 px-10">
      <div className="relative h-[80vh]">
        <div className=" w-[500px] sm:w-[600px] absolute flex justify-end items-center pr-10 sm:pr-28 -left-[300px] h-[50vh] sm:h-[80vh] border rounded-full border-white">
          <CvButton />
        </div>
      </div>
      <div className=" mt-10 sm:mt-28 flex lg:items-end  flex-col lg:flex-row gap-3 lg:gap-14">
        <h1 className=" lg:w-2/5 font-tusker  uppercase text-[6rem] sm:text-[120px] lg:text-[198px]  tracking-wide ">
          LET'S CONNECT
        </h1>
        <div className=" flex flex-col justify-between gap-10">
          <div>
            <h3 className=" font-fancy uppercase font-bold  text-[4vw] md:text-2xl my-4">I'M always interested about</h3>
            <div className=" flex flex-wrap gap-4 font-medium  font-poppins text-lg sm:text-xl">
              {interests.map((item) => (
                <FancyButton key={item} icon="" text={item} style="uppercase md:text-3xl lg:text-4xl border p-2 md:px-4 border-[#F5EEE6] rounded-full "/>
              ))}
            </div>
          </div>
          <div>
            <div className=" flex justify-between items-center py-5 border-b border-white ">
              <h6 className=" text-sm md:text-2xl uppercase font-poppins font-medium text-white ">Are you minding a project?</h6>
              <FancyButton icon="" text="CONTACT" style="text-brown bg-white px-3 py-1 text-xl sm:text-2xl md:text-3xl  w-[120px] sm:w-[150px] md:w-[200px]  uppercase font-poppins rounded-full font-medium"/>
            </div>
            <SocialMediaLinks/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
