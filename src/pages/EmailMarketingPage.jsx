import rpoImg from "../assets/itInfra/dm5.jpg";

const rpoData = {
  heading: "Email Marketing",
  description:
    "Our Email Marketing services are focused on delivering personalized, high-converting campaigns that build relationships, retain customers, and drive measurable results. From strategy to automation, we ensure every email serves a clear business purpose.",
  //   title: "✅ Key Highlights:",
  points: [
    "Targeted Campaigns – Reach the right audience segments with personalized and behavior-based email messaging.",
    "Drip & Automation – Set up automated email workflows to nurture leads, onboard customers, and re-engage inactive users.",
    "Performance Tracking – Monitor open rates, click-throughs, conversions, and more to optimize email effectiveness.",
    "Responsive Design – Professionally designed emails that look great on all devices and drive user engagement.",
    "A/B Testing & Optimization – Continuously test subject lines, content, and CTAs to improve campaign performance.",
  ],
  image: rpoImg,
};
function Rpo() {
  return (
    <div className="px-4 sm:px-10 py-10 max-w-8xl mx-auto pt-36">
      <h1 className="text-center text-4xl font-bold text-[#79b944] mb-10">
        {rpoData.heading}
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* === Left Image === */}
        <div className="flex-1">
          <img
            src={rpoData.image}
            alt="Fresher Recruitment"
            className="w-full h-[380px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* === Right Content === */}
        <div className="flex-1">
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {rpoData.description}
          </p>

          {/* <h2 className="text-2xl font-bold text-[#0f1d44] mb-4">
            {rpoData.title}
          </h2> */}

          <ul className="list-disc list-inside text-gray-700 space-y-3">
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
