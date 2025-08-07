import { useAppContext } from "../context/AppContext";

const WorksPopup = () => {
  const { selectedWork, setSelectedWork } = useAppContext();

  if (!selectedWork) return null;

  return (
    <div className="fixed inset-0 bg-[#1e2024b3] bg-opacity-60 flex items-center justify-center z-50 px-4 sm:px-6 md:px-10">
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl 2xl:max-w-4xl w-full relative shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-xl sm:text-2xl font-bold text-gray-700"
          onClick={() => setSelectedWork(null)}
        >
          ×
        </button>

        {/* Image */}
        <img
          src={selectedWork.image}
          alt={selectedWork.sector}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 2xl:h-[320px] object-cover rounded mb-4"
        />

        {/* Content */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
          {selectedWork.sector}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-2">
          {selectedWork.description}
        </p>
      </div>
    </div>
  );
};

export default WorksPopup;
