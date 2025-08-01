import SolutionSection from "../components/SolutionSection";
import ValuesSection from "../components/ValuesSection";
import VisionMission from "../components/VisionMission";
import WhyUsSection from "../components/WhyUsSection";

function WhyUs() {
  return (
    <div className="pt-6 pb-20">
      <WhyUsSection />
      <VisionMission />
      <ValuesSection />
      <SolutionSection />
    </div>
  );
}

export default WhyUs;
