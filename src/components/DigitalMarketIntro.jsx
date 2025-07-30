import React from "react";
import consultingBg from "../assets/itInfra/dm1.jpg";
import { useAppContext } from "../context/AppContext";
import VideoModal from "./VideoModal";

function DigitalMarketingIntro() {
  const { isVideoModalOpen, openVideoModal } = useAppContext();

  return (
    <>
      {isVideoModalOpen && <VideoModal />}

      <div
        className="relative w-full h-[75vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${consultingBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-start px-6 md:px-16">
          <div>
            <h1 className="text-white text-3xl md:text-6xl font-extrabold animate-fadeInDown pt-10">
              Digital <span className="text-[#79b944]">Marketing</span>
            </h1>

            <div
              onClick={openVideoModal}
              className="mt-6 flex items-center gap-4 p-3 rounded-xl hover:shadow-xl hover:scale-105 transition cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#79b944] rounded-full">
                <svg
                  className="w-8 h-8 text-[#fff]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4l12 6-12 6V4z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[#fff] text-lg">Watch</span>
                <span className="text-[#79b944] font-semibold">
                  INTRO VIDEO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-10 bg-gray-100">
        <p className="text-gray-700 text-base text-center md:text-lg">
          Mannschaft Infotech team is passionate about digital technologies and
          continuously update our strategies with the emerging technologies.
          Today we have team of professionals with registered office in India.
          Our success is when we generate ROI for our clients.
        </p>
      </div>
    </>
  );
}

export default DigitalMarketingIntro;
