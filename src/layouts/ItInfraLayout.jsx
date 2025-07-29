import { Outlet } from "react-router-dom";
import ItInfraHeader from "../components/ItInfraHeader";
import Footer from "../components/Footer";

const ItInfraLayout = () => (
  <>
    <ItInfraHeader />
    <main className="pt-6 scroll-smooth">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default ItInfraLayout;
