import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Nav from "./Nav";
import { animatePageIn, animatePageOut } from "./animatePageIn";
import Bars from "./Bars";
function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   animatePageIn();
  // }, [location]);

  const handleClick = (href) => {
    console.log(href, "aa");
    if (location.pathname !== href) {
      animatePageOut(href, navigate);
    }
  };
  return (
    <div>
      <Bars />
      <Nav handleClick={handleClick} />
      <Outlet />
    </div>
  );
}

export default MainLayout;
