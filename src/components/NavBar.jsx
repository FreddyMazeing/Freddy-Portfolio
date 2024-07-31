import React, { useState } from "react";
import { ImMenu } from "react-icons/im";
import { PiEyeClosedFill } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky  top-0 z-50 md:py-3 py-6 backdrop-blur-lg duration-300 ease-in-out">
      {/* ???? border-b  hover:border-blue-600/10 border-red-600/10 */}
      <div className="container px-4 mx-auto relative text-sm">
        <div className="absolute inset-0 z-10  bg-gradient-to-r backdrop-blur-sm from-blue-600/10 to-red-600/10 py-4 rounded-md "></div>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-blue-600 hover:text-red-600 z-10 duration-200 ease-in-out text-2xl">
              Z
            </h1>
          </div>

          {/* Social media */}
          <ul className="hidden md:flex space-x-4 z-10 translate-x-24 text-xs items-center text-slate-500 lowercase font-spacegrotesk">
            <li>
              <a
                href="#"
                className="hover:text-blue-600 duration-200 ease-in-out"
              >
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 duration-200 ease-in-out"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 duration-200 ease-in-out"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 duration-200 ease-in-out"
              >
                <FaWhatsappSquare />
              </a>
            </li>
          </ul>

          {/* Big Screen */}
          <ul className=" hidden md:flex space-x-8 text-red-600 z-10">
            <li>
              <a
                href="#"
                className="hover:text-blue-600 duration-200 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 duration-200 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 duration-200 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Mobile drawer */}
          <div className="md:hidden sm:flex flex-col justify-end z-10">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <ImMenu /> : <AiOutlineClose />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div
            className="sticky right-0 z-10 w-full   flex flex-col
          justify-center items-center lg:hidden"
          >
            <ul className=" flex  flex-col gap-4 text-red-600 text-lg  pb-8 pt-8 px-8">
              <li className="hover:text-blue-600 duration-200 ease-in-out">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-blue-600 duration-200 ease-in-out">
                <a href="#">About</a>
              </li>
              <li className="hover:text-blue-600 duration-200 ease-in-out">
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className=" flex gap-x-10   mb-8 text-xl  items-center px-8 text-slate-500  ">
              <li className="hover:text-blue-600 duration-200 ease-in-out">
                <a href="#">
                  <FaInstagramSquare />
                </a>
              </li>
              <li className="hover:text-blue-600 duration-200 ease-in-out">
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li className="hover:text-blue-600 duration-200 ease-in-out">
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li className="hover:text-blue-600 duration-200 ease-in-out">
                <a href="#">
                  <FaWhatsappSquare />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
