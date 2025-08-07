import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PerformanceAndServices from "../components/PerformanceAndServices ";
import ContactWithUs from "../components/ContactWithUs";
import DigitalMarketingIntro from "../components/DigitalMarketIntro";
import AdvertisingPage from "./AdvertisingPage";
import SmmPage from "./SmmPage";
import EmailMarketingPage from "./EmailMarketingPage";
import SeoPage from "./SeoPage";
import WhatWeDoSection from "../components/WhatWeDoSection";

function Seo() {
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
      <DigitalMarketingIntro />
      <WhatWeDoSection />
      <section id="seo">
        <SeoPage />
      </section>

      <section id="advertising">
        <AdvertisingPage />
      </section>

      <section id="social-media-marketing">
        <SmmPage />
      </section>

      <section id="email-marketing">
        <EmailMarketingPage />
      </section>
    </>
  );
}

export default Seo;
