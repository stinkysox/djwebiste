import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sneha & Rohit",
    feedback:
      "DJ Bijaya Das made our wedding night unforgettable! The dance floor was packed the entire time — every beat hit perfectly. Totally recommend him for any Indian wedding.",
  },
  {
    name: "Arjun",
    feedback:
      "We hired him for our college fest and the energy he brought was insane! Crowd was vibing non-stop. Perfect sound setup, perfect vibe!",
  },
  {
    name: "Megha",
    feedback:
      "Sangeet night was magical thanks to Bijaya. From Bollywood classics to trending remixes, he had every guest on their feet. Very professional and friendly.",
  },
  {
    name: "Kritika",
    feedback:
      "I've seen many DJs, but Bijaya has a different vibe. The transitions were super smooth and he really knew how to read the room. Total 10/10!",
  },
  {
    name: "Rakesh",
    feedback:
      "Great music, great vibe, and such a chill guy to work with. Booked him for a birthday party and everyone loved it. Will book again for sure!",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>
        What our clients say <br /> about DJ Bijaya Das
      </h2>
      <div className="testimonial-list">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial-card"
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <p className="feedback">“{t.feedback}”</p>
            <p className="name">— {t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
