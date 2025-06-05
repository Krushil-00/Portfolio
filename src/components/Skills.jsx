import SmoothScroll from './SmoothScroll';

const Skills = () => {
    const skills = {
      "Languages": ["JavaScript", "Java", "HTML/CSS"],
      "Frameworks": ["React", "Bootstrap", "Tailwind CSS"],
      "Databases": ["MySQL"],
      "Tools": ["Git/Github", "VS Code", "Postman"],
      "Concepts": ["Data Structures", "Algorithms", "OOP"]
    };
  
    return (
      <SmoothScroll id="skills">
      <section id="skills" className="py-16 bg-black text-white bg-gray-950 py-8 mx-2 rounded-lg shadow-lg border border-hacker">
        <div className="container mx-auto px-4">
          {/* Terminal-style header */}
          <div className=" items-center mb-8">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div><br />
            <h2 className="text-2xl md:text-3xl font-mono text-hacker">
              skills.exe
            </h2>
          </div>
  
          {/* Terminal command */}
          <div className="mb-6 font-mono">
            <span className="text-matrix">$</span>
            <span className="ml-2 text-white">run --all --visual</span>
          </div>
  
          {/* Skills grid */}
          <div className="bg-gray-900/50 border border-hacker rounded-lg p-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="mb-6 last:mb-0">
                <h3 className="text-lg text-hacker mb-3 font-mono">
                  <span className="text-matrix">&gt;</span> {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {items.map((skill) => (
                    <div 
                      key={skill} 
                      className="bg-gray-900 border border-gray-700 hover:border-hacker p-3 rounded-md transition-colors duration-300"
                    >
                      <div className="flex items-center">
                        <span className="text-hacker mr-2">[√]</span>
                        <span className="text-white">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
          {/* Terminal footer */}
          <div className="mt-6 font-mono">
            <span className="text-matrix">$</span>
            <span className="ml-2 text-white">skills loaded successfully</span>
          </div>
        </div>
      </section>
      </SmoothScroll>
    );
  };
  
  export default Skills;