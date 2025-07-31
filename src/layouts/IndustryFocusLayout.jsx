import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import IndustryFocusHeader from "../components/IndustryFocusHeader";

function IndustryFocusLayout() {
  return (
    <>
      <IndustryFocusHeader />
      <main className="pt-6 scroll-smooth">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default IndustryFocusLayout;
