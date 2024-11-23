import React from "react";
import "../styles/common.css"

const About = () => {
  return (
    <section className="bg-white text-black py-20 px-8">
      <h1 className="text-5xl font-bold text-red-600 text-center">About TEDxAU</h1>
      <p className="mt-8 text-lg leading-relaxed">
        TEDxAU is a local, self-organized TEDx event hosted at Anurag University. 
        Our goal is to bring together bright minds to give talks that inspire thought, 
        innovation, and action on a variety of topics to foster learning and spark conversations.
      </p>
      <p className="mt-6 text-lg leading-relaxed">
        Each year, we host remarkable speakers from various fields, showcasing their 
        inspiring ideas. Join us to explore new perspectives and engage in transformative discussions.
      </p>
    </section>
  );
};

export default About;
