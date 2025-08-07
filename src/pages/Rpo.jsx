import rpoImg from "../assets/itInfra/rec4.webp";

const rpoData = {
  heading: "🧩 Recruitment Process Outsourcing (RPO)",
  description:
    "Our RPO solutions manage the entire hiring lifecycle—from sourcing to onboarding—acting as an extension of your HR team. We bring efficiency, scalability, and precision, allowing your team to focus on strategic goals.",
  title: "✅ Key Highlights:",
  points: [
    "End-to-End Hiring – From sourcing to onboarding, we manage it all.",
    "Scalable Solutions – Adjust hiring efforts as your needs evolve.",
    "Tech-Enabled – Modern tools ensure transparency and speed.",
    "Efficient & Cost-Effective – Save time and reduce hiring costs.",
    "Dedicated Team – Recruiters aligned with your brand and goals.",
  ],
  image: rpoImg,
};

function Rpo() {
  return (
    <div className="px-4 2xl:pt-40 sm:px-10 lg:px-20 2xl:px-32 py-10 pt-36 max-w-8xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-10 2xl:gap-16">
        {/* === Left Image === */}
        <div className="flex-1">
          <img
            src={rpoData.image}
            alt="Fresher Recruitment"
            className="w-full h-[350px] lg:h-[400px] 2xl:h-[480px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* === Right Content === */}
        <div className="flex-1">
          <h1 className="text-left text-3xl lg:text-4xl 2xl:text-6xl font-bold text-[#fdbd1b] mb-6">
            {rpoData.heading}
          </h1>
          <p className="text-gray-700 text-lg lg:text-xl 2xl:text-2xl mb-6 leading-relaxed">
            {rpoData.description}
          </p>

          {/* <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-[#0f1d44] mb-4">
            {rpoData.title}
          </h2> */}

          <ul className="list-disc list-inside text-gray-700 space-y-3 2xl:space-y-4">
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
