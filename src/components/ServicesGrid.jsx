import React from "react";

const services = [
  {
    title: "IT Infra Services",
    description:
      "Crafting Cabling, Remote Monitoring, Hardware Solutions, Network & Surveillance Security.",
    bgColor: "bg-gradient-to-r from-sky-100 to-purple-100",
  },
  {
    title: "Software Services",
    description:
      "Designing & Developing Standalone Software, Websites & Web Applications.",
    bgColor: "bg-gradient-to-r from-green-100 to-blue-100",
  },
  {
    title: "IT Consulting",
    description:
      "Transforming careers & supporting organizations to find, nurture and retain right talent.",
    bgColor: "bg-gradient-to-r from-pink-100 to-red-100",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, SEM, SMM, Content Management, Email Campaigns, Insights & Analytics, Influencer Marketing, PR Outreach and more.",
    bgColor: "bg-gradient-to-r from-yellow-100 to-orange-100",
  },
];

const ServicesGrid = () => {
  return (
    <section
      id="services"
      className="py-16 px-4 bg-white text-center font-serif"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-md transition transform hover:scale-105 ${service.bgColor}`}
          >
            <h3 className="text-2xl font-extrabold text-indigo-800 mb-3 font-serif">
              {service.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed font-medium">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
