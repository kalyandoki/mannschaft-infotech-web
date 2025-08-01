import { useState, useRef, useEffect } from "react";
import ux1 from "../assets/images/ux1.jpg";
import ux2 from "../assets/images/ux2.jpg";
import ux3 from "../assets/images/ux3.jpg";
import ux4 from "../assets/images/ux4.jpg";
import ux5 from "../assets/images/ux5.jpg";
import ux6 from "../assets/images/ux6.jpg";
import ux7 from "../assets/images/ux7.jpg";
import ux8 from "../assets/images/ux8.jpg";
import ux9 from "../assets/images/ux9.jpg";
import ux10 from "../assets/images/ux10.jpg";
import ux11 from "../assets/images/ux11.jpg";
import ux12 from "../assets/images/ux12.jpg";
import ux13 from "../assets/images/ux13.jpg";
import ux14 from "../assets/images/ux14.jpg";
import ux15 from "../assets/images/ux15.jpg";
import ux16 from "../assets/images/ux16.jpg";
import ux17 from "../assets/images/ux17.jpg";
import ux18 from "../assets/images/ux18.jpg";
import ux19 from "../assets/images/ux19.jpg";
import ux20 from "../assets/images/ux20.jpg";
import ux21 from "../assets/images/ux21.jpg";

import gp1 from "../assets/images/g1.jpg";
import gp2 from "../assets/images/g22.jpg";
import gp3 from "../assets/images/gp3.jpg";
import gp4 from "../assets/images/gp4.jpg";
import gp5 from "../assets/images/gp5.jpg";
import gp6 from "../assets/images/gp6.jpg";
import gp7 from "../assets/images/gp7.jpg";
import gp8 from "../assets/images/gp8.jpg";
import gp9 from "../assets/images/gp9.jpg";
import gp10 from "../assets/images/gp10.jpg";
import gp11 from "../assets/images/gp11.jpg";
import gp12 from "../assets/images/gp12.jpg";
import gp13 from "../assets/images/gp13.jpg";
import gp14 from "../assets/images/gp14.jpg";
import gp15 from "../assets/images/gp15.jpg";
import gp16 from "../assets/images/gp16.jpg";
import gp17 from "../assets/images/gp17.jpg";
import gp18 from "../assets/images/gp18.jpg";
import gp19 from "../assets/images/gp19.jpg";
import gp20 from "../assets/images/gp20.jpg";

import ui1 from "../assets/images/ui1.png";
import ui2 from "../assets/images/ui2.jpg";

import uid1 from "../assets/images/uid1.jpg";
import uid2 from "../assets/images/uid2.jpg";
import uid3 from "../assets/images/uid3.jpg";
import uid4 from "../assets/images/uid4.jpg";
import uid5 from "../assets/images/uid5.jpg";
import uid6 from "../assets/images/uid6.jpg";
import uid7 from "../assets/images/uid7.jpg";
import uid8 from "../assets/images/uid8.jpg";
import uid9 from "../assets/images/uid9.jpg";
import uid10 from "../assets/images/uid10.jpg";
import uid11 from "../assets/images/uid11.jpg";
import uid12 from "../assets/images/uid12.jpg";
import uid13 from "../assets/images/uid13.jpg";

import mb1 from "../assets/images/mp1.jpg";
import mb2 from "../assets/images/mb2.png";

// import img2 from "../assets/images/if2.jpg";
// import img5 from "../assets/images/if5.jpg";

const projectsData = [
  {
    id: 1,
    category: "UX Design",
    img: ux1,
    title: "Rock N Roll Art Academy",
  },
  {
    id: 2,
    category: "UX Design",
    img: ux2,
    title: "Kavali Kirana",
  },
  {
    id: 3,
    category: "UX Design",
    img: ux3,
    title: "Seafoods Job",
  },
  {
    id: 4,
    category: "UX Design",
    img: ux4,
    title: "INDIAN ECONOMY BY AMAN SONI",
  },
  {
    id: 5,
    category: "UX Design",
    img: ux5,
    title: "Actrilla",
  },
  {
    id: 6,
    category: "UX Design",
    img: ux6,
    title: "Sujala Kangen",
  },
  {
    id: 7,
    category: "UX Design",
    img: ux7,
    title: "TeamJobs Training",
  },
  {
    id: 8,
    category: "UX Design",
    img: ux8,
    title: "Madhav Dental Hospital",
  },
  {
    id: 9,
    category: "UX Design",
    img: ux9,
    title: "Bluestride",
  },
  {
    id: 10,
    category: "UX Design",
    img: ux10,
    title: "A1OBM",
  },
  {
    id: 11,
    category: "UX Design",
    img: ux11,
    title: "Gimmense data",
  },
  {
    id: 12,
    category: "UX Design",
    img: ux12,
    title: "Mapexpath",
  },
  {
    id: 13,
    category: "UX Design",
    img: ux13,
    title: "Coastal AP",
  },
  {
    id: 14,
    category: "UX Design",
    img: ux14,
    title: "Mannschaft Infotech Pvt Ltd",
  },
  {
    id: 15,
    category: "UX Design",
    img: ux15,
    title: "Team It Solutions",
  },
  {
    id: 16,
    category: "UX Design",
    img: ux16,
    title: "Veda Camions",
  },
  {
    id: 17,
    category: "UX Design",
    img: ux17,
    title: "Wrap",
  },
  {
    id: 18,
    category: "UX Design",
    img: ux18,
    title: "Team Jobs Training",
  },
  {
    id: 19,
    category: "UX Design",
    img: ux19,
    title: "Eggxpressions",
  },
  {
    id: 20,
    category: "UX Design",
    img: ux20,
    title: "Asthi",
  },
  {
    id: 21,
    category: "UX Design",
    img: ux21,
    title: "Lambigo",
  },
  {
    id: 22,
    category: "UI Design",
    title: "Karthi Pega",
    desc: "Single Page Responsive Boot Strap Model Static Website.",
    sector: "IT",
    img: ui1,
  },
  {
    id: 23,
    category: "UI Design",
    title: "Actrilla IT Solutions Pvt. Ltd",
    desc: "Single Page Responsive Bootstrap Model Static Website.",
    sector: "IT",
    client: "Actrilla",
    url: "http://actrilla.com/",
    img: ui2,
  },
  {
    id: 24,
    category: "UI Development",
    title: "Online Dance Training Website",
    project: "Rock N Roll",
    desc: "Rock N Roll Arts academy provides training in virtually every artistic endeavor, whether it is dance or music, musical instruments, drawing or any performing arts. We are dedicated to providing the highest quality of professional instruction in a safe and creative competitive environment.",
    sector: "Arts Academy",
    client: "Mannschaft Software Services LLP",
    url: "https://www.rocknrollarts.com/",
    img: uid1,
  },
  {
    id: 25,
    category: "UI Development",
    title: "E Commerce Website",
    project: "Kavali Kirana",
    desc: "Dynamic E Commerce website for FMCG products. Vendor wise Stores Shop page, Product search filters, Vendor admin panel, Payment Gateway Integration, SSL integration, Inventory Management, Multiple Accounts to Maintain the admin panel.",
    sector: "Groceries FMCG",
    client: "Mannschaft Infotech Pvt Ltd",
    url: "www.kavalikirana.mannschaftit.in/",
    img: uid2,
  },
  {
    id: 26,
    category: "UI Development",
    title: "Job Portal",
    project: "Seafoods Job",
    desc: "Dynamic Web and Mobile Application. Global job portal for Seafood Industry. Job Seeker Registration with Valid OTP, Job Seeker Dashboard, Jobs Search by filters, Job Apply, Business User Registration With valid OTP, Role wise Dashboards (Employer, Contractor, Supplier, Farm Owner) New Job Posting, Profile Search by filters, Profiles download, Online Subscription, Payment gateway integration, SSL Security and Exclusive Monitoring Admin Panel.",
    sector: "Human Resources",
    client: "SUSU GLOBAL SOLUTIONS LLP",
    url: "",
    img: uid3,
  },
  {
    id: 27,
    category: "UI Development",
    title: "Digital Learning",
    project: "Indian Economy By Aman Soni",
    desc: "Competitive (Civils) Training website. Online Student registration. Realtime Experience teachers will train through online class rooms. Student can subscribe training through online. User Dash boards, Trainers Dashboard, Admin Panel. Payment gateway integration, Online interactive Application integration, Online chat support.",
    sector: "Education",
    client: "Aman Soni",
    url: "www.indianeconomybyamansoni.com/",
    img: uid4,
  },
  {
    id: 28,
    category: "UI Development",
    title: "E Commerce Website",
    project: "Sujala Kangen",
    desc: "Dynamic E Commerce website for Water Purifiers Products. Shop page with product filters, User registration, Vendor Dashboard, Payment Gateway Integration, SSL integration, Inventory Management, Multiple Accounts to Maintain the admin panel.",
    sector: "Water Industry",
    client: "Ankapa Naidu",
    url: "www.sujalakangen.com/",
    img: uid5,
  },
  {
    id: 29,
    category: "UI Development",
    title: "Online Skills Training Website",
    project: "Team Jobs Training",
    desc: "Skills Development Job Oriented Training website. Online Student registration. Realtime Experience trainers will train the Job oriented methods with real time project. Student can subscribe training through online. Online training and class room Training. User Dash boards, Trainers Dashboard, Admin Panel. Payment gateway integration, Online chat support.",
    sector: "Skill Development",
    client: "Mannschaft Software Services LLP",
    url: "https://www.teamjobstraining.com/",
    img: uid6,
  },
  {
    id: 30,
    category: "UI Development",
    title: "Medical",
    project: "Madhav Denatl Hospital",
    desc: "Deliver multi-specialty treatment approach combined with professional care to resolve dental problems. To achieve excellence in dentistry through up-to-date technology and highly educated professional.",
    sector: "Health Care",
    client: "Dr. Ch. Madhava Naidu",
    url: "http://www.madhavdental.in/",
    img: uid7,
  },
  {
    id: 31,
    category: "UI Development",
    title: "Bluestride",
    project: "Bluestride",
    desc: "Bluestride Technologies is a global company providing services in Technology, Consulting, Staffing and Digital Marketing. We have a team of expert consultants with unique strengths and backgrounds, who bring a wide range of solutions for our clients.",
    sector: "Technology",
    client: "Mr. Kumkum",
    url: "https://bluestridetech.com/",
    img: uid8,
  },
  {
    id: 32,
    category: "UI Development",
    title: "All In One Original Building Material",
    project: "A1OBM",
    desc: "Online delivery of electrical appliances.",
    sector: "Electrical Ecom Store",
    client: "Mr. Kareem",
    url: "https://a1obm.com/",
    img: uid9,
  },
  {
    id: 33,
    category: "UI Development",
    title: "Gimmense Data",
    project: "Gimmense data",
    desc: "A leading B2B database Provider delivers an integrated system of data solutions and services under one roof.",
    sector: "B2B database Provider",
    client: "Mr.",
    url: "https://gimmensedata.com/",
    img: uid10,
  },
  {
    id: 34,
    category: "UI Development",
    title: "Mapexpath",
    project: "Mapexpath",
    desc: "Single Page Responsive boot strap model static website.",
    sector: "Energy Production",
    client: "Vijay USA",
    url: "https://mapexpath.com//",
    img: uid11,
  },
  {
    id: 35,
    category: "UI Development",
    title: "Asthi Opthopedic Hospital",
    project: "Asthi Opthopedic Hospital",
    desc: "ASTHI Orthopedicaa & Multispecialty Hospital is an exclusive Orthopedicaa hospital with international standards, services of associated specialties are also available. This specialty health care center is an initiative by famous Orthopedicaa & joint replacement surgeon Dr.M.Chaitanya, Managing Director of this hospital.",
    sector: "Health Sector",
    client: "Dr. Chaitanya",
    url: "www.asthi.mannschaftit.in/",
    img: uid12,
  },
  {
    id: 36,
    category: "UI Development",
    title: "Online Meat Delivery App",
    project: "Lambigo",
    desc: "Rock N Roll Arts academy provides training in virtually every artistic endeavor, whether it is dance or music, musical instruments, drawing or any performing arts. We are dedicated to providing the highest quality of professional instruction in a safe and creative competitive environment.",
    sector: "Online Food Delivery",
    client: "Mr. Alshad",
    url: "play.google.com/store/apps/details?id=com.awidev.lambigo",
    img: uid13,
  },
  {
    id: 37,
    category: "Mobile Apps",
    title: "Online Meat Delivery App",
    project: "Lambigo",
    desc: "Rock N Roll Arts academy provides training in virtually every artistic endeavor, whether it is dance or music, musical instruments, drawing or any performing arts. We are dedicated to providing the highest quality of professional instruction in a safe and creative competitive environment.",
    sector: "Online Food Delivery",
    client: "Mr. Alshad",
    url: "play.google.com/store/apps/details?id=com.awidev.lambigo",
    img: mb1,
  },
  {
    id: 38,
    category: "Mobile Apps",
    title: "OTT Platform",
    project: "Swara Media",
    desc: "Multimedia entertainment connects users throughout the world. A one-stop platform for everyone.",
    sector: "OTT Platform",
    client: "Swara Media",
    url: "https://play.google.com/store/search?q=swara%20media&c=apps",
    img: mb2,
  },
  {
    id: 39,
    category: "Graphic Design",
    img: gp1,
  },
  {
    id: 40,
    category: "Graphic Design",
    img: gp2,
  },
  {
    id: 41,
    category: "Graphic Design",
    img: gp3,
  },
  {
    id: 42,
    category: "Graphic Design",
    img: gp4,
  },
  {
    id: 43,
    category: "Graphic Design",
    img: gp5,
  },
  {
    id: 44,
    category: "Graphic Design",
    img: gp6,
  },
  {
    id: 45,
    category: "Graphic Design",
    img: gp7,
  },
  {
    id: 46,
    category: "Graphic Design",
    img: gp8,
  },
  {
    id: 47,
    category: "Graphic Design",
    img: gp9,
  },
  {
    id: 48,
    category: "Graphic Design",
    img: gp10,
  },
  {
    id: 49,
    category: "Graphic Design",
    img: gp11,
  },
  {
    id: 50,
    category: "Graphic Design",
    img: gp12,
  },
  {
    id: 51,
    category: "Graphic Design",
    img: gp13,
  },
  {
    id: 52,
    category: "Graphic Design",
    img: gp14,
  },
  {
    id: 53,
    category: "Graphic Design",
    img: gp15,
  },
  {
    id: 54,
    category: "Graphic Design",
    img: gp16,
  },
  {
    id: 55,
    category: "Graphic Design",
    img: gp17,
  },
  {
    id: 56,
    category: "Graphic Design",
    img: gp18,
  },
  {
    id: 57,
    category: "Graphic Design",
    img: gp19,
  },
  {
    id: 58,
    category: "Graphic Design",
    img: gp20,
  },
  {
    id: 59,
    category: "Motion Graphics",
    video: "https://www.youtube.com/embed/LgBCkIDQjb0",
  },
  // {
  //   id: 3,
  //   category: "Motion Graphics",
  //   img: img5,
  //   title: "Explainer Video",
  //   desc: "Motion graphics for product onboarding.",
  //   video: "https://www.youtube.com/embed/LgBCkIDQjb0",
  // },
  // {
  //   id: 4,
  //   category: "UI Development",
  //   title: "Actrilla IT Solutions Pvt. Ltd",
  //   desc: "Single Page Responsive Bootstrap Model Static Website.",
  //   sector: "IT",
  //   client: "Actrilla",
  //   url: "http://actrilla.com/",
  //   img: img2,
  // },
  // {
  //   id: 5,
  //   category: "UI Development",
  //   title: "Actrilla IT Solutions Pvt. Ltd",
  //   desc: "Single Page Responsive Bootstrap Model Static Website.",
  //   sector: "IT",
  //   client: "Actrilla",
  //   url: "http://actrilla.com/",
  //   img: img5,
  // },
  // {
  //   id: 6,
  //   category: "UI Development",
  //   title: "Actrilla IT Solutions Pvt. Ltd",
  //   desc: "Single Page Responsive Bootstrap Model Static Website.",
  //   sector: "IT",
  //   client: "Actrilla",
  //   url: "http://actrilla.com/",
  //   img: img5,
  // },
  // {
  //   id: 7,
  //   category: "UI Development",
  //   title: "Actrilla IT Solutions Pvt. Ltd",
  //   desc: "Single Page Responsive Bootstrap Model Static Website.",
  //   sector: "IT",
  //   client: "Actrilla",
  //   url: "http://actrilla.com/",
  //   img: img5,
  // },
];

const categories = [
  "All",
  "UX Design",
  "UI Design",
  "UI Development",
  "Graphic Design",
  "Motion Graphics",
  "AR",
  "Mobile Apps",
];

const ScrollableProjects = () => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === activeTab);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-4">
      <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 font-roboto">
        Our Projects
      </h2>

      <p className="text-center text-md sm:text-md md:text-lg text-gray-700 mb-2 p-2 font-semibold">
        Showing{" "}
        <span className="font-semibold text-blue-600">
          {filteredProjects.length}
        </span>{" "}
        project(s) in
        <span className="font-semibold text-black"> "{activeTab}"</span>{" "}
        category
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-full font-medium transition border ${
              activeTab === cat
                ? "bg-[#236fb4] text-white"
                : "bg-white text-[#236fb4] border-[#236fb4]"
            } hover:shadow-md`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-center text-xs sm:text-sm md:text-base text-gray-600 mb-2 animate-bounce">
        Scroll down to explore all projects{" "}
        <span className="inline-block">↓</span>
      </p>

      {/* Scrollable Projects */}
      <div className="relative h-[440px] md:h-[460px] overflow-hidden rounded-xl">
        <div
          ref={containerRef}
          className="h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth border border-gray-300 shadow-xl rounded-xl scrollbar-none"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="h-[420px] snap-start mb-3 rounded-xl overflow-hidden relative cursor-pointer group bg-white transition hover:scale-[1.01] shadow-md hover:shadow-2xl"
              onClick={() => setSelectedProject(project)}
            >
              {project.video ? (
                project.video.includes("youtube.com/embed") ? (
                  <iframe
                    src={project.video}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="object-cover w-full h-full"
                  ></iframe>
                ) : (
                  <video
                    src={project.video}
                    muted
                    controls
                    playsInline
                    className="object-cover w-full h-full"
                  />
                )
              ) : (
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              )}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-center px-4 text-lg font-semibold">
                {project.title}
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm backdrop-blur-sm">
                {project.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-xl p-6 relative animate-fadeIn overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            {/* Image or Video */}
            {selectedProject.video ? (
              <div className="mb-4 w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={selectedProject.video.replace(
                    "youtu.be/",
                    "www.youtube.com/embed/"
                  )}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ) : (
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="rounded-lg mb-4 object-cover w-full h-130"
              />
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold text-[#236fb4] mb-2">
              {selectedProject.title}
            </h3>

            {/* project name */}
            {selectedProject.project && (
              <p className="text-sm text-gray-600 mb-1">
                <strong>Project Name :</strong> {selectedProject.project}
              </p>
            )}

            {/* Description */}
            <p className="text-gray-700 mb-4">{selectedProject.desc}</p>

            {/* Optional Fields */}
            {selectedProject.sector && (
              <p className="text-sm text-gray-600 mb-1">
                <strong>Sector:</strong> {selectedProject.sector}
              </p>
            )}
            {selectedProject.client && (
              <p className="text-sm text-gray-600 mb-1">
                <strong>Client:</strong> {selectedProject.client}
              </p>
            )}
            {selectedProject.url && (
              <p className="text-sm text-gray-600 mb-4">
                <strong>URL:</strong>{" "}
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  {selectedProject.url}
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollableProjects;
