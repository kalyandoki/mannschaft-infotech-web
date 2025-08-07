import hard1 from "../assets/itInfra/rec1.webp";

const data = [
  {
    data: "We help businesses find exceptional leaders who can drive growth, innovation, and long-term success. Our leadership recruitment services are designed to connect you with professionals who possess both strategic vision and hands-on management capabilities.",
    title: "✅ Key Highlights:",
    data2: [
      "Executive Search – Experts in hiring CEOs, CTOs, CFOs, and top leadership.",
      "Domain-Aligned Leaders – Leaders with deep industry understanding.",
      "Global Talent – Access to international executive candidates.",
      "Discreet Hiring – Confidential and professional recruitment process.",
      "Culture Fit – Leadership aligned with your company values.",
    ],
    img2: hard1,
  },
];

function Leadership() {
  const section = data[0];

  return (
    <div className="px-4 sm:px-10 lg:px-20 2xl:px-32 py-10 pt-36 max-w-8xl mx-auto border-b-2 border-gray-200 2xl:pt-40">
      <h1 className="text-left text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#fdbd1b] mb-2 pt-4">
        🧑‍💼 Leadership Recruitment
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10 2xl:gap-16">
        {/* === Left Content === */}
        <div className="flex-1">
          <p className="text-gray-700 text-lg lg:text-xl 2xl:text-2xl mb-6 leading-relaxed">
            {section.data}
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-3 2xl:space-y-4">
            {section.data2.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* === Right Image === */}
        <div className="flex-1">
          <img
            src={section.img2}
            alt="Leadership Recruitment"
            className="w-full h-[350px] lg:h-[400px] 2xl:h-[480px] object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Leadership;
