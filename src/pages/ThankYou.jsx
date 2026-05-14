import React from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col pt-32">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Animated Icon Container */}
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1 
          }}
          className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mb-10 shadow-premium relative"
        >
          <Send className="w-12 h-12 text-white ml-1" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg"
          >
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-sora font-extrabold text-ink mb-6"
        >
          Thank You!
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-ink-3 max-w-md mx-auto mb-12 leading-relaxed"
        >
          Your message has been sent successfully. <br />
          Our team will get back to you shortly.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/" className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group border-b-2 border-transparent hover:border-primary pb-1">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;
