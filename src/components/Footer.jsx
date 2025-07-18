import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-tr from-[#383787] via-[#78636e] to-[#5e6c65] text-white px-4 py-10 md:px-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm sm:text-base">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-[#f0c5d8] mb-4 font-serif">
            Contact Us
          </h2>
          <ul className="space-y-1 font-mono text-white leading-relaxed font-medium">
            <li>🏢 Pallaki Enclave, Plot No 44</li>
            <li>3rd Floor, Municipal Plots</li>
            <li>Bapuji Nagar, Udayagiri Road</li>
            <li>Kavali, Nellore Dist - 524201</li>
            <li>Andhra Pradesh, India</li>
            <li className="mt-2">📞 +91 7036356760</li>
            <li>
              📧{" "}
              <a
                href="mailto:projects@mannschaftit.com"
                className="text-blue-300 hover:underline"
              >
                projects@mannschaftit.com
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-bold text-yellow-200 mb-2 font-serif">
              IT Infra
            </h3>
            <ul className="text-white font-mono space-y-1">
              <li>Hardware Services</li>
              <li>Networking Services</li>
              <li>Cloud & Infra</li>
              <li>Security & Surveillance</li>
              <li>Printer Services</li>
              <li>Multimedia</li>
            </ul>
            <h3 className="mt-4 text-lg font-bold text-yellow-200 mb-2 font-serif">
              Consulting
            </h3>
            <ul className="text-white font-mono space-y-1">
              <li>Leadership Hiring</li>
              <li>Lateral Recruitment</li>
              <li>RPO (Shared)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-yellow-200 mb-2 font-serif">
              Software
            </h3>
            <ul className="text-white font-mono space-y-1">
              <li>UX / UI Design</li>
              <li>UI Development</li>
              <li>iOS / Android Apps</li>
              <li>Motion Graphics</li>
              <li>Augmented Reality</li>
            </ul>
            <h3 className="mt-4 text-lg font-bold text-yellow-200 mb-2 font-serif">
              Digital
            </h3>
            <ul className="text-white font-mono space-y-1">
              <li>SEO & Ads</li>
              <li>Email Marketing</li>
              <li>Social Media</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-[#f6cbde] mb-4 font-serif">
            Follow Us
          </h2>
          <div className="flex justify-center md:justify-start gap-5 text-black text-2xl">
            <a
              href="https://www.facebook.com/Mannschaft.IT/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 bg-white animate-pulse rounded-full p-2 shadow-lg hover:shadow-xl transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@mannschaftit/shorts"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 bg-white animate-pulse rounded-full p-2 shadow-lg hover:shadow-xl transition duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/mannschaft-infotech/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 animate-pulse bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/mannschaft_it/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 animate-pulse bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 pt-6 font-mono border-t border-gray-400 text-gray-300 text-sm">
        © {new Date().getFullYear()} Mannschaft Infotech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
