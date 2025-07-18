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
      <section id="products-services">
        <ProductsServices />
      </section>

      <main className="pt-24 scroll-smooth">
        <section id="home">
          <HeroSection />
          <VideoModal />
          <WelcomeSection />
          <ServicesGrid />
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
