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
    <section className="w-full px-6 py-12 bg-[#fff] text-[#000]">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-8xl mx-auto pt-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white/5 rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl text-center font-bold pb-8 text-[#79b944]">
              {service.title}
            </h3>
            <img
              src={service.image}
              alt={service.title}
              className="w-[90%] h-60 object-cover m-auto rounded-3xl"
            />
            <div className="p-6">
              {service.description.split("\n").map((line, i) => (
                <p key={i} className="text-md text-[#000] mb-2 text-center">
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
