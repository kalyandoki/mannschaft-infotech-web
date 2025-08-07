import React from "react";
import { FaCheckCircle, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactWithUs = () => {
  return (
    <section className="w-full bg-white text-black px-4 sm:px-6 md:px-10 2xl:px-20 py-8 sm:py-12 md:py-20 2xl:py-28 font-sans">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold text-center text-gray-800 mb-8 font-roboto">
        Contact Us
      </h2>

      {/* Header */}
      <Link to="#partner-with-us">
        <div className="max-w-8xl mx-auto text-center md:text-left bg-[#000] rounded-t-3xl px-4 sm:px-6 md:px-10 2xl:px-16 py-12 sm:py-16 md:py-20 2xl:py-32 flex flex-col items-start justify-center">
          <h2 className="text-2xl sm:text-4xl md:text-4xl 2xl:text-5xl font-bold text-white">
            Partner with Us for Comprehensive IT
          </h2>
        </div>
      </Link>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto flex flex-col-reverse lg:flex-row gap-10 bg-[#bad8e52e] p-6 sm:p-8 md:p-10 2xl:p-14 rounded-b-3xl">
        {/* Left Content */}
        <div className="p-4 sm:p-6 md:p-8 2xl:p-10 rounded-2xl w-full">
          <p className="text-lg sm:text-xl 2xl:text-2xl mb-4">
            We’re happy to answer any questions you may have and help you
            determine which of our services best fit your needs.
          </p>

          <p className="text-[#000] text-lg sm:text-xl 2xl:text-2xl font-semibold mb-8 cursor-pointer hover:underline w-fit">
            Call us at: +91 7036356760
          </p>

          <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold mb-4">
            Your benefits:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base 2xl:text-lg mb-10">
            {[
              "Client-oriented",
              "Independent",
              "Competent",
              "Results-driven",
              "Problem-solving",
              "Transparent",
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-[#000]">
                <FaCheckCircle className="text-green-500" />
                {benefit}
              </div>
            ))}
          </div>

          <h3 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold mb-6">
            What happens next?
          </h3>

          {[
            "We schedule a call at your convenience",
            "We do a discovery and consulting meeting",
            "We prepare a proposal",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4 mb-4">
              <div className="text-xl font-bold text-[#000]">•</div>
              <p className="text-base sm:text-lg 2xl:text-xl text-[#000]">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form
          className="bg-[#fff] p-6 sm:p-8 md:p-10 2xl:p-12 rounded-2xl shadow-md w-full border border-gray-100 relative z-10
      lg:-mt-40 lg:mx-auto lg:max-w-xl 2xl:max-w-2xl"
        >
          <h3 className="text-center text-2xl sm:text-3xl 2xl:text-4xl font-bold text-[#000] mb-8">
            Schedule a Free Consultation
          </h3>

          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="w-full">
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          {/* Company */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Company / Organization
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Company Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Select */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              How Can We Help You?
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>Select option</option>
              <option>Managed Services</option>
              <option>IT Consulting & Advisory</option>
              <option>Cyber Security</option>
              <option>Web Development</option>
              <option>Mobile Development</option>
              <option>Cloud Services</option>
              <option>Others</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="To better assist you, please describe how we can help..."
              className="w-full border border-gray-300 rounded-md p-2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-1/2 sm:w-1/3 bg-[#ed3b1b] hover:bg-[#ed3a1b79] text-white font-semibold py-2 rounded-md transition duration-200 mx-auto block"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactWithUs;
