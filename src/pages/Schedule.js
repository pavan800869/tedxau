import React from "react";
import "../styles/common.css"

const Schedule = () => {
  return (
    <section className="bg-white text-black py-20 px-8">
      <h1 className="text-5xl font-bold text-red-600 text-center">Event Schedule</h1>
      <div className="mt-10">
        <div className="mb-6">
          <h3 className="text-2xl font-bold">9:00 AM - Opening Ceremony</h3>
          <p className="mt-2">Welcome speech and introduction.</p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold">10:00 AM - Keynote Speaker 1</h3>
          <p className="mt-2">Placeholder for Speaker 1's topic.</p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold">1:00 PM - Panel Discussion</h3>
          <p className="mt-2">Placeholder for discussion details.</p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
