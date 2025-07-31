// import { FaHandsHelping, FaUsers, FaShieldAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
// // import { useAppContext } from "../context/AppContext";

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
//   // Duplicate more for demo
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

// const SolutionSection = () => {
//   // const { showAll, toggleShowAll } = useAppContext();

//   // const displayedValues = showAll ? values : values.slice(0, 6);

//   return (
//     <section className="bg-[#3487a83f] py-20 px-4 sm:px-5 md:px-10 lg:px-20 font-roboto">
//       <div className="max-w-7xl mx-auto text-left mb-12">
//         <span className="text-[#000] font-semibold rounded-md p-2 bg-[#4f401e55]">
//           How we do
//         </span>
//         <h2 className="text-2xl md:text-4xl font-extrabold text-[#000] mb-4 pt-5">
//           Solutions
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {values.map((value, index) => (
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
//         <Link to="/solutions">
//           <button
//             // onClick={toggleShowAll}
//             className="px-5 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition"
//           >
//             View more solutions
//             {/* {showAll ? "Show Less" : "View More"} */}
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default SolutionSection;
import {
  FaHandsHelping,
  FaUsers,
  FaShieldAlt,
  FaRobot,
  FaLaptopCode,
  FaCogs,
} from "react-icons/fa";
import { MdSecurity, MdSupportAgent, MdOutlineAutoGraph } from "react-icons/md";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: (
      <FaLaptopCode className="text-5xl hover:text-indigo-600 text-[#010ED0] mb-4" />
    ),
    title: "Custom Software",
    description:
      "Tailored web and mobile applications to fit your business goals.",
  },
  {
    icon: (
      <MdOutlineAutoGraph className="text-5xl hover:text-pink-600 text-[#010ED0] mb-4" />
    ),
    title: "Business Automation",
    description:
      "Automate workflows and processes to increase productivity and accuracy.",
  },
  {
    icon: (
      <FaRobot className="text-5xl hover:text-blue-500 text-[#010ED0] mb-4" />
    ),
    title: "AI Integration",
    description:
      "Integrate smart AI tools into your operations for data-driven insights.",
  },
  {
    icon: (
      <MdSecurity className="text-5xl hover:text-red-500 text-[#010ED0] mb-4" />
    ),
    title: "Cybersecurity",
    description:
      "Protect systems with multi-layered security and 24/7 monitoring.",
  },
  {
    icon: (
      <FaCogs className="text-5xl hover:text-green-600 text-[#010ED0] mb-4" />
    ),
    title: "ERP Solutions",
    description:
      "Centralize operations and resources through customized ERP systems.",
  },
  {
    icon: (
      <MdSupportAgent className="text-5xl hover:text-yellow-600 text-[#010ED0] mb-4" />
    ),
    title: "24/7 Tech Support",
    description:
      "Ensure business continuity with our round-the-clock support services.",
  },
];

const SolutionSection = () => {
  return (
    <section className="bg-[#5a9db829] py-20 px-4 sm:px-6 md:px-10 lg:px-20 font-roboto">
      <div className="max-w-7xl mx-auto mb-12 text-left">
        <span className="text-black font-semibold rounded-md p-2 bg-[#4f401e55]">
          How we do
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mt-4">
          Our Smart Solutions
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {solutions.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 text-left hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            {item.icon}
            <h3 className="text-xl sm:text-2xl font-bold text-[#090c62] mb-3">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {item.description}
            </p>
            <hr className="my-4" />
            <div className="text-left">
              <a
                href="#"
                className="text-indigo-600 text-base font-semibold hover:underline"
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/solutions">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all">
            View more solutions
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SolutionSection;
