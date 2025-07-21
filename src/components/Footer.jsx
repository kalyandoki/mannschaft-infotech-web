import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f1d44f1] text-white px-4 py-10 md:px-20 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm sm:text-base">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-[#fff]  mb-4 font-serif hover:text-yellow-400">
            Contact Us
          </h2>
          <hr />
          <br />
          <ul className="space-y-2 font-light text-white leading-relaxed">
            <li className="hover:text-red-400">
              🏢 Pallaki Enclave, Plot No 44
            </li>
            <li className="hover:text-red-400">3rd Floor, Municipal Plots</li>
            <li className="hover:text-red-400">Bapuji Nagar, Udayagiri Road</li>
            <li className="hover:text-red-400">
              Kavali, Nellore Dist - 524201
            </li>
            <li className="hover:text-red-400">Andhra Pradesh, India</li>
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
            <h3 className="text-lg font-bold text-[#fff] mb-2 font-serif hover:text-yellow-500">
              IT Infra
            </h3>
            <hr />
            <br />
            <ul className="text-white font-light space-y-2 ">
              <li className="hover:text-red-400">Hardware Services</li>
              <li className="hover:text-red-400">Networking Services</li>
              <li className="hover:text-red-400">Cloud & Infra</li>
              <li className="hover:text-red-400">Security & Surveillance</li>
              <li className="hover:text-red-400">Printer Services</li>
              <li className="hover:text-red-400">Multimedia</li>
            </ul>
            <h3 className="mt-4 text-lg font-bold text-[#fff] mb-2 font-serif hover:text-yellow-500">
              Consulting
            </h3>
            <hr />
            <br />
            <ul className="text-white font-light space-y-2 ">
              <li className="hover:text-red-400">Leadership Hiring</li>
              <li className="hover:text-red-400">Lateral Recruitment</li>
              <li className="hover:text-red-400">RPO (Shared)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#fff] mb-2 font-serif hover:text-yellow-500">
              Software
            </h3>
            <hr />
            <br />
            <ul className="text-white font-light space-y-2 ">
              <li className="hover:text-red-400">UX / UI Design</li>
              <li className="hover:text-red-400">UI Development</li>
              <li className="hover:text-red-400">iOS / Android Apps</li>
              <li className="hover:text-red-400">Motion Graphics</li>
              <li className="hover:text-red-400">Augmented Reality</li>
            </ul>
            <h3 className="mt-4 text-lg font-bold text-[#fff] mb-2 font-serif hover:text-red-400">
              Digital
            </h3>
            <hr />
            <br />
            <ul className="text-white font-light space-y-2 ">
              <li className="hover:text-red-400">SEO & Ads</li>
              <li className="hover:text-red-400">Email Marketing</li>
              <li className="hover:text-red-400">Social Media</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-[#fff]  mb-4 font-serif hover:text-yellow-500">
            Follow Us
          </h2>

          <hr />
          <br />
          <div className="flex justify-center md:justify-start gap-5 text-black text-2xl">
            <a
              href="https://www.facebook.com/Mannschaft.IT/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 bg-white  rounded-full p-2 shadow-lg hover:shadow-xl transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@mannschaftit/shorts"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-400 bg-white  rounded-full p-2 shadow-lg hover:shadow-xl transition duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/mannschaft-infotech/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400  bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/mannschaft_it/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400  bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 pt-6 font-light border-t border-gray-400 text-gray-300 text-sm">
        © {new Date().getFullYear()} Mannschaft Infotech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
