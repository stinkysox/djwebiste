import React, { useState } from "react";
import { motion } from "framer-motion";
import "./OurServices.css";

const services = [
  {
    title: "Weddings",
    image:
      "https://i.pinimg.com/736x/06/7d/cd/067dcd18dabfb2b9b7504f0ec26b459f.jpg", // dummy wedding image
  },
  {
    title: "Sangeet Nights",
    image:
      "https://i.pinimg.com/736x/d5/bc/1b/d5bc1bb55cef0ab15e64d64aaee4b63e.jpg", // dummy sangeet image
  },
  {
    title: "Reception Parties",
    image:
      "https://i.pinimg.com/736x/4b/e2/00/4be20013c5960f8395c727250eaaf149.jpg", // dummy reception image
  },
  {
    title: "Haldi & Mehndi",
    image:
      "https://i.pinimg.com/736x/0c/57/24/0c572428eb7b024ee89f45abd85f34e6.jpg", // dummy haldi image
  },
  {
    title: "College Fests",
    image:
      "https://i.pinimg.com/736x/0f/e9/84/0fe984a1e10c7394f44b6b396cea17a5.jpg", // dummy college fest image
  },
  {
    title: "Corporate Events",
    image:
      "https://i.pinimg.com/736x/be/53/97/be53975a3367ce30ba3edb7f90dee97b.jpg", // dummy corporate image
  },
];

const OurServices = () => {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const toggleZoom = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  return (
    <div className="our-services" id="services">
      <p className="subheading">OUR SERVICES</p>
      <h2 className="main-heading">
        Beats for <span>every occasion</span> <br /> from weddings to work
        floors
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={service.image}
              alt={service.title}
              onClick={() => toggleZoom(index)}
              className={zoomedIndex === index ? "zoomed" : ""}
            />
            <p>{service.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
