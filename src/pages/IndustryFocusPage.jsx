import AnimatedHeading from "../components/AnimatedHeading";
import bgImage from "../assets/images/if11.jpg";

export default function IndustryFocusPage() {
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
          Industry <span className="text-[#010ED0]">Focus</span>{" "}
          <span className="text-[#010ED0] block mt-2 bg-[#fff]/0 p-2 rounded-lg">
            <AnimatedHeading text={`Industry Manufacturing `} />
            <br />
            <AnimatedHeading text={`Transportation & Logistics `} />
            <br />
            <AnimatedHeading text={`Healthcare `} />
            <br />
            <AnimatedHeading text={`Banks & Insurance  `} />
            <br />
            <AnimatedHeading text={`Consulting Providers`} />
            <br />
            <AnimatedHeading text={`Non-Profit Organizations`} />
            <br />
          </span>
        </h1>
      </div>
    </section>
  );
}
