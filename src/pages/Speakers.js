import React from "react";
import "../styles/common.css"

const Speakers = () => {
  return (
    <section className="bg-black text-white py-20 px-8">
      <h1 className="text-5xl font-bold text-red-600 text-center">Meet Our Speakers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="p-6 bg-white text-black rounded shadow-md">
          <h3 className="text-xl font-bold text-red-600">Speaker 1</h3>
          <p className="mt-2">Placeholder for Speaker 1 bio or description.</p>
        </div>
        <div className="p-6 bg-white text-black rounded shadow-md">
          <h3 className="text-xl font-bold text-red-600">Speaker 2</h3>
          <p className="mt-2">Placeholder for Speaker 2 bio or description.</p>
        </div>
        <div className="p-6 bg-white text-black rounded shadow-md">
          <h3 className="text-xl font-bold text-red-600">Speaker 3</h3>
          <p className="mt-2">Placeholder for Speaker 3 bio or description.</p>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
