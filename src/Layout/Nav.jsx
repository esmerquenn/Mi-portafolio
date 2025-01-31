// import React, { useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { Link, useNavigate } from "react-router-dom";
// function Nav() {
//   const [showOverlay, setShowOverlay] = useState(false);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const nav = document.querySelector("nav");

//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 50) {
//         gsap.to(nav, {
//           backdropFilter: "blur(10px)",
//           duration: 0.3,
//         });
//       } else {
//         gsap.to(nav, {
//           backdropFilter: "blur(0px)",
//           backgroundColor: "transparent",
//           duration: 0.3,
//         });
//       }
//     });

//     return () => {
//       window.removeEventListener("scroll", () => {});
//     };
//   }, []);
//   const handleServicesClick = () => {
//     setShowOverlay(true);
//     gsap.fromTo(".service-overlay", { y: "-100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 0.5, ease: "power3.out" });
//   };

//   // Hide overlay and navigate
//   const handleServiceSelect = (path) => {
//     gsap.to(".service-overlay", {
//       y: "-100%",
//       opacity: 0,
//       duration: 0.5,
//       ease: "power3.in",
//       onComplete: () => {
//         setShowOverlay(false);
//         navigate(path);
//       },
//     });
//   };
//   return (
//     <>
//       <nav className="  fixed z-30 top-0 left-0 right-0  px-10 ">
//         <div className=" flex justify-between items-center py-1 text-white border-b border-white">
//           <div className="font-fancy text-3xl py-2">
//             <Link to="/">
//               <strong className=" uppercase mr-3 ">esmer</strong>
//             </Link>
//             {/* <strong>Front end developer</strong> */}
//           </div>
//           <ul className=" pt-3 flex gap-6">
//             <li>
//               <Link to="/work" className=" uppercase font-poppins font-medium text-lg">
//                 Work
//               </Link>
//             </li>
//             <li>
//               <button onClick={handleServicesClick} className=" uppercase font-poppins font-medium text-lg">
//                 Services
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       {showOverlay && (
//         <div className="service-overlay fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center z-40">
//           <h2 className="text-3xl md:text-5xl font-bold mb-8">Which Service Do You Need?</h2>
//           <ul className="text-xl space-y-4">
//             <li>
//               <button onClick={() => handleServiceSelect("/services/frontend")} className="hover:text-gray-400">
//                 Front-End Development
//               </button>
//             </li>
//             <li>
//               <button onClick={() => handleServiceSelect("/services/backend")} className="hover:text-gray-400">
//                 Backend Development
//               </button>
//             </li>
//             <li>
//               <button onClick={() => handleServiceSelect("/services/mentoring")} className="hover:text-gray-400">
//                 Mentoring
//               </button>
//             </li>
//             <li>
//               <button onClick={() => handleServiceSelect("/services/tech-support-front")} className="hover:text-gray-400">
//                 Technical Support (Front-End)
//               </button>
//             </li>
//             <li>
//               <button onClick={() => handleServiceSelect("/services/tech-support-back")} className="hover:text-gray-400">
//                 Technical Support (Back-End)
//               </button>
//             </li>
//             <li>
//               <button onClick={() => handleServiceSelect("/services/payment-integration")} className="hover:text-gray-400">
//                 Online Payment Integration
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// }

// export default Nav;

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

function Nav({handleClick}) {


  useEffect(() => {
    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        gsap.to(nav, {
          backdropFilter: "blur(10px)",
          duration: 0.3,
        });
      } else {
        gsap.to(nav, {
          backdropFilter: "blur(0px)",
          backgroundColor: "transparent",
          duration: 0.3,
        });
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);



  return (
    <>
      {/* Navbar */}
      <nav className="fixed z-30 top-0 left-0 right-0 px-10">
        <div className="flex justify-between items-center py-1 text-white border-b border-white">
          <div className="font-fancy text-3xl py-2">
            <Link to="/">
              <strong className="uppercase mr-3">esmer</strong>
            </Link>
          </div>
          <ul className="pt-3 flex gap-6">
            <li>
              <Link to="/work" className="uppercase font-poppins font-medium text-lg">
                Work
              </Link>
            </li>
            <li>
              <button onClick={() => handleClick("/services")} className="uppercase font-poppins font-medium text-lg">
                Services
              </button>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}

export default Nav;
