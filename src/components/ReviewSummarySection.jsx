import React from "react";
import clogo from "../assets/images/g1.png";
// import mann from "../assets/images/mannschaft logo.png";
import mann from "../assets/images/mann2.webp";
import ServicesGrid from "./ServicesGrid";

function ReviewSummarySection() {
  return (
    <div>
      <section className="border-1 m-2 border-[#b4d7e29b] shadow-xl p-8 2xl:p-14 rounded-xl text-center">
        <div className="w-full bg-white p-8 2xl:p-14 flex flex-col gap-6 2xl:gap-10 text-gray-800 text-sm sm:text-base font-medium">
          {/* === Stats Section === */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2 2xl:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-300">
            {/* === Reviewed Section === */}
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex flex-col sm:flex-row items-center gap-2 2xl:gap-4">
                <h3 className="text-lg 2xl:text-2xl font-semibold text-gray-800 pl-4 2xl:pl-6">
                  Reviewed on
                </h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#facc15"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 2xl:w-6 2xl:h-6"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="flex justify-center items-center gap-4 flex-wrap">
                <img
                  src={clogo}
                  alt="Logo"
                  className="w-20 h-10 2xl:w-28 2xl:h-14 rounded-lg"
                />
                <span className="text-xl 2xl:text-2xl font-bold text-gray-700">
                  33 Reviews
                </span>
              </div>
            </div>

            <div className="px-4 2xl:px-8">
              <p className="text-2xl 2xl:text-3xl font-bold">10 Years Head</p>
              <p className="text-base 2xl:text-xl">Proven Track Record</p>
            </div>

            <div className="px-4 2xl:px-8">
              <p className="text-2xl 2xl:text-3xl font-bold">98%</p>
              <p className="text-base 2xl:text-xl">Customer Satisfaction</p>
            </div>

            <div className="px-4 2xl:px-8">
              <p className="text-2xl 2xl:text-3xl font-bold">100+</p>
              <p className="text-base 2xl:text-xl">Projects Completed</p>
            </div>

            <div className="px-4 2xl:px-8">
              <p className="text-2xl 2xl:text-3xl font-bold">10 Mins</p>
              <p className="text-base 2xl:text-xl">Average Answer Time</p>
            </div>
          </div>
        </div>

        {/* Black Section */}
        <section className="bg-black text-white rounded-2xl w-full py-12 px-4 sm:px-8 lg:px-16 2xl:px-32 2xl:py-20">
          <div className="max-w-8xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 2xl:gap-20">
            {/* Left Content */}
            <div className="flex-1 space-y-4 2xl:space-y-6 text-center lg:text-left">
              <span className="inline-block text-[#000] text-sm 2xl:text-base font-semibold tracking-wider uppercase bg-[#fff] p-2 rounded-xl">
                WHAT WE DO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-tight pt-6">
                We do Simplifying IT for a complex world.
              </h2>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src={mann}
                alt="Teamwork"
                className="w-70 h-70 2xl:w-[380px] 2xl:h-[360px] max-w-md rounded-xl shadow-lg bg-white"
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
