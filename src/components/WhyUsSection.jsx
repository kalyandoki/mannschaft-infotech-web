import aboutImg from "../assets/images/mannschaft logo.png";
import manojsir from "../assets/images/ceo2.jpg";
function WhyUsSection() {
  return (
    <section
      className="relative px-6 py-20 md:px-20 2xl:px-40 bg-gradient-to-t from-[#ec2028] via-[#236fb4] to-[#fdbd1b] text-white overflow-hidden"
      style={{ backgroundImage: `url(${manojsir})` }}
    >
      {/* === TOP CURVE === */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10 -mt-px">
        <svg
          className="relative block w-full h-[80px] md:h-[100px]"
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
      <div className="relative z-10 max-w-8xl 2xl:max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 2xl:gap-32 py-10 md:py-16 2xl:py-20">
        {/* === LEFT CONTENT === */}
        <div className="text-left text-[#fff] space-y-5 px-4 md:px-0 text-base md:text-xl 2xl:text-2xl leading-relaxed">
          <p>
            At <strong>Mannschaft Infotech</strong>, we bring together the
            expertise and insights of highly skilled IT professionals with a
            shared mission — to establish ourselves as a{" "}
            <strong>trusted IT partner across PAN India</strong>. Our commitment
            to <strong>client satisfaction</strong> is not just a goal; it’s the
            driving force behind everything we do. Since our inception,
            delivering value through quality service has been at the heart of
            our journey.
          </p>
          <p>
            Our foundation is guided by the leadership of{" "}
            <strong>Mr. Manoj Kumar</strong>, a seasoned expert with over{" "}
            <strong>10 years of experience</strong> in the IT industry. His
            background includes working with leading multinational companies,
            where he consistently earned client trust through exceptional
            service delivery and deep domain knowledge.
          </p>
          <p>
            For any inquiries or to connect with our leadership, reach out to
            Mr. Manoj Kumar at <br />
            📧{" "}
            <a
              href="mailto:manoj.p@mannschaftit.com"
              className="text-indigo-200 underline hover:text-indigo-100"
            >
              manoj.p@mannschaftit.com
            </a>
          </p>
        </div>

        {/* === RIGHT IMAGE === */}
        <div className="flex justify-end">
          <div className="w-44 sm:w-62 md:w-70 lg:w-82 2xl:w-[460px] bg-white rounded-3xl overflow-hidden p-4 shadow-xl">
            <img
              src={aboutImg}
              alt="Mannschaft Team"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* === BOTTOM CURVE === */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[80px] md:h-[100px]"
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
