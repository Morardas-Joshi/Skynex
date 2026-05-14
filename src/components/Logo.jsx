import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "" }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div 
      className={`flex items-center space-x-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-12 h-10 flex items-center justify-center">
        {!imgError ? (
          <img 
            src="/logo.png" 
            alt="SkyNex Logo" 
            className="w-full h-full object-contain relative z-10"
            onError={() => setImgError(true)}
          />
        ) : (
          /* High-Fidelity SVG Reconstruction */
          <svg 
            viewBox="0 0 100 80" 
            className="w-full h-full relative z-10 drop-shadow-lg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cloudPinkPurple" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FF7AF5', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#7B3FE4', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path 
              d="M20,50 
                 C5,50 5,35 20,35 
                 C20,10 50,5 60,25 
                 C75,10 95,25 90,45 
                 C100,55 90,75 70,70 
                 C60,85 30,85 20,70 
                 C5,75 0,65 20,50 Z" 
              fill="url(#cloudPinkPurple)"
            />
          </svg>
        )}
      </div>
      
      <div>
        <span className="text-2xl font-sans font-bold tracking-tight text-[#001A4D] leading-none">
          SkyNex
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;
