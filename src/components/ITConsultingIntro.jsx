import React from "react";
import consultingBg from "../assets/itInfra/it22.avif";
import { useAppContext } from "../context/AppContext";
import VideoModal from "./VideoModal";

function ITConsultingIntro() {
  const { isVideoModalOpen, openVideoModal } = useAppContext();

  return (
    <>
      {isVideoModalOpen && <VideoModal />}

      <div
        className="relative w-full h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${consultingBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-start px-6 md:px-16">
          <div>
            <h1 className="text-white text-3xl md:text-6xl font-extrabold animate-fadeInDown pt-10">
              IT <span className="text-[#fdbd1b]">Consulting</span>
            </h1>

            <div
              onClick={openVideoModal}
              className="mt-6 flex items-center gap-4 p-3 rounded-xl hover:shadow-xl hover:scale-105 transition cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#fdbd1b] rounded-full shadow-sm">
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
                <span className="text-[#fdbd1b] font-semibold">
                  INTRO VIDEO
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-6 bg-gray-100">
        <p className="text-gray-700 text-base text-center md:text-lg">
          Our priority is YOUR requirement, and we will strive hard to meet that
          requirement, every time. Our Team has decades of experience to deliver
          on YOUR needs. Rest assured, if there is an opportunity to be
          explored, we will do it for YOU. At Mannschaft Infotech, we have
          single agenda – to transform careers and to support organizations to
          find, nurture and retain right talent!
        </p>
      </div>
    </>
  );
}

export default ITConsultingIntro;
