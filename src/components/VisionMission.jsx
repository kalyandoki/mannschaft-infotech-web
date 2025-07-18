import { FaEye, FaBullseye } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-8xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-800 font-serif mb-16">
          Vision & <span className="text-[#c91432]">MISSION</span>
        </h2>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div className="bg-gradient-to-tr from-indigo-100 via-white to-purple-100 shadow-xl p-8 rounded-xl flex flex-col items-center text-center">
            <div className="bg-indigo-700 text-white p-4 rounded-full shadow-lg mb-6">
              <FaEye className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-indigo-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be one of the most reliable IT service partners in the years to
              come.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-tr from-pink-100 via-white to-yellow-100 shadow-xl p-8 rounded-xl flex flex-col items-center text-center">
            <div className="bg-pink-600 text-white p-4 rounded-full shadow-lg mb-6">
              <FaBullseye className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-pink-700 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To ensure 100% customer satisfaction through quality service
              delivery creamed by our cordial relationship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
