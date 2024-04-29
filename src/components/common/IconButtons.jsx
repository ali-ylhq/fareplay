import React from "react";

const IconButtons = ({ svg, title }) => {
  return (
    <div>
      <button className=" py-0 px-0 rounded inline-flex gap-1 items-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {svg}
        </svg>

        <span>
          <p className="text-xs font-thin tracking-widest">{title}</p>
        </span>
      </button>
    </div>
  );
};

export default IconButtons;
