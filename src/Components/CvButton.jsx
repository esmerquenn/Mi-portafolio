import React from "react";
import cvFile from "./../assets/esmer_eshraty_Fullstack.pdf";
function CvButton() {
  return (
    <button className="  capitalize text-lg md:text-2xl font-poppins font-medium w-[200px] h-[200px] border  border-white rounded-full flex items-center justify-center">
      <a href={cvFile} download="eshraty_esmer.pdf">
        <b className="cv-button">Download CV</b>
      </a>
    </button>
  );
}

export default CvButton;
