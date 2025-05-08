import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence, useInView } from 'framer-motion';
import SmoothScroll from './SmoothScroll';
import { terminalWindow, staggeredItem, hackerGlow } from './animations/animation';
import { quickFade } from './animations/transition';

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [scrambledTexts, setScrambledTexts] = useState([]);
  const [accessGranted, setAccessGranted] = useState(false);
  const controls = useAnimation();
  const photoRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" }); // Removed 'once: true'

  const bioLines = [
    "Resourceful web designer specializing in modern frontend stack",
    "Quickly adapts to new technologies and solves complex issues",
    "Passionate about building user-friendly, standards-compliant sites",
    "Thrives in team collaborations and continuous learning"
  ];

  // Scramble characters
  const chars = "!@#$%^&*()_+{}|:<>?~`-=[];',./";

  // Initialize and unscramble text whenever in view
  useEffect(() => {
    if (isInView) {
      // Reset to scrambled state
      setScrambledTexts(bioLines.map(line => scrambleText(line)));
      
      // Begin unscrambling after a short delay
      const unscrambleAll = setTimeout(() => {
        bioLines.forEach((line, i) => {
          unscrambleText(line, i, 30);
        });
      }, 500);

      return () => clearTimeout(unscrambleAll);
    } else {
      // Reset to scrambled state when out of view
      setScrambledTexts(bioLines.map(line => scrambleText(line)));
    }
  }, [isInView]);

  // Scramble text function
  const scrambleText = (text) => {
    return text.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  // Faster unscramble animation
  const unscrambleText = (original, index, speed = 15) => {
    let iterations = 0;
    const interval = setInterval(() => {
      setScrambledTexts(prev => {
        const newTexts = [...prev];
        newTexts[index] = original.split('').map((char, i) => {
          if (i < iterations) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        return newTexts;
      });

      if (iterations >= original.length) clearInterval(interval);
      iterations += 1;
    }, speed);
  };

  // Radar scan animation
  useEffect(() => {
    const radarScan = async () => {
      while (true) {
        await controls.start({
          scale: [1, 1.5, 1],
          opacity: [0, 0.8, 0],
          transition: { duration: 1.5, ease: "easeOut" }
        });
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    };
    radarScan();
  }, [controls]);

  // Access granted effect
  const triggerAccessGranted = () => {
    setAccessGranted(true);
    setTimeout(() => setAccessGranted(false), 1000);
  };

  return (
    <div className='mx-2' ref={sectionRef}>
      <SmoothScroll id="about">
        {/* Photo with Radar Scan */}
        <div className="container pt-10 px-4 mb-10 flex justify-center">
          <div className="relative">
            <motion.img
              ref={photoRef}
              src="/myPic.jpg"
              alt="Profile"
              className="w-64 h-64 md:w-70 md:h-70 rounded-full border-4 border-hacker object-cover cursor-pointer"
              onClick={triggerAccessGranted}
              whileHover={{ scale: 1.10 }}
              whileTap={{ scale: 0.95 }}
              transition={quickFade}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-matrix pointer-events-none"
              animate={controls}
              style={{ originX: 0.5, originY: 0.5 }}
            />
          </div>
        </div>

        {/* Terminal content */}
        <div className="container bg-gray-900 py-8 px-4 rounded-lg shadow-lg border border-hacker">
          <motion.div
            className="items-center mb-6"
            variants={staggeredItem}
            custom={0}
          >
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div><br />
            <motion.h2
              className="text-2xl md:text-3xl font-mono text-hacker"
              variants={hackerGlow}
            >
              who_am_i.txt
            </motion.h2>
          </motion.div>

          <motion.div
            className="bg-gray-800 border border-hacker rounded-lg p-6 font-mono"
            variants={terminalWindow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }} // Changed to false to animate every time
          >
            <motion.div
              className="mb-4"
              variants={staggeredItem}
              custom={1}
            >
              <span className="text-matrix text-white">$</span>
              <span className="ml-2 text-white">cat about_me.txt</span>
            </motion.div>

            {bioLines.slice(0, showMore ? bioLines.length : 2).map((line, i) => (
              <motion.p
                key={i}
                className="text-gray-300 mb-3"
                // variants={staggeredItem}
                // custom={i + 2}
              >
                <span className="text-hacker">&gt;</span> {scrambledTexts[i] || line}
              </motion.p>
            ))}

            <AnimatePresence>
              {accessGranted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={quickFade}
                  className="text-hacker mb-4 font-bold"
                >
                  [ ACCESS GRANTED ]
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={() => {
                setShowMore(!showMore);
                triggerAccessGranted();
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={quickFade}
              className="mt-2 px-4 py-2 bg-gray-800 border border-hacker text-hacker hover:bg-hacker hover:text-black transition-colors text-sm"
            >
              {showMore ? 'show less' : 'read more'}
            </motion.button>
          </motion.div>
        </div>
      </SmoothScroll>
    </div>
  );
};

export default About;