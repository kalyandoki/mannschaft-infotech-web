import React from "react";
import industryImage from "../assets/images/if2.jpg";

const IndustryManufacturingSection = () => {
  return (
    <section className="relative w-full bg-white text-gray-900 overflow-hidden pt-20 border-b-2 border-gray-200">
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Industry – <span className="text-[#010ED0]">Manufacturing</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8">
          Insightful and reliable manufacturer IT services for productive and
          effective business – backed by the power of Mannschaft Infotech’s
          technology expertise and innovation.
        </p>
        <button className="bg-[#010ED0] hover:bg-[#1b90e0] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300">
          Get a Free Consultation
        </button>
      </div>

      {/* Image */}
      <div className="w-full h-[200px] sm:h-[300px] lg:h-[350px] overflow-hidden pl-6 pr-6">
        <img
          src={industryImage}
          alt="Manufacturing Industry"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-6 py-6">
        <div className="bg-[#fff] text-[#000] rounded-3xl p-2 sm:p-6 md:p-8">
          <span className="block text-sm sm:text-base md:text-lg font-semibold uppercase tracking-widest text-[#010ED0] mb-4">
            Focus
          </span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
            Mannschaft Infotech empowers the manufacturing industry by
            delivering intelligent, scalable, and integrated IT solutions that
            optimize operations, reduce downtime, and drive growth. With deep
            domain knowledge and a forward-thinking approach, we help
            manufacturers embrace digital transformation and remain competitive
            in a rapidly evolving global market.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryManufacturingSection;
