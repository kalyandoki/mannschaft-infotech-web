import { createContext, useContext, useState, useEffect } from "react";
import hard1 from "../assets/itInfra/hard11.jpg";
import hard2 from "../assets/itInfra/hard2.jpg";
import hard3 from "../assets/itInfra/hard3.jpg";
import net1 from "../assets/itInfra/net1.jpg";
import net2 from "../assets/itInfra/net2.jpg";
import net3 from "../assets/itInfra/net3.jpg";
import sup1 from "../assets/itInfra/sss222.png";
import sup2 from "../assets/itInfra/s2.webp";
import sup3 from "../assets/itInfra/s3.webp";
import clo1 from "../assets/itInfra/clo1.jpg";
import clo2 from "../assets/itInfra/clo2.jpg";
import clo3 from "../assets/itInfra/clo3.jpg";
import pri1 from "../assets/itInfra/pri1.jpg";
import pri2 from "../assets/itInfra/pri3.webp";
import pri3 from "../assets/itInfra/pp1.jpeg";
import mul1 from "../assets/itInfra/mul1.webp";
import mul2 from "../assets/itInfra/mul2.jpg";
import mul3 from "../assets/itInfra/mul322.webp";

import bgImg1 from "../assets/mannInfra/ux22.avif";
import bgImg2 from "../assets/mannInfra/ui2.jpg";
import bgImg3 from "../assets/mannInfra/ui3.avif";
import bgImg4 from "../assets/mannInfra/ui4.jpg";
import bgImg5 from "../assets/mannInfra/ui5.jpg";
import bgImg6 from "../assets/mannInfra/ui66.png";

const AppContext = createContext();

const servicesData = [
  {
    heading: "UX Design",
    bgImage: bgImg1,
  },
  {
    heading: "UI Design",
    bgImage: bgImg2,
  },
  {
    heading: "UI Development",
    bgImage: bgImg3,
  },
  {
    heading: "iOS/Android",
    bgImage: bgImg4,
  },
  {
    heading: "Motion Graphics",
    bgImage: bgImg5,
  },
  {
    heading: "Augmented Reality",
    bgImage: bgImg6,
  },
];

const infraPagesData = [
  {
    name: "Hardware Services",
    heading: "Hardware Services",
    description:
      "Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?",
    buttonText: "Schedule a Free Consultation",
    bgImage: hard1,
    img2: hard2,
    img3: hard3,
  },
  {
    name: "Networking Services",
    heading: "Networking Services",
    description:
      "Let our professionals build and manage a secure and scalable network for your business.",
    buttonText: "Schedule a Free Consultation",
    bgImage: net1,
    img2: net2,
    img3: net3,
  },
  {
    name: "Cloud & Infrastructure",
    heading: "Cloud Infrastructure",
    description:
      "Get access to reliable cloud services tailored to your business needs with 24/7 monitoring.",
    buttonText: "Schedule a Free Consultation",
    bgImage: clo1,
    img2: clo2,
    img3: clo3,
  },
  {
    name: "Surveillance Security",
    heading: "Surveillance Security",
    description:
      "Keep your assets safe with advanced CCTV and surveillance systems integrated with AI.",
    buttonText: "Schedule a Free Consultation",
    bgImage: sup1,
    img2: sup2,
    img3: sup3,
  },
  {
    name: "Printer Services",
    heading: "Printer Services",
    description:
      "From setup to maintenance, get cost-effective and efficient printer services tailored to your business needs.",
    buttonText: "Schedule a Free Consultation",
    bgImage: pri3,
    img2: pri2,
    img3: pri1,
  },
  {
    name: "Multimedia Services",
    heading: "Multimedia Services",
    description:
      "Enhance your business communication with state-of-the-art multimedia setups including projectors, displays, and AV systems.",
    buttonText: "Schedule a Free Consultation",
    bgImage: mul3,
    img2: mul2,
    img3: mul1,
  },
  {
    name: "Solutions",
    heading: "SoftWare Solutions",
    description:
      "Enhance your business communication with state-of-the-art multimedia setups including projectors, displays, and AV systems.",
    buttonText: "Schedule a Free Consultation",
    bgImage: mul3,
    img2: mul2,
    img3: mul1,
  },
];

export const AppProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isServicesPopupVisible, setIsServicesPopupVisible] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selectedWork, setSelectedWork] = useState(null);
  const [activeSectionHead, setActiveSectionHead] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeHeader, setActiveHeader] = useState("main");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionHead(entry.target.id);
          }
        });
      },
      { threshold: 0.1 } // Sensitivity
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  const toggleServicesPopup = (forceState) => {
    setIsServicesPopupVisible((prev) =>
      typeof forceState === "boolean" ? forceState : !prev
    );
  };

  return (
    <AppContext.Provider
      value={{
        isMobileMenuOpen,
        toggleMenu,
        closeMenu,
        isVideoModalOpen,
        openVideoModal,
        closeVideoModal,
        activeSection,
        setActiveSection,
        isServicesPopupVisible,
        setIsServicesPopupVisible,
        toggleServicesPopup,
        filter,
        setFilter,
        selectedWork,
        setSelectedWork,
        infraPagesData,
        activeSectionHead,
        setActiveSectionHead,
        showAll,
        toggleShowAll,
        activeIndex,
        setActiveIndex,
        activeHeader,
        setActiveHeader,
        servicesData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
