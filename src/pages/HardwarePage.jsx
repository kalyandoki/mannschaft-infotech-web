import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";
export default function HardwarePage() {
  return (
    <>
      <InfraServicePage pageIndex={0} />
      <ManagedITBenefits pageIndex={0} />
      <ManagedITServicesLeftImage pageIndex={0} />
      <PerformanceAndServices />
    </>
  );
}
