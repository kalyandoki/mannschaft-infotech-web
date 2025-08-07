import { BiServer } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { RiBarChartBoxFill } from "react-icons/ri";

import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "IT Infra Services",
    description:
      "Crafting Cabling, Remote Monitoring, Hardware Solutions, Network & Surveillance Security.",
    bgColor: "bg-[#ec2028]",
    icons: <BiServer className="text-6xl text-[#fff]" />,
    path: "/it-infra",
  },
  {
    title: "Software Services",
    description:
      "Designing & Developing Standalone Software, Websites & Web Applications.",
    bgColor: "bg-[#236fb4]",
    icons: <FaCode className="text-6xl text-[#fff]" />,
    path: "/software-services",
  },
  {
    title: "IT Consulting",
    description:
      "Transforming careers & supporting organizations to find, nurture and retain right talent.",
    bgColor: "bg-[#fdbd1b]",
    icons: <MdSupportAgent className="text-6xl text-[#fff]" />,
    path: "/it-consulting",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, SEM, SMM, Content Management, Email Campaigns, Insights & Analytics, Influencer Marketing, PR Outreach and more.",
    bgColor: "bg-[#79b944]",
    icons: <RiBarChartBoxFill className="text-6xl text-[#fff]" />,
    path: "/digital-marketing",
  },
];

const ServicesGrid = () => {
  return (
    <section
      id="services"
      className="py-16 2xl:py-24 px-4 md:px-8 2xl:px-20 bg-white text-center font-roboto"
    >
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 2xl:gap-12">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.path}
            className={`rounded-xl p-6 2xl:p-10 shadow-md transition transform hover:scale-105 ${service.bgColor} flex flex-col items-center justify-center`}
          >
            <div
              className={`bg-${service.bgColor} text-[#fff] p-2 2xl:p-4 rounded-full mb-2 2xl:mb-4`}
            >
              <div className="text-2xl 2xl:text-4xl">{service.icons}</div>
            </div>

            <h3 className="text-2xl 2xl:text-3xl font-extrabold text-[#fff] mb-3 2xl:mb-4 font-roboto">
              {service.title}
            </h3>

            <p className="text-lg 2xl:text-xl leading-relaxed font-medium text-[#fff]">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
