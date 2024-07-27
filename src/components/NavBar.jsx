import React, { useState } from "react";
import { ImMenu } from "react-icons/im";
import { PiEyeClosedFill } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="sticky  top-0 z-50 md:py-3 py-6 backdrop-blur-lg duration-300 ease-in-out">
      {/* ???? border-b  hover:border-blue-600/10 border-red-600/10 */}
      <div className="container px-4 mx-auto relative text-sm">
        <div className="absolute inset-0 z-10  bg-gradient-to-r backdrop-blur-sm from-blue-600/10 to-red-600/10 py-4 rounded-md "></div>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-blue-600 text-2xl">Z</h1>
          </div>
          {/* Social media */}

          <ul className="hidden md:flex space-x-4  translate-x-24 text-xs items-center text-slate-500 lowercase font-spacegrotesk">
            <li>
              <a href="">Insta</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">linkedIn</a>
            </li>
          </ul>

          {/* Big Screen */}
          <ul className=" hidden md:flex space-x-8 text-red-600">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
