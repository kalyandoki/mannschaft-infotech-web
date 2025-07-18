import React from "react";

const LocationMap = () => {
  return (
    <section className="w-full px-4 py-10 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-3xl font-bold mb-4 text-gray-800 font-serif">
          Location
        </h2>
        <p className="mb-6 text-gray-600 text-2xl">
          Mannschaft Infotech, Balaji Nagar, Kavali
        </p>

        <div className="w-full h-72 sm:h-[450px] rounded-xl overflow-hidden shadow-md border">
          <iframe
            title="Mannschaft Infotech Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.4524913443756!2d79.97719061053495!3d14.911862885552207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b7beb170185d7%3A0x8e2f623f4ddfd799!2sMannschaft%20Infotech!5e0!3m2!1sen!2sin!4v1752747718023!5m2!1sen!2sin"
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
};

export default LocationMap;
