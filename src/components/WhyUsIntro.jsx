import { useNavigate } from "react-router-dom";

export default function WhyUsIntro() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 flex flex-col justify-center items-center bg-white text-black text-center px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-5xl leading-relaxed">
          Experienced teams and an agile framework — we prioritize your
          commercial goals to deliver the highest business value.
        </h1>

        <button
          onClick={() => navigate("/#why-us")}
          className="mt-6 bg-blue-100 text-blue-700 font-semibold px-8 py-3 rounded-2xl shadow-md transition duration-300 hover:bg-blue-700 hover:text-white hover:scale-105"
        >
          Why To Choose Us
        </button>
      </section>

      {/* Showcase Image Section */}
      <section className="w-full py-16 flex items-center justify-center bg-gray-50 px-4">
        <img
          src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/GettyImages-1430330223-2048x922.jpg"
          alt="Tech Showcase"
          className="w-full max-w-7xl h-auto max-h-[80vh] object-cover rounded-xl shadow-2xl transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </section>
    </>
  );
}
