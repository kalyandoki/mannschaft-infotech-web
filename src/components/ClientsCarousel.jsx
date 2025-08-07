import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// ✅ Import your images
import img1 from "../assets/images/sumtotal.png";
import img2 from "../assets/images/sembcorp.png";
import img3 from "../assets/images/elite.png";
import img4 from "../assets/images/ap police.png";
import img5 from "../assets/images/indira.png";
import img6 from "../assets/images/kavali purapalak.png";
import img7 from "../assets/images/bsnl.png";
import img8 from "../assets/images/shreeyam.png";
import img9 from "../assets/images/pay.png";
import img10 from "../assets/images/natural.png";
import img11 from "../assets/images/wrap.png";
import img12 from "../assets/images/direct dialogue.png";
import img13 from "../assets/images/actrilla.png";

// ✅ Images array
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
];

const ClientsCarousel = () => {
  return (
    <div className="max-w-8xl mx-auto pt-20 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8 font-roboto">
        Our Clients
      </h2>
      <Carousel
        showArrows={false}
        autoPlay
        infiniteLoop
        interval={1800}
        transitionTime={700}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        showIndicators={false}
        centerSlidePercentage={20.33}
        swipeable
        emulateTouch
        dynamicHeight={false}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-2 py-2 sm:px-4 sm:py-4"
          >
            <div
              className="w-36 sm:w-44 md:w-52 lg:w-60 h-28 sm:h-32 md:h-36 lg:h-44 
            rounded-2xl 
              transition-transform duration-300 ease-in-out transform hover:scale-105 
              flex items-center justify-center"
            >
              <img
                src={img}
                alt={`Client Logo ${index + 1}`}
                className="w-full h-full object-contain transition duration-300"
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
};

export default ClientsCarousel;
