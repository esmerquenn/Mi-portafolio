import gsap from "gsap";
import React, { useEffect } from "react";
function Cursor() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to("#cursor", {
        x: clientX ,
        y: clientY,
        duration: 1,
        delay: 0,
        ease: "power4.out",
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div id="cursor" className="w-5 h-5 fixed top-0 left-0 bg-white rounded-full z-10 pointer-events-none mix-blend-difference " />
        {/* <div className="w-full h-screen flex  justify-center items-center ">
            <h1 onMouseEnter={()=>gsap.to("#cursor", {scale:8, duration:0.3})} onMouseLeave={()=>gsap.to("#cursor", {scale:1, duration:0.3})} className="text-9xl  text-white ">Hover me</h1>
        </div> */}
    </>
  );
}

export default Cursor;
