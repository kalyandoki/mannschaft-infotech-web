import {
  FaHandshake,
  FaRegLightbulb,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";

export default function OurWorkingProcess() {
  const steps = [
    { number: "01", title: "Meet", icon: <FaHandshake /> },
    { number: "02", title: "Plan", icon: <FaRegLightbulb /> },
    { number: "03", title: "Design", icon: <FaPencilRuler /> },
    { number: "04", title: "Develop", icon: <FaCode /> },
    { number: "05", title: "Testing", icon: <FaBug /> },
    { number: "06", title: "Launch", icon: <FaRocket /> },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-sm sm:text-base md:text-2xl lg:text-3xl 2xl:text-5xl tracking-widest text-[#27292a] font-bold">
          OUR WORKING PROCESS
        </h2>
        <h3 className="text-md sm:text-md lg:text-lg 2xl:text-2xl mt-4">
          Our Development process to guarantee client satisfaction
        </h3>

        {/* Steps */}
        <div
          className="
            mt-12 grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            xl:grid-cols-6 
            2xl:grid-cols-6 
            gap-6 lg:gap-10 2xl:gap-14
          "
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center text-center 
                p-6 xl:p-8 2xl:p-10 
                bg-white rounded-xl shadow-md 
                hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#236fb4]
              "
            >
              <span className="text-lg xl:text-xl 2xl:text-2xl font-bold text-gray-800 mb-6 p-4 border rounded-full">
                {step.number}
              </span>
              <div className="text-[#236fb4] text-4xl xl:text-5xl 2xl:text-7xl mb-4">
                {step.icon}
              </div>

              <span className="mt-2 text-xl xl:text-2xl 2xl:text-4xl font-semibold text-gray-700">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
