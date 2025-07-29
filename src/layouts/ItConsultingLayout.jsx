import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ItConsultingHeader from "../components/ItConsultingHeader";

function ItConsultingLayout() {
  return (
    <>
      <ItConsultingHeader />
      <main className="pt-6 scroll-smooth">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default ItConsultingLayout;
