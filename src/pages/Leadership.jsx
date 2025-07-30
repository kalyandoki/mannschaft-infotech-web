import hard1 from "../assets/itInfra/rec1.webp";

const data = [
  {
    data: "We help businesses find exceptional leaders who can drive growth, innovation, and long-term success. Our leadership recruitment services are designed to connect you with professionals who possess both strategic vision and hands-on management capabilities.",
    title: "✅ Key Highlights:",
    data2: [
      "C-Level & Executive Search - We specialize in recruiting CEOs, CTOs, CFOs, and other top-level executives with proven leadership in their domains.",
      "Industry-Specific Leaders - Our team identifies leaders who understand your industry — whether it's IT, software development, infrastructure, or consulting.",
      "Global Talent Access - Access a diverse pool of international candidates ready to take your business forward.",
      "Confidential & Discreet Hiring - We ensure privacy and professionalism throughout the recruitment process for sensitive leadership roles.",
      "Leadership Culture Fit Assessment - We don’t just assess skills — we ensure the candidates align with your company's values and leadership culture.",
    ],
    img2: hard1,
  },
];

function Leadership() {
  const section = data[0];

  return (
    <div className="px-4 sm:px-10 py-10 max-w-8xl mx-auto border-b-2 border-gray-200">
      <h1 className="text-left text-4xl font-bold text-[#fdbd1b] mb-6 pt-4">
        🧑‍💼 Leadership Recruitment
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* === Left Content === */}
        <div className="flex-1">
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {section.data}
          </p>

          <h2 className="text-2xl font-bold text-[#0f1d44] mb-4">
            {section.title}
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-3">
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
            className="w-full h-[380px] object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Leadership;
