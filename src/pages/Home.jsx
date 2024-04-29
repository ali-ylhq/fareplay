import React from "react";
import HeroSection from "../components/home/Hero";
import IconButtons from "../components/common/IconButtons";
import Buttons from "../components/common/Buttons";

const Home = () => {
  return (
    <>
      {/* <HeroSection /> */}
      {/* <div className="flex flex-col items-center md:items-end px-6 relative z-20 sm:px-24 py-16 sm:py-56 text-white">
        <h2 className="text-white font-bold font-sans lg:text-6xl sm:text-5xl text-center sm:text-left mb-6 absolute">
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
      </div> */}
      <div className="z-30 absolute top-1/2 md:top-0 -translate-y-1/2 md:-translate-y-0 left-0 md:left-1/2 px-10 md:px-14 lg:px-28 text-white">
        <h2 className="text-white text-3xl font-normal">GAMBLE FOR FREE</h2>
        <h1 className="text-[#4AF5D3] text-5xl font-normal">EARN POINTS</h1>
        <div className="mt-1 ml-2">
          <IconButtons
            svg={
              <path
                d="M15.7492 14.6252H17.9994V16.8748H16.8743V18H14.6247V15.7503H13.4995V13.5H15.7492V14.6252ZM2.24962 14.6252H0V16.8748H1.12511V18H3.37473V15.7503H4.49985V13.5H2.25023V14.6252H2.24962ZM13.4995 4.5H14.6247V5.62515H15.7498V11.2503H14.6247V12.3755H12.375V14.6252H11.2499V13.5H10.1248V15.7503H7.87458V13.5H6.74947V14.6252H5.62435V12.3755H3.37473V11.2503H2.24962V5.62515H3.37473V4.5H4.49985V3.37485H5.62496V2.24969H12.375V3.37485H13.5002V4.5H13.4995ZM7.87458 10.1252V7.87546H6.74947V6.75031H4.49985V7.87546H3.37473V10.1252H4.49985V11.2503H6.74947V10.1252H7.87458ZM13.4995 7.87485V6.7497H11.2499V7.87485H10.1248V10.1245H8.99969V11.2497H7.87458V12.3748H10.1248V10.1245H11.2499V11.2497H13.4995V10.1245H14.6247V7.87485H13.4995ZM4.49985 3.37485V2.24969H3.37473V0H1.12511V1.12515H0V3.37485H2.24962V4.5H3.37473V3.37485H4.49985ZM16.8743 1.12515V0H14.6247V2.24969H13.4995V3.37485H14.6247V4.5H15.7498V3.37485H18V1.12515H16.8749H16.8743Z"
                fill="#4AF5D3"
              />
            }
            title={"Click LAUNCH APP"}
          />
          <IconButtons
            svg={
              <path
                d="M15.7492 14.6252H17.9994V16.8748H16.8743V18H14.6247V15.7503H13.4995V13.5H15.7492V14.6252ZM2.24962 14.6252H0V16.8748H1.12511V18H3.37473V15.7503H4.49985V13.5H2.25023V14.6252H2.24962ZM13.4995 4.5H14.6247V5.62515H15.7498V11.2503H14.6247V12.3755H12.375V14.6252H11.2499V13.5H10.1248V15.7503H7.87458V13.5H6.74947V14.6252H5.62435V12.3755H3.37473V11.2503H2.24962V5.62515H3.37473V4.5H4.49985V3.37485H5.62496V2.24969H12.375V3.37485H13.5002V4.5H13.4995ZM7.87458 10.1252V7.87546H6.74947V6.75031H4.49985V7.87546H3.37473V10.1252H4.49985V11.2503H6.74947V10.1252H7.87458ZM13.4995 7.87485V6.7497H11.2499V7.87485H10.1248V10.1245H8.99969V11.2497H7.87458V12.3748H10.1248V10.1245H11.2499V11.2497H13.4995V10.1245H14.6247V7.87485H13.4995ZM4.49985 3.37485V2.24969H3.37473V0H1.12511V1.12515H0V3.37485H2.24962V4.5H3.37473V3.37485H4.49985ZM16.8743 1.12515V0H14.6247V2.24969H13.4995V3.37485H14.6247V4.5H15.7498V3.37485H18V1.12515H16.8749H16.8743Z"
                fill="#4AF5D3"
              />
            }
            title={"Connect your wallet"}
          />
          <IconButtons
            svg={
              <path
                d="M15.7492 14.6252H17.9994V16.8748H16.8743V18H14.6247V15.7503H13.4995V13.5H15.7492V14.6252ZM2.24962 14.6252H0V16.8748H1.12511V18H3.37473V15.7503H4.49985V13.5H2.25023V14.6252H2.24962ZM13.4995 4.5H14.6247V5.62515H15.7498V11.2503H14.6247V12.3755H12.375V14.6252H11.2499V13.5H10.1248V15.7503H7.87458V13.5H6.74947V14.6252H5.62435V12.3755H3.37473V11.2503H2.24962V5.62515H3.37473V4.5H4.49985V3.37485H5.62496V2.24969H12.375V3.37485H13.5002V4.5H13.4995ZM7.87458 10.1252V7.87546H6.74947V6.75031H4.49985V7.87546H3.37473V10.1252H4.49985V11.2503H6.74947V10.1252H7.87458ZM13.4995 7.87485V6.7497H11.2499V7.87485H10.1248V10.1245H8.99969V11.2497H7.87458V12.3748H10.1248V10.1245H11.2499V11.2497H13.4995V10.1245H14.6247V7.87485H13.4995ZM4.49985 3.37485V2.24969H3.37473V0H1.12511V1.12515H0V3.37485H2.24962V4.5H3.37473V3.37485H4.49985ZM16.8743 1.12515V0H14.6247V2.24969H13.4995V3.37485H14.6247V4.5H15.7498V3.37485H18V1.12515H16.8749H16.8743Z"
                fill="#4AF5D3"
              />
            }
            title={"Enter your invite code"}
          />
        </div>
        <div className="flex gap-1">
          {/* <Buttons title={"LAUNCH APP"} bg={"#4AF5D3"} />
          <Buttons title={"LEARN MORE"} bg={"#410DFF"} /> */}
          <button className="bg-[#4AF5D350] hover:bg-[#4AF5D375] text-white font-semibold hover:text-white py-2 px-4 border border-[#4AF5D375] hover:border-[#4AF5D3] rounded hover:scale-105 duration-200">
            <p className="text-xs font-thin tracking-widest">LAUNCH APP</p>
          </button>
          <button className="bg-[#410DFF50] hover:bg-[#410DFF75] text-white font-semibold hover:text-white py-2 px-4 border border-[#410DFF75] hover:border-[#410DFF] rounded hover:scale-105 duration-200">
            <p className="text-xs font-thin tracking-widest">LEARN MORE</p>
          </button>
        </div>
      </div>
      <img
        src="/src/assests/images/hero-img.png"
        className="w-screen h-auto md:h-[80vh] absolute bottom-0"
        alt="hero"
      />
    </>
  );
};

export default Home;
