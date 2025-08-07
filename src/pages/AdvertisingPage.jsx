import lateralImg from "../assets/itInfra/dm3.jpg";

const lateralData = {
  heading: "Advertising",
  description:
    "Our Advertising services are built to help your brand stand out in a competitive market. From strategic planning to creative execution, we deliver tailored campaigns that drive awareness, engagement, and measurable results. Whether you're launching a new product or scaling your presence, we craft impactful stories that connect with your audience.",
  //   title: "✅ Key Highlights:",
  points: [
    "Strategic Planning – Data-driven ad strategies aligned with your business goals.",
    "Multi-Channel Reach – Consistent campaigns across digital, print, outdoor, and more.",
    "Brand Storytelling – Emotionally engaging narratives that reflect your brand.",
    "Performance Analysis – Track results and optimize for maximum ROI.",
    "Creative Delivery – Visually impactful content tailored to your audience.",
  ],
  image: lateralImg,
};
function AdvertisingPage() {
  return (
    <div className="px-4 sm:px-10 2xl:px-32 py-10 2xl:py-20 max-w-8xl mx-auto pt-36 2xl:pt-40 border-b-2 border-gray-200">
      <h1 className="text-center text-4xl 2xl:text-5xl font-bold text-[#79b944] mb-10">
        {lateralData.heading}
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10 2xl:gap-20">
        {/* === Left Image === */}
        <div className="flex-1">
          <img
            src={lateralData.image}
            alt="Fresher Recruitment"
            className="w-full h-[380px] 2xl:h-[460px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* === Right Content === */}
        <div className="flex-1">
          <p className="text-gray-700 text-lg 2xl:text-xl mb-6 leading-relaxed 2xl:leading-loose">
            {lateralData.description}
          </p>

          {/* <h2 className="text-2xl font-bold text-[#0f1d44] mb-4">
        {lateralData.title}
      </h2> */}

          <ul className="list-disc list-inside text-gray-700 space-y-3 2xl:text-xl">
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
