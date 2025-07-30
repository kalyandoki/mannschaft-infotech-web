import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PerformanceAndServices from "../components/PerformanceAndServices ";
import Leadership from "./Leadership";
import FresherRecruitment from "./FresherRecruitment";
import LateralRecruitment from "./LateralRecruitment";
import Rpo from "./Rpo";
import ITConsultingIntro from "../components/ITConsultingIntro";
import VideoModal from "../components/VideoModal";

function LeadershipRecruitment() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the section based on the current pathname
    const id = location.pathname.replace("/", "");
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <>
      <section id="/leadership-recruitment">
        <ITConsultingIntro />
        <Leadership />
      </section>

      <section id="lateral-recruitment">
        <LateralRecruitment />
      </section>

      <section id="fresher-recruitment">
        <FresherRecruitment />
      </section>

      <section id="rpo">
        <Rpo />
      </section>
    </>
  );
}

export default LeadershipRecruitment;
