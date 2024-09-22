import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { animatePageOut } from "./animatePageIn"

const TransitionLink = ({ href, label }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname !== href) {
      animatePageOut(href, navigate);
    }
  };

  return (
    <button
      className=" text-2xl md:text-4xl font-bold text-middleGreen font-spaceGrotesk"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TransitionLink;
