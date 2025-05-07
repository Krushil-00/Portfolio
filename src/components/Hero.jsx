import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SmoothScroll from './SmoothScroll';
import Resume from '../resume/Krushil_Dangar.pdf'
import Character from '../assets/character.png'

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const staticText = "Hello Everyone!";
  const dynamicText = "I'm Krushil Dangar";
  const tagline = "> Developer | Designer";

  // Typing animation
  useEffect(() => {
    let timer;

    if (!isDeleting && typedText.length < dynamicText.length) {
      timer = setTimeout(() => {
        setTypedText(dynamicText.substring(0, typedText.length + 1));
      }, 100);
    } else if (isDeleting && typedText.length > 0) {
      timer = setTimeout(() => {
        setTypedText(dynamicText.substring(0, typedText.length - 1));
      }, 50);
    } else if (typedText.length === dynamicText.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (typedText.length === 0) {
      timer = setTimeout(() => setIsDeleting(false), 500);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, dynamicText]);

  // Glitch effect every 5 seconds
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 5000);
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <SmoothScroll id="hero">
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden"
      >

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 z-10">
          <div className="text-center md:text-left">
            <h1 className="text-3xl my-4 md:text-4xl font-bold text-hacker">
              {staticText}
            </h1>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-hacker">
              <span className="border-r-2 border-hacker animate-blink">
                {typedText}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-matrix font-mono mb-8">
              {tagline}
            </p>
            <a
              href={Resume} download
              className="inline-block px-6 py-3 border border-hacker text-hacker hover:bg-green-600 hover:text-black transition-colors duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Animated Photo */}

          <motion.div
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden relative"
            animate={{
              filter: glitch ? [
                'hue-rotate(0deg)',
                'hue-rotate(60deg)',
                'hue-rotate(0deg)'
              ] : 'none',
              x: glitch ? [
                0, -5, 5, -5, 5, 0
              ] : 0,
              y: glitch ? [
                0, 5, -5, 5, -5, 0
              ] : 0
            }}
            transition={{
              duration: glitch ? 0.2 : 0.5,
              ease: 'easeInOut'
            }}
          >
            <img
              src={Character}
              alt="Character"
              // style={{height: '400px'}} 
              className="w-full h-full object-contain" // Changed from object-cover to object-contain
            />
          </motion.div>
        </div>
      </section>
    </SmoothScroll>
  );
};

export default Hero;