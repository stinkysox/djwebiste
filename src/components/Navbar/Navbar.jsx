import React from "react";
import "./Navbar.css";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <section className="navbar">
      <div className="navbar-one">
        <p>Bijaya Das</p>
      </div>

      {/* Social icons */}
      <div className="navbar-socials">
        <motion.div
          className="nav-social-media-icon instagram"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{
            rotate: [0, -10, 10, -10, 10, 0],
            transition: { duration: 0.4 },
          }}
        >
          <a
            href="https://www.instagram.com/bijayad35?igsh=MXI2M2V6N2psNG53"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram />
          </a>
        </motion.div>

        <motion.div
          className="nav-social-media-icon facebook"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{
            rotate: [0, -10, 10, -10, 10, 0],
            transition: { duration: 0.4 },
          }}
        >
          {/* Facebook icon functionality can go here */}
        </motion.div>
      </div>
    </section>
  );
};

export default Navbar;
