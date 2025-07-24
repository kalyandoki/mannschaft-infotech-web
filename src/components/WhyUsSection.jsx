import aboutImg from "../assets/images/mannschaft logo.png";
import manojsir from "../assets/images/ceo2.jpg";
function WhyUsSection() {
  return (
    <section
      className="relative p-15 bg-[linear-gradient(to_top,#ec2028,#236fb4,#34d399,#fdbd1b)] text-white overflow-hidden"
      style={{ backgroundImage: `url(${manojsir})` }}
    >
      {/* === TOP CURVE FIXED === */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10 -mt-px">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-white"
            d="M0,0 C360,100 1080,0 1440,100 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-6 m-6 rounded-3xl">
        {/* === Left Text === */}
        <div className="text-[#fff] space-y-4 text-base md:text-lg leading-relaxed">
          {/* <h2 className="text-2xl md:text-3xl font-bold text-center text-[#ed3b1b]">
            About Mannschaft Infotech
          </h2> */}
          <p>
            At <strong className="text-[#fff]">Mannschaft Infotech</strong>, we
            bring together the expertise and insights of highly skilled IT
            professionals with a shared mission — to establish ourselves as a{" "}
            <strong className="text-[#fff]">
              trusted IT partner across PAN India
            </strong>
            . Our commitment to{" "}
            <strong className="text-[#fff]">client satisfaction</strong> is not
            just a goal; it’s the driving force behind everything we do. Since
            our inception, delivering value through quality service has been at
            the heart of our journey.
          </p>
          <p>
            Our foundation is guided by the leadership of{" "}
            <strong className="text-[#fff]">Mr. Manoj Kumar</strong>, a seasoned
            expert with over{" "}
            <strong className="text-[#fff]">10 years of experience</strong> in
            the IT industry. His background includes working with leading
            multinational companies, where he consistently earned client trust
            through exceptional service delivery and deep domain knowledge.
          </p>
          <p>
            For any inquiries or to connect with our leadership, reach out to
            Mr. Manoj Kumar at <br />
            📧{" "}
            <a
              href="mailto:manoj.p@mannschaftit.com"
              className="text-indigo-400 underline hover:text-indigo-300"
            >
              manoj.p@mannschaftit.com
            </a>
          </p>
        </div>

        {/* === Right Image === */}
        <div className="flex justify-center  bg-[#fff] rounded-4xl">
          <div className="relative w-44 sm:w-52  md:w-60 lg:w-60 rounded-3xl md:overflow-hidden overflow-auto">
            <img
              src={aboutImg}
              alt="Mannschaft Team"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* === BOTTOM CURVE === */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-white"
            d="M0,20 C360,80 1080,0 1440,60 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
}

export default WhyUsSection;
