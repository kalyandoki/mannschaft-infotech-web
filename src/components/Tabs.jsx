// Tabs.jsx
import { useAppContext } from "../context/AppContext";

const Tabs = ({ tabs }) => {
  const { activeIndex, setActiveIndex } = useAppContext();

  return (
    <div className="space-y-4 p-6">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab, index) => {
          const label = tab.tab1 || tab.tab2 || `Tab ${index + 1}`;
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                index === activeIndex
                  ? "text-[#ed3b1b] hover:text-[#ed3b1b]"
                  : "bg-gray-200 text-[#337ab7] hover:text-[#ed3b1b]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Tab Content Sections */}
      <div className="bg-[#fff] p-6 rounded-md max-w-8xl mx-auto space-y-16">
        {/* === Section 1 === */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
            tabs[activeIndex].reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          <div>
            <p className="text-gray-700 mb-4">{tabs[activeIndex].data}</p>
            {tabs[activeIndex].title && (
              <h2 className="text-xl md:text-2xl  font-bold text-[#0f1d44] mb-3">
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
          {tabs[activeIndex].img2 && (
            <div className="flex justify-center items-center">
              <img
                src={tabs[activeIndex].img2}
                alt="Section 1 Image"
                className="w-full h-[300px] object-cover rounded-2xl"
              />
            </div>
          )}
        </div>

        {/* === Section 2 === */}
        {tabs[activeIndex].data3 && tabs[activeIndex].img3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center items-center">
              <img
                src={tabs[activeIndex].img3}
                alt="Section 2 Image"
                className="w-full h-[300px] object-cover rounded-2xl"
              />
            </div>
            <div>
              {tabs[activeIndex].title2 && (
                <h2 className="text-xl md:text-2xl  font-bold text-[#0f1d44] mb-3">
                  {tabs[activeIndex].title2}
                </h2>
              )}
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {tabs[activeIndex].data3.split("\n").map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* === Section 3 === */}
        {(tabs[activeIndex].title3 ||
          tabs[activeIndex].data4 ||
          tabs[activeIndex].img4) && (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              tabs[activeIndex].reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div>
              <p className="text-gray-700 mb-4">{tabs[activeIndex].data}</p>
              {tabs[activeIndex].title3 && (
                <h2 className="text-xl md:text-2xl  font-bold text-[#0f1d44] mb-3">
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
            {tabs[activeIndex].img4 && (
              <div className="flex justify-center items-center">
                <img
                  src={tabs[activeIndex].img4}
                  alt="Section 3 Image"
                  className="w-full h-[300px] object-cover rounded-2xl"
                />
              </div>
            )}
          </div>
        )}

        {/* === Section 4 === */}
        {tabs[activeIndex].data5 && tabs[activeIndex].img5 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center items-center">
              <img
                src={tabs[activeIndex].img5}
                alt="Section 4 Image"
                className="w-full h-[300px] object-cover rounded-2xl"
              />
            </div>
            <div>
              {tabs[activeIndex].title4 && (
                <h2 className="text-xl md:text-2xl  font-bold text-[#0f1d44] mb-3">
                  {tabs[activeIndex].title4}
                </h2>
              )}
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {tabs[activeIndex].data5.split("\n").map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
