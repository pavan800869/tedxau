import React from "react";

const SpeakersSection = () => {
  return (
    <section className="bg-black text-white py-20 px-8">
      <h2 className="text-4xl font-bold text-red-600">Meet Our Speakers</h2>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="p-4 bg-white text-black rounded">Speaker 1 (Placeholder)</div>
        <div className="p-4 bg-white text-black rounded">Speaker 2 (Placeholder)</div>
        <div className="p-4 bg-white text-black rounded">Speaker 3 (Placeholder)</div>
      </div>
    </section>
  );
};

export default SpeakersSection;
