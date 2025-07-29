import React from "react";
import CarouselComponent from "../components/CarouselComponent";
import VideoModal from "../components/VideoModal";
import WelcomeSection from "../components/WelcomeSection";
import ReviewSummarySection from "../components/ReviewSummarySection";
import ProductsServices from "./ProductsServices";
import WhyUs from "./WhyUs";
import OurWorks from "./OurWorks";
import PartnerWithUs from "./PartnerWithUs";
import ContactUs from "./ContactUs";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <section id="home">
        <CarouselComponent />
        <VideoModal />
        <WelcomeSection />
        <ReviewSummarySection />
      </section>

      <section id="products-services">
        <ProductsServices />
      </section>

      <section id="why-us">
        <WhyUs />
      </section>

      <section id="our-works">
        <OurWorks />
      </section>

      <section id="partner-with-us">
        <PartnerWithUs />
      </section>

      <section id="contact-us">
        <ContactUs />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
