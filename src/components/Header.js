import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"
import "../styles/common.css"
import "../styles/header.css"
import tedxlogo from "../images/logoAU.jpeg"

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <nav className="navbar">
      <div className="absolute top-10 left-10">
          <Link to='/'><img
            src={tedxlogo}
            alt="TEDxAU Logo"
            className="w-48"
          /></Link>
        </div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/about" className="mx-2">About</Link>
        <Link to="/speakers" className="mx-2">Speakers</Link>
        <Link to="/schedule" className="mx-2">Schedule</Link>
        <Link to="/contact" className="mx-2">Contact</Link>
        <Link to="/register" className="bg-red-600 px-3 py-1 rounded">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
