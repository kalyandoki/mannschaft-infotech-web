import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const infraPagesData = [
  {
    name: "Hardware Services",
    heading: "Managed Hardware Services",
    description:
      "Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?",
    buttonText: "Schedule a Free Consultation",
    bgImage: "/assets/images/hardware-bg.jpg",
  },
  {
    name: "Networking Services",
    heading: "Managed Networking Services",
    description:
      "Let our professionals build and manage a secure and scalable network for your business.",
    buttonText: "Schedule a Free Consultation",
    bgImage: "/assets/images/networking-bg.jpg",
  },
  {
    name: "Cloud & Infrastructure",
    heading: "Cloud Infrastructure Management",
    description:
      "Get access to reliable cloud services tailored to your business needs with 24/7 monitoring.",
    buttonText: "Schedule a Free Consultation",
    bgImage: "/assets/images/cloud-bg.jpg",
  },
  {
    name: "Surveillance Security",
    heading: "Complete Surveillance Solutions",
    description:
      "Keep your assets safe with advanced CCTV and surveillance systems integrated with AI.",
    buttonText: "Schedule a Free Consultation",
    bgImage: "/assets/images/surveillance-bg.jpg",
  },
  {
    name: "Printer Services",
    heading: "Reliable Printing Solutions",
    description:
      "From setup to maintenance, get cost-effective and efficient printer services tailored to your business needs.",
    buttonText: "Schedule a Free Consultation",
    bgImage: "/assets/images/printer-bg.jpg",
  },
  {
    name: "Multimedia Services",
    heading: "Engaging Multimedia Experiences",
    description:
      "Enhance your business communication with state-of-the-art multimedia setups including projectors, displays, and AV systems.",
    buttonText: "Schedule a Free Consultation",
    bgImage: "/assets/images/multimedia-bg.jpg",
  },
];

export const AppProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isServicesPopupVisible, setIsServicesPopupVisible] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selectedWork, setSelectedWork] = useState(null);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
