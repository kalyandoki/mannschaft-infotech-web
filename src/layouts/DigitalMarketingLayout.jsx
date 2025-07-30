import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ItConsultingHeader from "../components/ItConsultingHeader";
import DigitalMarketingHeader from "../components/DigitalMarketingHeader";

function DigitalMarketingLayout() {
  return (
    <>
      <DigitalMarketingHeader />
      <main className="pt-6 scroll-smooth">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DigitalMarketingLayout;
