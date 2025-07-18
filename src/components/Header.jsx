import { useEffect } from "react";
import { Events, scroller, Link as ScrollLink } from "react-scroll";
import { useAppContext } from "../context/AppContext";
import logo from "../assets/images/mannschaft logo.png";

const navLinks = [
  { to: "products-services", label: "Products & Services" },
  { to: "why-us", label: "Why Us" },
  { to: "our-works", label: "Our Works" },
  { to: "partner-with-us", label: "Partner With Us" },
  { to: "contact-us", label: "Contact Us" },
];

const Header = () => {
  const { isMobileMenuOpen, toggleMenu, closeMenu, toggleServicesPopup } =
    useAppContext();

  useEffect(() => {
    const sectionTitles = {
      "products-services": "Products & Services",
      "why-us": "Why Us",
      "our-works": "Our Works",
      "partner-with-us": "Partner With Us",
      "contact-us": "Contact Us",
      home: "Home",
    };

    const handleSetActive = (to) => {
      const sectionName = sectionTitles[to] || "Mannschaft Infotech";
      document.title = `Mannschaft Infotech | ${sectionName}`;
      window.history.replaceState(null, "", `/#${to}`);
    };

    Events.scrollEvent.register("begin", handleSetActive);

    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash, {
          smooth: true,
          duration: 600,
          offset: -80,
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
    if (to === "products-services") {
      toggleServicesPopup();
    } else {
      toggleServicesPopup(false);
    }
  };

  const handleMobileClick = (to) => {
    closeMenu();
    if (to === "products-services") {
      toggleServicesPopup();
    } else {
      toggleServicesPopup(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f5f4f0c6] shadow-md backdrop-blur-md font-bold">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <ScrollLink
          to="home"
          smooth
          spy={true}
          offset={-80}
          duration={500}
          onClick={closeMenu}
          className="cursor-pointer"
        >
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full p-[3px] bg-gradient-to-tr from-pink-300 via-yellow-300 to-purple-400 animate-bounce hover:animate-none transition duration-200">
            <img
              src={logo}
              alt="Mannschaft Logo"
              className="w-full h-full object-cover rounded-full shadow-md"
            />
          </div>
        </ScrollLink>

        {/* Desktop Navigation */}
        {/* <nav className="hidden md:flex items-center gap-5 lg:gap-8 font-serif font-bold">
          {navLinks.map(({ to, label }) => (
            <ScrollLink
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => handleDesktopClick(to)}
              activeClass="bg-gradient-to-tr from-pink-200 via-red-300 to-pink-200 text-blue-800 shadow-md"
              className="cursor-pointer px-4 py-2 text-[#27362e] font-semibold text-base lg:text-lg rounded-full hover:bg-indigo-700 hover:text-white transition duration-100"
            >
              {label}
            </ScrollLink>
          ))}
        </nav> */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8 font-serif font-bold">
          {navLinks.map(({ to, label }) => (
            <ScrollLink
              key={to}
              to={to}
              spy={true} // Required to track scroll
              smooth={true}
              offset={-80} // Adjust according to header height
              duration={500}
              onClick={() => handleDesktopClick(to)} // Optional: if you want to close menus, log, etc.
              activeClass="bg-gradient-to-tr from-pink-200 via-red-300 to-pink-200 text-blue-800 shadow-md"
              className="cursor-pointer px-4 py-2 text-[#27362e] font-semibold text-base lg:text-lg rounded-full hover:bg-indigo-700 hover:text-white transition duration-300"
            >
              {label}
            </ScrollLink>
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
          className="ml-2 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 hidden md:block"
        >
          Shop
        </a>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-indigo-700 px-4 py-4 space-y-3 font-serif font-bold">
          {navLinks.map(({ to, label }) => (
            <ScrollLink
              key={to}
              to={to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => handleMobileClick(to)}
              activeClass="bg-gradient-to-tr from-pink-200 via-red-300 to-pink-200 text-blue-800 animate-bounce"
              className={`${
                to === "products-services"
                  ? "bg-gradient-to-tr from-pink-200 via-red-300 to-pink-200 animate-bounce block cursor-pointer px-4 py-2 rounded-md text-[#27362e] font-semibold text-base hover:bg-indigo-700 hover:text-white transition duration-300"
                  : "block cursor-pointer px-4 py-2 rounded-md text-[#27362e] font-semibold text-base hover:bg-indigo-700 hover:text-white transition duration-300"
              }`}
            >
              {label}
            </ScrollLink>
          ))}
          <a
            href="https://shop.mannschaftit.com/"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            Shop
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
