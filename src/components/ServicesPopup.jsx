import { useRef, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { IoClose } from "react-icons/io5";

const ServicesPopup = () => {
  const { isServicesPopupVisible, setIsServicesPopupVisible } = useAppContext();
  const popupRef = useRef();

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsServicesPopupVisible(false);
      }
    };

    // ESC key to close
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsServicesPopupVisible(false);
      }
    };

    // Auto-dismiss after 5 seconds
    const timeoutId = setTimeout(() => {
      setIsServicesPopupVisible(false);
    }, 8000);

    if (isServicesPopupVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isServicesPopupVisible, setIsServicesPopupVisible]);

  if (!isServicesPopupVisible) return null;

  return (
    <div className="fixed top-[78px] md:top-28 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl px-4 sm:px-6 md:px-8">
      <div
        ref={popupRef}
        className="relative bg-[#1e1e2de1] text-white rounded-2xl border border-indigo-400 shadow-2xl 
               p-4 sm:p-6 md:p-10 
               max-h-[80vh] overflow-y-auto 
               animate-slideDown transition-all duration-300 font-sans
               scrollbar-thin scrollbar-thumb-indigo-400"
      >
        {/* ❌ Close Button */}
        <button
          onClick={() => setIsServicesPopupVisible(false)}
          className="absolute top-3 right-4 text-white hover:text-red-500 text-xl md:text-2xl transition duration-200"
        >
          <IoClose />
        </button>

        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6">
          <span className="text-pink-500 font-serif">Products & Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-sm md:text-base leading-relaxed">
          {/* IT Infra Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#14e025] mb-2 border-b border-indigo-300 pb-1">
              IT Infra Services
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Hardware Services</li>
              <li>Networking Services</li>
              <li>Cloud & Infrastructure</li>
              <li>Surveillance Security</li>
              <li>Printer Services</li>
              <li>Multimedia Services</li>
            </ul>
          </div>

          {/* Software Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#14e025] mb-2 border-b border-indigo-300 pb-1">
              Software Services
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>UX Designing</li>
              <li>UI Designing</li>
              <li>UI Development</li>
              <li>iOS/Android App Development</li>
              <li>Motion Graphics</li>
              <li>Augmented Reality</li>
            </ul>
          </div>

          {/* IT Consulting & Marketing */}
          <div>
            <h3 className="text-lg font-semibold text-[#14e025] mb-2 border-b border-indigo-300 pb-1">
              IT Consulting Services
            </h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Leadership Recruitment</li>
              <li>Lateral Recruitment</li>
              <li>Fresher Recruitment</li>
              <li>RPO (Shared Services)</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#14e025] mb-2 border-b border-indigo-300 pb-1">
              Digital Marketing
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>SEO</li>
              <li>Advertising</li>
              <li>Social Media Marketing</li>
              <li>Email Marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPopup;
