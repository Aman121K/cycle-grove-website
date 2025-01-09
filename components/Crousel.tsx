import React from "react";

interface CarouselProps {
  slides: { id: number; image: string }[];
  activeSlide: number;
}

const Carousel = ({ slides, activeSlide }: CarouselProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full flex items-center justify-center bg-gray-100"
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id + 1}`}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Optional Dots */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              activeSlide === index ? "bg-pink-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;