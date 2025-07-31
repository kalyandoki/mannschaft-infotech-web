import React from "react";
import industryImage from "../assets/images/if33.jpg";

const TransportationLogisticsSection = () => {
  return (
    <section className="relative w-full bg-white text-gray-900 overflow-hidden pt-20 border-b-2 border-gray-200">
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Transportation – <span className="text-[#010ED0]"> Logistics</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8">
          Optimizing transport and logistics with smart IT solutions —
          Mannschaft Infotech enables seamless operations, real-time tracking,
          and data-driven decision-making to ensure timely deliveries, efficient
          fleet management, and cost savings across the supply chain.
        </p>
        <button className="bg-[#010ED0] hover:bg-[#1b90e0] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300">
          Get a Free Consultation
        </button>
      </div>

      {/* Image */}
      <div className="w-full h-[200px] sm:h-[300px] lg:h-[350px] overflow-hidden pl-6 pr-6">
        <img
          src={industryImage}
          alt="Transportation and Logistics"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Focus Section */}
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-6 py-6">
        <div className="bg-[#fff] text-[#000] rounded-3xl p-2 sm:p-6 md:p-8">
          <span className="block text-sm sm:text-base md:text-lg font-semibold uppercase tracking-widest text-[#010ED0] mb-4">
            Focus
          </span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
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
