// import React from "react";
// import spDots from "../assets/images/mann2.webp";

// const PerformanceAndServices = () => {
//   const services = [
//     {
//       title: "Technical Implementation",
//       desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
//     },
//     {
//       title: "IT Helpdesk Support",
//       desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
//     },
//     {
//       title: "Managed IT Services",
//       desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
//     },
//     {
//       title: "IT Consulting",
//       desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
//     },
//     {
//       title: "Network Support",
//       desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
//     },
//     {
//       title: "Field Tech Support",
//       desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
//     },
//     {
//       title: "IT Consulting",
//       desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
//     },
//     {
//       title: "Network Support",
//       desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
//     },
//     {
//       title: "Field Tech Support",
//       desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
//     },
//     {
//       title: "IT Consulting",
//       desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
//     },
//     {
//       title: "Network Support",
//       desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
//     },
//     {
//       title: "Field Tech Support",
//       desc: "We offer affordable IT solutions that help you reduce costs and improve your bottom line.",
//     },
//   ];

//   return (
//     <section className="w-full px-6 sm:px-6 pt-16 bg-[#fff] border-t-2 border-b-2 border-gray-200">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:justify-between gap-8">
//         {/* Left Side */}
//         <div className="md:w-1/2 flex flex-col items-start">
//           {/* Responsive Image with 16:9 aspect ratio */}
//           <div className="relative w-full pt-[60.25%] rounded-xl overflow-hidden mt-10">
//             <img
//               src={spDots}
//               alt="Cutting-edge tools"
//               className="absolute top-0 left-0 w-full h-full object-contain"
//             />
//           </div>

//           {/* Heading */}
//           <div className="m-10 md:ml-24">
//             <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#141515] mb-4">
//               Cutting-edge tools <br /> that drive performance
//             </h2>

//             {/* Paragraph */}
//             <p className="text-[#5F6567] text-base sm:text-md md:text-lg mt-1">
//               Explore a range of IT solutions crafted to maximize business
//               efficiency and scalability.
//             </p>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="md:w-1/3 h-[70vh] overflow-y-auto pr-2 scrollbar-none">
//           <div className="space-y-2">
//             {services.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white p-2 rounded-xl transition duration-300"
//               >
//                 <h3 className="text-xl font-semibold text-[#0d0e0f]">
//                   🔵 {item.title}
//                 </h3>
//                 <p className="text-[#5F6567] mt-2 mb-6 text-sm">{item.desc}</p>
//                 <hr />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PerformanceAndServices;

import React, { useRef, useEffect, useState } from "react";
import spDots from "../assets/images/mann2.webp";

const PerformanceAndServices = () => {
  const sectionRef = useRef(null);
  const rightScrollRef = useRef(null);
  const [lockScroll, setLockScroll] = useState(false);
  const [sectionInView, setSectionInView] = useState(false);

  const services = [
    {
      title: "Technical Implementation",
      desc: "We offer affordable IT solutions...",
    },
    {
      title: "IT Helpdesk Support",
      desc: "We offer affordable IT solutions...",
    },
    {
      title: "Managed IT Services",
      desc: "We offer affordable IT solutions...",
    },
    { title: "IT Consulting", desc: "We offer affordable IT solutions..." },
    { title: "Network Support", desc: "We offer affordable IT solutions..." },
    {
      title: "Field Tech Support",
      desc: "We offer affordable IT solutions...",
    },
    { title: "Another Service", desc: "We offer affordable IT solutions..." },
    { title: "Another One", desc: "We offer affordable IT solutions..." },
    { title: "Extra Service", desc: "We offer affordable IT solutions..." },
    { title: "Last One", desc: "We offer affordable IT solutions..." },
  ];

  // Detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setLockScroll(true);
        } else {
          setLockScroll(false);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Detect scrollTop and scrollBottom of right side
  useEffect(() => {
    const container = rightScrollRef.current;

    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollBottom =
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 20;

      // If user scrolls to top or bottom, unlock scroll
      if (scrollTop <= 0 || scrollBottom) {
        setLockScroll(false);
      } else if (sectionInView) {
        setLockScroll(true);
      }
    };

    if (container) {
      container.addEventListener("scroll", onScroll);
    }

    return () => {
      if (container) container.removeEventListener("scroll", onScroll);
    };
  }, [sectionInView]);

  // Apply or remove body scroll lock
  useEffect(() => {
    document.body.style.overflow = lockScroll ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lockScroll]);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen overflow-hidden bg-white border-t border-b border-gray-200"
    >
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-start gap-8 px-4 sm:px-6 md:px-10 2xl:px-20 pt-16 h-full">
        {/* Left Side (Sticky) */}
        <div className="md:w-1/2 sticky top-0 self-start h-full flex flex-col items-start justify-center">
          <div className="relative w-full pt-[60.25%] rounded-xl overflow-hidden">
            <img
              src={spDots}
              alt="Cutting-edge tools"
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          </div>
          <div className="mt-10 md:ml-20 2xl:ml-26">
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-[#141515] mb-4">
              Cutting-edge tools <br /> that drive performance
            </h2>
            <p className="text-[#5F6567] text-base sm:text-lg md:text-xl 2xl:text-2xl mt-1 max-w-xl">
              Explore a range of IT solutions crafted to maximize business
              efficiency and scalability.
            </p>
          </div>
        </div>

        {/* Right Side (Scrollable List) */}
        <div
          ref={rightScrollRef}
          className="md:w-1/2 2xl:w-2/5 h-full overflow-y-auto pr-3 md:pr-4 scroll-smooth space-y-4 py-2 scrollbar-none"
        >
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl transition-all duration-300 shadow-sm  hover:shadow-md animate-fade-in"
              style={{
                animationDelay: `${idx * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0d0e0f]">
                🔵 {item.title}
              </h3>
              <p className="text-[#5F6567] mt-2 text-sm sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
        .animate-fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.5s ease forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        `}
      </style>
    </section>
  );
};

export default PerformanceAndServices;
