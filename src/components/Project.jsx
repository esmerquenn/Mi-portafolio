import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./../css/Project.css";
import portfolioImg from "./../assets/image.jpg";

const Project = () => {
  const followerRef = useRef(null);
  const posX = useRef(0);
  const posY = useRef(0);

  useEffect(() => {
    const follower = followerRef.current;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      mouseX = clientX;
      mouseY = clientY;
      // gsap.to("#cursor", {
      //   x: clientX,
      //   y: clientY,
      //   ease: "power4.out",
      // });

      gsap.to(follower, {
        x: posX.current + (mouseX - posX.current),
        y: posY.current + (mouseY - posY.current),
        ease: "power4.out",
      });

      posX.current = mouseX;
      posY.current = mouseY;
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    document.querySelector(".cursor").classList.add("active");
    document.querySelector(".cursor-follower").classList.add("active");
    // document.querySelector(".cursor").textContent("alooo")
  };

  const handleMouseLeave = () => {
    // document.querySelector(".cursor").classList.remove("active");
    // document.querySelector(".cursor-follower").classList.remove("active");
    console.log("salam");
  };

  return (
    <div id="wrapper">
      {/* <div id="cursor" className="cursor"></div> */}
      <div ref={followerRef} className="cursor-follower"></div>
      <div className="portfolio-item">
        <div className="portfolio-thumb">
          <img src={portfolioImg} alt="Portfolio Item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        </div>
      </div>
    </div>
  );
};

export default Project;
