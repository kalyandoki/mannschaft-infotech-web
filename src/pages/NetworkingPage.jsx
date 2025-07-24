import ContactWithUs from "../components/ContactWithUs";
import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";

export default function NetworkingPage() {
  return (
    <>
      <InfraServicePage pageIndex={1} />
      <ManagedITBenefits pageIndex={1} />
      <ManagedITServicesLeftImage pageIndex={1} />
      <PerformanceAndServices />
      <ContactWithUs />
    </>
  );
}
