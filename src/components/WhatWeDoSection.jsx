import React from "react";

import brandingImg from "../assets/itInfra/wh2.png";
import marketingImg from "../assets/itInfra/wh11.jpg";
import influencerImg from "../assets/itInfra/wh3.jpg";

const services = [
  {
    title: "Whom Do We Serve?",
    description: `• IT & Education
• Retail & E-Commerce
• Entertainment & Media
• Real Estate & Hospitality
• Healthcare, Fashion & Beauty
• Restaurants & Corporates`,
    image: marketingImg,
  },
  {
    title: "What We Do?",
    description: `• Corporate Branding
• Brand Enhancement
• Advertising & Marketing
• Sales/Leads Generation
• PR Outreach
• Influencer Marketing`,
    image: brandingImg,
  },
  {
    title: "How We Do It?",
    description: `• Brand Strategy
• Content Management & Strategy
• SEO & SEM
• Paid Advertising
• Social Media Marketing
• Managed Email Campaigns`,
    image: influencerImg,
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-28 py-10 sm:py-12 md:py-16 bg-[#fff] text-[#000] font-roboto">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl 2xl:max-w-8xl mx-auto pt-6 sm:pt-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white/5 rounded-3xl shadow-lg overflow-hidden hover:scale-[1.03] transition-transform duration-300"
          >
            {/* Title */}
            <h3 className="text-xl sm:text-2xl text-center font-bold pb-6 sm:pb-8 text-[#79b944]">
              {service.title}
            </h3>

            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-[90%] h-48 sm:h-52 md:h-56 lg:h-60 object-cover m-auto rounded-3xl"
            />

            {/* Description */}
            <div className="p-4 sm:p-6">
              {service.description.split("\n").map((line, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base md:text-md text-[#000] mb-2 text-center"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
