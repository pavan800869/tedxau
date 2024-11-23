import React from "react";
import "../styles/home.css"
import "../styles/common.css"

import "../styles/hero.css"

import centreVideo from "../images/centerVid.mp4"

const HeroSection = () => {
  return (
    <section className="hero-section bg-black text-white text-center py-20 relative">


<div className="absolute inset-0 bg-cover bg-center opacity-50">
        <video
          src={centreVideo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
      </div>


      <div className="relative z-10">
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Experience a journey of inspiring talks, transformative ideas, and groundbreaking innovation.
        </p>
        <div className="mt-8 space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg shadow-lg transition-all duration-300">
            Learn More
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full text-lg shadow-lg transition-all duration-300">
            Buy Tickets
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
