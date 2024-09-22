import React from "react";
import TransitionLink from "./TransitionLink ";

function Nav() {
  return (
    <div className=" flex justify-between px-20 items-center gap-10 py-6">
      <TransitionLink href="/" label="Home" />
      <TransitionLink href="/work" label="Work" />
      <TransitionLink href="/about" label="About Me" />
      <TransitionLink href="/projects" label="Project" />
      <TransitionLink href="/lab" label="Lab" />
    </div>
  );
}

export default Nav;
