import { useNavigate } from "react-router-dom";
import ClientsCarousel from "./ClientsCarousel";

export default function WhyUsIntro() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 text-center pt-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-5xl leading-relaxed">
          Experienced teams and an agile framework — we prioritize your
          commercial goals to deliver the highest business value.
        </h1>

        <button
          onClick={() => navigate("/#why-us")}
          className="mt-10 bg-blue-100 text-blue-700 font-semibold px-8 py-3 rounded-2xl shadow-md transition duration-300 hover:bg-blue-700 hover:text-white hover:scale-105"
        >
          Why To Choose Us
        </button>

        <div className="w-full mt-12">
          <ClientsCarousel />
        </div>
      </section>

      {/* Showcase Image Section */}
      <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-10 md:px-16 lg:px-24 bg-gray-50">
        <img
          src="https://tecnologia.vamtam.com/wp-content/uploads/2023/03/GettyImages-1430330223-2048x922.jpg"
          alt="Tech Showcase"
          className="w-full max-w-7xl h-auto object-cover rounded-xl shadow-2xl transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </section>
    </>
  );
}
