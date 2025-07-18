import { worksData } from "../data/worksData";
import { useAppContext } from "../context/AppContext";

const WorksGrid = () => {
  const { filter, setSelectedWork } = useAppContext();
  const filtered = worksData.filter((item) =>
    filter === "All" ? true : item.type === filter
  );

  return (
    <div className="w-full flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 justify-items-center items-center max-w-7xl w-full">
        {filtered.map((work) => (
          <div
            key={work.id}
            onClick={() => setSelectedWork(work)}
            className="relative cursor-pointer group rounded-xl overflow-hidden shadow-lg transition hover:shadow-2xl w-full max-w-xs"
          >
            <img
              src={work.image}
              alt={work.sector}
              className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#1e2024b3] bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{work.sector}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksGrid;
