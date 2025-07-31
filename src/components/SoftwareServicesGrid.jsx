import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import {
  FaPencilRuler,
  FaMobileAlt,
  FaFilm,
  FaVrCardboard,
} from "react-icons/fa";

const services = [
  {
    title: "UX Design",
    icon: <FaPencilRuler className="text-[#21a1ff] text-3xl" />,
    description:
      "We add real value to any application with a user interface. Our expert UX team handles challenges across platforms, systems, and industries—delivering meaningful, user-focused experiences.",
  },
  {
    title: "UI Design",
    icon: <FaPencilRuler className="text-[#21a1ff] text-3xl" />,
    description:
      "We craft visually engaging designs that resonate with your audience. Our user-centered approach ensures every element is built and tested with real users in mind, driving usability and impact.",
  },
  {
    title: "UI Development",
    icon: <FaPencilRuler className="text-[#21a1ff] text-3xl" />,
    description:
      "We build intuitive and responsive interfaces with a focus on user needs. Our front-end specialists create seamless interactions that help products stand out in today’s competitive tech space.",
  },
  {
    title: "iOS / Android App Development",
    icon: <FaMobileAlt className="text-[#21a1ff] text-3xl" />,
    description:
      "From enterprise tools to consumer apps, we design and build high-performance mobile applications for both iOS and Android platforms—fully tailored to business objectives.",
  },
  {
    title: "Motion Graphics",
    icon: <FaFilm className="text-[#21a1ff] text-3xl" />,
    description:
      "Our creative team specializes in motion graphics, from modern 2D animations to complex 3D visuals. We bring stories to life through dynamic visuals and captivating storytelling.",
  },
  {
    title: "Augmented Reality (AR)",
    icon: <FaVrCardboard className="text-[#21a1ff] text-3xl" />,
    description:
      "We develop AR solutions that enhance real-world views with computer-generated insights. Whether for apps, marketing, or training, our AR innovations deliver immersive experiences.",
  },
];
const SoftwareServicesGrid = () => {
  return (
    <section id="services" className="py-16 px-4 bg-white font-roboto">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-16 text-center">
          We provide clients with award-winning services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, icon, description }, idx) => (
            <div
              key={idx}
              className="bg-[#f9f9f9] hover:shadow-xl transition rounded-2xl p-6 space-y-4 border border-gray-200"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">{icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-[#21a1ff]">
                  {title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-[#21a1ff] font-medium border-b-2 border-[#21a1ff] hover:text-[#1b90e0] hover:border-[#1b90e0] transition"
          >
            View all services <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SoftwareServicesGrid;
