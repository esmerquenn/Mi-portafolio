import React from "react";
import cvFile from "./../assets/eshraty_esmer.pdf";
function CvButton() {
  return (
    <button className="  capitalize text-lg font-medium w-[200px] h-[200px] border  border-white rounded-full flex items-center justify-center">
      <a href={cvFile} download="eshraty_esmer.pdf">
        <button className="cv-button">Download CV</button>
      </a>
    </button>
  );
}

export default CvButton;
