import React from "react";
import SoftwareShowcase from "../components/SoftwareShowcase";
import WhyUsIntro from "../components/WhyUsIntro";
import SoftwareServicesGrid from "../components/SoftwareServicesGrid";
import PerformanceAndServices from "../components/PerformanceAndServices ";
import ContactWithUs from "../components/ContactWithUs";
import ScrollSnapContainers from "../components/ScrollSnapContainers";
import OurWorkingProcess from "../components/OurWorkingProcess";
import OurProjectsWorks from "../components/OurProjectsWorks";

function UiDesignPage() {
  return (
    <>
      <SoftwareShowcase pageIndex={1} />
      <SoftwareServicesGrid />
      <OurWorkingProcess />
      <OurProjectsWorks />
      {/* <WhyUsIntro />
      <ScrollSnapContainers /> */}
      {/* <PerformanceAndServices /> */}
      <ContactWithUs />
    </>
  );
}

export default UiDesignPage;
