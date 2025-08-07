import fresherImg from "../assets/itInfra/dm2.avif";

const fresherData = {
  heading: "Search Engine Optimization (SEO)",
  description:
    "We help businesses improve their visibility on search engines and attract high-quality organic traffic. Our SEO strategies are tailored to enhance rankings, drive engagement, and increase conversions through ethical, performance-based techniques.",
  points: [
    "On-Page SEO – Optimize content, meta tags, and structure for better search visibility.",
    "Keyword Research – Target high-value terms aligned with user intent.",
    "Technical SEO – Improve speed, mobile-friendliness, and crawlability.",
    "Off-Page SEO – Boost authority with backlinks and local SEO.",
    "Performance Tracking – Monitor rankings, traffic, and conversions.",
  ],
  image: fresherImg,
};

function SeoPage() {
  return (
    <div className="px-4 sm:px-10 2xl:px-32 py-10 2xl:py-20 max-w-8xl mx-auto pt-34 2xl:pt-48 border-b-2 border-gray-200">
      <h1 className="text-center text-4xl 2xl:text-5xl font-bold text-[#79b944] mb-10 2xl:mb-14">
        {fresherData.heading}
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10 2xl:gap-20">
        {/* === Left Content === */}
        <div className="flex-1">
          <p className="text-gray-700 text-lg 2xl:text-xl mb-6 leading-relaxed 2xl:leading-loose">
            {fresherData.description}
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-3 2xl:space-y-4">
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

export default SeoPage;
