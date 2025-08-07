import ClientsCarousel from "./ClientsCarousel";
import ContactWithUs from "./ContactWithUs";
import MoreSolutionsSection from "./MoreSolutionsSection";
import SolutionsSectionOne from "./SolutionsSectionOne";

function SolutionViewSection() {
  return (
    <div className="pt-10">
      <SolutionsSectionOne />
      <MoreSolutionsSection />
      <ClientsCarousel />
      <ContactWithUs />
    </div>
  );
}

export default SolutionViewSection;
