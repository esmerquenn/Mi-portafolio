import React from "react";
import TransitionLink from "./TransitionLink ";

function Nav() {
  return (
    <div className=" flex justify-between px-20 items-center gap-10 py-6">
      <TransitionLink href="/" label="Home" />
      <TransitionLink href="/about" label="About" />
      <TransitionLink href="/projects" label="Project" />
    </div>
  );
}

export default Nav;
