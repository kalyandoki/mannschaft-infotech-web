import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => (
  <>
    <Header />
    <main className="pt-6 scroll-smooth">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default MainLayout;
