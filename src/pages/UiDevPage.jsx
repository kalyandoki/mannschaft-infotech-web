import React from "react";
import SoftwareShowcase from "../components/SoftwareShowcase";
import WhyUsIntro from "../components/WhyUsIntro";
import SoftwareServicesGrid from "../components/softwareServicesGrid";
import PerformanceAndServices from "../components/PerformanceAndServices ";
import ContactWithUs from "../components/ContactWithUs";

function UiDevPage() {
  return (
    <>
      <SoftwareShowcase pageIndex={2} />
      <WhyUsIntro />
      <SoftwareServicesGrid />
      <PerformanceAndServices />
      <ContactWithUs />
    </>
  );
}

export default UiDevPage;
