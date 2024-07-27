import React from "react";
import fred1 from "../assets/heroassets/fred1.webp";
import fred2 from "../assets/heroassets/fred2.webp";
import { myWork } from "../constants";
import line2 from "../assets/heroassets/line2.png";
import { FaArrowAltCircleRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative bg-black max-w-full min-h-screen">
      <div className="absolute inset-0  max-w-full  bg-gradient-to-r from-blue-600/10 to-red-600/10 hover:opacity-0"></div>
      <div className=" max-w-7xl min-h-screen flex-col mx-auto flex items-center justify-center">
        {/* Main Grid */}
        <div className="grid gap-6 md:grid-cols-3 border mx-2 my-2 border-blue-950/30  rounded-bl-full rounded-tr-full ">
          {/* fred1 */}
          <div>
            <img src={fred1} alt="Main Image" />
          </div>
          {/* main center text & elements */}
          <div className="flex flex-col items-center rounded-3xl justify-center backdrop-blur-xl ">
            {/*main text */}
            <h1
              className="to-red-600/100 hover:to-red-600/10 bg-gradient-to-r from-blue-700/10 duration-200 ease-in-out hover:from-blue-700/100 text-transparent
             bg-clip-text text-center font-spacegrotesk uppercase text-7xl font-extrabold md:text-8xl"
            >
              MAZEING
            </h1>
            <div className="grid grid-cols-2">
              <img
                src={line2}
                alt="line-stroke"
                className="w-56 filter blur-sm brightness-150 contrast-200 "
              />
              <img
                src={line2}
                alt="line-stroke"
                className="w-56 filter blur-sm brightness-150 contrast-200 "
              />
            </div>

            <h2 className="text-4xl  font-spacegrotesk font-thin text-slate-400 my-2 ">
              Can you believe it,
            </h2>
            <p className="text-sm text-center mx-2 font-spacegrotesk text-slate-500 font-light flex flex-col justify-center items-center">
              I'm still watching Dragon Ball from the 80s!. My favourite cartoon
              ,it kinda take me back to my childhood.
            </p>

            {/* paragraph */}

            {/* check out my work */}
            <div className="bg-slate-950 border-blue-600/10 duration-200 ease-in-out hover:border-red-600/30 border my-6 gap-4 flex items-center justify-around  rounded-full">
              <h1 className="text-xs mx-4 my-1 hover:text-slate-700 duration-200 ease-in-out text-slate-500  lowercase font-sourcecodepro ">
                Email Mazeing
              </h1>
              <div className="bg-red-600/10 rounded-full duration-200 ease-in-out hover:text-red-600 text-blue-600">
                <FaArrowAltCircleRight />
              </div>
            </div>
            <form action="" ema></form>
          </div>
          {/* fred2 */}
          <div>
            <img src={fred2} alt="Main Image" />
          </div>
        </div>
        {/* My Work */}
        <div className="realtive grid grid-cols-3 md:grid-cols-6 my-4 bg-gradient-to-r hover:from-blue-600/10 from-blue-600/50 hover:to-red-600/50 duration-500 ease-in-out to-red-600/10 p-1 hover:px-2 max-w-ful rounded-sm gap-6 ">
          {myWork.map((item, id) => (
            <div key={id}>
              <div className="flex flex-col items-center justify-center rounded-lg bg-black/50 hover:bg-red-600 backdrop-blur-xl  px-1   duration-500 ease-in-out py-2">
                <h3 className="text-xs lowercase hover:tracking-wide duration-500 text-slate-400 hover:text-slate-100 hover:font-extralight font-spacegrotesk">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
