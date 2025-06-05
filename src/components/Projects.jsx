import { useState } from 'react';
import SmoothScroll from './SmoothScroll';

const Projects = () => {
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Caber",
      description: "Caber is a ride-sharing platform that connects people already traveling with those seeking a lift on the same route. Travelers share their journey details, and others can contact them for a ride. It helps reduce travel costs and environmental impact by encouraging shared transportation.",
      technologies: ["React", "NodeJS", "Tailwind CSS", "MongoDB", "Express"],
      github: "https://github.com/Krushil-00/Caber",
      demo: "https://caber.netlify.app/"
    },
    {
      id: 2,
      title: "City Bus Monitoring System",
      description: "A web application that allows users to track city buses in real time. It provides live locations, estimated arrival times, and route details, helping commuters plan their journeys better and reduce wait times through a clean and user-friendly interface.",
      technologies: ["HTML", "CSS", "JavaScript", "NodeJS", "Express"],
      github: "https://github.com/Krushil-00/travelingtrackerz",
      demo: "https://travelingtrackerzz.onrender.com"
    },
    {
      id: 3,
      title: "Card Game",
      description: "I developed the '3 Patti' game in Java to enhance my logical thinking and understanding of the language, using control structures like loops and conditionals for game flow. I ran the game through the command prompt, gaining experience compiling and executing Java programs in a terminal.",
      technologies: ["Java"],
      github: "https://github.com/Krushil-00/Card-Game",
      demo: ""
    }
  ];

  const handleLaunchClick = (e, project) => {
    if (!project.demo) {
      e.preventDefault();
      setCurrentProject(project);
      setShowDownloadPrompt(true);
    }
  };

  return (
    <SmoothScroll id="projects">
      <section id="projects" className="bg-black text-white bg-gray-950 py-8 my-8 mx-2 rounded-lg shadow-lg border border-hacker">
        <div className="container mx-auto px-4">
          {/* Terminal Header */}
          <div className="items-center mb-8">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-mono text-hacker">
              ./projects
            </h2>
          </div>

          {/* Terminal Command */}
          <div className="mb-6 font-mono bg-gray-900/50 p-3 rounded-lg border border-gray-700">
            <span className="text-matrix">$</span>
            <span className="ml-2 text-white">ls -la --projects | grep "react\|node\|python"</span>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900/50 border border-gray-700 hover:border-hacker rounded-lg overflow-hidden transition-all duration-300 group"
              >
                {/* Project Header */}
                <div className="border-b border-gray-700 p-4 bg-gray-900">
                  <h3 className="text-xl font-mono text-hacker flex items-center">
                    <span className="text-matrix mr-2">❯</span>
                    {project.title}
                  </h3>
                </div>

                {/* Project Body */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm text-hacker mb-2 font-mono">[ tech_stack ]</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs border border-gray-600 hover:border-hacker transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 text-center py-2 px-4 rounded-md border border-gray-600 hover:border-hacker hover:bg-hacker hover:text-black transition-colors font-mono text-sm"
                    >
                      view_source.sh
                    </a>
                    <a
                      href={project.demo || "#"}
                      target={project.demo ? "_blank" : undefined}
                      rel={project.demo ? "noopener noreferrer" : undefined}
                      onClick={(e) => handleLaunchClick(e, project)}
                      className={`w-full sm:flex-1 text-center py-2 px-4 rounded-md ${project.demo ? 'bg-hacker text-black hover:bg-green-600' : 'bg-hacker text-black hover:bg-green-600'} transition-colors font-mono text-sm`}
                    >
                      launch_program
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Footer */}
          <div className="mt-8 font-mono text-gray-400 text-sm">
            <span className="text-matrix">$</span>
            <span className="ml-2">Loaded {projects.length} projects successfully</span>
          </div>
        </div>

        {/* Download Prompt Modal */}
        {showDownloadPrompt && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-950 border border-hacker p-6 rounded-lg max-w-md w-full mx-4">
              <h3 className="text-xl font-mono text-hacker mb-4">Command Line Program</h3>
              <p className="text-gray-300 mb-4">
                This is a command line application. Download the source code from GitHub
                and for now, run it in your terminal/command prompt.<br />
                <code>I'm working on a web version, so stay tuned for updates!</code>
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowDownloadPrompt(false)}
                  className="px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-900 font-mono text-sm"
                >
                  Cancel
                </button>
                <a
                  href={currentProject?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-hacker text-black rounded-md hover:bg-green-600 font-mono text-sm"
                >
                  Go to GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </SmoothScroll>
  );
};

export default Projects;