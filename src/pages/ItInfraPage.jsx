import AnimatedHeading from "../components/AnimatedHeading";
import bgImage from "../assets/images/itt1.jpeg";

export default function ItInfraPage() {
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
          IT <span className="text-[#ec2028]">Infra Services</span>{" "}
          <span className="text-[#ffff] block mt-2 bg-[#fff]/0 p-2 rounded-lg">
            <div className="hover:text-[#ec2028]">
              <AnimatedHeading text={`Hardware Services`} />
            </div>
            <div className="hover:text-[#ec2028]">
              <AnimatedHeading text={`Networking Services `} />
            </div>
            <div className="hover:text-[#ec2028]">
              <AnimatedHeading text={`Cloud & Infrastructure `} />
            </div>
            <div className="hover:text-[#ec2028]">
              <AnimatedHeading text={`Surveillance Security `} />
            </div>
            <div className="hover:text-[#ec2028]">
              <AnimatedHeading text={`Printer Services`} />
            </div>
            <div className="hover:text-[#ec2028]">
              <AnimatedHeading text={`Multimedia Services`} />
            </div>
          </span>
        </h1>
      </div>
    </section>
  );
}
