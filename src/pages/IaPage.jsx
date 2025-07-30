import React from "react";
import SoftwareShowcase from "../components/SoftwareShowcase";
import WhyUsIntro from "../components/WhyUsIntro";
import SoftwareServicesGrid from "../components/softwareServicesGrid";
import PerformanceAndServices from "../components/PerformanceAndServices ";
import ContactWithUs from "../components/ContactWithUs";

function IaPage() {
  return (
    <>
      <SoftwareShowcase pageIndex={3} />
      <SoftwareServicesGrid />
      <WhyUsIntro />
      {/* <PerformanceAndServices /> */}
      <ContactWithUs />
    </>
  );
}

export default IaPage;
