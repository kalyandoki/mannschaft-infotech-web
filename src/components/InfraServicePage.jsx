import React from "react";
import AnimatedHeading from "../components/AnimatedHeading";

import { useAppContext } from "../context/AppContext";

const InfraServicePage = ({ pageIndex }) => {
  const { infraPagesData } = useAppContext();
  const page = infraPagesData[pageIndex];

  if (!page) return <p>Page not found</p>;

  return (
    <section
      className="w-full h-[60%] pt-[9%] bg-cover bg-center flex items-end justify-start text-white p-8"
      style={{
        backgroundImage: `url(${page.bgImage})`,
      }}
    >
      <div className="p-10 bg-[#45642315] rounded-3xl max-w-3xl text-left space-y-6 text-[#ec2028]">
        <h1 className="text-white text-3xl md:text-6xl font-extrabold animate-fadeInDown pt-10">
          IT <span className="text-[#ec2028]">Infra</span>
        </h1>
        <AnimatedHeading text={page.heading} />
        <p className="text-lg text-[#fff]   ">{page.description}</p>
        <button className="bg-gradient-to-r from-green-400 to-lime-500 text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
          {page.buttonText}
        </button>
      </div>
    </section>
  );
};

export default InfraServicePage;
