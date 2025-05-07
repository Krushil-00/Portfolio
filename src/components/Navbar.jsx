// import { useState, useEffect } from 'react';
// import { motion,  AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [showCursor, setShowCursor] = useState(true);

//   const [binaryHover, setBinaryHover] = useState(null);
//   // Generate binary string matching nav item length
//   const generateBinary = (length) => {
//     let binary = '';
//     while (binary.length < length) {
//       binary += Math.random().toString(2).substring(2);
//     }
//     return binary.substring(0, length);
//   };

//   const navItems = [
//     { label: 'About', section: 'about', length:5 },
//     { label: 'Education', section: 'education', length:9 },
//     { label: 'Skills', section: 'skills', length:6 },
//     { label: 'Projects', section: 'projects', length:8 },
//     { label: 'Contact', section: 'contact', length:7 }
//   ];

//   // Handle navigation click with smooth scroll and offset
//   const handleNavClick = (section) => {
//     setActiveSection(section);
//     const element = document.getElementById(section);
//     if (element) {
//       const navbarHeight = document.querySelector('nav').offsetHeight;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   // Track active section on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', ...navItems.map(item => item.section)];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;

//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [navItems]);

//   // Cursor blinking effect
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setShowCursor((prev) => !prev);
//     }, 500);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-sm z-50 border-b border-hacker">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <div className="relative">
//           <a 
//             href="#hero"
//             className="text-xl font-mono font-bold hover:text-matrix transition-colors"
//             onClick={(e) => {
//               e.preventDefault();
//               handleNavClick('hero');
//             }}
//           >
//             <span className={`${
//               activeSection === 'hero' 
//                 ? 'text-matrix' 
//                 : 'text-hacker'
//             } font-mono text-sm md:text-xl truncate text-hacker`}>
//               $ Krushil Dangar <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>_</span>
//             </span>

//             {/* For underline under the "$ Krushil Dangar" */}
//             {/* <motion.span
//               initial={{ width: 0 }}
//               animate={{ 
//                 width: activeSection === 'home' ? '100%' : 0,
//                 opacity: activeSection === 'home' ? 1 : 0
//               }}
//               transition={{ duration: 0.3 }}
//               className="absolute -bottom-1 left-0 h-0.5 bg-hacker"
//             /> */}
//           </a>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-6">
//           {navItems.map((item) => {
//             const lowerItem = item.section;
//             return (
//               <div
//                 key={item.section}
//                 className="relative"
//                 onMouseEnter={() => setBinaryHover(lowerItem)}
//                 onMouseLeave={() => setBinaryHover(null)}
//               >
//                 <a 
//                   href={`#${lowerItem}`}
//                   className={`font-mono transition-colors relative ${
//                     activeSection === lowerItem 
//                       ? 'text-matrix text-green-500' 
//                       : 'text-hacker hover:text-matrix'
//                   }`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleNavClick(lowerItem);
//                     setActiveSection(lowerItem);
//                   }}
//                 >
//                   {binaryHover === lowerItem ? (
//                     <span className="text-hacker">
//                       {generateBinary(item.length)}
//                     </span>
//                   ) : (
//                     item.label
//                   )}
//                   <motion.span
//                     initial={{ width: 0 }}
//                     animate={{ 
//                       width: activeSection === lowerItem ? '100%' : binaryHover === lowerItem ? '100%' : 0,
//                       opacity: activeSection === lowerItem ? 1 : binaryHover === lowerItem ? 0.8 : 0
//                     }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute -bottom-1 left-0 h-0.5 bg-hacker"
//                   />
//                 </a>
//               </div>
//             );
//           })}
//         </div>

//         {/* Mobile Menu Button */}
//         {/* <button 
//           className="md:hidden text-hacker focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? '✕' : '☰'}
//         </button> */}
//         <motion.button 
//           className="md:hidden text-hacker focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//           whileTap={{ scale: 0.9 }}
//           transition={{ duration: 0.1 }}
//         >
//           <motion.div
//             animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {isOpen ? '✕' : '☰'}
//           </motion.div>
//         </motion.button>
//       </div>

//       {/* Mobile Menu
//       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black border-t border-hacker`}>
//         <div className="container mx-auto flex flex-col space-y-4 p-4">
//           {navItems.map((item) => {
//             const lowerItem = item.section;
//             return (
//               <a 
//                 key={item.section}
//                 href={`#${lowerItem}`}
//                 className={`font-mono transition-colors relative group ${
//                   activeSection === lowerItem 
//                     ? 'text-matrix text-hacker' 
//                     : 'text-hacker hover:text-matrix'
//                 }`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setIsOpen(false);
//                   handleNavClick(lowerItem);
//                 }}
//               >
//                 {item.label}
//                 <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${
//                   activeSection === lowerItem 
//                     ? 'bg-matrix' 
//                     : 'bg-hacker opacity-0 group-hover:opacity-100'
//                 } transition-all duration-300`} />
//               </a>
//             );
//           })}
//         </div>
//       </div> */}
//       {/* Animated Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: 'easeInOut' }}
//             className="md:hidden bg-black border-t border-hacker overflow-hidden"
//           >
//             <motion.div
//               initial={{ y: -20 }}
//               animate={{ y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="container mx-auto flex flex-col space-y-4 p-4"
//             >
//               {navItems.map((item, index) => {
//                 const lowerItem = item.section;
//                 return (
//                   <motion.a
//                     key={item.section}
//                     href={`#${lowerItem}`}
//                     className={`font-mono transition-colors relative group ${
//                       activeSection === lowerItem 
//                         ? 'text-matrix text-hacker' 
//                         : 'text-hacker hover:text-matrix'
//                     }`}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setIsOpen(false);
//                       handleNavClick(lowerItem);
//                     }}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.1 * index }}
//                   >
//                     {item.label}
//                     <motion.span
//                       className={`absolute -bottom-1 left-0 w-full h-0.5 ${
//                         activeSection === lowerItem 
//                           ? 'bg-matrix' 
//                           : 'bg-hacker opacity-0 group-hover:opacity-100'
//                       } transition-all duration-300`}
//                       layoutId="mobileUnderline"
//                     />
//                   </motion.a>
//                 );
//               })}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showCursor, setShowCursor] = useState(true);
  const [binaryHover, setBinaryHover] = useState(null);

  // Generate binary string matching nav item length
  const generateBinary = (length) => {
    let binary = '';
    while (binary.length < length) {
      binary += Math.random().toString(2).substring(2);
    }
    return binary.substring(0, length);
  };

  const navItems = [
    { label: 'About', section: 'about', length: 5 },
    { label: 'Education', section: 'education', length: 9 },
    { label: 'Skills', section: 'skills', length: 6 },
    { label: 'Projects', section: 'projects', length: 8 },
    { label: 'Contact', section: 'contact', length: 7 }
  ];

  // Handle navigation click with smooth scroll and offset
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Close mobile menu when a link is clicked
    
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        const navbarHeight = document.querySelector('nav').offsetHeight;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Small delay to allow menu to close before scrolling
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', ...navItems.map(item => item.section)];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Cursor blinking effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur-sm z-50 border-b border-hacker">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="relative">
          <a 
            href="#hero"
            className="text-xl font-mono font-bold hover:text-matrix transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
          >
            <span className={`${
              activeSection === 'hero' 
                ? 'text-matrix' 
                : 'text-hacker'
            } font-mono text-sm md:text-xl truncate text-hacker`}>
              $ Krushil Dangar <span className={`cursor ${showCursor ? 'visible' : 'hidden'}`}>_</span>
            </span>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const lowerItem = item.section;
            return (
              <div
                key={item.section}
                className="relative"
                onMouseEnter={() => setBinaryHover(lowerItem)}
                onMouseLeave={() => setBinaryHover(null)}
              >
                <a 
                  href={`#${lowerItem}`}
                  className={`font-mono transition-colors relative ${
                    activeSection === lowerItem 
                      ? 'text-matrix text-green-500' 
                      : 'text-hacker hover:text-matrix'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(lowerItem);
                  }}
                >
                  {binaryHover === lowerItem ? (
                    <span className="text-hacker">
                      {generateBinary(item.length)}
                    </span>
                  ) : (
                    item.label
                  )}
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ 
                      width: activeSection === lowerItem ? '100%' : binaryHover === lowerItem ? '100%' : 0,
                      opacity: activeSection === lowerItem ? 1 : binaryHover === lowerItem ? 0.8 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute -bottom-1 left-0 h-0.5 bg-hacker"
                  />
                </a>
              </div>
            );
          })}
        </div>

        {/* Mobile Menu Button with Animation */}
        <motion.button 
          className="md:hidden text-hacker focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
        >
          <motion.div
            animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? '✕' : '☰'}
          </motion.div>
        </motion.button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-black border-t border-hacker overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="container mx-auto flex flex-col space-y-4 p-4"
            >
              {navItems.map((item, index) => {
                const lowerItem = item.section;
                return (
                  <motion.a
                    key={item.section}
                    href={`#${lowerItem}`}
                    className={`font-mono transition-colors relative group ${
                      activeSection === lowerItem 
                        ? 'text-matrix text-green-500' 
                        : 'text-hacker hover:text-matrix'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(lowerItem);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {item.label}
                    <motion.span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                        activeSection === lowerItem 
                          ? 'bg-matrix' 
                          : 'bg-hacker opacity-0 group-hover:opacity-100'
                      } transition-all duration-300`}
                      layoutId="mobileUnderline"
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;