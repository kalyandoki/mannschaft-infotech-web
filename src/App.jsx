import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import ProductsServices from "./pages/ProductsServices";
import WhyUs from "./pages/WhyUs";
import OurWorks from "./pages/OurWorks";
import PartnerWithUs from "./pages/PartnerWithUs";
import ContactUs from "./pages/ContactUs";
import HeroSection from "./components/HeroSection";
import VideoModal from "./components/VideoModal";
import WelcomeSection from "./components/WelcomeSection";
import ServicesGrid from "./components/ServicesGrid";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main className="pt-10 scroll-smooth">
        <section id="products-services" className="pt-2 pb-14">
          <section id="home">
            <HeroSection />
            <VideoModal />
            <WelcomeSection />
            <ServicesGrid />
          </section>
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
      </main>
      <Footer />
    </>
  );
}

export default App;
