import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const WelcomeSection = () => {
  const points = [
    "We understand your critical needs.",
    "We value your time and money.",
    "Cost effective dynamic IT solutions.",
    "No compromise on Quality.",
    "Assisted solution Development.",
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-6 md:px-20 2xl:px-40">
      <div className="max-w-8xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl 2xl:text-6xl font-bold text-center text-[#211316] font-[Montserrat] mb-12 2xl:mb-16">
          Welcome to Mannschaft Infotech
        </h2>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 2xl:gap-20 items-start justify-items-center">
          {/* Left Paragraph */}
          <p className="text-lg md:text-2xl 2xl:text-3xl text-gray-600 leading-relaxed font-sans mb-8 md:mb-0">
            We are a young and enthusiastic team providing diverse solutions in
            the field of Information Technology. Our skilled and trained staff
            not only understand your needs but ensure that we stand out with
            high customer centricity.
          </p>

          {/* Right Bullet Points */}
          <ul className="space-y-4 text-base md:text-2xl 2xl:text-3xl text-gray-600">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1 2xl:mt-2" />
                <span className="font-sans">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
