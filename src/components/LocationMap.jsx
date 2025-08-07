import { useState } from "react";

const locations = [
  {
    name: "Mannschaft Infotech, Kavali",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.4524913443756!2d79.97719061053495!3d14.911862885552207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b7beb170185d7%3A0x8e2f623f4ddfd799!2sMannschaft%20Infotech!5e0!3m2!1sen!2sin!4v1752747718023!5m2!1sen!2sin",
  },
  {
    name: "Mannschaft Branch Office, Hyderabad",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.223122745182!2d78.38252177594052!3d17.443513083434204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93954a0d4e6d%3A0xabc123!2sHyderabad%20Branch!5e0!3m2!1sen!2sin!4v1752748888000!5m2!1sen!2sin",
  },
  {
    name: "Mannschaft Branch Office, US",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85972.29862876778!2d-122.25551667950315!3d47.67209966549162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900cad2000ee23%3A0x5e0390eac5d804f2!2sRedmond%2C%20WA%2C%20USA!5e0!3m2!1sen!2sin!4v1753187346497!5m2!1sen!2sin",
  },
];

export default function LocationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 2xl:px-20 py-10 md:py-16 2xl:py-24 bg-white">
      <div className="max-w-8xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold mb-6 text-gray-800 font-roboto">
          Locations
        </h2>

        <div className="flex justify-center mb-8 gap-3 sm:gap-4 flex-wrap">
          {locations.map((loc, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-md border font-semibold text-sm sm:text-base 2xl:text-lg transition duration-200 ${
                activeIndex === index
                  ? "bg-[#ed3b1b] text-white"
                  : "bg-gray-100 hover:bg-blue-100 text-gray-800"
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>

        <div className="w-full h-72 sm:h-[450px] md:h-[500px] lg:h-[550px] 2xl:h-[700px] rounded-xl overflow-hidden shadow-md border">
          <iframe
            title={locations[activeIndex].name}
            src={locations[activeIndex].src}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
