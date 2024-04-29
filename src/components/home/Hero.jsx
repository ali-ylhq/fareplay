import React from "react";
// import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className="relative mt-16 md:mt-0" id="Home">
      <div className="flex flex-col items-center md:items-end px-6 relative z-10 sm:px-24 py-16 sm:py-56 text-white">
        <h2 className="text-white font-bold font-sans lg:text-6xl sm:text-5xl text-center sm:text-left mb-6">
          GAMBLE FOR FREE
        </h2>
        <p className=" text-slate-300 font-sans lg:text-1xl sm:text-1xl mb-8 text-center sm:text-left">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elitnibh euismod
          <br />
          tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
        <button className="text-white bg-yellow-500 p-2 px-4 hover:hover:pr-7 hover:pl-7 hover:opacity-75 duration-300">
          Get Yours Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
