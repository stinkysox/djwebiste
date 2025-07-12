import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo + Tagline */}
        <div className="footer-brand">
          <p>Bijaya Das</p>
          <p className="footer-tagline">
            Spinning unforgettable moments across weddings, sangeet nights,
            college fests & more. Feel the vibe with DJ Bijaya Das!
          </p>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/https://www.instagram.com/bijayad35?igsh=MXI2M2V6N2psNG53/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/djbijayadas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/+917978500178"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DJ Bijaya Das. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
