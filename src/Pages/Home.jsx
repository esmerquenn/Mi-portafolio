import React from "react";
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

import Footer from "../Components/Footer";
import Main from "../Components/Main";
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
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
