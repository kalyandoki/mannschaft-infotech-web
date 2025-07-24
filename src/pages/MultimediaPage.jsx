import ContactWithUs from "../components/ContactWithUs";
import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";
export default function MultimediaPage() {
  return (
    <>
      <InfraServicePage pageIndex={5} />
      <ManagedITBenefits pageIndex={5} />
      <ManagedITServicesLeftImage pageIndex={5} />
      <PerformanceAndServices />
      <ContactWithUs />
    </>
  );
}
