import { useState, useEffect, useRef } from "react";

export default function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const nextImage = () => {
    clearTimeout(timeoutRef.current);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    clearTimeout(timeoutRef.current);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleMouseEvent = () => {
    setIsHovered(!isHovered);
  }

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, images.length, isHovered]);

  return (
    <div
      className="slider"
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <button className="slider-btn left" onClick={prevImage}>
        &#x276E;
      </button>

      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt="Project screenshot"
        className="slider-image fade-slide"
      />

      <button className="slider-btn right" onClick={nextImage}>
        &#x276F;
      </button>
    </div>
  );
}
