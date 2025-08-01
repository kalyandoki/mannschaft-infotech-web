import React from "react";
import industryImage from "../assets/images/if111.jpg";

function IndustriesSection() {
  return (
    <section className="relative w-full bg-white text-gray-900 overflow-hidden pt-20 border-b-2 border-gray-200">
      {/* Heading & Intro */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Industry – <span className="text-[#010ED0]">Expertise</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8">
          Mannschaft Infotech delivers industry-specific IT solutions that
          enhance efficiency, security, and innovation. From manufacturing and
          education to non-profit and healthcare, we help organizations harness
          the power of technology to drive meaningful results.
        </p>
      </div>

      {/* Industry Image */}
      <div className="w-full h-[100px] sm:h-[200px] lg:h-[400px] overflow-hidden px-4">
        <img
          src={industryImage}
          alt="Industry Expertise"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Focus Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white text-gray-800 rounded-3xl p-4 sm:p-6 md:p-10">
          <h3 className="text-sm sm:text-base md:text-3xl font-semibold uppercase tracking-widest text-[#000] text-center mb-5">
            Managed IT Services for Your Industry
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide">
            At Mannschaft Infotech, we understand that each industry has unique
            technology needs. Our managed IT services are tailored to your
            sector — whether you need end-to-end infrastructure, cloud-based
            scalability, cybersecurity protection, or automation for operations.
            We provide proactive support and cutting-edge solutions to empower
            your organization to thrive in today’s digital-first world.
            <br className="hidden sm:block" />
            <br />
            Partner with us to simplify your IT management, reduce costs, and
            improve performance — while you focus on your core mission.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
