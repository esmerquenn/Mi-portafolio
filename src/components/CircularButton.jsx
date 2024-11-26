import React from "react";

const CircularButton = () => {
  return (
    <div className=" hidden md:block fixed bottom-0 right-16 cursor-pointer ">
      <svg className="svg_mix" width="200" height="200" viewBox="0 0 270 270">
        <text fill="#EEE5C8" fontSize="25" textAnchor="middle" dominantBaseline="middle">
          <textPath className=" uppercase  font-montserrat " href="#circlePath" startOffset="50%">
            Go to Projects ♦︎❁♦︎ be happy 4u ♦︎❁♦︎
          </textPath>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 150 150"
            to="360 150 150"
            dur="20s"
            repeatCount="indefinite"
          />
        </text>
        <text fill="#EEE5C8" fontSize="40" textAnchor="middle" dominantBaseline="middle" x="150" y="150">
          ㋡
        </text>
        <defs>
          <path
            id="circlePath"
            d="M 150, 150
          m -84, 0
          a 84, 84 0 1,1 168,0
          a 84,84 0 1,1 -168,0"
          />
        </defs>
      </svg>
    </div>
  );
};

export default CircularButton;
