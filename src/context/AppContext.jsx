import { createContext, useContext, useState } from "react";

const AppContext = createContext();

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
