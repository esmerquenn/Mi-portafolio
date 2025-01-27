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

function Home() {
  return (
    <div className="bg-custom  text-white   pt-20 px-10">
      {/* <h1 className=" uppercase"> Esmer eshraty</h1> */}
      <div className=" flex   h-full  justify-between">
        <div className=" w-2/5">
          <h1 className=" font-fancy uppercase text-[5.7vw] font-bold ">
            <span className="block">
              Web developer <span className=" text-lg text-pink-50">& </span>
            </span>
            <span>mentor</span>
          </h1>
        </div>
        <div className=" flex flex-col justify-between w-2/5">
          <div className=" flex items-center justify-start ">
            <h3 className=" font-fancy   text-[7vw]">{new Date().getDate()}</h3>
            <div className=" w-[80px]" >
              <h6 className=" font-fancy text-2xl ">{months[new Date().getMonth()]}</h6>
              <span className="font-poppins text-sm">Available for work</span>
            </div>
          </div>
          <p className=" font-poppins text-2xl  text-right pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iusto tenetur eaque dolores adipisci, at culpa
            voluptatibus obcaecati ducimus neque itaque animi nostrum magnam ullam natus ut beatae accusantium minus iste atque
            laboriosam architecto, quaerat facilis. Corporis, iusto voluptas modi perspiciatis animi reprehenderit aliquid
            excepturi voluptatibus unde minus deserunt sapiente, cumque, esse deleniti explicabo! Ipsum?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
