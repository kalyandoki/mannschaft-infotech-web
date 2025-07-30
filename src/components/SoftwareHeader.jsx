import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Events, scroller, Link as ScrollLink } from "react-scroll";
import { useAppContext } from "../context/AppContext";
import logo from "../assets/images/mannschaft logo.png";
import psLogo from "../assets/images/ps-logo.png";

import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const getNavLinks = () => [
  {
    to: "products-services",
    label: (
      <span className="flex items-center gap-2">
        <img src={psLogo} alt="Products & Services Logo" className="w-6 h-6" />
        {/* {isPopupOpen ? <AiFillCaretUp /> : <AiFillCaretDown />} */}
      </span>
    ),
  },

  { to: "ux-design", label: "UX" },
  { to: "ui-design", label: "UI" },
  { to: "ui-development", label: "UI Development" },
  { to: "ios-app-dev", label: "iOS/Android" },
  { to: "motion-graphics", label: "Motion Graphics" },
  { to: "augmented-reality", label: "Augmented Reality" },
];

const SoftwareHeader = () => {
  const {
    isMobileMenuOpen,
    toggleMenu,
    closeMenu,
    toggleServicesPopup,
    isServicesPopupVisible,
    activeSectionHead,
  } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    const sectionTitles = {
      "products-services": "Products & Services",
      "ux-design": "UX ",
      "ui-design": "UI ",
      "ui-development": "UI Development",
      "ios-app-dev": "iOS/Android",
      "motion-graphics": "Motion Graphics",
      "augmented-reality": "Augmented Reality",
      home: "Home",
    };

    const handleSetActive = (to) => {
      const sectionName = sectionTitles[to] || "Mannschaft Infotech";
      document.title = `Mannschaft Infotech | ${sectionName}`;
      window.history.replaceState(null, "", `/${to}`);
    };

    Events.scrollEvent.register("begin", handleSetActive);

    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash, {
          smooth: true,
          duration: 600,
          offset: -30,
        });
      }, 200);
    }

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  useEffect(() => {
    document.title = "Mannschaft Infotech | Home";
  }, []);

  const handleDesktopClick = (to) => {
    closeMenu();
    toggleServicesPopup(to === "products-services");

    if (location.pathname !== "/") {
      navigate(`/#${to}`);
    } else {
      scroller.scrollTo(to, {
        smooth: true,
        duration: 600,
        offset: -80,
      });
    }

    const el = document.getElementById(to);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMobileClick = (to) => {
    closeMenu();
    toggleServicesPopup(to === "products-services");

    if (location.pathname !== "/") {
      navigate(`/#${to}`);
    } else {
      scroller.scrollTo(to, {
        smooth: true,
        duration: 600,
        offset: -80,
      });
    }

    const el = document.getElementById(to);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navLinks = getNavLinks(isServicesPopupVisible);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fff] shadow-md backdrop-blur-md font-medium font-roboto">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        {/* <ScrollLink
          to="home"
          smooth={true}
          spy={true}
          offset={-30}
          duration={200}
          onClick={closeMenu}
          className="cursor-pointer"
        > */}
        <Link to="/#home" onClick={closeMenu}>
          <div className="w-16 h-20 md:w-45 md:h-30 rounded-full gap-4">
            <img
              src={logo}
              alt="Mannschaft Logo"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </Link>
        {/* </ScrollLink> */}
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-10 font-roboto">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={`/${to}`}
              onClick={() => handleDesktopClick(to)}
              // activeClass="bg-gradient-to-tr from-pink-200 via-red-300 to-pink-200 text-blue-800 shadow-md"
              className={`cursor-pointer text-[#000] lg:text-md rounded-full transition duration-300  hover:text-[#21a1ff] ${
                activeSectionHead === to ? "text-[#21a1ff]" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-gray-800 focus:outline-none"
        >
          ☰
        </button>

        <a
          href="https://shop.mannschaftit.com/"
          target="_blank"
          rel="noreferrer"
          className="m-2 bg-[#ed3b1b] text-white font-semibold  px-6 py-1 rounded-lg shadow-md hover:shadow-lg transition duration-300 hidden md:block font-roboto"
        >
          Shop
        </a>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-indigo-700 px-4 py-6 space-y-3 font-serif font-bold flex flex-col items-center">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={`/${to}`}
              spy={true}
              smooth={true}
              offset={-30}
              duration={200}
              onClick={() => handleMobileClick(to)}
              className="cursor-pointer px-4 py-2 text-[#27362e] font-semibold text-base lg:text-lg rounded-full hover:bg-[#06c26dbf] hover:text-black transition duration-300"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://shop.mannschaftit.com/"
            target="_blank"
            rel="noreferrer"
            className="block w-full m-2 text-center bg-[#ed3b1b] text-white font-semibold px-2 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 font-roboto "
          >
            Shop
          </a>
        </div>
      )}
    </header>
  );
};

export default SoftwareHeader;
