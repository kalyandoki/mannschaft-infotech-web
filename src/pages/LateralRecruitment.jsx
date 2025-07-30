import lateralImg from "../assets/itInfra/rec2.webp";

const lateralData = {
  heading: "Lateral Recruitment",
  description:
    "Our Lateral Recruitment services are designed to identify skilled professionals with the right experience, domain expertise, and adaptability to integrate seamlessly into your organization. We help you find mid to senior-level talent who can deliver immediate impact and long-term value.",
  title: "✅ Key Highlights:",
  points: [
    "Domain-Specific Talent – We focus on candidates with proven expertise in your specific industry, including IT, software, infrastructure, and consulting.",
    "Quick Turnaround Time – Our strong network and streamlined process ensure faster hiring for critical positions.",
    "Customized Screening – Candidates are thoroughly evaluated on technical skills, soft skills, and cultural fit before shortlisting.",
    "Retention-Focused Hiring – We prioritize professionals with a history of loyalty and consistent performance.",
    "Pan-India & Global Reach – Access to a vast talent pool across multiple geographies to meet your location-specific hiring needs.",
  ],
  image: lateralImg,
};

function LateralRecruitment() {
  return (
    <div className="px-4 sm:px-10 py-10 max-w-8xl mx-auto pt-36 border-b-2 border-gray-200">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* === Left Image === */}
        <div className="flex-1">
          <img
            src={lateralData.image}
            alt="Fresher Recruitment"
            className="w-full h-[380px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* === Right Content === */}
        <div className="flex-1">
          <h1 className="text-left text-4xl font-bold text-[#fdbd1b] mb-10">
            {lateralData.heading}
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {lateralData.description}
          </p>

          <h2 className="text-2xl font-bold text-[#0f1d44] mb-4">
            {lateralData.title}
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-3">
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
