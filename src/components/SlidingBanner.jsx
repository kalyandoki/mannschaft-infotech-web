import React, { useEffect, useState } from "react";
import img1 from "../assets/images/work1.jpg";
import img2 from "../assets/images/work2.jpg";
import img3 from "../assets/images/work3.jpg";

const slides = [
  {
    image: img1,
    heading: "Referal Partners",
    description:
      "We deliver reliable IT solutions, training, and development services for your digital future.",
    buttonText: "Learn More",
  },
  {
    image: img2,
    heading: "Software Development",
    description:
      "From concept to code, we build scalable software tailored to your business.",
    buttonText: "Explore Services",
  },
  {
    image: img3,
    heading: "IT Infrastructure",
    description:
      "Modernize your digital infrastructure with our professional solutions.",
    buttonText: "Get Started",
  },
];

const SlidingBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 4 seconds
    return () => clearInterval(timer);
  }, []);

  const { heading, description, buttonText } = slides[current];

  return (
    <div className="relative w-full h-[80vh] overflow-hidden mt-10">
      {/* Top Wave */}
      <div className="absolute top-0 w-full overflow-hidden leading-[0] rotate-180 z-10">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,19.29C874.79,37.41,763,57,651.14,66.29c-109.63,9-219.18-1.31-328.8-9.6C216,47.66,108,33.4,0,20V120H1200V0C1123.86,8.3,1046.4,10.38,985.66,19.29Z"
            fill="#fff"
          />
        </svg>
      </div>

      {/* Background Images */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={`slide-${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-[#1e2024b3] bg-opacity-50 transition-opacity duration-1000 ease-in-out">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 animate-fade-in">
          {heading}
        </h1>
        <p className="text-white text-base sm:text-lg mb-6 max-w-xl animate-fade-in">
          {description}
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition animate-fade-in">
          {buttonText}
        </button>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,19.29C874.79,37.41,763,57,651.14,66.29c-109.63,9-219.18-1.31-328.8-9.6C216,47.66,108,33.4,0,20V120H1200V0C1123.86,8.3,1046.4,10.38,985.66,19.29Z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  );
};

export default SlidingBanner;
