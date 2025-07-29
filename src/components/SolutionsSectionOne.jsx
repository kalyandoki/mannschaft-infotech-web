import React from "react";
import servicesImg from "../assets/images/services_solution1.jpg";

const SolutionsSectionOne = () => {
  return (
    <section className="py-16 px-4 bg-[#fff] font-roboto">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Services & Solutions
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Take your company to new heights by investing in our reliable and
          efficient technology solutions.
        </p>

        {/* Image */}
        <div className="mb-10">
          <img
            src={servicesImg}
            alt="Services & Solutions"
            className="w-full max-h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Bottom Description */}
        <p className="text-base md:text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto">
          Mannschaft is your trusted partner for IT management, data security,
          and cloud technology with one goal in mind: to transform the way your
          business works in order to save you time and money.
        </p>
      </div>
    </section>
  );
};

export default SolutionsSectionOne;
