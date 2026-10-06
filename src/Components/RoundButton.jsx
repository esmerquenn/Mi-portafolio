import React from "react";
import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";

// Pill / circle button with a rising color fill on hover.
// Renders a router <Link> for `to`, an <a> for `href`, otherwise a <button>.
function RoundButton({ to, href, children, className = "", fill = "bg-accent", magnetic = true, ...props }) {
  const classes = `group relative inline-flex items-center justify-center overflow-hidden rounded-full transition-colors duration-300 ${className}`;
  const content = (
    <>
      <span
        aria-hidden
        className={`absolute left-[-10%] w-[120%] h-[150%] rounded-[50%] top-full group-hover:-top-1/4 transition-[top] duration-500 ease-expo ${fill}`}
      />
      <span className="relative z-10 inline-flex items-center gap-2 group-hover:text-white transition-colors duration-300">
        {children}
      </span>
    </>
  );

  let el;
  if (to) {
    el = (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  } else if (href) {
    el = (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  } else {
    el = (
      <button className={classes} {...props}>
        {content}
      </button>
    );
  }

  return magnetic ? <Magnetic>{el}</Magnetic> : el;
}

export default RoundButton;
