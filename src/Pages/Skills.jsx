import React from "react";

function Skills() {
  return (
    <div className=" bg-custom-work min-h-screen    pt-28 px-10 flex items-start justify-between">
      <div className=" w-2/5 font-poppins text-white sticky min-h-[50vh] flex justify-end flex-col  p-10 top-40 z-10">
        <h5 className=" uppercase text-3xl"> my Skills </h5>
        <p className=" my-3 text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quibusdam incidunt dolorum sint similique cumque
          architecto autem unde ut totam a in dolore labore doloribus sequi nihil saepe aut nulla qui rerum consectetur,
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quibusdam incidunt dolorum sint similique cumque
          architecto autem unde ut totam a in dolore ab cumque itaque assumenda perferendis. Obcaecati officia, dolorem ducimus
          nobis distinctio molestias neque modi.
        </p>
      </div>
      <div className=" w-3/5 bg-redy flex flex-col gap-10 px-[10%] ">
        <div>
          <h2 className="uppercase text-white text-[100px] tracking-wide font-bold font-fancy leading-[60px] mb-7 hover:italic ">
            javascript
          </h2>
          <span className="text-white uppercase font-medium font-poppins text-lg italic">- Front-end developer </span>
        </div>
       
      </div>
    </div>
  );
}

export default Skills;
