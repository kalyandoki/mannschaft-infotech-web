import React from "react";
import spDots from "../assets/images/mann2.webp";

const PerformanceAndServices = () => {
  const services = [
    {
      title: "Technical Implementation",
      desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
    {
      title: "IT Helpdesk Support",
      desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
    {
      title: "Managed IT Services",
      desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
    {
      title: "IT Consulting",
      desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
    {
      title: "Network Support",
      desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
    {
      title: "Field Tech Support",
      desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
    {
      title: "IT Consulting",
      desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
    {
      title: "Network Support",
      desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
    {
      title: "Field Tech Support",
      desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
    {
      title: "IT Consulting",
      desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
    {
      title: "Network Support",
      desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
    {
      title: "Field Tech Support",
      desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-6 pt-16 bg-[#fff] border-t-2 border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:justify-between gap-8">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col items-start">
          {/* Responsive Image with 16:9 aspect ratio */}
          <div className="relative w-full pt-[60.25%] rounded-xl overflow-hidden mt-10">
            <img
              src={spDots}
              alt="Cutting-edge tools"
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          </div>

          {/* Heading */}
          <div className="m-10 md:ml-24">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#141515] mb-4">
              Cutting-edge tools <br /> that drive performance
            </h2>

            {/* Paragraph */}
            <p className="text-[#5F6567] text-base sm:text-md md:text-lg mt-1">
              Explore a range of IT solutions crafted to maximize business
              efficiency and scalability.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/3 h-[70vh] overflow-y-auto pr-2 scrollbar-none">
          <div className="space-y-2">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-2 rounded-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-[#0d0e0f]">
                  🔵 {item.title}
                </h3>
                <p className="text-[#5F6567] mt-2 mb-6 text-sm">{item.desc}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceAndServices;
