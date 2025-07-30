import fresherImg from "../assets/itInfra/dm4.webp";

const fresherData = {
  heading: "Social Media Marketing",
  description:
    "We help businesses build a powerful online presence and connect with their audience through targeted and engaging social media strategies. Our Social Media Marketing services are designed to boost visibility, drive traffic, and convert followers into loyal customers across major platforms.",
  points: [
    "Platform Strategy – Customized plans for platforms like Facebook, Instagram, LinkedIn, and Twitter based on your brand goals.",
    "Content Creation – High-quality, branded content including posts, stories, videos, and infographics to engage your audience.",
    "Audience Engagement – Building community through timely responses, interactive posts, and real-time communication.",
    "Paid Campaign Management – ROI-driven ad strategies for lead generation, sales, and brand awareness.",
    "Analytics & Optimization – Regular performance tracking and data-driven improvements to maximize impact.",
  ],
  image: fresherImg,
};

function SmmPage() {
  return (
    <div className="px-4 sm:px-10 py-10 max-w-8xl mx-auto pt-36 border-b-2 border-gray-200">
      <h1 className="text-center text-4xl font-bold text-[#79b944] mb-10">
        {fresherData.heading}
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* === Left Content === */}
        <div className="flex-1">
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {fresherData.description}
          </p>

          {/* <h2 className="text-2xl font-bold text-[#0f1d44] mb-4">
            {fresherData.title}
          </h2> */}

          <ul className="list-disc list-inside text-gray-700 space-y-3">
            {fresherData.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* === Right Image === */}
        <div className="flex-1">
          <img
            src={fresherData.image}
            alt="Fresher Recruitment"
            className="w-full h-[380px] object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default SmmPage;
