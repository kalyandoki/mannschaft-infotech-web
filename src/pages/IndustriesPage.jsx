import React from "react";
import IndustriesSection from "../components/IndustriesSection";
import IndustriesCardSection from "../components/IndustriesCardSection";
import Footer from "../components/Footer";
import ContactWithUs from "../components/ContactWithUs";
import Header from "../components/Header";

function IndustriesPage() {
  return (
    <>
      <Header />
      <IndustriesSection />
      <IndustriesCardSection />
      <ContactWithUs />
      <Footer />
    </>
  );
}

export default IndustriesPage;
