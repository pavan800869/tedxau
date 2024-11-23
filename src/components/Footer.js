import React from "react";
import { FaInstagram, FaYoutube, } from "react-icons/fa"; // Import icons from react-icons
import "../styles/common.css";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white p-6">
      <div className="footer-content">
        <p className="footer-text">© 2024 TEDxAU. All Rights Reserved.</p>
        <div className="social-media">
          {/* <a href="#" aria-label="Twitter" className="social-icon">
            <FaXTwitter />
          </a> */}
          <a href="#" aria-label="Instagram" className="social-icon">
            <FaInstagram />
          </a>
          <a href="#" aria-label="YouTube" className="social-icon">
            <FaYoutube />
          </a>
        </div>
        <p className="footer-follow">
          Follow us on <span className="text-red-600">Social Media</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
