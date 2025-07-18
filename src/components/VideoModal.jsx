import React from "react";
import { useAppContext } from "../context/AppContext";

const VideoModal = () => {
  const { isVideoModalOpen, closeVideoModal } = useAppContext();

  if (!isVideoModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#1e282297] bg-opacity-70 z-[1000] flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden w-[90%] max-w-3xl shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={closeVideoModal}
          className="absolute top-3 right-3 text-xl font-bold text-red-500 hover:text-red-700"
        >
          ✕
        </button>

        {/* Video */}
        <div className="w-full h-[60vh]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/y89MEdbBtr0"
            title="Mannschaft Intro Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
