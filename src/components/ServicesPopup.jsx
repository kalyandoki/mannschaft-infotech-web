import { useRef, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiTarget } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";

const ServicesPopup = () => {
  const { isServicesPopupVisible, setIsServicesPopupVisible, setActiveHeader } =
    useAppContext();
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
    // <div className="fixed top-[78px] md:top-28 left-1/2 transform -translate-x-1/2 z-50 w-[100%] font-roboto">
    //   <div
    //     ref={popupRef}
    //     className="relative bg-[#fffffff8] text-[#0d0d1bf7]
    //            p-4 sm:p-6 md:p-10
    //            max-h-[80vh] overflow-y-auto
    //            animate-slideDown transition-all duration-300 font-sans
    //            scrollbar-thin scrollbar-thumb-indigo-400"
    //   >
    //     {/* ❌ Close Button */}
    //     {/* <button
    //       onClick={() => setIsServicesPopupVisible(false)}
    //       className="absolute top-3 right-4 text-[#0f1d44] hover:text-red-500 text-xl md:text-2xl transition duration-200"
    //     >
    //       <IoClose />
    //     </button> */}

    //     <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
    //       <span className="text-[#0f1d44] font-roboto">
    //         Products & Services
    //       </span>
    //     </h2>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 text-sm md:text-base leading-relaxed">
    //       {/* IT Infra Services */}
    //       <div>
    //         <Link to="/it-infra">
    //           <h3
    //             className="text-lg font-bold text-[#0f1d44] hover:text-[#ed3b1b] mb-2 border-b border-indigo-300 pb-1"
    //             onClick={() => setActiveHeader("itinfra")}
    //           >
    //             IT Infra Services
    //           </h3>
    //         </Link>
    //         <ul className="list-disc list-inside space-y-1">
    //           <Link to="/hardware-services">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Hardware Services
    //             </li>
    //           </Link>
    //           <Link to="/networking-services">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Networking Services
    //             </li>
    //           </Link>

    //           <Link to="/cloud-infrastructure">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Cloud & Infrastructure
    //             </li>
    //           </Link>

    //           <Link to="/surveillance-security">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Surveillance Security
    //             </li>
    //           </Link>

    //           <Link to="/printer-services">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Printer Services
    //             </li>
    //           </Link>

    //           <Link to="/multimedia-services">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Multimedia Services
    //             </li>
    //           </Link>
    //         </ul>
    //       </div>

    //       {/* Software Services */}
    //       <div>
    //         <Link to="/software-services">
    //           <h3
    //             className="text-lg font-bold hover:text-[#ed3b1b] text-[#0f1d44] mb-2 border-b border-indigo-300 pb-1"
    //             onClick={() => setActiveHeader("software")}
    //           >
    //             Software Services
    //           </h3>
    //         </Link>
    //         <ul className="list-disc list-inside space-y-1">
    //           <Link to="/ux-design">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               UX Designing
    //             </li>
    //           </Link>
    //           <Link to="/ui-design">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               UI Designing
    //             </li>
    //           </Link>
    //           <Link to="/ui-development">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               UI Development
    //             </li>
    //           </Link>
    //           <Link to="/ios-app-dev">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[120%]">
    //               iOS/Android App Development
    //             </li>
    //           </Link>
    //           <Link to="/motion-graphics">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Motion Graphics
    //             </li>
    //           </Link>
    //           <Link to="/augmented-reality">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Augmented Reality
    //             </li>
    //           </Link>
    //         </ul>
    //       </div>

    //       {/* IT Consulting */}
    //       <div>
    //         <Link to="/it-consulting">
    //           <h3
    //             className="text-lg font-bold hover:text-[#ed3b1b] text-[#0f1d44] mb-2 border-b border-indigo-300 pb-1"
    //             onClick={() => setActiveHeader("consulting")}
    //           >
    //             IT Consulting Services
    //           </h3>
    //         </Link>
    //         <ul className="list-disc list-inside space-y-1 mb-4">
    //           <Link to="/leadership-recruitment">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Leadership Recruitment
    //             </li>
    //           </Link>
    //           <Link to="/lateral-recruitment">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Lateral Recruitment
    //             </li>
    //           </Link>
    //           <Link to="/fresher-recruitment">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Fresher Recruitment
    //             </li>
    //           </Link>
    //           <Link to="/rpo">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               RPO (Shared Services)
    //             </li>
    //           </Link>
    //         </ul>
    //       </div>

    //       {/* Marketing */}
    //       <div>
    //         <Link to="/digital-marketing">
    //           <h3
    //             className="text-lg font-bold hover:text-[#ed3b1b]  text-[#0f1d44] mb-2 border-b border-indigo-300 pb-1"
    //             onClick={() => setActiveHeader("marketing")}
    //           >
    //             Digital Marketing
    //           </h3>
    //         </Link>
    //         <ul className="list-disc list-inside space-y-1">
    //           <Link to="/seo">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               SEO
    //             </li>
    //           </Link>
    //           <Link to="/advertising">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Advertising
    //             </li>
    //           </Link>
    //           <Link to="/social-media-marketing">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Social Media Marketing
    //             </li>
    //           </Link>
    //           <Link to="/email-marketing">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Email Marketing
    //             </li>
    //           </Link>
    //         </ul>
    //       </div>

    //       <div>
    //         <Link to="/industry-focus">
    //           <h3
    //             className="text-lg font-bold hover:text-[#ed3b1b]  text-[#0f1d44] mb-2 pb-1 flex items-center"
    //             onClick={() => setActiveHeader("focus")}
    //           >
    //             <FiTarget className="text-[#010ED0] text-2xl sm:text-3xl md:text-4xl mr-2" />
    //             Industry Focus
    //           </h3>
    //         </Link>

    //         <ul className="list-disc list-inside space-y-2">
    //           <Link to="/industry-manufacturing">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Industry Manufacturing
    //             </li>
    //           </Link>
    //           <Link to="/transportation-logistics">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Transportation Logistics
    //             </li>
    //           </Link>
    //           <Link to="/healthcare">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Healthcare
    //             </li>
    //           </Link>
    //           <Link to="/banks-insurance">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Banks & Insurance
    //             </li>
    //           </Link>
    //           <Link to="/consulting-providers">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%]">
    //               Consulting Providers
    //             </li>
    //           </Link>
    //           <Link to="/non-profit">
    //             <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold hover:font-semibold  rounded-lg w-[80%] mb-2">
    //               Non Profit
    //             </li>
    //           </Link>
    //         </ul>
    //         <Link to="/industries">
    //           <span className=" text-[#010ED0] font-bold  m-2 flex items-center justify-content-end w-21 border-0 border-b-2 hover:font-semibold hover:text-red-600 ">
    //             View all
    //             <AiOutlineArrowRight className="ml-2 font-bold" />
    //           </span>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="fixed top-[78px] md:top-28 left-1/2 transform -translate-x-1/2 z-50 w-full font-roboto">
      <div
        ref={popupRef}
        className="relative bg-[#fffffff8] text-[#0d0d1bf7]   
           p-4 sm:p-6 md:p-10 2xl:p-14
           max-h-[80vh] overflow-y-auto 
           animate-slideDown transition-all duration-300 font-sans
           scrollbar-thin scrollbar-thumb-indigo-400"
      >
        {/* ❌ Close Button */}

        {/* <button
          onClick={() => setIsServicesPopupVisible(false)}
          className="absolute top-3 right-4 text-[#0f1d44] hover:text-red-500 text-xl md:text-2xl transition duration-200"
        >
          <IoClose />
        </button> */}

        <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-center mb-6">
          <span className="text-[#0f1d44] font-roboto">
            Products & Services
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 2xl:grid-cols-5 gap-6 md:gap-8 2xl:gap-10 text-sm md:text-base 2xl:text-lg leading-relaxed">
          {/* IT Infra Services */}
          <div>
            <Link to="/it-infra">
              <h3
                className="text-lg 2xl:text-xl font-bold text-[#0f1d44] hover:text-[#ed3b1b] mb-2 border-b border-indigo-300 pb-1"
                onClick={() => setActiveHeader("itinfra")}
              >
                IT Infra Services
              </h3>
            </Link>
            <ul className="list-disc list-inside space-y-1">
              <Link to="/hardware-services">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Hardware Services
                </li>
              </Link>
              <Link to="/networking-services">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Networking Services
                </li>
              </Link>
              <Link to="/cloud-infrastructure">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Cloud & Infrastructure
                </li>
              </Link>
              <Link to="/surveillance-security">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Surveillance Security
                </li>
              </Link>
              <Link to="/printer-services">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Printer Services
                </li>
              </Link>
              <Link to="/multimedia-services">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Multimedia Services
                </li>
              </Link>
            </ul>
          </div>

          {/* Software Services */}
          <div>
            <Link to="/software-services">
              <h3
                className="text-lg 2xl:text-xl font-bold hover:text-[#ed3b1b] text-[#0f1d44] mb-2 border-b border-indigo-300 pb-1"
                onClick={() => setActiveHeader("software")}
              >
                Software Services
              </h3>
            </Link>
            <ul className="list-disc list-inside space-y-1">
              <Link to="/ux-design">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  UX Designing
                </li>
              </Link>
              <Link to="/ui-design">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  UI Designing
                </li>
              </Link>
              <Link to="/ui-development">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  UI Development
                </li>
              </Link>
              <Link to="/ios-app-dev">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[120%]">
                  iOS/Android App Development
                </li>
              </Link>
              <Link to="/motion-graphics">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Motion Graphics
                </li>
              </Link>
              <Link to="/augmented-reality">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Augmented Reality
                </li>
              </Link>
            </ul>
          </div>

          {/* IT Consulting */}
          <div>
            <Link to="/it-consulting">
              <h3
                className="text-lg 2xl:text-xl font-bold hover:text-[#ed3b1b] text-[#0f1d44] mb-2 border-b border-indigo-300 pb-1"
                onClick={() => setActiveHeader("consulting")}
              >
                IT Consulting Services
              </h3>
            </Link>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <Link to="/leadership-recruitment">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Leadership Recruitment
                </li>
              </Link>
              <Link to="/lateral-recruitment">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Lateral Recruitment
                </li>
              </Link>
              <Link to="/fresher-recruitment">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Fresher Recruitment
                </li>
              </Link>
              <Link to="/rpo">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  RPO (Shared Services)
                </li>
              </Link>
            </ul>
          </div>

          {/* Digital Marketing */}
          <div>
            <Link to="/digital-marketing">
              <h3
                className="text-lg 2xl:text-xl font-bold hover:text-[#ed3b1b]  text-[#0f1d44] mb-2 border-b border-indigo-300 pb-1"
                onClick={() => setActiveHeader("marketing")}
              >
                Digital Marketing
              </h3>
            </Link>
            <ul className="list-disc list-inside space-y-1">
              <Link to="/seo">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  SEO
                </li>
              </Link>
              <Link to="/advertising">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Advertising
                </li>
              </Link>
              <Link to="/social-media-marketing">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Social Media Marketing
                </li>
              </Link>
              <Link to="/email-marketing">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Email Marketing
                </li>
              </Link>
            </ul>
          </div>

          {/* Industry Focus */}
          <div>
            <Link to="/industry-focus">
              <h3
                className="text-lg 2xl:text-xl font-bold hover:text-[#ed3b1b] text-[#0f1d44] mb-2 pb-1 flex items-center"
                onClick={() => setActiveHeader("focus")}
              >
                <FiTarget className="text-[#010ED0] text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl mr-2" />
                Industry Focus
              </h3>
            </Link>
            <ul className="list-disc list-inside space-y-2">
              <Link to="/industry-manufacturing">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Industry Manufacturing
                </li>
              </Link>
              <Link to="/transportation-logistics">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Transportation Logistics
                </li>
              </Link>
              <Link to="/healthcare">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Healthcare
                </li>
              </Link>
              <Link to="/banks-insurance">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Banks & Insurance
                </li>
              </Link>
              <Link to="/consulting-providers">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%]">
                  Consulting Providers
                </li>
              </Link>
              <Link to="/non-profit">
                <li className="hover:text-[#ed3b1b] text-[#0f1d44] font-semibold rounded-lg w-[80%] mb-2">
                  Non Profit
                </li>
              </Link>
            </ul>
            <Link to="/industries">
              <span className=" text-[#010ED0] font-bold  m-2 flex items-center justify-content-end w-21 border-0 border-b-2 hover:font-semibold hover:text-red-600 ">
                View all
                <AiOutlineArrowRight className="ml-2 font-bold" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPopup;
