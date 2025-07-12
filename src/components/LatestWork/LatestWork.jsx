import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import "./LatestWork.css";

// Animation configurations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Unsplash images for DJ event vibes
const eventPhotos = [
  "https://i.pinimg.com/736x/47/b9/9b/47b99b3dcbea8878fc84f6f58389979c.jpg", // DJ concert
  "https://i.pinimg.com/736x/b8/05/24/b80524a1565870ffd3d342e1b6648259.jpg", // wedding lights
  "https://i.pinimg.com/736x/93/7d/4e/937d4e5d2ac0aedf1a77d00ecdd63933.jpg", // party crowd
  "https://i.pinimg.com/736x/a3/16/78/a31678b08925a636143e4ff2eb63a450.jpg", // indoor DJ setup
  "https://i.pinimg.com/736x/d9/60/bd/d960bd2fda9797399e3ef3c38a41157a.jpg", // college fest
  "https://i.pinimg.com/736x/c8/0f/83/c80f83397ca8801074775145af584850.jpg", // lights & performance
];

const LatestWork = () => {
  return (
    <div className="latest-work">
      <div className="latest-header">
        <div className="instagram-icon">
          <a
            href="https://www.instagram.com/bijayad35?igsh=MXI2M2V6N2psNG53"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>

      <motion.div
        className="latest-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {eventPhotos.map((photo, index) => (
          <motion.div className="grid-item" key={index} variants={itemVariants}>
            <img src={photo} alt={`Event ${index + 1}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LatestWork;
