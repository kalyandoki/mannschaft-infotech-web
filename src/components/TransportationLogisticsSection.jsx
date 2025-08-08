import React from "react";
import industryImage from "../assets/images/if33.jpg";

const TransportationLogisticsSection = () => {
  return (
    <section className="relative w-full bg-white text-gray-900 overflow-hidden pt-20 border-b-2 border-gray-200">
      {/* Content */}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-8 2xl:px-14 py-12 2xl:py-20 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold mb-6 2xl:mb-8">
          Transportation – <span className="text-[#ed3b1b]"> Logistics</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-700 mb-8 2xl:mb-12 leading-relaxed">
          Optimizing transport and logistics with smart IT solutions —
          Mannschaft Infotech enables seamless operations, real-time tracking,
          and data-driven decision-making to ensure timely deliveries, efficient
          fleet management, and cost savings across the supply chain.
        </p>
        <button className="bg-[#ed3b1b] hover:bg-[#1b90e0] text-white font-semibold px-6 2xl:px-8 py-3 2xl:py-4 rounded-full shadow-lg transition duration-300 text-sm sm:text-base 2xl:text-lg">
          Get a Free Consultation
        </button>
      </div>

      {/* Image */}
      <div className="w-full h-[200px] sm:h-[300px] lg:h-[350px] 2xl:h-[450px] overflow-hidden pl-6 pr-6">
        <img
          src={industryImage}
          alt="Transportation and Logistics"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Focus Section */}
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-2 sm:px-6 lg:px-6 2xl:px-14 py-6 2xl:py-10">
        <div className="bg-[#fff] text-[#000] rounded-3xl p-2 sm:p-6 md:p-8 2xl:p-10">
          <span className="block text-sm sm:text-base md:text-lg 2xl:text-xl font-semibold uppercase tracking-widest text-[#ed3b1b] mb-4 2xl:mb-6">
            Focus
          </span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl leading-relaxed tracking-wide">
            At Mannschaft Infotech, we empower the transportation and logistics
            sector with cutting-edge technology to streamline delivery networks,
            enhance route optimization, improve fleet visibility, and integrate
            data systems. Our scalable IT solutions help logistics providers
            operate more efficiently, reduce transit times, and offer better
            service to customers through real-time analytics and automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransportationLogisticsSection;
