import React from "react";
import SoftwareShowcase from "../components/SoftwareShowcase";
import WhyUsIntro from "../components/WhyUsIntro";
import SoftwareServicesGrid from "../components/SoftwareServicesGrid";
import PerformanceAndServices from "../components/PerformanceAndServices ";
import ContactWithUs from "../components/ContactWithUs";

function ArPage() {
  return (
    <>
      <SoftwareShowcase pageIndex={5} />
      <SoftwareServicesGrid />
      <WhyUsIntro />
      {/* <PerformanceAndServices /> */}
      <ContactWithUs />
    </>
  );
}

export default ArPage;
