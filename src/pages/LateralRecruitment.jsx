import lateralImg from "../assets/itInfra/rec2.webp";

const lateralData = {
  heading: "👥 Lateral Recruitment",
  description:
    "Our Lateral Recruitment services are designed to identify skilled professionals with the right experience, domain expertise, and adaptability to integrate seamlessly into your organization. We help you find mid to senior-level talent who can deliver immediate impact and long-term value.",
  title: "✅ Key Highlights:",
  points: [
    "Industry-Specific Talent – Experts in IT, software, infrastructure, and consulting.",
    "Fast Hiring – Streamlined process ensures quick turnaround.",
    "Thorough Screening – Evaluated for skills, attitude, and cultural fit.",
    "Retention-Driven – Focus on loyal, high-performing candidates.",
    "Wide Reach – Talent access across India and globally.",
  ],
  image: lateralImg,
};

function LateralRecruitment() {
  return (
    <div className="px-4 sm:px-10 lg:px-20 2xl:px-32 py-10 pt-36 max-w-8xl mx-auto border-b-2 border-gray-200 2xl:pt-40">
      <div className="flex flex-col lg:flex-row items-center gap-10 2xl:gap-16">
        {/* === Left Image === */}
        <div className="flex-1">
          <img
            src={lateralData.image}
            alt="Fresher Recruitment"
            className="w-full h-[350px] lg:h-[400px] 2xl:h-[480px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* === Right Content === */}
        <div className="flex-1">
          <h1 className="text-left text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#fdbd1b] mb-6">
            {lateralData.heading}
          </h1>
          <p className="text-gray-700 text-lg lg:text-xl 2xl:text-2xl mb-6 leading-relaxed">
            {lateralData.description}
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-3 2xl:space-y-4">
            {lateralData.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LateralRecruitment;
