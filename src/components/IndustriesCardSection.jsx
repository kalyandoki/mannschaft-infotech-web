import {
  FaIndustry,
  FaTruckMoving,
  FaHospital,
  FaUniversity,
  FaUserTie,
  FaHandsHelping,
  FaStethoscope,
  FaHeart,
} from "react-icons/fa";

const industries = [
  {
    title: "Manufacturing",
    description:
      "Boost efficiency with our intelligent IT solutions tailored for manufacturers. From IoT maintenance to ERP optimization, we ensure smooth operations and scalable growth.",
    icon: <FaIndustry className="text-[#010ED0] text-4xl" />,
  },
  {
    title: "Transportation & Logistics",
    description:
      "Streamline your distribution operations with real-time tracking, automation, and reliable infrastructure for timely deliveries.",
    icon: <FaTruckMoving className="text-[#010ED0] text-4xl" />,
  },
  {
    title: "Healthcare",
    description:
      "Empower your agency with secure, compliant tech — from EHRs to telehealth platforms — for better care delivery.",
    icon: <FaHospital className="text-[#010ED0] text-4xl" />,
  },
  {
    title: "Banking & Insurance",
    description:
      "Stay secure and compliant with IT services built for community banks and insurers. Manage risk and uptime efficiently.",
    icon: <FaUniversity className="text-[#010ED0] text-4xl" />,
  },
  {
    title: "Consulting Providers",
    description:
      "We stabilize your systems with proactive support and secure infrastructure, reducing downtime and boosting performance.",
    icon: <FaUserTie className="text-[#010ED0] text-4xl" />,
  },
  {
    title: "Non-Profit Organizations",
    description:
      "Affordable, scalable IT solutions for donor management, volunteer systems, and collaboration — mission-first focus.",
    icon: <FaHandsHelping className="text-[#010ED0] text-4xl" />,
  },
  {
    title: "Telemedicine",
    description:
      "Transform care access with secure, scalable telehealth platforms for modern healthcare delivery.",
    icon: <FaStethoscope className="text-[#010ED0] text-4xl" />,
  },
  {
    title: "Dating Applications",
    description:
      "We help you create intuitive, scalable, and secure dating apps that connect people easily and safely.",
    icon: <FaHeart className="text-[#010ED0] text-4xl" />,
  },
];

const IndustriesCardSection = () => {
  return (
    <section className="w-full bg-[#71c0df37] py-20 px-4 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl rounded-3xl p-6 border border-gray-100 transition duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{industry.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {industry.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{industry.description}</p>
            <hr className="w-full border-gray-200 mb-4" />
            <button className="text-[#010ED0] hover:underline font-semibold text-sm">
              🔗 Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesCardSection;
