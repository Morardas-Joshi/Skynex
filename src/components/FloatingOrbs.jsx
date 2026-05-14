import React from 'react';
import { motion } from 'framer-motion';

const FloatingOrbs = () => {
  const orbs = [
    { size: 'w-[500px] h-[500px]', color: 'bg-primary/20', top: '-10%', left: '-10%', delay: 0 },
    { size: 'w-[400px] h-[400px]', color: 'bg-secondary/20', top: '20%', right: '-5%', delay: 2 },
    { size: 'w-[600px] h-[600px]', color: 'bg-primary-neon/15', bottom: '-10%', left: '20%', delay: 4 },
    { size: 'w-[300px] h-[300px]', color: 'bg-primary/10', bottom: '10%', right: '10%', delay: 1 },
    { size: 'w-[450px] h-[450px]', color: 'bg-secondary/15', top: '40%', left: '50%', delay: 3 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`orb ${orb.size} ${orb.color}`}
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -40, 20, -10, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
