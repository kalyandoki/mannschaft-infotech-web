import React from "react";
import industryImage from "../assets/images/if5.jpg";

const BanksInsuranceSection = () => {
  return (
    <section className="relative w-full bg-white text-gray-900 overflow-hidden pt-20 border-b-2 border-gray-200">
      {/* Content */}
      <div className="max-w-5xl 2xl:max-w-7xl mx-auto px-4 sm:px-8 2xl:px-10 py-12 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold mb-6">
          Banks & <span className="text-[#010ED0]"> Insurance</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-700 mb-8">
          Digital-first IT solutions for secure and efficient banking and
          insurance operations — Mannschaft Infotech delivers intelligent
          platforms that improve compliance, customer experience, and
          operational resilience.
        </p>
        <button className="bg-[#010ED0] hover:bg-[#1b90e0] text-white font-semibold px-6 py-3 2xl:px-8 2xl:py-4 rounded-full shadow-lg transition duration-300">
          Get a Free Consultation
        </button>
      </div>

      {/* Image */}
      <div className="w-full h-[200px] sm:h-[300px] lg:h-[350px] 2xl:h-[420px] overflow-hidden pl-6 pr-6 2xl:pl-10 2xl:pr-10">
        <img
          src={industryImage}
          alt="Banks and Insurance Industry"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Focus Section */}
      <div className="max-w-6xl 2xl:max-w-8xl mx-auto px-2 sm:px-6 lg:px-6 2xl:px-12 py-6 2xl:py-10">
        <div className="bg-[#fff] text-[#000] rounded-3xl p-2 sm:p-6 md:p-8 2xl:p-12">
          <span className="block text-sm sm:text-base md:text-lg 2xl:text-xl font-semibold uppercase tracking-widest text-[#010ED0] mb-4">
            Focus
          </span>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl leading-relaxed tracking-wide">
            Mannschaft Infotech strengthens financial institutions by offering
            secure, scalable, and compliant IT infrastructures tailored for
            banks and insurance providers. Our solutions streamline customer
            onboarding, automate policy management, enhance risk analysis, and
            ensure data protection — enabling financial entities to deliver
            faster, smarter, and more transparent services in a highly regulated
            environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BanksInsuranceSection;
