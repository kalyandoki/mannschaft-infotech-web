import fresherImg from "../assets/itInfra/rec3.jpg";

const fresherData = {
  heading: "🎓 Fresher Recruitment",
  description:
    "We specialize in identifying and onboarding talented fresh graduates who are eager to learn, adapt, and contribute to your organization. Our structured approach ensures companies gain access to enthusiastic, trainable, and culturally-fit professionals ready to grow with the business.",
  title: "✅ Key Highlights:",
  points: [
    "Campus Drives – Source fresh talent from top institutions.",
    "Skill Screening – Assess aptitude, communication, and domain fit.",
    "Smooth Onboarding – Support with tailored induction programs.",
    "Budget-Friendly – Hire freshers without high recruitment costs.",
    "Growth-Oriented – Focus on candidates with long-term potential.",
  ],
  image: fresherImg,
};

function FresherRecruitment() {
  return (
    <div className="px-4 sm:px-10 lg:px-20 2xl:px-32 py-10 pt-36 max-w-8xl mx-auto border-b-2 border-gray-200 2xl:pt-40">
      <h1 className="text-left text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#fdbd1b] mb-6">
        {fresherData.heading}
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-10 2xl:gap-16">
        {/* === Left Content === */}
        <div className="flex-1">
          <p className="text-gray-700 text-lg lg:text-xl 2xl:text-2xl mb-6 leading-relaxed">
            {fresherData.description}
          </p>

          {/* <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-[#0f1d44] mb-4">
            {fresherData.title}
          </h2> */}

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
            className="w-full h-[350px] lg:h-[400px] 2xl:h-[480px] object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default FresherRecruitment;
