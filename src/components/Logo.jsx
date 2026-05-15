import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "" }) => {

  return (
    <motion.div 
      className={`flex items-center space-x-1.5 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-14 h-12 flex items-center justify-center shrink-0">
        <img 
          src="/skt_logo_transparent (1).png" 
          alt="SkyNex Logo" 
          className="w-full h-full object-contain relative z-10"
        />
      </div>
    </motion.div>
  );
};

export default Logo;
