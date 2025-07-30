import bgImg from "../assets/mannInfra/ux1.webp";
import AnimatedHeading from "./AnimatedHeading";

export default function SoftwareShowcase() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl p-4 sm:p-8 lg:p-8 rounded-3xl m-2 sm:mb-14 bg-gradient-to-br from-[#0f172a2a] via-[#1e293b57] to-[#3341553d] shadow-xl">
        {/* === Heading === */}
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight tracking-wide text-white">
          Software <span className="text-[#21a1ff]">Services</span> :{" "}
          <span className="text-[#fff] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <AnimatedHeading text="UX DESIGN" />
          </span>
        </h1>

        {/* === Subheading === */}
        <h2 className="text-sm sm:text-lg md:text-2xl lg:text-5xl font-semibold mt-4 text-white">
          Mobile app development for funded companies
        </h2>

        {/* === Paragraph === */}
        <p className="text-xs sm:text-base md:text-xl mt-4 text-white leading-relaxed">
          Helping companies succeed through customized software solutions.
        </p>
      </div>
    </section>
  );
}
