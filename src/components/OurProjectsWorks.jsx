import { projectsData } from "../data/projectsData";
import { useState } from "react";

const categories = [
  "All",
  "UX Design",
  "UI Design",
  "UI Development",
  "Graphic Design",
  "Motion Graphics",
  "AR",
];

const OurProjectsWorks = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((item) => item.category === activeTab);

  return (
    <div className="w-full max-w-8xl mx-auto px-8 2xl:px-12 pt-8 2xl:pt-12 bg-[#a6a3a30c]">
      <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-bold text-center mb-2 2xl:mb-4 text-gray-800 font-roboto">
        Our Projects
      </h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 2xl:gap-8 mt-10 2xl:mt-14 mb-10 2xl:mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2 2xl:px-8 2xl:py-3 rounded-xl font-medium 2xl:font-semibold uppercase tracking-wide transition-all duration-300 text-base 2xl:text-lg
          ${
            activeTab === cat
              ? "bg-[#236fb4] text-white font-semibold shadow-[0_0_10px_#236fb4,0_0_40px_#236fb4]"
              : "text-[#2c2d2f] bg-[#fff] border border-[#2c2d2f] hover:bg-[#8daac5af]"
          }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 2xl:gap-8 p-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative cursor-pointer group bg-[#fff] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition hover:scale-[1.02]"
            onClick={() => setSelectedProject(project)}
          >
            {project.video ? (
              project.video.includes("youtube.com/embed") ? (
                <iframe
                  src={project.video}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="object-cover w-full h-48 md:h-56 2xl:h-64"
                ></iframe>
              ) : (
                <video
                  src={project.video}
                  muted
                  controls
                  playsInline
                  className="object-cover w-full h-48 md:h-56 2xl:h-64"
                />
              )
            ) : (
              <img
                src={project.img}
                alt={project.title}
                className="object-cover w-full h-48 md:h-full 2xl:h-64 rounded-xl"
              />
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#fff]/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-[#000] text-center px-4 text-lg 2xl:text-xl font-semibold">
              {project.title}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 2xl:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white w-full max-w-5xl 2xl:max-w-7xl rounded-xl p-4 md:p-6 2xl:p-10 relative animate-fadeIn overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl 2xl:text-3xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            {selectedProject.desc ||
            selectedProject.sector ||
            selectedProject.client ||
            selectedProject.url ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-10 items-start">
                {/* Image/Video */}
                <div
                  className={`w-full rounded-lg overflow-hidden ${
                    selectedProject.category === "Graphic Design"
                      ? "flex justify-center items-center bg-gray-100"
                      : "aspect-video"
                  }`}
                >
                  {selectedProject.video ? (
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
                  ) : (
                    <img
                      src={selectedProject.img}
                      alt={selectedProject.title}
                      className={`w-full h-full rounded-lg ${
                        selectedProject.category === "Graphic Design"
                          ? "object-contain max-h-[80vh]"
                          : "object-cover"
                      }`}
                    />
                  )}
                </div>

                {/* Text Info */}
                <div className="text-gray-700 space-y-3 2xl:space-y-5 text-base 2xl:text-xl leading-relaxed">
                  <h3 className="text-2xl 2xl:text-4xl font-semibold text-[#236fb4]">
                    {selectedProject.title}
                  </h3>

                  {selectedProject.project && (
                    <p>
                      <strong>Project Name:</strong> {selectedProject.project}
                    </p>
                  )}

                  <p>{selectedProject.desc}</p>

                  {selectedProject.sector && (
                    <p>
                      <strong>Sector:</strong> {selectedProject.sector}
                    </p>
                  )}

                  {selectedProject.client && (
                    <p>
                      <strong>Client:</strong> {selectedProject.client}
                    </p>
                  )}

                  {selectedProject.url && (
                    <p>
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
            ) : (
              <div
                className={`w-full rounded-lg overflow-hidden ${
                  selectedProject.category === "Graphic Design"
                    ? "flex justify-center items-center bg-gray-100"
                    : "aspect-video"
                }`}
              >
                {selectedProject.video ? (
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
                ) : (
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className={`w-full h-full rounded-lg ${
                      selectedProject.category === "Graphic Design"
                        ? "object-contain max-h-[80vh]"
                        : "object-cover"
                    }`}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OurProjectsWorks;
