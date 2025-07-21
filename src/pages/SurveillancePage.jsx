import InfraServicePage from "../components/InfraServicePage";
import ManagedITBenefits from "../components/ManagedITBenefits";
import ManagedITServicesLeftImage from "../components/ManagedITServicesLeftImage";
import PerformanceAndServices from "../components/PerformanceAndServices ";

export default function SurveillancePage() {
  return (
    <>
      <InfraServicePage pageIndex={3} />
      <ManagedITBenefits pageIndex={3} />
      <ManagedITServicesLeftImage pageIndex={3} />
      <PerformanceAndServices />
    </>
  );
}
