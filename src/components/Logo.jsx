import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "" }) => {
  return (
    <motion.div 
      className={`flex items-center space-x-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
        {/* Animated background glow */}
        <motion.div 
          className="absolute inset-0 bg-primary/20 blur-lg rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        {/* The Logo Image */}
        <img 
          src="/logo.png" 
          alt="SkyNex Logo" 
          className="w-full h-full object-contain relative z-10"
          onError={(e) => {
            // Fallback if image doesn't exist
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        
        {/* Fallback SVG Logo if logo.png is missing */}
        <div className="hidden absolute inset-0 bg-gradient-to-br from-primary to-primary-neon rounded-xl items-center justify-center shadow-lg">
          <span className="text-white font-bold text-xl">S</span>
        </div>
      </div>
      
      <span className="text-2xl font-space font-bold tracking-tight">
        SkyNex<span className="text-primary">.</span>
      </span>
    </motion.div>
  );
};

export default Logo;
