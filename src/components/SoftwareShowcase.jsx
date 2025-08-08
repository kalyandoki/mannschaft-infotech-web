//import bgImg from "../assets/mannInfra/ux22.avif";
//import bgImg from "../assets/mannInfra/ux2.jpg";
import { useState, useEffect } from "react";
import AnimatedHeading from "./AnimatedHeading";
import { useAppContext } from "../context/AppContext";

export default function SoftwareShowcase({ pageIndex }) {
  const { servicesData } = useAppContext();

  // Take only the first 5 background images from servicesData
  const bgSlides = servicesData.slice(0, 5);

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Change background randomly every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * bgSlides.length);
        } while (randomIndex === prev); // avoid repeating the same image
        return randomIndex;
      });
    }, 2000); // change time here if needed
    return () => clearInterval(interval);
  }, [bgSlides.length]);

  const page = servicesData[pageIndex];
  if (!page) return <p>Page not found</p>;

  return (
    <section
      className="relative w-full h-screen 2xl:h-260 bg-cover bg-center flex items-center justify-start text-white transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${bgSlides[currentBgIndex].bgImage})`,
      }}
    >
      {/* Gradient + Blur Overlay */}
      <div className="absolute inset-0 backdrop-brightness-50"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl 2xl:max-w-7xl px-6 sm:px-10 md:px-16 lg:px-24 2xl:px-32 py-12 2xl:py-20 bg-black/5 rounded-3xl m-6">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold leading-snug 2xl:leading-tight">
          Software <span className="text-[#236fb4]">Services</span>{" "}
          <span className="text-[#236fb4] block mt-2">
            <AnimatedHeading text={page.heading} />
          </span>
        </h1>

        <h2 className="text-base sm:text-xl md:text-2xl lg:text-4xl 2xl:text-5xl font-medium mt-6">
          Mobile app development for funded companies
        </h2>

        <p className="text-sm sm:text-base md:text-xl 2xl:text-3xl mt-4 text-white/90 leading-relaxed 2xl:leading-relaxed">
          Helping companies succeed through customized software solutions
          tailored to their goals and user experience needs.
        </p>
      </div>
    </section>
  );
}
