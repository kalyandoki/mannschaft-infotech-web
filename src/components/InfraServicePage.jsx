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
      <div className="bg-[#00000099] p-10 rounded-3xl max-w-3xl text-center space-y-6 shadow-2xl border border-white/30">
        <AnimatedHeading text={page.heading} />
        <p className="text-lg">{page.description}</p>
        <button className="bg-gradient-to-r from-green-400 to-lime-500 text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
          {page.buttonText}
        </button>
      </div>
    </section>
  );
};

export default InfraServicePage;
