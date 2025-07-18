import { useAppContext } from "../context/AppContext";

const WorksPopup = () => {
  const { selectedWork, setSelectedWork } = useAppContext();

  if (!selectedWork) return null;

  return (
    <div className="fixed inset-0 bg-[#1e2024b3] bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative shadow-lg">
        <button
          className="absolute top-3 right-4 text-2xl font-bold text-gray-700"
          onClick={() => setSelectedWork(null)}
        >
          ×
        </button>
        <img
          src={selectedWork.image}
          alt={selectedWork.sector}
          className="w-full h-56 object-cover rounded mb-4"
        />
        <h3 className="text-xl font-bold mb-2">{selectedWork.sector}</h3>
        <p className="text-gray-700 mb-2">{selectedWork.description}</p>
      </div>
    </div>
  );
};

export default WorksPopup;
