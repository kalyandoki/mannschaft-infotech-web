import React from "react";
import img1 from "../assets/images/if1.jpg";
import img2 from "../assets/images/if11.jpg";
import img3 from "../assets/images/if1.jpg";
import img4 from "../assets/images/if11.jpg";

const VerticalImageSlider = () => {
  return (
    <div className="w-full max-w-sm h-96 overflow-hidden mx-auto rounded-xl shadow-lg">
      <div className="flex flex-col animate-slideUp">
        <img src={img1} className="w-full h-48 object-cover" alt="img1" />
        <img src={img2} className="w-full h-48 object-cover" alt="img2" />
        <img src={img3} className="w-full h-48 object-cover" alt="img3" />
        <img src={img4} className="w-full h-48 object-cover" alt="img4" />
      </div>
    </div>
  );
};

export default VerticalImageSlider;
