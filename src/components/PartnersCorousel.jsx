import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// ✅ Import your images
import img1 from "../assets/partners/lenovo.jpg";
import img2 from "../assets/partners/insta.jpg";
import img3 from "../assets/partners/hp.jpg";
import img4 from "../assets/partners/hid.jpg";
import img5 from "../assets/partners/hcl.jpg";
import img6 from "../assets/partners/godaddy.jpg";
import img7 from "../assets/partners/molex.jpg";
import img8 from "../assets/partners/micro.jpg";
import img9 from "../assets/partners/netrack.jpg";
import img10 from "../assets/partners/seag.jpg";
import img11 from "../assets/partners/sec.jpg";
import img12 from "../assets/partners/snap.jpg";
import img13 from "../assets/partners/spactra.jpg";
import img14 from "../assets/partners/tran.jpg";
import img15 from "../assets/partners/ultra.jpg";
import img16 from "../assets/partners/business.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];

function partnersCorousel() {
  return (
    <div className="max-w-8xl mx-auto pt-20 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8 font-roboto">
        Our partners
      </h2>
      <Carousel
        showArrows={false}
        autoPlay
        infiniteLoop
        interval={2000}
        transitionTime={700}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={20.33}
        swipeable
        emulateTouch
        showIndicators={false}
        dynamicHeight={false}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-2 py-4 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:px-6 lg:py-6"
          >
            <div className="w-24 sm:w-28 md:w-32 lg:w-36 h-20 sm:h-24 md:h-28 lg:h-32 bg-white rounded-xl hover:shadow-lg  transition-transform duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
              <img
                src={img}
                alt={`Client Logo ${index + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom dot styling */}
      <style>
        {`
              .carousel .control-dots {
                position: absolute;
                bottom: -30px;
                display: flex;
                justify-content: center;
                align-items: center;
                list-style: none;
              }
              .carousel .control-dots .dot {
                background: #4a148c !important;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                opacity: 0.6;
                margin: 0 6px;
                transition: all 0.3s ease;
                cursor: pointer;
              }
              .carousel .control-dots .dot.selected {
                opacity: 1;
                transform: scale(1.3);
                background: #9c27b0 !important;
              }
            `}
      </style>
    </div>
  );
}

export default partnersCorousel;
