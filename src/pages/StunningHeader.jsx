import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const StunningHeader = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div 
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-10 left-20 w-60 h-60 rounded-full bg-white/10 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-white/5 blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-white/15 blur-lg"></div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            opacity: 0
          }}
          animate={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            opacity: [0, 0.6, 0],
            scale: [0, Math.random() + 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Main header content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Animated logo/badge */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, 5, -5, 0] }}
            className="w-24 h-24 mx-auto mb-8 rounded-2xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
            }}
          >
            <span className="text-4xl">💸</span>
          </motion.div>

          {/* Main heading with gradient text */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold mb-6"
            style={{
              background: 'linear-gradient(to right, #ffffff, #e0e0e0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
            }}
          >
            Split Expenses <br />
            <motion.span 
              className="inline-block mt-2"
              whileHover={{ scale: 1.05 }}
            >
              Without The Stress
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12"
          >
            The smartest way to manage group expenses with friends, roommates, or family.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full text-purple-900 font-semibold text-lg"
              style={{
                background: 'white',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
              }}
            >
              Get Started — It's Free
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(255, 255, 255, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30"
              style={{
                color: 'white',
                background: 'rgba(255, 255, 255, 0.1)'
              }}
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <p className="text-white/80 mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated wave divider at bottom */}
      <motion.svg 
        viewBox="0 0 1440 120" 
        className="absolute bottom-0 left-0 w-full"
        style={{ zIndex: 2 }}
      >
        <motion.path 
          fill="white"
          fillOpacity="1" 
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </motion.svg>
    </div>
  );
};

export default StunningHeader;