import AnimatedHeading from "../components/AnimatedHeading";
import bgImage from "../assets/images/itc1.webp";

export default function ITConsultingServicesPage() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-start text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for slight darkening effect */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-5xl px-6 sm:px-10 md:px-16 lg:px-24 py-12 bg-[#fff]/0 rounded-3xl m-6 ">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
          IT <span className="text-[#fdbd1b]">Consulting</span>{" "}
          <span className="text-[#fdbd1b] block mt-2 bg-[#fff]/0 p-2 rounded-lg">
            <AnimatedHeading text={`Leadership Recruitment`} />
            <br />
            <AnimatedHeading text={`Lateral Recruitment`} />
            <br />
            <AnimatedHeading text={`Fresher Recruitment`} />
            <br />
            <AnimatedHeading text={`RPO (Shared Services)`} />
          </span>
        </h1>
      </div>
    </section>
  );
}
