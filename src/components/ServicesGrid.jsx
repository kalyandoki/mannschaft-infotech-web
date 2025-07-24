import { BiServer } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { RiBarChartBoxFill } from "react-icons/ri";

import React from "react";

const services = [
  {
    title: "IT Infra Services",
    description:
      "Crafting Cabling, Remote Monitoring, Hardware Solutions, Network & Surveillance Security.",
    bgColor: "bg-[#ec2028]",
    icons: <BiServer className="text-6xl text-[#fff]" />,
  },
  {
    title: "Software Services",
    description:
      "Designing & Developing Standalone Software, Websites & Web Applications.",
    bgColor: "bg-[#236fb4]",
    icons: <FaCode className="text-6xl text-[#fff]" />,
  },
  {
    title: "IT Consulting",
    description:
      "Transforming careers & supporting organizations to find, nurture and retain right talent.",
    bgColor: "bg-[#fdbd1b]",
    icons: <MdSupportAgent className="text-6xl text-[#fff]" />,
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, SEM, SMM, Content Management, Email Campaigns, Insights & Analytics, Influencer Marketing, PR Outreach and more.",
    bgColor: "bg-[#79b944]",
    icons: <RiBarChartBoxFill className="text-6xl text-[#fff]" />,
  },
];

const ServicesGrid = () => {
  return (
    <section
      id="services"
      className="py-16 px-4 bg-white text-center font-roboto "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-md transition transform  hover:scale-105 ${service.bgColor} flex flex-col items-center justify-center`}
          >
            <div
              className={`bg-${service.bgColor} text-[#fff] p-2 rounded-full  mb-2`}
            >
              {service.icons}
            </div>
            <h3 className="text-2xl font-extrabold text-[#fff] mb-3 font-roboto">
              {service.title}
            </h3>
            <p className=" text-lg leading-relaxed font-medium text-[#fff]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
