import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate("/form");
  };

  const handleLearnMoreClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="banner">
      <img
        src="https://i.postimg.cc/vBvszHTz/Screenshot-2025-07-12-105204.png"
        alt="DJ Bijaya Das performing live"
        className="banner-image"
      />

      <p className="banner-text">
        <strong>DJ Bijaya Das</strong> — The heart of Odisha’s party scene. From
        high-energy beats to soul-touching mixes, Bijaya brings unforgettable
        vibes to weddings, birthdays, and live events. Based in India, spinning
        tracks that make your moments magical, wherever you are.
      </p>

      <div className="banner-button-container">
        <button onClick={handleBookNowClick}>Book Now</button>
        <button onClick={handleLearnMoreClick}>Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
