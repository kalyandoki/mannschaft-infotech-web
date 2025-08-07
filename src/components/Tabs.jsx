// Tabs.jsx
import { useAppContext } from "../context/AppContext";

const Tabs = ({ tabs }) => {
  const { activeIndex, setActiveIndex } = useAppContext();

  return (
    <div className="space-y-4 p-6 2xl:px-24 2xl:py-16">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab, index) => {
          const label = tab.tab1 || tab.tab2 || `Tab ${index + 1}`;
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`border rounded-xl px-5 py-2 font-medium transition ${
                isActive
                  ? "border-[#ed3b1b] text-[#ed3b1b]"
                  : "border-[#3379b725] text-[#337ab7] hover:border-[#ed3b1b] hover:text-[#ed3b1b]"
              } 2xl:px-6 2xl:py-3 2xl:text-lg`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Tab Content Sections */}
      <div className="bg-[#fff] p-6 rounded-md max-w-8xl mx-auto space-y-16 2xl:p-12 2xl:space-y-24">
        {/* Section 1 */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
            tabs[activeIndex].reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          <div>
            <p className="text-gray-700 mb-4 2xl:text-lg">
              {tabs[activeIndex].data}
            </p>
            {tabs[activeIndex].title && (
              <h2 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-[#0f1d44] mb-3">
                {tabs[activeIndex].title}
              </h2>
            )}
            {tabs[activeIndex].data2 && (
              <ul className="list-disc list-inside text-gray-700 space-y-2 2xl:text-lg">
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
                className="w-full h-[300px] 2xl:h-[400px] object-cover rounded-2xl"
              />
            </div>
          )}
        </div>

        {/* Section 2 */}
        {tabs[activeIndex].data3 && tabs[activeIndex].img3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center items-center">
              <img
                src={tabs[activeIndex].img3}
                alt="Section 2 Image"
                className="w-full h-[300px] 2xl:h-[400px] object-cover rounded-2xl"
              />
            </div>
            <div>
              {tabs[activeIndex].title2 && (
                <h2 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-[#0f1d44] mb-3">
                  {tabs[activeIndex].title2}
                </h2>
              )}
              <ul className="list-disc list-inside text-gray-700 space-y-2 2xl:text-lg">
                {tabs[activeIndex].data3.split("\n").map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Section 3 */}
        {(tabs[activeIndex].title3 ||
          tabs[activeIndex].data4 ||
          tabs[activeIndex].img4) && (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              tabs[activeIndex].reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div>
              <p className="text-gray-700 mb-4 2xl:text-lg">
                {tabs[activeIndex].data}
              </p>
              {tabs[activeIndex].title3 && (
                <h2 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-[#0f1d44] mb-3">
                  {tabs[activeIndex].title3}
                </h2>
              )}
              {tabs[activeIndex].data4 && (
                <ul className="list-disc list-inside text-gray-700 space-y-2 2xl:text-lg">
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
                  className="w-full h-[300px] 2xl:h-[400px] object-cover rounded-2xl"
                />
              </div>
            )}
          </div>
        )}

        {/* Section 4 */}
        {tabs[activeIndex].data5 && tabs[activeIndex].img5 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex justify-center items-center">
              <img
                src={tabs[activeIndex].img5}
                alt="Section 4 Image"
                className="w-full h-[300px] 2xl:h-[400px] object-cover rounded-2xl"
              />
            </div>
            <div>
              {tabs[activeIndex].title4 && (
                <h2 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-[#0f1d44] mb-3">
                  {tabs[activeIndex].title4}
                </h2>
              )}
              <ul className="list-disc list-inside text-gray-700 space-y-2 2xl:text-lg">
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
