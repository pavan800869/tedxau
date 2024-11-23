import React, { useEffect, useState } from "react";
import "../styles/about.css";
import "../styles/aboutSection.css";
import AboutsecImg from "../images/aboutSec.png";

const AboutSection = () => {
  const stats = [
    { value: 28, label: "EVENTS" },
    { value: 15000, label: "ATTENDEES" },
    { value: 100000, label: "SOCIAL REACH" },
    { value: 100, label: "SPEAKERS" },
    { value: 12100000, label: "VIEWS" },
    { value: 10, label: "YEARS" },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const updateCounters = () => {
      stats.forEach((stat, index) => {
        const increment = Math.ceil(stat.value / 100);
        const interval = setInterval(() => {
          setCounters((prev) => {
            const newCounters = [...prev];
            if (newCounters[index] < stat.value) {
              newCounters[index] += increment;
            } else {
              newCounters[index] = stat.value;
              clearInterval(interval);
            }
            return newCounters;
          });
        }, 30);
      });
    };

    updateCounters();
  }, [stats]);

  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img
            src={AboutsecImg}
            alt="About Img"
            className="aboutImg"
          />
        </div>
        <h1 className="impact-title">
          A DECADE OF <span className="highlight">IMPACT</span>
        </h1>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <h2 className="stat-value">{counters[index].toLocaleString()}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
