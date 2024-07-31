import React, { useRef } from "react";
import fred1 from "../assets/heroassets/fred1.webp";
import fred2 from "../assets/heroassets/fred2.webp";
import { myWork } from "../constants";
import line2 from "../assets/heroassets/line2.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import curve from "../assets/heroassets/curve.webp";
import small from "../assets/heroassets/small.png";
import zhd from "../assets/heroassets/zhd.png";
import { useScroll, useTransform, motion } from "framer-motion";

const word = "with framer-motion";

const HeroSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -500]);
  return (
    <div className="relative bg-black max-w-full min-h-screen">
      <div className="absolute inset-0  max-w-full  bg-gradient-to-r z-20 from-blue-600/10 to-red-600/10 hover:opacity-0"></div>
      <div className=" max-w-7xl min-h-screen flex-col mx-auto flex items-center justify-center">
        <div className="absolute inset-0   z-10 max-w-7xl min-h-screen ">
          <div
            ref={container}
            className="flex items-end -translate-y-24 justify-around max-w-7xl min-h-screen "
          >
            <motion.img
              src={zhd}
              style={{ y: md }}
              alt="zhd logo"
              className="w-10 lg:w-32 "
            />
            <motion.img
              src={small}
              style={{ y: lg }}
              alt="small logo"
              className="w-10 lg:w-32 "
            />
          </div>
        </div>
        {/* Main Grid */}
        <div className=" grid gap-6 md:grid-cols-3 border mx-2 my-2 border-blue-950/30   rounded-bl-full rounded-tr-full ">
          {/* fred1 */}

          <div>
            <img src={fred1} alt="Main Image" />
          </div>
          {/* main center text & elements */}
          <div className="flex z-20 flex-col items-center rounded-3xl justify-center backdrop-blur-sm ">
            {/*main text */}
            <h1
              className="to-red-600/100  hover:to-red-600/10 bg-gradient-to-r from-blue-700/10 duration-200 ease-in-out hover:from-blue-700/100 text-transparent
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
              I'm still watching Dragon Ball from the 80s !. My favourite anime
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
        <div className=" flex flex-col items-center justify-center gap-2">
          <h1 className="uppercase font-sora text-xs mt-16  text-slate-300">
            My Territory
          </h1>

          <div className="relative">
            <img
              src={curve}
              alt="curved-line"
              className="w-[100px] filter blur-sm"
            />
            <img
              src={curve}
              alt=""
              className="w-[100px] absolute opacity-50 inset-0 "
            />
          </div>
        </div>
        <div className="relative z-20 grid grid-cols-3 md:grid-cols-6 mt-4 mb-20 bg-gradient-to-r hover:from-blue-600/10 from-blue-600/50 hover:to-red-600/50 duration-500 ease-in-out to-red-600/10 p-1 hover:px-2 max-w-ful rounded-sm gap-6 ">
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
