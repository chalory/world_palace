import React, { useState, useEffect } from "react";

interface SlideshowProps {
  images: string[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the interval as per your requirement

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
<div style={{ width: "100%", height: "100%", borderRadius: "15px", overflow: "hidden",backgroundColor: "white" }}>      <img
        src={images[currentIndex]}
        alt={`Slideshow Image ${currentIndex + 1}`}
        style={{ width: "50%", height: "50%" }}
      />
    </div>
  );
};

export default Slideshow;
