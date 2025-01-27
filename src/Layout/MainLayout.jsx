import React from "react";
import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <nav className="  fixed  top-1 left-10 right-10 py-4 border-b border-slate-50">
        <div className=" flex justify-between text-white">
          <div className="font-fancy text-3xl">
            <Link to="/">
              <strong className=" uppercase mr-3 ">esmer</strong>
            </Link>
            <strong>Front end developer</strong>
          </div>
          <ul>
            <li>aaa</li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;
