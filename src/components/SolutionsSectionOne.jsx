import React from "react";
import servicesImg from "../assets/images/ss222.webp";

const SolutionsSectionOne = () => {
  return (
    <section className="py-16 2xl:py-20 px-4 2xl:px-12 bg-[#fff] font-roboto">
      <div className="max-w-7xl 2xl:max-w-8xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-extrabold text-gray-900 mb-6 2xl:mb-8">
          Services & Solutions
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl 2xl:text-2xl text-gray-700 mb-12 2xl:mb-16 max-w-3xl 2xl:max-w-4xl mx-auto">
          Take your company to new heights by investing in our reliable and
          efficient technology solutions.
        </p>

        {/* Image */}
        <div className="mb-10 2xl:mb-14">
          <img
            src={servicesImg}
            alt="Services & Solutions"
            className="w-full max-h-[400px] 2xl:max-h-[500px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Bottom Description */}
        <p className="text-base md:text-lg 2xl:text-xl text-gray-800 leading-relaxed max-w-4xl 2xl:max-w-5xl mx-auto">
          Mannschaft is your trusted partner for IT management, data security,
          and cloud technology with one goal in mind: to transform the way your
          business works in order to save you time and money.
        </p>
      </div>
    </section>
  );
};

export default SolutionsSectionOne;
