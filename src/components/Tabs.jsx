// Tabs.jsx
import React from "react";
import { useAppContext } from "../context/AppContext";

const Tabs = ({ tabs }) => {
  const { activeIndex, setActiveIndex } = useAppContext();

  return (
    <div className="space-y-4 p-6">
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab, index) => {
          const label = tab.tab1 || tab.tab2 || `Tab ${index + 1}`;
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                index === activeIndex
                  ? " text-[#ed3b1b] hover:text-[#ed3b1b]"
                  : "bg-gray-200 text-[#337ab7] hover:text-[#ed3b1b]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="bg-[#fff] p-6 rounded-md max-w-8xl mx-auto space-y-16">
        {/* === Section 1 === */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
            tabs[activeIndex].reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text content */}
          <div>
            <p className="text-gray-700 mb-4">{tabs[activeIndex].data}</p>
            {/* 🔵 Title in Blue */}
            {tabs[activeIndex].title && (
              <h2 className="text-xl md:text-2xl ml-2 font-bold text-[#0f1d44] mb-3">
                {tabs[activeIndex].title}
              </h2>
            )}

            {tabs[activeIndex].data2 && (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {tabs[activeIndex].data2.split("\n").map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Image */}
          <div className="flex justify-center items-center">
            {tabs[activeIndex].img2 && (
              <img
                src={tabs[activeIndex].img2}
                alt="Tab Visual 1"
                className="w-full h-[280px] object-cover rounded-2xl "
              />
            )}
          </div>
        </div>

        {/* === Section 2 === */}
        {tabs[activeIndex].data3 && tabs[activeIndex].img3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image on Left */}
            <div className="flex justify-center items-center">
              <img
                src={tabs[activeIndex].img3}
                alt="Tab Visual 2"
                className="w-full h-[280px] object-cover rounded-2xl "
              />
            </div>

            {/* Text content with Blue Title */}
            <div>
              {tabs[activeIndex].title2 && (
                <h2 className="text-xl md:text-2xl ml-2 font-bold text-[#0f1d44] mb-3">
                  {tabs[activeIndex].title2}
                </h2>
              )}

              {tabs[activeIndex].data3 && (
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {tabs[activeIndex].data3.split("\n").map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="bg-[#fff] p-6 rounded-md max-w-8xl mx-auto space-y-16">
        {/* === Section 3 === */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
            tabs[activeIndex].reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text content */}
          <div>
            <p className="text-gray-700 mb-4">{tabs[activeIndex].data}</p>
            {/* 🔵 Title in Blue */}
            {tabs[activeIndex].title3 && (
              <h2 className="text-xl md:text-2xl ml-2 font-bold text-[#0f1d44] mb-3">
                {tabs[activeIndex].title3}
              </h2>
            )}

            {tabs[activeIndex].data4 && (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {tabs[activeIndex].data4.split("\n").map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Image */}
          <div className="flex justify-center items-center">
            {tabs[activeIndex].img4 && (
              <img
                src={tabs[activeIndex].img4}
                alt="Tab Visual 1"
                className="w-full h-[280px] object-cover rounded-2xl "
              />
            )}
          </div>
        </div>

        {/* === Section 4 === */}
        {tabs[activeIndex].data5 && tabs[activeIndex].img5 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image on Left */}
            <div className="flex justify-center items-center">
              <img
                src={tabs[activeIndex].img5}
                alt="Tab Visual 2"
                className="w-full h-[280px] object-cover rounded-2xl "
              />
            </div>

            {/* Text content with Blue Title */}
            <div>
              {tabs[activeIndex].title4 && (
                <h2 className="text-xl md:text-2xl ml-2 font-bold text-[#0f1d44] mb-3">
                  {tabs[activeIndex].title4}
                </h2>
              )}

              {tabs[activeIndex].data5 && (
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {tabs[activeIndex].data5.split("\n").map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
