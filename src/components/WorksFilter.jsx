import { useAppContext } from "../context/AppContext";

const filters = ["All", "IT INFRA", "Software"];

const WorksFilter = () => {
  const { filter, setFilter } = useAppContext();

  return (
    <section>
      <div className="flex justify-center space-x-4 my-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              filter === f
                ? "bg-[#ed3b1b] text-white shadow-lg"
                : "bg-gray-200 hover:bg-[#ed3a1b5d] text-gray-800"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </section>
  );
};

export default WorksFilter;
