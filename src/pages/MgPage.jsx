import React from "react";
import SoftwareShowcase from "../components/SoftwareShowcase";
import WhyUsIntro from "../components/WhyUsIntro";
import SoftwareServicesGrid from "../components/SoftwareServicesGrid";
import PerformanceAndServices from "../components/PerformanceAndServices ";
import ContactWithUs from "../components/ContactWithUs";

function MgPage() {
  return (
    <>
      <SoftwareShowcase pageIndex={4} />
      <SoftwareServicesGrid />
      <WhyUsIntro />
      {/* <PerformanceAndServices /> */}
      <ContactWithUs />
    </>
  );
}

export default MgPage;
