// import React, { useEffect, useLayoutEffect, useRef } from "react";
// import "./../css/Home.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// function Home() {
//   gsap.to(".header .letters:first-child", {
//     x: () => -innerWidth * 3,
//     scale: 10,
//     easy: "power2.inOut",
//     scrollTrigger: {
//       start: "top top",
//       end: `+=200%`,
//       scrub: 1,
//     },
//   });
//   gsap.to(".header .letters:last-child", {
//     x: () => innerWidth * 3,
//     scale: 10,
//     easy: "power2.inOut",
//     scrollTrigger: {
//       start: "top top",
//       end: `+=200%`,
//       scrub: 1,
//     },
//   });

//   return (
//     <div className=" text-2xl md:text-9xl font-bold text-gray-900  text-center font-neon">
//       <div className="bg-white h-screen">
//         <div className="  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-full z-10">
//           <div className="letters flex uppercase font-warpen mx-10">
//             <div>E</div>
//             <div>S</div>
//             <div>M</div>
//             <div>E</div>
//             <div>R</div>
//           </div>
//           <div className="letters flex uppercase font-warpen mx-10">
//             <div>E</div>
//             <div>S</div>
//             <div>H</div>
//             <div>R</div>
//             <div>A</div>
//             <div>T</div>
//             <div>Y</div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="h-24  bg-[#8FBC8B]"></div>
//         <div className="h-24  bg-[#001514]"></div>
//         <div className="h-24  bg-[#8F1D2C]"></div>
//         <div className="h-24 bg-[#DB2B30]"></div>
//         <div className="h-24  bg-[#F7F7F7]"></div>
//         <div className="h-24  bg-[#234829]"></div>
//         <div className="h-24  bg-[#]"></div>
//         <div className="h-24  bg-[#]"></div>
//       </div>
//       {/* <div className=" flex flex-wrap p-10">
//         <div className="h-24 w-24 bg-[#7B3F00]"></div>
//         <div className="h-24 w-24 bg-[#8B5E3C]"></div>
//         <div className="h-24 w-24 bg-[#A0522D]"></div>
//         <div className="h-24 w-24 bg-[#D2B48C]"></div>
//         <div className="h-24 w-24 bg-[#C19A6B]"></div>
//         <div className="h-24 w-24 bg-[#A0522D]"></div>
//         <div className="h-24 w-24 bg-[#D2691E]"></div>
//         <div className="h-24 w-24 bg-[#F4A460]"></div>
//         <div className="h-24 w-24 bg-[#874f41]"></div>

//         <div className="h-24 w-24 bg-[#A78BFA]"></div>
//         <div className="h-24 w-24 bg-[#C084FC]"></div>
//         <div className="h-24 w-24 bg-[#6B46C1]"></div>
//         <div className="h-24 w-24 bg-[#8FBC8B]"></div>
//         <div className="h-24 w-24 bg-[#2fcf80]"></div>
//         <div className="h-24 w-24 bg-[#2F855A]"></div>
//         <div className="h-24 w-24 bg-[#234829]"></div>
//         <div className="h-24 w-24 bg-[#00C9A7]"></div>
//         <div className="h-24 w-24 bg-[#4A4A4A]"></div>
//         <div className="h-24 w-24 bg-[#00B4D8]"></div>
//         <div className="h-24 w-24 bg-[#007BFF]"></div>
//         <div className="h-24 w-24 bg-[#140a25]"></div>
//         <div className="h-24 w-24 bg-[#5A142A]"></div>
//         <div className="h-24 w-24 bg-[#400D2A]"></div>
//         <div className="h-24 w-24 bg-[#8F1D2C]"></div>
//         <div className="h-24 w-24 bg-[#DB2B30]"></div>
//         <div className="h-24 w-24 bg-[#FA0B4C]"></div>
//         <div className="h-24 w-24 bg-[#FF6F61]"></div>
//         <div className="h-24 w-24 bg-[#e64833]"></div>
//         <div className="h-24 w-24 bg-[#F7F7F7]"></div>
//         <div className="h-24 w-24 bg-[#fbe9d0]"></div>
//         <div className="h-24 w-24 bg-[#90aead]"></div>
//         <div className="h-24 w-24 bg-[#244855]"></div>

//       </div> */}
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useRef } from "react";
import "./../css/Home.css";
import gsap from "gsap";
import CircularButton from "../components/CircularButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Home() {
  const pRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    const marqueeAnimation = () => {
      gsap.fromTo(
        pRef.current,
        { x: "100vw" },
        {
          x: "-150vw",
          duration: 15,
          ease: "linear",
          repeat: -1,
        }
      );
    };

    marqueeAnimation();
  }, []);
  return (
    <div className="relative home">
      <div className=" flex justify-center h-[80vh] items-center gap-4 w-[96%]  md:w-[90%] lg:w-[80%] mx-auto">
        <div className="old-photo w-1/2">
          <img src="./assets/bg.jpg" alt="Old Photo" />
          {/* <img ref={imgRef} src="./assets/bg.jpg" alt="Old Photo" className="w-full" /> */}
        </div>
      </div>
      {/* <p
        ref={pRef}
        className=" uppercase absolute top-1/2  -translate-y-1/2  font-montserrat font-extrabold text-[7vw] bg-darkBrown text-lightGreen whitespace-nowrap"
      >
        What do i look like a girl with a plan ?
      </p> */}
      <CircularButton />
    </div>
  );
}

export default Home;
