import { FaHandsHelping, FaUsers, FaShieldAlt } from "react-icons/fa";

const values = [
  {
    icon: <FaHandsHelping className="text-4xl text-indigo-500 mb-4" />,
    title: "Reliable",
    description:
      "To work with dedication and be a reliable IT partner and ensure client success.",
  },
  {
    icon: <FaUsers className="text-4xl text-pink-500 mb-4" />,
    title: "Team Work",
    description: "Work as a team and deliver the best to our customers.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-blue-500 mb-4" />,
    title: "Trust",
    description:
      "To win the trust of our client and ensure a win-win situation.",
  },
];

const ValuesSection = () => {
  return (
    <section className="bg-[#f5f8ff] py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl sm:text-2xl md:text-4xl font-extrabold text-gray-800 mb-4 font-serif">
          Values
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-8 text-center hover:scale-105 transform transition duration-300 hover:shadow-2xl"
          >
            {value.icon}
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800 font-serif">
              {value.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
