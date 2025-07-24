import React from "react";
import { FaCheckCircle, FaPhoneAlt, FaArrowRight } from "react-icons/fa";

const ContactWithUs = () => {
  return (
    <section className="w-full bg-white text-black px-4 sm:px-6 md:px-10 py-6 md:py-20 font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 font-roboto">
        Contact Us
      </h2>
      {/* Header */}
      <div className="max-w-7xl mx-auto  text-center md:text-left bg-[#000] rounded-t-3xl">
        <span className="text-[#fff] font-semibold rounded-md m-4 pl-2 pr-2 pb-2 bg-[#a4d5dd65]">
          Contact Us
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white pt-30 p-4">
          Partner with Us for Comprehensive IT
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#bad8e52e] p-8 rounded-b-3xl">
        {/* Left Content */}
        <div className=" p-6 sm:p-10 rounded-2xl">
          <p className="text-lg mb-4">
            We’re happy to answer any questions you may have and help you
            determine which of our services best fit your needs.
          </p>

          <p className="text-[#000] text-lg font-semibold mb-8 cursor-pointer hover:underline w-fit">
            Call us at: 1-800-356-8933
          </p>

          {/* Benefits */}
          <h3 className="text-2xl font-bold mb-4">Your benefits:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base mb-10">
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

          {/* What happens next */}
          <h3 className="text-2xl font-bold mb-6">What happens next?</h3>
          {[
            "We schedule a call at your convenience",
            "We do a discovery and consulting meeting",
            "We prepare a proposal",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4 mb-4">
              <div className="text-xl font-bold text-[#000]">{i + 1} •</div>
              <p className="text-[#000]">{step}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form className="bg-[#fff] p-6 sm:p-10 rounded-2xl shadow-md w-full border border-gray-100 relative -top-[20%]">
          <h3 className="text-center text-2xl font-bold text-[#000] mb-8">
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

          {/* Service Select */}
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
            className="w-1/3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 rounded-md transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactWithUs;
