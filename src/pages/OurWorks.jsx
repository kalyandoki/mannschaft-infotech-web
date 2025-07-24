import SlidingBanner from "../components/SlidingBanner";
import WorksFilter from "../components/WorksFilter";
import WorksGrid from "../components/WorksGrid";
import WorksPopup from "../components/WorksPopup";

const OurWorks = () => (
  <>
    <section
      id="our-works"
      className="py-14 bg-gray-50 text-center pt-18 pb-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 font-roboto">
        Our Works
      </h2>
      <WorksFilter />
      <WorksGrid />
      <WorksPopup />
      <SlidingBanner />
    </section>
  </>
);

export default OurWorks;
