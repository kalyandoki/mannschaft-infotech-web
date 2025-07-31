// import { FaHandsHelping, FaUsers, FaShieldAlt } from "react-icons/fa";
// import { useAppContext } from "../context/AppContext";

// const values = [
//   {
//     icon: (
//       <FaHandsHelping className="text-5xl font-light hover:text-indigo-500 text-[#090c62b0] mb-4" />
//     ),
//     title: "Reliable",
//     description:
//       "To work with dedication and be a reliable IT partner and ensure client success.",
//   },
//   {
//     icon: (
//       <FaUsers className="text-5xl hover:text-pink-500 text-[#090c62b0] mb-4" />
//     ),
//     title: "Team Work",
//     description: "Work as a team and deliver the best to our customers.",
//   },
//   {
//     icon: (
//       <FaShieldAlt className="text-5xl hover:text-blue-500 text-[#090c62b0] mb-4" />
//     ),
//     title: "Trust",
//     description:
//       "To win the trust of our client and ensure a win-win situation.",
//   },
//   {
//     icon: <FaHandsHelping className="text-5xl text-[#090c62b0] mb-4" />,
//     title: "Efficiency",
//     description: "Deliver high performance with optimized solutions.",
//   },
//   {
//     icon: <FaUsers className="text-5xl text-[#090c62b0] mb-4" />,
//     title: "Integrity",
//     description: "Always act with honesty and transparency.",
//   },
//   {
//     icon: <FaShieldAlt className="text-5xl text-[#090c62b0] mb-4" />,
//     title: "Support",
//     description: "Provide 24/7 technical assistance to our clients.",
//   },
//   {
//     icon: <FaHandsHelping className="text-5xl text-[#13154bc7] mb-4" />,
//     title: "Efficiency",
//     description: "Deliver high performance with optimized solutions.",
//   },
//   {
//     icon: <FaUsers className="text-5xl text-[#090c62b0] mb-4" />,
//     title: "Integrity",
//     description: "Always act with honesty and transparency.",
//   },
//   {
//     icon: <FaShieldAlt className="text-5xl text-[#090c62b0] mb-4" />,
//     title: "Support",
//     description: "Provide 24/7 technical assistance to our clients.",
//   },
//   {
//     icon: <FaHandsHelping className="text-5xl text-[#090c62b0] mb-4" />,
//     title: "Efficiency",
//     description: "Deliver high performance with optimized solutions.",
//   },
//   {
//     icon: <FaUsers className="text-5xl text-[#090c62b0] mb-4" />,
//     title: "Integrity",
//     description: "Always act with honesty and transparency.",
//   },
//   {
//     icon: <FaShieldAlt className="text-5xl text-[#090c62b0] mb-4" />,
//     title: "Support",
//     description: "Provide 24/7 technical assistance to our clients.",
//   },
// ];

// const MoreSolutionsSection = () => {
//   const { showAll, toggleShowAll } = useAppContext();

//   const displayedValues = showAll ? values : values.slice(0, 6);

//   return (
//     <section className="bg-[#3487a83f] py-20 px-4 sm:px-5 md:px-10 lg:px-20 font-roboto">
//       <div className="max-w-7xl mx-auto text-left mb-12">
//         <span className="text-[#000] font-semibold rounded-md p-2 bg-[#4f401e55]">
//           How we do
//         </span>
//         <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-4 pt-5">
//           Solutions
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {displayedValues.map((value, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-xl rounded-2xl p-8 text-left hover:scale-105 transform transition duration-300 hover:shadow-2xl text-[#000]"
//           >
//             {value.icon}
//             <h3 className="text-xl sm:text-3xl font-bold mb-3 ">
//               {value.title}
//             </h3>
//             <p className="text-sm sm:text-lg pb-4">{value.description}</p>
//             <hr />
//             {/* Learn More Button */}
//             <div className="text-left mt-4">
//               <a
//                 href="#"
//                 className="inline-block text-[#090c62b0] text-base sm:text-lg font-semibold hover:underline transition"
//               >
//                 Learn more →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-10">
//         <button
//           onClick={toggleShowAll}
//           className="px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition"
//         >
//           {/* View more solutions */}
//           {showAll ? "Show Less" : "View More"}
//         </button>
//       </div>
//     </section>
//   );
// };

// export default MoreSolutionsSection;
import {
  FaBrain,
  FaCogs,
  FaGlobe,
  FaRocket,
  FaHandsHelping,
  FaMobileAlt,
  FaShieldAlt,
  FaCode,
  FaNetworkWired,
  FaUserShield,
  FaCloud,
  FaUsersCog,
} from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const solutions = [
  {
    icon: (
      <FaBrain className="text-5xl hover:text-indigo-600 text-[#010ED0] mb-4" />
    ),
    title: "Smart Automation",
    description:
      "Integrate intelligent automation to enhance productivity and precision.",
  },
  {
    icon: (
      <FaCogs className="text-5xl hover:text-pink-600 text-[#010ED0] mb-4" />
    ),
    title: "Process Optimization",
    description:
      "Streamline operations and workflows with efficient digital systems.",
  },
  {
    icon: (
      <FaGlobe className="text-5xl hover:text-green-600 text-[#010ED0] mb-4" />
    ),
    title: "Global Scalability",
    description: "Deploy scalable solutions that grow with your business.",
  },
  {
    icon: (
      <FaRocket className="text-5xl hover:text-yellow-500 text-[#010ED0] mb-4" />
    ),
    title: "Innovation-Driven",
    description: "Drive digital innovation to stay ahead of your competition.",
  },
  {
    icon: (
      <FaMobileAlt className="text-5xl hover:text-blue-500 text-[#010ED0] mb-4" />
    ),
    title: "Mobile Integration",
    description: "Build mobile-first applications for teams and customers.",
  },
  {
    icon: (
      <FaCloud className="text-5xl hover:text-sky-500 text-[#010ED0] mb-4" />
    ),
    title: "Cloud Solutions",
    description: "Move to secure and scalable cloud infrastructure.",
  },
  {
    icon: (
      <FaShieldAlt className="text-5xl hover:text-red-500 text-[#010ED0] mb-4" />
    ),
    title: "Cybersecurity",
    description:
      "Protect your data and systems with enterprise-grade security.",
  },
  {
    icon: (
      <FaCode className="text-5xl hover:text-purple-600 text-[#010ED0] mb-4" />
    ),
    title: "Custom Development",
    description: "Tailored software solutions to fit your unique requirements.",
  },
  {
    icon: (
      <FaNetworkWired className="text-5xl hover:text-teal-600 text-[#010ED0] mb-4" />
    ),
    title: "Network Management",
    description: "Ensure stable and secure network performance.",
  },
  {
    icon: (
      <FaUserShield className="text-5xl hover:text-orange-600 text-[#010ED0] mb-4" />
    ),
    title: "Data Protection",
    description:
      "Maintain regulatory compliance and protect text-[#010ED0] client data.",
  },
  {
    icon: (
      <FaUsersCog className="text-5xl hover:text-fuchsia-600 text-[#010ED0] mb-4" />
    ),
    title: "Team Collaboration",
    description: "Enable real-time collaboration across distributed teams.",
  },
  {
    icon: (
      <FaHandsHelping className="text-5xl hover:text-lime-600 text-[#010ED0] mb-4" />
    ),
    title: "24/7 Support",
    description: "Round-the-clock assistance to keep your business running.",
  },
];

const MoreSolutionsSection = () => {
  const { showAll, toggleShowAll } = useAppContext();
  const displayed = showAll ? solutions : solutions.slice(0, 6);

  return (
    <section className="bg-[#52b9e121] py-20 px-4 sm:px-6 lg:px-20 font-roboto">
      <div className="max-w-7xl mx-auto mb-12">
        <span className="text-[#000] font-semibold rounded-md px-3 py-1 bg-[#4f401e55]">
          How We Do
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-4">
          Our IT Solutions
        </h2>
        <p className="mt-2 text-gray-600 text-base sm:text-lg">
          Smart, scalable, and secure IT solutions crafted by Mannschaft
          Infotech to meet the diverse needs of modern businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {displayed.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition-transform transform hover:-translate-y-1 duration-300"
          >
            {item.icon}
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-base">{item.description}</p>
            <div className="mt-4">
              <a
                href="#"
                className="text-indigo-600 hover:underline font-medium text-sm"
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={toggleShowAll}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      </div>
    </section>
  );
};

export default MoreSolutionsSection;
