import fresherImg from "../assets/itInfra/dm2.avif";

const fresherData = {
  heading: "Search Engine Optimization (SEO)",
  description:
    "We help businesses improve their visibility on search engines and attract high-quality organic traffic. Our SEO strategies are tailored to enhance rankings, drive engagement, and increase conversions through ethical, performance-based techniques.",
  points: [
    "On-Page Optimization – Improve content, meta tags, and site structure to make your website search-engine friendly.",
    "Keyword Research – Identify high-value keywords that align with your audience’s search intent and business goals.",
    "Technical SEO – Ensure fast load times, mobile optimization, crawlability, and secure site architecture.",
    "Off-Page SEO – Build authority through quality backlinks, local SEO strategies, and reputation management.",
    "Performance Monitoring – Track keyword rankings, traffic sources, and conversion metrics to refine strategy regularly.",
  ],
  image: fresherImg,
};

function SeoPage() {
  return (
    <div className="px-4 sm:px-10 py-10 max-w-8xl mx-auto pt-16 border-b-2 border-gray-200">
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

export default SeoPage;
