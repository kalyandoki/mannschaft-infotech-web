const ContactSection = () => {
  return (
    <section
      id="contact-us"
      className="bg-gradient-to-b from-[#eef1f5] to-white text-gray-800 py-20 px-4 sm:px-8 md:px-16 lg:px-24 font-sans"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Office Details */}
        <div className="space-y-10 taxt-md">
          <h2 className="text-4xl font-extrabold text-black font-serif mb-6">
            Let's Connect
          </h2>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-600">
              📍 Registered Office
            </h3>
            <p className="text-md text-gray-700 leading-relaxed">
              Pallaki Enclave, Plot No 44, 3rd Floor, Municipal Plots,
              <br />
              Bapuji Nagar, Udayagiri Road, Kavali, Nellore Dist-524201
              <br />
              Andhra Pradesh
              <br />
              📞 08626 - 251777, +91 7036356760
              <br />
              📧{" "}
              <a
                href="mailto:projects@mannschaftit.com"
                className="text-indigo-500 underline"
              >
                projects@mannschaftit.com
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-pink-600">
              🏢 Head Office
            </h3>
            <p className="text-md text-gray-700 leading-relaxed">
              Level 1, am@10, MB Towers,
              <br />
              Road No:10, Banjara Hills, Hyderabad-500034
              <br />
              📞 040 - 4646 4546
              <br />
              📧{" "}
              <a
                href="mailto:projects@mannschaftit.com"
                className="text-indigo-500 underline"
              >
                projects@mannschaftit.com
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-pink-600">
              🌍 Corporate Office
            </h3>
            <p className="text-md text-gray-700 leading-relaxed">
              113 S. Perry St, Ste 206 #5233
              <br />
              Lawrenceville, GA 30046 5415
              <br />
              📧{" "}
              <a
                href="mailto:projects@mannschaftit.com"
                className="text-indigo-500 underline"
              >
                projects@mannschaftit.com
              </a>
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className=" p-8 rounded-2xl font-serif">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            We are ready to manage your IT needs.
          </h1>
          <p className="text-md text-gray-600 mb-6">
            Need free IT advice? Or have a requirement? Or let’s just be
            friends! Shoot us a message. We will get back to you ASAP!
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Send us your Requirements.
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter name here"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Enter email here"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 required"
              />
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="required w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <select
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                defaultValue=""
              >
                <option disabled value="">
                  Select service type
                </option>
                <option value="intra">IT Intra</option>
                <option value="software">Software</option>
                <option value="consulting">IT Consulting</option>
                <option value="marketing">Digital Marketing</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">
                Message:
              </label>
              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#cf1729] text-white font-bold px-4 py-2 rounded-md hover:opacity-90 transition duration-300 text-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
