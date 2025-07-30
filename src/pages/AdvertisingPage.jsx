import lateralImg from "../assets/itInfra/dm3.jpg";

const lateralData = {
  heading: "Advertising",
  description:
    "Our Advertising services are built to help your brand stand out in a competitive market. From strategic planning to creative execution, we deliver tailored campaigns that drive awareness, engagement, and measurable results. Whether you're launching a new product or scaling your presence, we craft impactful stories that connect with your audience.",
  //   title: "✅ Key Highlights:",
  points: [
    "Strategic Campaign Planning – We develop result-oriented advertising strategies based on market research, audience analysis, and business goals.",
    "Multi-Channel Execution – Reach your audience across digital, print, social media, outdoor, and more with cohesive and creative campaigns.",
    "Brand Storytelling – Build an emotional connection through compelling narratives that reflect your brand’s vision and voice.",
    "Performance Tracking – We track and analyze campaign performance to ensure high ROI and continuous improvement.",
    "Creative Excellence – From concept to design, our team delivers visually stunning and impactful content tailored for your target market.",
  ],
  image: lateralImg,
};
function AdvertisingPage() {
  return (
    <div className="px-4 sm:px-10 py-10 max-w-8xl mx-auto pt-36 border-b-2 border-gray-200">
      <h1 className="text-center text-4xl font-bold text-[#79b944] mb-10">
        {lateralData.heading}
      </h1>
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
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {lateralData.description}
          </p>

          {/* <h2 className="text-2xl font-bold text-[#0f1d44] mb-4">
            {lateralData.title}
          </h2> */}

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

export default AdvertisingPage;
