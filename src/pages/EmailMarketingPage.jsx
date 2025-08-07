import rpoImg from "../assets/itInfra/dm5.jpg";

const rpoData = {
  heading: "Email Marketing",
  description:
    "Our Email Marketing services are focused on delivering personalized, high-converting campaigns that build relationships, retain customers, and drive measurable results. From strategy to automation, we ensure every email serves a clear business purpose.",
  //   title: "✅ Key Highlights:",
  points: [
    "Targeted Messaging – Engage specific audiences with personalized emails.",
    "Automated Workflows – Nurture, onboard, and re-engage users effortlessly.",
    "Performance Analytics – Track open rates, clicks, and conversions.",
    "Responsive Design – Emails that look great on all devices.",
    "A/B Testing – Optimize subject lines, content, and CTAs.",
  ],
  image: rpoImg,
};
function Rpo() {
  return (
    <div className="px-4 sm:px-10 lg:px-16 2xl:px-28 py-10 max-w-8xl mx-auto pt-36 2xl:pt-40">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-[#79b944] mb-10">
        {rpoData.heading}
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* === Left Image === */}
        <div className="flex-1">
          <img
            src={rpoData.image}
            alt="Fresher Recruitment"
            className="w-full h-[380px] 2xl:h-[450px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* === Right Content === */}
        <div className="flex-1">
          <p className="text-gray-700 text-base md:text-lg 2xl:text-xl mb-6 leading-relaxed">
            {rpoData.description}
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-3 text-base md:text-lg 2xl:text-xl">
            {rpoData.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Rpo;
