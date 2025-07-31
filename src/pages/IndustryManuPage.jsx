import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import IndustryManufacturingSection from "../components/IndustryManufacturingSection";
import ContactWithUs from "../components/ContactWithUs";
import HealthcareSection from "../components/HealthcareSection";
import TransportationLogisticsSection from "../components/TransportationLogisticsSection";
import BanksInsuranceSection from "../components/BanksInsuranceSection";
import ConsultingProviderSection from "../components/ConsultingProviderSection";
import NonProfitSection from "../components/NonProfitSection";

function IndustryManuPage() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the section based on the current pathname
    const id = location.pathname.replace("/", ""); // removes leading slash
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <>
      <section id="industry-manufacturing">
        <IndustryManufacturingSection />
      </section>

      <section id="transportation-logistics">
        <TransportationLogisticsSection />
      </section>

      <section id="healthcare">
        <HealthcareSection />
      </section>

      <section id="banks-insurance">
        <BanksInsuranceSection />
      </section>

      <section id="consulting-providers">
        <ConsultingProviderSection />
      </section>

      <section id="non-profit">
        <NonProfitSection />
      </section>
      <ContactWithUs />
    </>
  );
}

export default IndustryManuPage;
