import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import SoftwareHeader from "../components/SoftwareHeader";

const SoftwareServiceLayout = () => (
  <>
    <SoftwareHeader />
    <main className="pt-6 scroll-smooth">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default SoftwareServiceLayout;
