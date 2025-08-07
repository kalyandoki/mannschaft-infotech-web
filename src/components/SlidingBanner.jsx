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
    }, 4000); // 4 seconds
    return () => clearInterval(timer);
  }, []);

  const { heading, description, buttonText } = slides[current];

  return (
    <div className="relative w-full h-[80vh] overflow-hidden mt-10 2xl:h-[85vh]">
      {/* Top Wave */}
      <div className="absolute top-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg
          className="relative block w-full h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16 2xl:px-36 bg-[#1e2024b3] bg-opacity-50 transition-opacity duration-1000 ease-in-out">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white mb-4 animate-fade-in">
          {heading}
        </h1>
        <p className="text-white text-base sm:text-lg lg:text-xl 2xl:text-2xl mb-6 max-w-xl 2xl:max-w-4xl animate-fade-in">
          {description}
        </p>
        <button className="bg-[#f5794cf5] hover:bg-[#d345116c] text-white px-7 py-2 sm:py-2.5 lg:py-3 2xl:px-10 2xl:py-3 rounded-xl shadow-md transition animate-fade-in text-sm sm:text-base 2xl:text-lg">
          {buttonText}
        </button>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,160C672,181,768,203,864,192C960,181,1056,139,1152,112C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SlidingBanner;
