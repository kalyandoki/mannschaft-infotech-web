import { FaEye, FaBullseye } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 2xl:px-40 font-roboto">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-center text-black hover:text-indigo-800 mb-16">
          Vision &{" "}
          <span className="hover:text-[#c91432] text-black">MISSION</span>
        </h2>

        {/* Vision & Mission Cards */}
        <div className="w-full md:w-[66%] 2xl:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 2xl:gap-20 items-stretch">
          {/* Vision Card */}
          <div className="bg-white shadow-xl hover:scale-105 transform transition duration-300 hover:shadow-2xl p-8 2xl:p-12 rounded-xl flex flex-col items-center justify-center text-center h-full min-h-[350px] 2xl:min-h-[400px] hover:bg-[#ed3b1b] text-black hover:text-[#fff]">
            <div className="hover:bg-indigo-700 bg-black text-white p-4 2xl:p-6 rounded-full shadow-lg mb-6">
              <FaEye className="text-3xl 2xl:text-4xl" />
            </div>
            <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-bold mb-4">
              Our Vision
            </h3>
            <p className="leading-relaxed text-xl 2xl:text-2xl">
              To be one of the most reliable IT service partners in the years to
              come.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white shadow-xl hover:scale-105 transform transition duration-300 hover:shadow-2xl p-8 2xl:p-12 rounded-xl flex flex-col items-center justify-center text-center h-full min-h-[350px] 2xl:min-h-[400px] hover:bg-[#ed3b1b] text-black hover:text-[#fff]">
            <div className="hover:bg-pink-600 bg-black text-white p-4 2xl:p-6 rounded-full shadow-lg mb-6">
              <FaBullseye className="text-3xl 2xl:text-4xl" />
            </div>
            <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="leading-relaxed text-xl 2xl:text-2xl">
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
