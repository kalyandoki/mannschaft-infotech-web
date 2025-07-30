import rpoImg from "../assets/itInfra/rec4.webp";

const rpoData = {
  heading: "Recruitment Process Outsourcing (RPO)",
  description:
    "Our RPO solutions provide end-to-end recruitment services, acting as a seamless extension of your HR team. From sourcing and screening to onboarding and analytics, we manage the entire hiring lifecycle with efficiency, scalability, and precision—freeing your internal teams to focus on strategic priorities.",
  title: "✅ Key Highlights:",
  points: [
    "End-to-End Recruitment – We handle the full recruitment process including sourcing, screening, assessments, offer management, and onboarding.",
    "Scalable Hiring – Quickly ramp up or scale down recruitment efforts based on your changing business needs.",
    "Technology-Driven Process – We leverage modern tools and applicant tracking systems to ensure transparency and real-time updates.",
    "Cost & Time Efficiency – Reduce your hiring cost and time-to-hire with our streamlined and experienced RPO methodology.",
    "Dedicated Recruitment Team – A specialized team aligned to your brand, values, and hiring goals ensures quality hires and consistency.",
  ],
  image: rpoImg,
};

function Rpo() {
  return (
    <div className="px-4 sm:px-10 py-10 max-w-8xl mx-auto pt-36">
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
          <h1 className="text-left text-4xl font-bold text-[#fdbd1b] mb-10">
            {rpoData.heading}
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {rpoData.description}
          </p>

          <h2 className="text-2xl font-bold text-[#0f1d44] mb-4">
            {rpoData.title}
          </h2>

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
