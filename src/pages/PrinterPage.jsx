import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";

export default function PrinterPage() {
  return (
    <>
      <InfraServicePage pageIndex={4} />
      <ManagedITBenefits pageIndex={4} />
      <ManagedITServicesLeftImage pageIndex={4} />
      <PerformanceAndServices />
    </>
  );
}
