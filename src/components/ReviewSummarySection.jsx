import React from "react";
import clogo from "../assets/images/clatch-logo.png";
// import mann from "../assets/images/mannschaft logo.png";
import mann from "../assets/images/mann2.webp";
import ServicesGrid from "./ServicesGrid";

function ReviewSummarySection() {
  return (
    <div>
      <section className="border-1 m-2 border-[#b4d7e29b] shadow-xl p-8 rounded-xl text-center">
        <div className="w-full bg-white  p-8 flex flex-wrap justify-between items-center gap-6 text-gray-800 text-sm sm:text-base font-medium">
          {/* === Reviewed Section === */}
          <div className="flex items-center gap-2 flex-wrap flex-col">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-semibold text-gray-800">
                Reviewed on
              </h3>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#facc15"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <img src={clogo} alt="Logo" className="w-20 h-10 rounded-lg " />
              <span className="text-xl font-bold text-gray-700">
                31 Reviews
              </span>
            </div>
          </div>

          {/* === Stats Section === */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-300 text-center w-full sm:w-auto flex-1">
            <div className="px-4 border-l-1">
              <p className="text-2xl font-bold">20 Years Head</p>
              <p>Proven Track Record</p>
            </div>
            <div className="px-4">
              <p className="text-2xl font-bold">98%</p>
              <p>Customer Satisfaction</p>
            </div>
            <div className="px-4">
              <p className="text-2xl font-bold">1,500+</p>
              <p>Projects Completed</p>
            </div>
            <div className="px-4">
              <p className="text-2xl font-bold">3 Mins</p>
              <p>Average Answer Time</p>
            </div>
          </div>
        </div>

        <section className="bg-black text-white rounded-2xl w-full py-12 px-4 sm:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
            {/* Left Content */}
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <span className="inline-block text-[#000] text-sm font-semibold tracking-wider uppercase bg-[#fff] p-2 rounded-xl">
                WHAT WE DO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight pt-6">
                What we do Simplifying IT for a complex world.
              </h2>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src={mann}
                alt="Teamwork"
                className="w-55 h-50 max-w-md rounded-xl shadow-lg bg-white"
              />
            </div>
          </div>
        </section>
        <ServicesGrid />
      </section>
    </div>
  );
}

export default ReviewSummarySection;
