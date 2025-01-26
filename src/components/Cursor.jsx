// import gsap from "gsap";
// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// function Cursor() {
//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       const { clientX, clientY } = event;
//       gsap.to("#cursor", {
//         x: clientX ,
//         y: clientY,
//         duration: 1,
//         delay: 0,
//         ease: "power4.out",
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);
//   const cursorText = useSelector((state) => state.cursor.text);

//   return (
//     <>
//       <div id="cursor" className="w-5 h-5 fixed -top-2.5 -left-2.5  bg-transparent border rounded-full z-10 pointer-events-none mix-blend-difference " />

//       <span className=" text-3xl">
//       {cursorText}
//       </span>

//     </>
//   );
// }

// export default Cursor;

import gsap from "gsap";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Cursor() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to("#cursor", {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorText = useSelector((state) => state.cursor.text);

  return (
    <div>
      <div
        id="cursor"
        className="w-5 h-5 fixed -top-2.5 -left-2.5 bg-transparent border rounded-full z-10 pointer-events-none flex items-center justify-center mix-blend-difference"
      >
        <span className="text-white text-sm">{cursorText}</span>
      </div>
    </div>
  );
}

export default Cursor;
