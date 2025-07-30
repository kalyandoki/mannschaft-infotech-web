import React from "react";
import SoftwareShowcase from "../components/SoftwareShowcase";
import WhyUsIntro from "../components/WhyUsIntro";
import SoftwareServicesGrid from "../components/softwareServicesGrid";
import PerformanceAndServices from "../components/PerformanceAndServices ";
import ContactWithUs from "../components/ContactWithUs";

function UiDesignPage() {
  return (
    <>
      <SoftwareShowcase pageIndex={1} />
      <SoftwareServicesGrid />
      <WhyUsIntro />
      {/* <PerformanceAndServices /> */}
      <ContactWithUs />
    </>
  );
}

export default UiDesignPage;
