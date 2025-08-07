import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#3d3d3b] text-white px-4 sm:px-8 md:px-12 lg:px-20 py-12">
      <div className="max-w-8xl mx-auto grid gap-10 text-sm sm:text-base">
        {/* Contact & Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Contact Us */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4  hover:text-yellow-400 transition duration-300">
              Contact Us
            </h2>
            <hr className="border-gray-500 mb-3" />
            <ul className="space-y-2 text-white font-light leading-relaxed">
              <li className="hover:text-red-400 transition">
                🏢 Pallaki Enclave, Plot No 44
              </li>
              <li className="hover:text-red-400 transition">
                3rd Floor, Municipal Plots
              </li>
              <li className="hover:text-red-400 transition">
                Bapuji Nagar, Udayagiri Road
              </li>
              <li className="hover:text-red-400 transition">
                Kavali, Nellore Dist - 524201
              </li>
              <li className="hover:text-red-400 transition">
                Andhra Pradesh, India
              </li>
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

          {/* IT Infra */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4  hover:text-yellow-400 transition duration-300">
              IT Infra
            </h3>
            <hr className="border-gray-500 mb-3" />
            <ul className="text-white font-light space-y-2">
              <li className="hover:text-red-400 transition">
                Hardware Services
              </li>
              <li className="hover:text-red-400 transition">
                Networking Services
              </li>
              <li className="hover:text-red-400 transition">Cloud & Infra</li>
              <li className="hover:text-red-400 transition">
                Security & Surveillance
              </li>
              <li className="hover:text-red-400 transition">
                Printer Services
              </li>
              <li className="hover:text-red-400 transition">Multimedia</li>
            </ul>
          </div>

          {/* Consulting */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4  hover:text-yellow-400 transition duration-300">
              Consulting
            </h3>
            <hr className="border-gray-500 mb-3" />
            <ul className="text-white font-light space-y-2">
              <li className="hover:text-red-400 transition">
                Leadership Hiring
              </li>
              <li className="hover:text-red-400 transition">
                Lateral Recruitment
              </li>
              <li className="hover:text-red-400 transition">RPO (Shared)</li>
            </ul>
          </div>

          {/* Software */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4  hover:text-yellow-400 transition duration-300">
              Software
            </h3>
            <hr className="border-gray-500 mb-3" />
            <ul className="text-white font-light space-y-2">
              <li className="hover:text-red-400 transition">UX / UI Design</li>
              <li className="hover:text-red-400 transition">UI Development</li>
              <li className="hover:text-red-400 transition">
                iOS / Android Apps
              </li>
              <li className="hover:text-red-400 transition">Motion Graphics</li>
              <li className="hover:text-red-400 transition">
                Augmented Reality
              </li>
            </ul>
          </div>

          {/* Digital */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4  hover:text-yellow-400 transition duration-300">
              Digital
            </h3>
            <hr className="border-gray-500 mb-3" />
            <ul className="text-white font-light space-y-2">
              <li className="hover:text-red-400 transition">SEO & Ads</li>
              <li className="hover:text-red-400 transition">Email Marketing</li>
              <li className="hover:text-red-400 transition">Social Media</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Social Icons */}
      <div className="mt-10 flex flex-col items-center text-center">
        <h2 className="text-lg sm:text-xl font-bold  text-white mb-4 hover:text-yellow-400 transition duration-300">
          Follow Us
        </h2>
        <hr className="border-gray-500 mb-4 w-40" />
        <div className="flex justify-center gap-5 text-black text-2xl">
          <a
            href="https://www.facebook.com/Mannschaft.IT/"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-2 rounded-full shadow-md hover:shadow-xl transition hover:text-blue-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/@mannschaftit/shorts"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-2 rounded-full shadow-md hover:shadow-xl transition hover:text-red-500"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/company/mannschaft-infotech/posts/?feedView=all"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-2 rounded-full shadow-md hover:shadow-xl transition hover:text-blue-500"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/mannschaft_it/"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-2 rounded-full shadow-md hover:shadow-xl transition hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/mannschaft_it"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-2 rounded-full shadow-md hover:shadow-xl transition hover:text-blue-400"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 pt-6 border-t border-gray-600 text-gray-400 text-xs sm:text-sm">
        © {new Date().getFullYear()} Mannschaft Infotech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
