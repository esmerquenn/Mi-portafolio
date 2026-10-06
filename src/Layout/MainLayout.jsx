import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Nav from "./Nav";
import { animatePageOut } from "./animatePageIn";
import Bars from "./Bars";
import ScrollToTop from "./ScrollToTop";
import Preloader from "./Preloader";
import Footer from "../Components/Footer";
import { initSmoothScroll } from "./smoothScroll";

function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => initSmoothScroll(), []);

  const handleClick = (href) => {
    if (location.pathname !== href) {
      animatePageOut(href, navigate);
    }
  };
  return (
    <div className="font-sans bg-white text-ink">
      <Preloader />
      <Bars />
      <Nav handleClick={handleClick} />
      <ScrollToTop />
      <main className="relative z-10 bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
