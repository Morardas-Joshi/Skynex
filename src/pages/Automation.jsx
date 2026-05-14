import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Workflow, Settings, BarChart, Clock, ShieldCheck, Cpu, RefreshCw } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Automation = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-space font-bold mb-8"
          >
            Smart Automation for <br />
            <span className="text-gradient">Modern Enterprises</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-dark/60 max-w-3xl mx-auto leading-relaxed"
          >
            Reduce manual work and improve operational efficiency with intelligent automation systems.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { title: 'Workflow Optimization', desc: 'Streamline repetitive tasks for maximum efficiency.', icon: Workflow },
            { title: 'Time Savings', desc: 'Reduce manual processing time by up to 80%.', icon: Clock },
            { title: 'Error Reduction', desc: 'Eliminate human error in critical business processes.', icon: ShieldCheck },
            { title: 'Data Integration', desc: 'Connect all your tools into one automated ecosystem.', icon: RefreshCw }
          ].map((item, idx) => (
            <GlassCard key={idx} delay={idx * 0.1} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-dark/60">{item.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* Automation Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="glass-card p-8 aspect-video flex flex-col justify-between overflow-hidden relative">
              <div className="flex items-center justify-between mb-8">
                <div className="text-lg font-bold">Automation Pipeline</div>
                <div className="px-3 py-1 bg-green-100 text-green-600 text-xs font-bold rounded-full">ACTIVE</div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${30 + i * 20}%` }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                        className="h-full bg-primary" 
                      />
                    </div>
                    <div className="text-xs font-mono text-dark/40">{30 + i * 20}%</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <Settings className="w-12 h-12 text-primary/20 animate-spin-slow" />
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-space font-bold">Intelligent Process Automation</h2>
            <p className="text-dark/70 text-lg leading-relaxed">
              We combine RPA (Robotic Process Automation) with AI to create intelligent systems that not only follow rules but learn from data patterns.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-medium">Reduced operational costs</span>
              </li>
              <li className="flex items-center space-x-3">
                <Cpu className="w-5 h-5 text-primary" />
                <span className="font-medium">24/7 autonomous operations</span>
              </li>
              <li className="flex items-center space-x-3">
                <BarChart className="w-5 h-5 text-primary" />
                <span className="font-medium">Real-time performance monitoring</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automation;
