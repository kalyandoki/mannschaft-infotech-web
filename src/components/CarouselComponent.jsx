import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// ✅ Import your images
import img1 from "../assets/Products&Services/ps-img-1.jpg";
import img2 from "../assets/Products&Services/ps-img-2.jpg";
import img3 from "../assets/Products&Services/ps-img-3.jpg";
import img4 from "../assets/Products&Services/ps-img-4.jpg";
import img5 from "../assets/Products&Services/ps-img-5.jpg";
import img6 from "../assets/Products&Services/ps-img-6.jpg";
import img7 from "../assets/Products&Services/ps-img-7.jpg";
import img8 from "../assets/Products&Services/ps-img-8.jpg";
import img9 from "../assets/Products&Services/ps-img-9.jpg";
import img10 from "../assets/Products&Services/ps-img-10.jpg";
import img11 from "../assets/Products&Services/ps-img-11.jpg";
import img12 from "../assets/Products&Services/ps-img-12.jpg";
import img13 from "../assets/Products&Services/ps-img-13.jpg";

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

const CarouselComponent = () => {
  return (
    <div className="max-w-8xl mx-auto pt-14 ">
      {/* Carousel */}
      <Carousel
        showArrows={false}
        autoPlay
        infiniteLoop
        interval={2000}
        transitionTime={600}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={80}
        swipeable
        emulateTouch
        showIndicators
        dynamicHeight={false}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full h-[450px] pb-18 pl-4 pr-4 pt-15 md:pt-20 sm:h-[550px] md:h-[600px] lg:h-[680px] relative"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-4xl transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </Carousel>

      {/* Custom dot styling */}
      <style>
        {`
          .carousel .control-dots {
            margin-bottom: 30px;
            padding: 20px;
            position: absolute;
            bottom: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            width: 100%;
          }
          .carousel .control-dots .dot {
            background-color: #111112 !important; /* Black */
            width: 8px;
            height: 8px;
            border-radius: 50%;
            opacity: 0.6;
            margin: 0 6px;
            transition: all 0.3s ease;
            cursor: pointer;
            border: 5px solid #111112 !important;
        }
        .carousel .control-dots .dot.selected {
            background-color: #111112 !important;
            opacity: 1;
            transform: scale(1.3);
        }
        .carousel .slide {
            transform: scale(0.90);
            transition: transform 0.5s ease-in-out;
            opacity: 0.7;
        }

        .carousel .slide.selected {
            transform: scale(1.05);
            opacity: 1;
            z-index: 10;
        }
        `}
      </style>
    </div>
  );
};

export default CarouselComponent;
