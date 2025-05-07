export const sectionVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.5
      }
    }
  };
  
  export const terminalWindowVariants = {
    hidden: { opacity: 0, scaleX: 0.9 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        delay: 0.2,
        duration: 0.3
      }
    }
  };
  
  export const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };



// Terminal-specific animations
export const terminalWindow = {
  hidden: { opacity: 0, scaleX: 0.9 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      delay: 0.2,
      duration: 0.3
    }
  }
};

// Staggered item animations
export const staggeredItem = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.4
    }
  })
};

// Hacker-specific effects
export const hackerGlow = {
  hidden: { textShadow: 'none' },
  visible: {
    textShadow: '0 0 8px rgba(57, 255, 20, 0.8)',
    transition: { duration: 0.5 }
  }
};