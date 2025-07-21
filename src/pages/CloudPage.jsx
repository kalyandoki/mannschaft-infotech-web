import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";
export default function CloudPage() {
  return (
    <>
      <InfraServicePage pageIndex={2} />
      <ManagedITBenefits pageIndex={2} />
      <ManagedITServicesLeftImage pageIndex={2} />
      <PerformanceAndServices />
    </>
  );
}
