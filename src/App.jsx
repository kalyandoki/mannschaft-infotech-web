import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "./context/AppContext";

// Layouts and Shared Components
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItInfraHeader from "./components/ItInfraHeader";
import SoftwareHeader from "./components/SoftwareHeader";
import DigitalMarketingHeader from "./components/DigitalMarketingHeader";
import ItConsultingHeader from "./components/ItConsultingHeader";
import FocusHeader from "./components/FocusHeader";

// Pages
import HomePage from "./pages/HomePage";
import ProductsServices from "./pages/ProductsServices";
import HardwarePage from "./pages/HardwarePage";
import NetworkingPage from "./pages/NetworkingPage";
import CloudPage from "./pages/CloudPage";
import SurveillancePage from "./pages/SurveillancePage";
import PrinterPage from "./pages/PrinterPage";
import MultimediaPage from "./pages/MultimediaPage";
import SolutionsViewPage from "./pages/SolutionsViewPage";
import UxDesign from "./pages/UxDesign";
import Seo from "./pages/Seo";
import LeadershipRecruitment from "./pages/LeadershipRecruitment";

// Layouts
import SoftwareServiceLayout from "./layouts/SoftwareServiceLayout";
import ItInfraLayout from "./layouts/ItInfraLayout";
import ItConsultingLayout from "./layouts/ItConsultingLayout";
import DigitalMarketingLayout from "./layouts/DigitalMarketingLayout";
import UiDevPage from "./pages/UiDevPage";
import UiDesignPage from "./pages/UiDesignPage";
import IaPage from "./pages/IaPage";
import MgPage from "./pages/MgPage";
import ArPage from "./pages/ArPage";
import IndustryFocusHeader from "./components/IndustryFocusHeader";
import IndustryManuPage from "./pages/IndustryManuPage";
import IndustryFocusLayout from "./layouts/IndustryFocusLayout";
//import IndustryFocusPage from "./pages/IndustryFocusPage";
import IndustriesPage from "./pages/IndustriesPage";
// import ItInfraPage from "./pages/ItInfraPage";
// import SoftwareServicesPage from "./pages/SoftwareServicesPage";
// import ITConsultingServicesPage from "./pages/ITConsultingServicesPage";
// import DigitalMarketingPage from "./pages/DigitalMarketingPage";

function App() {
  const { activeHeader, setOnlyHeader } = useAppContext();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Set headers based on current route
    if (
      path === "/" ||
      path === "/home" ||
      path.includes("/products-services")
    ) {
      setOnlyHeader("main");
    } else if (
      path.includes("/it-infra") ||
      path.includes("hardware") ||
      path.includes("networking") ||
      path.includes("cloud") ||
      path.includes("printer") ||
      path.includes("surveillance") ||
      path.includes("multimedia")
    ) {
      setOnlyHeader("itinfra");
    } else if (path.includes("software")) {
      setOnlyHeader("software");
    } else if (
      path.includes("consulting") ||
      path.includes("recruitment") ||
      path.includes("rpo")
    ) {
      setOnlyHeader("consulting");
    } else if (path.includes("digital")) {
      setOnlyHeader("marketing");
    } else if (path.includes("industry")) {
      setOnlyHeader("focus");
    } else {
      setOnlyHeader(null); // fallback
    }

    // Smooth scroll to section if hash exists
    if (location.pathname === "/" && location.hash) {
      const target = document.getElementById(location.hash.replace("#", ""));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location, setOnlyHeader]);

  return (
    <>
      <header>
        {activeHeader === "main" && <Header />}
        {activeHeader === "itinfra" && <ItInfraHeader />}
        {activeHeader === "software" && <SoftwareHeader />}
        {activeHeader === "consulting" && <ItConsultingHeader />}
        {activeHeader === "marketing" && <DigitalMarketingHeader />}
        {activeHeader === "focus" && <IndustryFocusHeader />}
      </header>

      <ScrollToTop />

      <main className="pt-6 scroll-smooth">
        <Routes>
          {/* Main/Home Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/products-services" element={<ProductsServices />} />

          {/* IT Infra Layout */}
          <Route element={<ItInfraLayout />}>
            <Route path="/it-infra" element={<HardwarePage />} />
            <Route path="/hardware-services" element={<HardwarePage />} />
            <Route path="/networking-services" element={<NetworkingPage />} />
            <Route path="/cloud-infrastructure" element={<CloudPage />} />
            <Route
              path="/surveillance-security"
              element={<SurveillancePage />}
            />
            <Route path="/printer-services" element={<PrinterPage />} />
            <Route path="/multimedia-services" element={<MultimediaPage />} />
          </Route>

          {/* Software Layout */}
          <Route element={<SoftwareServiceLayout />}>
            <Route path="/software-services" element={<UxDesign />} />
            <Route path="/ux-design" element={<UxDesign />} />
            <Route path="/ui-design" element={<UiDesignPage />} />
            <Route path="/ui-development" element={<UiDevPage />} />
            <Route path="/ios-app-dev" element={<IaPage />} />
            <Route path="/motion-graphics" element={<MgPage />} />
            <Route path="/augmented-reality" element={<ArPage />} />
          </Route>

          {/* IT Consulting */}
          <Route element={<ItConsultingLayout />}>
            <Route path="/it-consulting" element={<LeadershipRecruitment />} />
            <Route
              path="/leadership-recruitment"
              element={<LeadershipRecruitment />}
            />
            <Route
              path="/lateral-recruitment"
              element={<LeadershipRecruitment />}
            />
            <Route
              path="/fresher-recruitment"
              element={<LeadershipRecruitment />}
            />
            <Route path="/rpo" element={<LeadershipRecruitment />} />
          </Route>

          {/* Digital Marketing */}
          <Route element={<DigitalMarketingLayout />}>
            <Route path="/digital-marketing" element={<Seo />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/advertising" element={<Seo />} />
            <Route path="/social-media-marketing" element={<Seo />} />
            <Route path="/email-marketing" element={<Seo />} />
          </Route>

          {/* Focus Header */}
          <Route element={<IndustryFocusLayout />}>
            <Route path="/industry-focus" element={<IndustryManuPage />} />
            <Route
              path="/industry-manufacturing"
              element={<IndustryManuPage />}
            />
            <Route
              path="/transportation-logistics"
              element={<IndustryManuPage />}
            />
            <Route path="/healthcare" element={<IndustryManuPage />} />
            <Route path="/banks-insurance" element={<IndustryManuPage />} />
            <Route
              path="/consulting-providers"
              element={<IndustryManuPage />}
            />
            <Route path="/non-profit" element={<IndustryManuPage />} />
          </Route>

          {/* Other Services */}
          <Route path="/solutions" element={<SolutionsViewPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
