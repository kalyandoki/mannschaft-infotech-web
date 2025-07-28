import { Link, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import ProductsServices from "./pages/ProductsServices";
import WhyUs from "./pages/WhyUs";
import OurWorks from "./pages/OurWorks";
import PartnerWithUs from "./pages/PartnerWithUs";
import ContactUs from "./pages/ContactUs";
// import HeroSection from "./components/HeroSection";
import VideoModal from "./components/VideoModal";
import WelcomeSection from "./components/WelcomeSection";
import ServicesGrid from "./components/ServicesGrid";
import CarouselComponent from "./components/CarouselComponent";
import HardwarePage from "./pages/HardwarePage";
import NetworkingPage from "./pages/NetworkingPage";
import CloudPage from "./pages/CloudPage";
import SurveillancePage from "./pages/SurveillancePage";
import PrinterPage from "./pages/PrinterPage";
import MultimediaPage from "./pages/MultimediaPage";
import ReviewSummarySection from "./components/ReviewSummarySection";
import SolutionsViewPage from "./pages/SolutionsViewPage";
import { useAppContext } from "./context/AppContext";
import FocusHeader from "./components/FocusHeader";
import DigitalMarketingHeader from "./components/DigitalMarketingHeader";
import ItConsultingHeader from "./components/ItConsultingHeader";
import SoftwareHeader from "./components/SoftwareHeader";
import ItInfraHeader from "./components/ItInfraHeader";
import LeadershipRecruitment from "./pages/LeadershipRecruitment";
import Seo from "./pages/Seo";
import UxDesign from "./pages/UxDesign";

function App() {
  const { activeHeader } = useAppContext();
  const location = useLocation();

  // Scroll to anchor after navigating back to home
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const target = document.getElementById(location.hash.replace("#", ""));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      {/* <Header /> */}
      <header>
        {activeHeader === "main" && <Header />}
        {activeHeader === "itinfra" && (
          <Link to="/hardware-services">
            <ItInfraHeader />
          </Link>
        )}
        {activeHeader === "software" && <SoftwareHeader />}
        {activeHeader === "consulting" && (
          <Link to="/leadership-recruitment">
            <ItConsultingHeader />
          </Link>
        )}
        {activeHeader === "marketing" && <DigitalMarketingHeader />}
        {activeHeader === "focus" && <FocusHeader />}
      </header>
      <ScrollToTop />

      <main className="pt-6 scroll-smooth">
        <Routes>
          <Route
            path="/products-services"
            element={
              <>
                <Header />
                <section id="home">
                  {/* <HeroSection /> */}
                  <CarouselComponent />
                  <VideoModal />
                  <WelcomeSection />
                  <ReviewSummarySection />
                  {/* <ServicesGrid /> */}
                </section>

                <section id="home">
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
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <section id="home">
                  {/* <HeroSection /> */}
                  <CarouselComponent />
                  <VideoModal />
                  <WelcomeSection />
                  <ReviewSummarySection />
                  {/* <ServicesGrid /> */}
                </section>

                <section id="home">
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
              </>
            }
          />

          {/* IT Infra Services */}
          <Route path="/hardware-services" element={<HardwarePage />} />
          <Route path="/networking-services" element={<NetworkingPage />} />
          <Route path="/cloud-infrastructure" element={<CloudPage />} />
          <Route path="/surveillance-security" element={<SurveillancePage />} />
          <Route path="/printer-services" element={<PrinterPage />} />
          <Route path="/multimedia-services" element={<MultimediaPage />} />
          <Route path="/solutions" element={<SolutionsViewPage />} />

          {/* Software Services */}
          <Route path="/ux-design" element={<UxDesign />} />

          {/* IT Consulting Pages */}
          <Route
            path="/Leadership-Recruitment"
            element={<LeadershipRecruitment />}
          />

          {/* Digital Marketing Pages */}
          <Route path="/seo" element={<Seo />} />

          {/* Home Page with All Sections */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <section id="home">
                  {/* <HeroSection /> */}
                  <CarouselComponent />
                  <VideoModal />
                  <WelcomeSection />
                  <ReviewSummarySection />
                  {/* <ServicesGrid /> */}
                </section>

                <section id="home">
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
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
