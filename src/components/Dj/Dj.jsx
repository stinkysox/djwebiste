import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Dj.css";

const Dj = () => {
  const audioRef = useRef(null);
  const [isHolding, setIsHolding] = useState(false);

  const handleHoldStart = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsHolding(true);
        })
        .catch((error) => {
          console.log("Playback prevented:", error);
        });
    }
  };

  const handleHoldEnd = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsHolding(false);
  };

  return (
    <div className="dj">
      <div className="dj-content">
        <p className="dj-instruction">
          🎵 Press and hold the vinyl to play music
        </p>
        <motion.div
          className={`dj-vinyl ${isHolding ? "holding" : ""}`}
          animate={isHolding ? { rotate: [0, 360] } : { rotate: 0 }}
          transition={
            isHolding
              ? {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 3,
                  ease: "linear",
                }
              : {
                  duration: 0.5,
                  ease: "easeOut",
                }
          }
          onPointerDown={handleHoldStart}
          onPointerUp={handleHoldEnd}
          onPointerLeave={handleHoldEnd}
        />
      </div>

      <audio
        ref={audioRef}
        src="/DJ Snake - Magenta Riddim.mp3"
        preload="auto"
      />
    </div>
  );
};

export default Dj;
