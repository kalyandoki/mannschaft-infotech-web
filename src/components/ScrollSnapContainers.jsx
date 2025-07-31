import { useRef } from "react";
import img1 from "../assets/images/if1.jpg";
import img2 from "../assets/images/if2.jpg";
import img3 from "../assets/images/if11.jpg";
import img4 from "../assets/images/if4.jpg";
import img5 from "../assets/images/if3.jpg";
import img6 from "../assets/images/if6.jpg";
import img7 from "../assets/images/if5.jpg";
import img8 from "../assets/images/if1.jpg";
import img9 from "../assets/images/if2.jpg";
import img10 from "../assets/images/if111.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const ScrollSnapContainers = () => {
  const containerRef = useRef(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 font-roboto">
        Our Projects
      </h2>

      <div className="relative h-[500px] overflow-hidden">
        <div
          ref={containerRef}
          className="h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth rounded-xl border border-gray-300 shadow-lg scrollbar-none"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="h-full snap-start flex items-center justify-center bg-white rounded-xl overflow-hidden relative"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                Project {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSnapContainers;
