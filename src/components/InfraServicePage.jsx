import React from "react";
import AnimatedHeading from "../components/AnimatedHeading";

import { useAppContext } from "../context/AppContext";

const InfraServicePage = ({ pageIndex }) => {
  const { infraPagesData } = useAppContext();
  const page = infraPagesData[pageIndex];

  if (!page) return <p>Page not found</p>;

  return (
    <section
      className="w-full h-[50%] bg-cover bg-center flex items-end justify-start text-white p-8 pt-10 2xl:px-20 2xl:pb-20 2xl:pt-24"
      style={{
        backgroundImage: `url(${page.bgImage})`,
      }}
    >
      <div className="p-6 bg-transparent rounded-3xl max-w-3xl text-left space-y-6 text-[#fff] 2xl:space-y-8">
        <h1 className="text-white text-3xl md:text-6xl 2xl:text-7xl font-extrabold animate-fadeInDown pt-10">
          IT <span className="text-[#ec2028]">Infra</span>
        </h1>
        <AnimatedHeading text={page.heading} />
        <p className="text-lg 2xl:text-xl text-[#fff]">{page.description}</p>
        <button className="bg-gradient-to-r from-[#ec2028] to-[#ec2028] text-[#fff] font-semibold px-6 py-3 rounded-full hover:scale-105 transition 2xl:px-8 2xl:py-4 2xl:text-lg">
          {page.buttonText}
        </button>
      </div>
    </section>
  );
};

export default InfraServicePage;
