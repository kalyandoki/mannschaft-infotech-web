import ContactWithUs from "./ContactWithUs";
import MoreSolutionsSection from "./MoreSolutionsSection";
import SolutionsSectionOne from "./SolutionsSectionOne";

function SolutionViewSection() {
  return (
    <div className="pt-10">
      <SolutionsSectionOne />
      <MoreSolutionsSection />
      <ContactWithUs />
    </div>
  );
}

export default SolutionViewSection;
