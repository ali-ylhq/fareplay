import React from "react";

const Buttons = ({ title, bg }) => {
  return (
    <div>
      <button
        className={`bg-[${bg}] hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
      >
        <p className="text-xs font-thin tracking-widest">{title}</p>
      </button>
    </div>
  );
};

export default Buttons;
