import { projectsData } from "../data/projectsData";
import { useState, useRef, useEffect } from "react";

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
            className="bg-white w-full max-w-5xl rounded-xl p-4 md:p-6 relative animate-fadeIn overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            {/* Condition: Media + Content */}
            {selectedProject.desc ||
            selectedProject.sector ||
            selectedProject.client ||
            selectedProject.url ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Image or Video */}
                <div className="w-full aspect-video rounded-lg overflow-hidden">
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
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="text-gray-700 space-y-3">
                  <h3 className="text-2xl font-semibold text-[#236fb4]">
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
              // If Only Video or Image
              <div className="w-full aspect-video rounded-lg overflow-hidden">
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
                    className="w-full h-full object-cover rounded-lg"
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

export default ScrollableProjects;
