import { useState } from 'react';
import SmoothScroll from './SmoothScroll';

const Education = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Engineering - Computer Science",
      institution: "Government Engineering College, Rajkot (GECR)",
      year: "2022 - 2026",
      mark: "8.52/10",
      description: "Currently pursuing degree with focus on full-stack development. Coursework includes Data Structures, Algorithms, DBMS, and Computer Networks. Active member of coding club and cybersecurity workshops."
    },
    {
      id: 2,
      degree: "12th Grade - Science",
      institution: "Shakti School, Rajkot",
      year: "2021 - 2022",
      mark: "72.15%",
      description: "Completed higher secondary education with a focus on science. Maintained steady academic performance across core subjects."
    },
    {
      id: 3,
      degree: "10th Grade",
      institution: "Shree V.J. Modi School, Rajkot",
      year: "2019 - 2020",
      mark: "77.16%",
      description: "Finished secondary school education as per the standard curriculum. Focused on completing the academic year successfully."
    }
  ];

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <SmoothScroll id="education">
    <section id="education" className="py-16 bg-black text-white mx-2">
      
      <div className="container mx-auto px-4 bg-gray-950 py-8 rounded-lg shadow-lg border border-hacker">
        {/* Terminal-style header */}
        <div className=" items-center mb-8">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div><br />
          <h2 className="text-2xl md:text-3xl font-mono text-hacker">
            education.log
          </h2>
        </div>

        {/* Timeline */}
        <div className="border-l-2 border-hacker pl-8 space-y-8">
          {educationData.map((item) => (
            <div key={item.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-black border-2 border-hacker flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-hacker animate-pulse"></div>
              </div>

              {/* Education card */}
              <div 
                className={`bg-gray-900/50 border ${expandedItem === item.id ? 'border-hacker' : 'border-gray-700'} rounded-lg p-6 font-mono transition-all duration-300 cursor-pointer`}
                onClick={() => toggleExpand(item.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl text-hacker mb-1">{item.degree}</h3>
                    <p className="text-gray-300">{item.institution}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-gray-900 text-hacker px-3 py-1 rounded-md text-sm block mb-1">
                      {item.year}
                    </span>
                    <span className="bg-hacker text-black px-2 py-0.5 rounded text-xs font-bold">
                      {item.mark}
                    </span>
                  </div>
                </div>

                {expandedItem === item.id && (
                  <p className="mt-4 text-gray-300 border-t border-gray-700 pt-4">
                    <span className="text-hacker">&gt;</span> {item.description}
                  </p>
                )}

                <div className="mt-3 text-right">
                  <span className="text-xs text-hacker">
                    {expandedItem === item.id ? '[-] collapse' : '[+] expand'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal command footer */}
        <div className="mt-8 font-mono">
          <span className="text-matrix">$</span>
          <span className="ml-2 text-white">education --complete --certified</span>
        </div>
      </div>
    </section>
    </SmoothScroll>
  );
};

export default Education;