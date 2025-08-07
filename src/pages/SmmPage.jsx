import fresherImg from "../assets/itInfra/dm4.webp";

const fresherData = {
  heading: "Social Media Marketing",
  description:
    "We help businesses build a powerful online presence and connect with their audience through targeted and engaging social media strategies. Our Social Media Marketing services are designed to boost visibility, drive traffic, and convert followers into loyal customers across major platforms.",
  points: [
    "Platform Strategy – Tailored plans for Facebook, Instagram, LinkedIn, and more.",
    "Content Creation – Engaging posts, videos, stories, and infographics.",
    "Audience Engagement – Community building through interactive content and quick replies.",
    "Paid Campaigns – ROI-focused ads for leads, sales, and awareness.",
    "Analytics – Track performance and optimize for better results.",
  ],
  image: fresherImg,
};

function SmmPage() {
  return (
    <div className="px-4 2xl:pt-40 sm:px-10 2xl:px-32 py-10 2xl:py-20 max-w-8xl mx-auto pt-36 border-b-2 border-gray-200">
      <h1 className="text-center text-4xl 2xl:text-5xl font-bold text-[#79b944] mb-10">
        {fresherData.heading}
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10 2xl:gap-20">
        {/* === Left Content === */}
        <div className="flex-1">
          <p className="text-gray-700 text-lg 2xl:text-xl mb-6 leading-relaxed 2xl:leading-loose">
            {fresherData.description}
          </p>

          {/* <h2 className="text-2xl font-bold text-[#0f1d44] mb-4">
        {fresherData.title}
      </h2> */}

          <ul className="list-disc list-inside text-gray-700 space-y-3 2xl:text-xl">
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
            className="w-full h-[380px] 2xl:h-[460px] object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default SmmPage;
