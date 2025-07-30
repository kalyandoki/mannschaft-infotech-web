import fresherImg from "../assets/itInfra/rec3.jpg";

const fresherData = {
  heading: "Fresher Recruitment",
  description:
    "We specialize in identifying and onboarding talented fresh graduates who are eager to learn, adapt, and contribute to your organization. Our structured approach ensures companies gain access to enthusiastic, trainable, and culturally-fit professionals ready to grow with the business.",
  title: "✅ Key Highlights:",
  points: [
    "Campus Recruitment Drives – We coordinate with top institutions to source fresh talent through on-campus and off-campus drives.",
    "Skill-based Screening – Every candidate is evaluated for aptitude, communication, and domain knowledge to match your expectations.",
    "Tailored Onboarding – We help design induction programs that ensure smooth integration of freshers into your teams.",
    "Cost-effective Hiring – Build a strong future workforce without overburdening your recruitment budget.",
    "Long-term Growth Focus – We identify candidates with growth potential who can evolve into future leaders in your company.",
  ],
  image: fresherImg,
};

function FresherRecruitment() {
  return (
    <div className="px-4 sm:px-10 py-10 max-w-8xl mx-auto pt-36 border-b-2 border-gray-200">
      <h1 className="text-left text-4xl font-bold text-[#fdbd1b] mb-10">
        {fresherData.heading}
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* === Left Content === */}
        <div className="flex-1">
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            {fresherData.description}
          </p>

          <h2 className="text-2xl font-bold text-[#0f1d44] mb-4">
            {fresherData.title}
          </h2>

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

export default FresherRecruitment;
