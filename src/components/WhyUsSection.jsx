import aboutImg from "../assets/images/mannschaft logo.png";
function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative bg-[#1c1e30cb] pt-30 pb-28 px-4 sm:px-6 md:px-16 lg:px-14 text-white overflow-hidden"
    >
      {/* === Top Wave === */}
      <svg
        className="absolute top-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,106.7C672,85,768,43,864,32C960,21,1056,43,1152,64C1248,85,1344,107,1392,117.3L1440,128L1440,0L0,0Z"
        ></path>
      </svg>

      {/* === Content === */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* === Left Text === */}
        <div className="text-gray-100 font-serif space-y-6 text-base md:text-xl leading-relaxed">
          <p>
            We bring our experience and knowledge from various skilled and
            experienced IT professionals who are working towards creating our
            presence and to be known as a preferred IT partner PAN India.
            <br className="hidden md:block" />
            Client satisfaction means business to us and it is what drives us
            forward since we were Mannschaft-ed as a company.
          </p>
          <p>
            <strong className="text-indigo-300">Mannschaft Infotech</strong> is
            headed by <strong className="text-pink-400">Mr. Manoj Kumar</strong>{" "}
            who brings in more than 10 years of experience in the IT space. He
            is a subject matter expert and has worked in several multinational
            IT companies, earning customer trust through excellent service
            delivery.
            <br />
            Reach him at{" "}
            <a
              href="mailto:manoj.p@mannschaftit.com"
              className="text-indigo-400 underline hover:text-indigo-300"
            >
              manoj.p@mannschaftit.com
            </a>
            .
          </p>
        </div>

        {/* === Right Image === */}
        <div className="flex justify-center">
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-86 border-t-[5px] border-b-[5px] border-blue-500 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={aboutImg}
              alt="Mannschaft Team"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* === Bottom Wave === */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1350 90"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,0L48,16C96,32,192,64,288,69.3C384,75,480,53,576,37.3C672,21,768,11,864,21.3C960,32,1056,64,1152,74.7C1248,85,1344,75,1392,69.3L1440,64L1440,160L0,160Z"
        ></path>
      </svg>
    </section>
  );
}

export default WhyUsSection;
