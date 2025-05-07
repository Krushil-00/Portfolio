import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SmoothScroll = ({ children, id }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Smooth scroll to section
  // useEffect(() => {
  //   if (inView) {
  //     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [inView, id]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: inView ? 1 : 0.5,
        y: inView ? 0 : 20
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.section>
  );
};

export default SmoothScroll;