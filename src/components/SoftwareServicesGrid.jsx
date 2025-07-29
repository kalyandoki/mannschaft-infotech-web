import { Link } from "react-router-dom";
import { GiToken } from "react-icons/gi";
import { MdPhoneIphone } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
//import { SiVisualstudio } from "react-icons/si";

const services = [
  {
    title: "NFT Development",
    description:
      "Non-Fungible Tokens are in trend. We've been building them since 2016.",
    icons: <GiToken className="text-5xl md:text-8xl text-[#090c62b0]" />,
  },
  {
    title: "Mobile App Development",
    description:
      "Building intuitive, high-performance Android & iOS apps using the latest frameworks.",
    icons: <MdPhoneIphone className="text-5xl md:text-8xl text-[#090c62b0]" />,
  },
  {
    title: "Web App Development",
    description:
      "From social apps to marketplaces and fitness trackers, we create scalable solutions.",
    icons: <FaLaptopCode className="text-5xl md:text-8xl text-[#090c62b0]" />,
  },
  {
    title: "Software Development",
    description:
      "Custom CRM, ERP, and enterprise-level software tailored to your operations.",
    icons: <FaTools className="text-5xl md:text-8xl text-[#090c62b0]" />,
  },
];

const SoftwareServicesGrid = () => {
  return (
    <section id="services" className="py-16 px-4 bg-white font-roboto">
      <div className="max-w-8xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-6xl w-1/2 font-extrabold text-left text-gray-800 mb-12">
          We provide clients with award-winning services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-transform hover:scale-105 bg-white flex flex-col items-center text-center"
            >
              <div className="mb-6">{service.icons}</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#000] mb-2">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-[#000] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10 flex justify-left">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 bg-white text-black  px-2 py-2 transition border-b-2 border-[#231b1a]"
          >
            View all services
            <FaArrowRight className="text-black" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SoftwareServicesGrid;
