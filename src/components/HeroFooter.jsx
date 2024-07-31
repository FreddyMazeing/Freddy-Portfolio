import React from "react";
import line from "../assets/heroassets/line.png";
import {
  creativeDesigns,
  mainSkills,
  myImages,
  MyProgramming,
  socialMedia,
} from "../constants";
import { IoCodeOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { SiCodesignal } from "react-icons/si";
import mazeing from "../assets/heroassets/mazeing.webp";
import redblue from "../assets/heroassets/redblue.webp";
import ae from "../assets/needoptimization/ae.png";
import canva from "../assets/needoptimization/canva.png";
import da from "../assets/needoptimization/da.png";
import illu from "../assets/needoptimization/illu.png";
import lr from "../assets/needoptimization/lr.png";
import pro from "../assets/needoptimization/pro.png";
import ps from "../assets/needoptimization/ps.png";
import xd from "../assets/needoptimization/xd.png";
import grid from "../assets/heroassets/grid.png";
import gradient from "../assets/heroassets/gradient.png";
import redbluecombined from "../assets/heroassets/redbluecombined.webp";

const HeroFooter = () => {
  return (
    <div className="max-w-full min-h-screen bg-black">
      <div className="relative mi-h-screen max-w-full bg-gradient-to-t hover:from-blue-800/30 from-red-800/30">
        <div
          className="absolute bottom-0 left-0 opacity-10 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
        bg-[size:14px_24px]"
        ></div>
        {/* Horizontal Bar & Circle */}
        <div className="max-w-full min-h-[200px] flex flex-col">
          {/* Horizntal Bar */}
          <div className="grid grid-cols-3 items-center  justify-center max-w-full min-h-[70px] bg-gradient-to-r  from-blue-600/30 to-red-600/30  rounded-sm backdrop-blur-2xl  ">
            <div className="flex flex-col border-r-2 border-slate-500/20 items-center justify-center">
              <h4 className="font-sourcecodepro font-extrabold text-red-600 text-4xl">
                01
              </h4>
              <div className="grid  text-slate-500 gap-4 md:grid-cols-3">
                <p className="text-xs -tracking-tighter font-spacegrotesk">
                  Dream
                </p>
                <p className="text-xs -tracking-tighter font-spacegrotesk">
                  Create
                </p>
                <p className="text-xs -tracking-tighter font-spacegrotesk">
                  Master
                </p>
              </div>
            </div>
            <div></div>
            <div className="flex flex-col border-l-2 border-slate-500/20 items-center justify-center">
              <h4 className="font-sourcecodepro font-extrabold text-4xl text-blue-600">
                02
              </h4>
              <div className="grid gap-4 text-slate-500 md:grid-cols-3 items-center justify-center text-center">
                <p className="text-xs -tracking-tighter font-spacegrotesk">
                  Imaginative
                </p>
                <p className="text-xs -tracking-tighter font-spacegrotesk">
                  Passionate
                </p>
                <p className="text-xs -tracking-tighter font-spacegrotesk">
                  Determined
                </p>
              </div>
            </div>
          </div>
          {/* Circle */}
          <div className="max-w-full flex items-center justify-center">
            <div className=" relative h-44 w-44 rounded-full flex items-center justify-center -m-10 z-10 bg-slate-950/20 backdrop-blur-md shadow-md shadow-blue-600/20 ">
              <h4 className="font-spacegrotesk uppercase"> Creative Station</h4>
              <div className="absolute inset-0  z-10 flex items-center justify-center h-44 w-44 rounded-full border-blue-600 filter blur-xl brightness-110 contrast-150 border-4">
                <div className="h-48 w-48 rounded-full border-8 border-blue-600 filter blur-xl"></div>
              </div>
            </div>
          </div>
          <div className="flex  max-w-full items-center justify-center gap-4 ">
            <img
              src={line}
              alt="wavy-line"
              className="w-14 mt-20 filter blur-sm brightness-150 contrast-150"
            />
            <img
              src={line}
              alt="wavy-line"
              className="w-14 mt-20 filter blur-sm brightness-150 contrast-150"
            />
          </div>
        </div>
        {/* Welcoming Party */}

        <h1 className="font-spacegrotesk text-white uppercase text-xl font-bold text-center  mt-4  ">
          {" "}
          I'm
          <span className="from-red-600 bg-gradient-to-r  to-blue-700 text-transparent bg-clip-text ">
            {""} Freddy
          </span>{" "}
        </h1>
        <p className="text-center font-sora text-slate-500 uppercase mt-2 ">
          Welcome to my digital studio!{" "}
        </p>
        <p className="text-center font-sora text-slate-500 text-xs mt-2">
          I specialize in digital marketing, <br />
          web development, graphics design, videography, photography and motion
          graphics.
        </p>

        <h2 className="font-spacegrotesk text-xs text-center uppercase tracking-widest mt-4 font-bold text-blue-600">
          <span>
            {" "}
            Let's bring your vision to{" "}
            <span className="text-red-600">life!</span>
          </span>
        </h2>

        {/*Start of Beaty*/}
        <div className="relative max-w-full ">
          <div className="grid my-10  pb-10 md:grid-cols-3 gap-8  max-w-4xl mx-auto">
            {myImages.map((item, id) => (
              <div key={id} className="z-10">
                <div
                  className="group h-[400px] w-64 mx-auto my-5 duration-1000 ease-in-out 
      hover:[perspective:1000px] [perspective:1000px]"
                >
                  <div
                    className="relative h-full w-full rounded-xl shadow-xl
        [transform-style:preserve-3d] transition-all duration-500 ease-in-out 
        group-hover:[transform:rotateY(180deg)] "
                  >
                    {/* First Photo */}
                    <div className="absolute  inset-0">
                      <img
                        src={item.backgroundImage1}
                        alt="a boy on a river"
                        className="h-full w-full object-cover   rounded-md shadow-md shadow-black/40"
                      />
                      <div className="  bg-blue-600/10  mt-1 flex flex-col items-center hover:-translate-y-2 duration-500 ease-in-out  justify-center rounded-sm h-10 ">
                        <h2 className="text-xs uppercase font-spacegrotesk font-bold text-slate-400">
                          {item.title}
                        </h2>
                      </div>
                    </div>

                    {/* Second Photo */}
                    <div
                      className="absolute insert-0 h-full w-full rounded-md  bg-red-600/5
            [transform:rotateY(180deg)] [backface-visibility:hidden] backdrop-blur-xl"
                    >
                      <div className="absolute  inset-0 ">
                        {/* Description of Images */}
                        <div className="absolute inset-0 flex flex-col justify-center items-start border rounded-md border-blue-600/20 hover:border-blue-600/20 ">
                          <div className="flex flex-col items-start px-4 py-8 text-start h-full w-full justify-start  ">
                            <h1 className="text-xs lowercase font-spacegrotesk text-blue-500">
                              {item.heading}
                            </h1>
                            <h1 className=" font-sourcecodepro  font-bold  text-white   rounded-md  text-md">
                              {item.title}
                            </h1>
                            <p className="text-xs  lowercase tracking-wide  font-bold font-spacegrotesk  text-black">
                              {" "}
                              {item.description}
                            </p>
                            <div className="flex items-center mt-4 text-xs justify-center gap-2">
                              <div className="text-lg text-blue-600 hover:text-red-600">
                                {item.play}
                              </div>
                              <h1 className="hover:text-red-600 text-blue-600">
                                {item.buttons}
                              </h1>
                            </div>
                          </div>
                        </div>
                        {/* <img
                        src={item.backgroundImage2}
                        alt="a boy on a river"
                        className="h-full w-full object-cover   rounded-xl shadow- shadow-red-500"
                      /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 -top-60  md:left-96 ">
            <img
              src={redbluecombined}
              alt="robot image"
              className="w-[500px] filter blur-2xl  opacity-20 brightness-150 contrast-125"
            />
          </div>
          <div className="absolute inset-0 top-56 md:left-[1000px] hidden ">
            <img
              src={gradient}
              alt="robot image"
              className="w-[500px] filter blur-2xl  opacity-50 brightness-150 contrast-125"
            />
          </div>
        </div>

        <hr className="border-blue-600/10 max-w-3xl  mx-auto" />
        {/* Software Proficient */}
        <div className="flex text-slate-500 flex-col items-center text-center mx-auto py-10 ">
          <h2 className="font-spacegrotesk text-white uppercase text-xl font-bold">
            Tools & Tech
          </h2>
          <p className="text-sm lowercase  font-spacegrotesk my-2">
            The tools that power my work
          </p>
          <p className="text-xs font-sora">
            I am proficient in a variety of technologies and tools that enable
            me to create exceptional digital products. <br /> My skill set spans
            from{" "}
            <span className="text-red-600">
              {""}[Creative Designs]{""}
            </span>{" "}
            to
            <span className="text-blue-600">{""} [Programming].</span>
          </p>

          {/* Programming */}
          <div className="flex mt-10 mb-4 gap-2 items-center justify-center">
            <IoCodeOutline color="skyblue" />
            <h2 className=" uppercase  font-spacegrotesk text-slate-300 ">
              Programming
            </h2>
            <IoCodeSlashOutline color="skyblue" />
          </div>
          <div className="grid grid-cols-3 mx-2 md:grid-cols-4  mb-10">
            {MyProgramming.map((item, id) => (
              <div
                key={id}
                className="border p-2 grid items-center justify-center backdrop-blur-md bg-blue-900/10 border-slate-800/30 "
              >
                <div className="flex items-center justify-start">
                  {item.icon}
                  <h2 className="text-start translate-x-2 lowercase text-xs font-spacegrotesk">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
          {/* Creative Designs*/}
          <div className="flex mb-4 gap-2 items-center justify-center">
            <SiCodesignal color="skyblue" />
            <h2 className=" uppercase  font-spacegrotesk text-slate-300 ">
              Creative-Desings
            </h2>
            <SiCodesignal color="skyblue" />
          </div>
          <div className="grid grid-cols-4  md:grid-cols-8 gap-1 ">
            {creativeDesigns.map((item, id) => (
              <div key={id}>
                <div
                  className="flex flex-col  items-center justify-center backdrop-blur-xl 
                  bg-gradient-to-b from-blue-800/20 to-red-600/10
                md:h-[200px] h-[100px] w-20 md:w-32 rounded-bl-xl rounded-tr-xl duration-300 ease-in-out hover:scale-90 scale-100"
                >
                  <div className="text-3xl hover:shadow-red-200 rounded-full hover:shadow-xl md:text-5xl hover:md:text-6xl duration-300 ease-in-out mb-5 md:mb-10 opacity-50">
                    {item.icon}
                  </div>

                  <h2 className=" hover:tracking-widest duration-300 ease-in-out  hover:text-slate-200 lowercase text-xs font-spacegrotesk">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Say Hi To freddy */}
          <div className="py-20 flex flex-col justify-center items-center">
            <h1 className="font-spacegrotesk text-white uppercase text-xl font-bold">
              {" "}
              Say Hi To Freddy <br />
              <span className="text-red-600 lowercase text-xs font-normal">
                [Mazeing]
              </span>
            </h1>
            {/* Banto-Box */}
            <div className="relative mx-2 my-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-5 md:gap-20 border rounded-xl border-blue-600/10">
                <div className="z-10 border-b  border-blue-600/10">
                  <img src={mazeing} alt="mazeing" className="w-[400px] z-10" />
                </div>

                <div className="text-start px-2 max-w-[400px] flex flex-col justify-center">
                  <h2 className="text-md font-spacegrotesk uppercase text-slate-300">
                    The Man Behind the Website
                  </h2>
                  <p className="text-sm md:text-xs ">
                    With over 3 years immersed in the creative world, I've honed
                    my <span className="text-red-600">skills</span> <br />
                    to become a seasoned expert. My Strategic approach has
                    consistently delivered exceptional increased efficiency for
                    my clients. I'm passionate about creating unforgettable
                    experiences and committed to creating <br /> high-quality
                    products that truly makes a difference:
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-xs my-4">
                    {mainSkills.map((item, id) => (
                      <div key={id} className="flex items-center gap-4">
                        <div>{item.icon}</div>
                        <div>
                          <h1 className="font-spacegrotesk font-bold">
                            {item.skill}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="grid grid-cols-2 mr-2 mb-2
                   border border-red-600/20 items-center justify-between rounded-full "
                  >
                    <div className="flex items-center justify-center">
                      <h2 className="text-xs font-spacegrotesk   text-red-600">
                        Who is Mazeing?
                      </h2>
                    </div>
                    <div className="bg-slate-800 py-2 rounded-full flex items-center justify-center">
                      <h2 className="text-xs font-spacegrotesk text-blue-600">
                        go here
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0">
                <img
                  src={redblue}
                  alt="glowing-background"
                  className="w-[500px]"
                />
              </div>
              <div className="absolute inset-0">
                <img
                  src={redblue}
                  alt="glowing-background"
                  className="w-[400px]"
                />
              </div>

              {/* Ugly Cod */}
              <div className="absolute inset-0  left-24 top-0">
                <img
                  src={ae}
                  alt="glowing-background"
                  className="w-[60px]  filter blur-sm"
                />
              </div>
              <div className="absolute inset-0  left-96 top-0">
                <img
                  src={canva}
                  alt="glowing-background"
                  className="w-[40px]  filter "
                />
              </div>
              <div className="absolute inset-0 left-10 top-20">
                <img
                  src={da}
                  alt="glowing-background"
                  className="w-[100px] filter blur-sm"
                />
              </div>
              <div className="absolute inset-0 z-10 -left-10 top-56">
                <img
                  src={illu}
                  alt="glowing-background"
                  className="w-[80px] filter blur-sm"
                />
              </div>
              <div className="absolute inset-0  left-80 top-64">
                <img
                  src={lr}
                  alt="glowing-background"
                  className="w-[100px] filter blur-sm"
                />
              </div>
              <div className="absolute inset-0  left-52 z-10 top-52">
                <img src={pro} alt="glowing-background" className="w-[50px] " />
              </div>
              <div className="absolute inset-0 z-10  left-72 top-20">
                <img
                  src={ps}
                  alt="glowing-background"
                  className="w-[70px] filter "
                />
              </div>
              <div className="absolute inset-0  left-96 top-32">
                <img
                  src={xd}
                  alt="glowing-background"
                  className="w-[60px] filter blur-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ending Of Beauty */}
      </div>

      <div className="flex items-center justify-center  ">
        <div className="grid md:grid-cols-4 grid-cols-2 py-4 gap-10  md:gap-32 ">
          {socialMedia.map((item, id) => (
            <div key={id} className="">
              <div className="flex items-center justify-center gap-2">
                <div className="text-[#32A3E3]/30">{item.icon}</div>
                <h2 className="font-sora text-xs text-slate-300/40 lowercase font-light ">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroFooter;
