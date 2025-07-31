import React from "react";
import PerformanceAndServices from "../components/PerformanceAndServices ";
import ContactWithUs from "../components/ContactWithUs";
import SoftwareShowcase from "../components/SoftwareShowcase";
import WhyUsIntro from "../components/WhyUsIntro";
import SoftwareServicesGrid from "../components/SoftwareServicesGrid";
import ScrollSnapContainers from "../components/ScrollSnapContainers";

function UxDesign() {
  return (
    <>
      <SoftwareShowcase pageIndex={0} />
      <SoftwareServicesGrid />
      <WhyUsIntro />
      <ScrollSnapContainers />
      {/* <PerformanceAndServices /> */}
      <ContactWithUs />
    </>
  );
}

export default UxDesign;
