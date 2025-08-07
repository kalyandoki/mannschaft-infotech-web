import React from "react";
import SoftwareShowcase from "../components/SoftwareShowcase";
import WhyUsIntro from "../components/WhyUsIntro";
import SoftwareServicesGrid from "../components/SoftwareServicesGrid";
import PerformanceAndServices from "../components/PerformanceAndServices ";
import ContactWithUs from "../components/ContactWithUs";
import ScrollSnapContainers from "../components/ScrollSnapContainers";

function UiDevPage() {
  return (
    <>
      <SoftwareShowcase pageIndex={2} />
      <SoftwareServicesGrid />
      <WhyUsIntro />
      <ScrollSnapContainers />
      {/* <PerformanceAndServices /> */}
      <ContactWithUs />
    </>
  );
}

export default UiDevPage;
