import React from "react";
import SoftwareShowcase from "../components/SoftwareShowcase";
import WhyUsIntro from "../components/WhyUsIntro";
import SoftwareServicesGrid from "../components/softwareServicesGrid";
import PerformanceAndServices from "../components/PerformanceAndServices ";
import ContactWithUs from "../components/ContactWithUs";

function ArPage() {
  return (
    <>
      <SoftwareShowcase pageIndex={5} />
      <WhyUsIntro />
      <SoftwareServicesGrid />
      <PerformanceAndServices />
      <ContactWithUs />
    </>
  );
}

export default ArPage;
