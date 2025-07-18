import { useAppContext } from "../context/AppContext";
import teamImg from "../assets/images/mann2.webp";

const HeroSection = () => {
  const { openVideoModal } = useAppContext();

  return (
    <section id="home" className="min-h-screen pt-16 bg-white">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-20 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 font-serif leading-relaxed">
            "A strong team of <span className="text-indigo-700">atoms</span>{" "}
            <br />
            makes a <span className="text-pink-600">diamond</span>. A strong
            team of <span className="text-green-600">people</span> makes <br />
            <span className="text-[#eb2207] text-5xl shadow-md drop-shadow-lg mt-2">
              Mannschaft Infotech
            </span>
            ."
          </h1>

          <button
            onClick={openVideoModal}
            className="mt-6 inline-flex items-end gap-4 bg-red-50 p-3 rounded-xl hover:shadow-xl hover:scale-105 transition"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-md">
              <svg
                className="w-6 h-6 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 4l12 6-12 6V4z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-indigo-800 font-bold text-lg">Watch</span>
              <span className="text-pink-600 font-bold underline decoration-dashed">
                INTRO VIDEO
              </span>
            </div>
          </button>
        </div>

        <div>
          <img
            src={teamImg}
            alt="Mannschaft Team"
            className="rounded-4xl w-full max-h-[600px] p-2 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
