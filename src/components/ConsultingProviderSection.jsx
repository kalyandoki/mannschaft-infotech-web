import React from "react";
import industryImage from "../assets/images/if66.jpg";

const ConsultingProviderSection = () => {
  return (
    <section className="relative w-full bg-white text-gray-900 overflow-hidden pt-20 border-b-2 border-gray-200">
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Consulting – <span className="text-[#010ED0]">Providers</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8">
          Strategic IT solutions tailored for consulting firms — Mannschaft
          Infotech helps streamline operations, enhance service delivery, and
          enable data-driven decision-making with innovative and scalable
          digital platforms.
        </p>
        <button className="bg-[#010ED0] hover:bg-[#1b90e0] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300">
          Get a Free Consultation
        </button>
      </div>

      {/* Image */}
      <div className="w-full h-[200px] sm:h-[300px] lg:h-[350px] overflow-hidden pl-6 pr-6">
        <img
          src={industryImage}
          alt="Consulting Industry"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Focus Area */}
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-6 py-6">
        <div className="bg-[#fff] text-[#000] rounded-3xl p-2 sm:p-6 md:p-8">
          <span className="block text-sm sm:text-base md:text-lg font-semibold uppercase tracking-widest text-[#010ED0] mb-4">
            Focus
          </span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
            Mannschaft Infotech equips consulting providers with robust IT
            infrastructure and custom-built software solutions that foster
            collaboration, analytics, and automation. Our digital tools empower
            consultants to deliver faster insights, scale client engagements,
            and maintain a competitive edge in today’s knowledge-driven economy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultingProviderSection;
