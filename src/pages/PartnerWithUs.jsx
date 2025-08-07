import ClientsCarousel from "../components/ClientsCarousel";
import PartnersCorousel from "../components/PartnersCorousel";
import SlidingBanner from "../components/SlidingBanner";

const PartnerWithUs = () => (
  <div className="pt-6 pb-20">
    <SlidingBanner />
    <PartnersCorousel />
    <ClientsCarousel />
  </div>
);

export default PartnerWithUs;
