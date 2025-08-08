import React from "react";
import PerformanceAndServices from "../components/PerformanceAndServices ";
import ContactWithUs from "../components/ContactWithUs";
import SoftwareShowcase from "../components/SoftwareShowcase";
import SoftwareServicesGrid from "../components/SoftwareServicesGrid";
import ScrollSnapContainers from "../components/ScrollSnapContainers";
import WhyUsIntro from "../components/WhyUsIntro";
import OurWorkingProcess from "../components/OurWorkingProcess";
import OurProjectsWorks from "../components/OurProjectsWorks";

function UxDesign() {
  return (
    <>
      <SoftwareShowcase pageIndex={0} />
      <SoftwareServicesGrid />
      <OurWorkingProcess />
      <OurProjectsWorks />
      <ContactWithUs />
    </>
  );
}

export default UxDesign;
