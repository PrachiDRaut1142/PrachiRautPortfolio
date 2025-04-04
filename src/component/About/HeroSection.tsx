import React from "react";
import SocialIcons from "./SocialIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPhone } from "@fortawesome/free-solid-svg-icons";
import Terminal from "./Terminal";
import bgTexture from '../../assets/svg/bg-texture.svg';
const HeroSection = () => {
  return (
    <section
      id="about"
      style={{
        backgroundImage: `url(${bgTexture})`,
        backgroundSize: "cover",
      }}
    >
      <div className="md:h-screen flex flex-col md:flex-row justify-center items-center text-center px-6 space-y-10 md:mx-20">
        <div className="md:w-1/2 text-left mt-36 mx-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-green-300">
              Prachi Digambar Raut
            </span>
          </h1>
          <h2 className="text-3xl mt-4 mb-10">
            A{" "}
            <span className="relative">
              <span className="text-pink-400 cursor-pointer group">
                Trailblazing
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full w-96 bg-gray-800 text-white text-sm px-3 py-2 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                  Trailblazing software developer is someone who creates groundbreaking solutions, explores new technologies, and pushes boundaries in their field.
                </span>
              </span>
            </span>{" "}
            Software Developer
          </h2>
          <SocialIcons />
          <div className="md:flex space-y-4 md:space-x-4 md:space-y-0 mt-5">
            <a href="#_" className="relative inline-flex items-center justify-center px-10 py-3 w-64 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded shadow-xl group hover:ring-1 hover:ring-purple-500">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white"> <FontAwesomeIcon icon={faPhone} />
                <span className="ms-3">Contact Me</span></span>
            </a>

            <a href="#_" className="relative inline-flex items-center justify-center px-10 py-3 w-64 md:ms-4 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded shadow-xl group hover:ring-1 hover:ring-purple-500">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white"> <FontAwesomeIcon icon={faDownload} />
                <span className="ms-3">Resume</span></span>
            </a>
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  );
};

export default HeroSection;
