import bgImg from "../assets/mannInfra/ux111.png";
import AnimatedHeading from "./AnimatedHeading";

export default function SoftwareShowcase() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="w-full md:max-w-2xl lg:max-w-3xl xl:max-w-3xl  p-6 sm:p-10 lg:p-14 bg-black/70 text-white rounded-t-3xl sm:rounded-3xl backdrop-blur-md shadow-2xl m-2 sm:mb-14">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wide">
          Software <span className="text-[#21a1ff]">Services</span> :{" "}
          <span className="text-[#fff]">
            <AnimatedHeading text="UX DESIGN" />
          </span>
        </h1>

        <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold mt-4 text-white/90">
          Mobile app development for funded companies
        </h2>

        <p className="text-xs sm:text-base md:text-lg mt-4 text-gray-300 leading-relaxed">
          Helping companies succeed through customized software solutions.
        </p>
      </div>
    </section>
  );
}
