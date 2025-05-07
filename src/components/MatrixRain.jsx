import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const MatrixRain = () => {
  const [dimensions, setDimensions] = useState({ 
    width: 0, 
    height: 0 
  });
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0) return;

    const columns = Math.floor(dimensions.width / 15);
    const characters = "01"; // "01アイウエオカキクケコ"
    
    // Create initial drops
    const initialDrops = Array.from({ length: columns }).map((_, i) => ({
      id: `drop-${i}-${Date.now()}`,
      x: i * 15,
      char: characters[Math.floor(Math.random() * characters.length)],
      duration: 2 + Math.random() * 5,
      delay: Math.random() * 3,
      key: Math.random()
    }));

    setDrops(initialDrops);

    // Function to regenerate drops
    const regenerateDrops = () => {
      setDrops(prevDrops => {
        // Remove completed drops
        const activeDrops = prevDrops.filter(drop => 
          drop.id.startsWith('drop-') // Simple check to keep all for now
        );

        // Add new drops for empty columns
        const columnsWithDrops = new Set(activeDrops.map(drop => Math.floor(drop.x / 15)));
        const newDrops = [];
        
        for (let i = 0; i < columns; i++) {
          if (!columnsWithDrops.has(i) && Math.random() > 0.7) {
            newDrops.push({
              id: `drop-${i}-${Date.now()}`,
              x: i * 15,
              char: characters[Math.floor(Math.random() * characters.length)],
              duration: 2 + Math.random() * 5,
              delay: 0,
              key: Math.random()
            });
          }
        }

        return [...activeDrops, ...newDrops];
      });
    };

    // Set up regeneration interval
    const interval = setInterval(regenerateDrops, 300);
    return () => clearInterval(interval);
  }, [dimensions.width]);

  if (dimensions.width === 0) return null;

  return (
    <div className="fixed inset-0 overflow-hidden opacity-20 pointer-events-none z-20">
      {drops.map((drop) => (
        <motion.span
          key={`${drop.id}-${drop.key}`}
          className="text-white text-lg absolute top-0 font-mono"
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: dimensions.height + 50,
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: Math.random() * 5
          }}
          style={{ 
            left: `${drop.x}px`,
            textShadow: '0 0 5px #39ff14'
          }}
          onAnimationComplete={() => {
            // This will trigger when each animation cycle completes
            setDrops(prev => prev.filter(d => d.id !== drop.id));
          }}
        >
          {drop.char}
        </motion.span>
      ))}
    </div>
  );
};

export default MatrixRain;