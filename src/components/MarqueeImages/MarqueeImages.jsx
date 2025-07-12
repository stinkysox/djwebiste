import React from "react";
import Marquee from "react-fast-marquee";
import "./MarqueeImages.css";

const MarqueeImages = () => {
  const categories = {
    "Right Images": [
      {
        imageUrl:
          "https://i.pinimg.com/736x/42/0a/fc/420afc598410a78d4dbcd881ca316970.jpg",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/19/bc/8d/19bc8de39e48aa80013b283c6e74ba73.jpg",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/c2/a5/ff/c2a5ffd4099b6569d09a7e9e52e629ad.jpg",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/8c/2d/c1/8c2dc134583625b975d921d88121a476.jpg",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/e7/15/85/e71585b2b7f6d88b16ee6be5324969db.jpg",
      },
    ],
    "Left Images": [
      {
        imageUrl:
          "https://i.pinimg.com/736x/8b/e5/aa/8be5aa4d9af1d1887903df4bb8ce6f5b.jpg",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/2a/c8/27/2ac8279ab9553621f14fac0bb072bfa6.jpg",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/e0/b3/6c/e0b36c8cf5864261e8688a500a92d1fa.jpg",
      },
      {
        imageUrl:
          "https://i.pinimg.com/736x/1c/2a/c7/1c2ac72ff67a68f202b1093273f5a7f6.jpg",
      },
    ],
  };

  const rightImages = categories["Right Images"];
  const leftImages = categories["Left Images"];

  // Generate empty placeholders if no images present
  const generateEmptyImages = (count = 5) =>
    Array.from({ length: count }, (_, i) => (
      <div key={`empty-${i}`} className="empty-img" />
    ));

  // Render images with lazy loading & descriptive alt text
  const renderImages = (imagesArray, direction) => {
    if (!imagesArray || imagesArray.length === 0) return generateEmptyImages();

    return imagesArray.map((imgObj, idx) => (
      <img
        key={`${direction}-${idx}`}
        className="marquee-img"
        src={imgObj.imageUrl}
        alt={`${direction === "right" ? "Right" : "Left"} Slide Image ${
          idx + 1
        }`}
        loading="lazy"
        draggable={false}
      />
    ));
  };

  return (
    <>
      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="right"
        >
          {renderImages(rightImages, "right")}
        </Marquee>
      </div>

      <div className="marquee-container">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={false}
          direction="left"
        >
          {renderImages(leftImages, "left")}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeImages;
