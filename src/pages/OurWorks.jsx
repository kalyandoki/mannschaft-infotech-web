import SlidingBanner from "../components/SlidingBanner";
import WorksFilter from "../components/WorksFilter";
import WorksGrid from "../components/WorksGrid";
import WorksPopup from "../components/WorksPopup";

const OurWorks = () => (
  <section className="py-14 bg-gray-50 text-center">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
      Our Works
    </h2>
    <WorksFilter />
    <WorksGrid />
    <WorksPopup />
    <SlidingBanner />
  </section>
);

export default OurWorks;
