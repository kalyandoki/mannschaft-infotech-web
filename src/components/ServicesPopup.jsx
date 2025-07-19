import { useRef, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

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

    if (isServicesPopupVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isServicesPopupVisible, setIsServicesPopupVisible]);

  if (!isServicesPopupVisible) return null;

  return (
    <div className="fixed top-[78px] md:top-28 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-8xl px-4 sm:px-6 md:px-8">
      <div
        ref={popupRef}
        className="relative bg-[#f5f4f0f8] text-[#0d0d1bf7] rounded-2xl border border-blue-800 shadow-2xl 
               p-4 sm:p-6 md:p-10 
               max-h-[80vh] overflow-y-auto 
               animate-slideDown transition-all duration-300 font-sans
               scrollbar-thin scrollbar-thumb-indigo-400"
      >
        {/* ❌ Close Button */}
        <button
          onClick={() => setIsServicesPopupVisible(false)}
          className="absolute top-3 right-4 text-black hover:text-red-500 text-xl md:text-2xl transition duration-200"
        >
          <IoClose />
        </button>

        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-6">
          <span className="text-pink-500 font-serif">Products & Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-sm md:text-base leading-relaxed">
          {/* IT Infra Services */}
          <div>
            <h3 className="text-lg font-bold text-[#0f7217] mb-2 border-b border-indigo-300 pb-1">
              IT Infra Services
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <Link to="/hardware-services">
                <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                  Hardware Services
                </li>
              </Link>
              <Link to="/networking-services">
                <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                  Networking Services
                </li>
              </Link>

              <Link to="/cloud-infrastructure">
                <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                  Cloud & Infrastructure
                </li>
              </Link>

              <Link to="/surveillance-security">
                <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                  Surveillance Security
                </li>
              </Link>

              <Link to="/printer-services">
                <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                  Printer Services
                </li>
              </Link>

              <Link to="/multimedia-services">
                <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                  Multimedia Services
                </li>
              </Link>
            </ul>
          </div>

          {/* Software Services */}
          <div>
            <h3 className="text-lg font-bold text-[#0f7217] mb-2 border-b border-indigo-300 pb-1">
              Software Services
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                UX Designing
              </li>
              <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                UI Designing
              </li>
              <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                UI Development
              </li>
              <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[90%]">
                iOS/Android App Development
              </li>
              <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                Motion Graphics
              </li>
              <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                Augmented Reality
              </li>
            </ul>
          </div>

          {/* IT Consulting */}
          <div>
            <h3 className="text-lg font-bold text-[#0f7217] mb-2 border-b border-indigo-300 pb-1">
              IT Consulting Services
            </h3>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                Leadership Recruitment
              </li>
              <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                Lateral Recruitment
              </li>
              <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                Fresher Recruitment
              </li>
              <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                RPO (Shared Services)
              </li>
            </ul>
          </div>

          {/* Marketing */}
          <div>
            <h3 className="text-lg font-bold text-[#0f7217] mb-2 border-b border-indigo-300 pb-1">
              Digital Marketing
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                SEO
              </li>
              <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                Advertising
              </li>
              <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                Social Media Marketing
              </li>
              <li className="hover:text-[#720f17] hover:font-semibold hover:bg-[#7cb6c8] rounded-lg w-[80%]">
                Email Marketing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPopup;
