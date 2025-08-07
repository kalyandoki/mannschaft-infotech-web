import React from "react";
import { useAppContext } from "../context/AppContext";
const ManagedITServicesLeftImage = ({ pageIndex }) => {
  const { infraPagesData } = useAppContext();
  const page = infraPagesData[pageIndex];

  return (
    <section className="w-full px-4 sm:px-8 xl:px-16 2xl:px-24 py-10 2xl:py-20 bg-[#F5F5F5] font-sans">
      <div className="max-w-7xl 2xl:max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-8 2xl:gap-16">
        {/* === Left Side Image === */}
        <div className="w-full md:w-1/2">
          <img
            src={page.img3}
            alt="Managed IT Services"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* === Right Side Text === */}
        <div className="w-full md:w-1/2 space-y-6 text-[#1d1e21]">
          <h2 className="text-xl sm:text-3xl 2xl:text-4xl font-bold leading-tight">
            Our managed IT services let you concentrate on what matters
          </h2>
          <p className="text-base sm:text-lg 2xl:text-xl text-[#353839] leading-relaxed">
            Are you busy putting out IT fires instead of focusing on your core
            business? If your technology is draining resources rather than
            optimizing them, Netsurit can get you back on track. A
            professionally managed services provider can give you the decisive
            edge to:
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManagedITServicesLeftImage;
