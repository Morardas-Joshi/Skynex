import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, MessageSquare, LineChart, Search, Database, Layout, Activity } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const AIML = () => {
  const services = [
    { title: 'AI Automation', icon: Cpu, desc: 'Automate complex decision-making processes.' },
    { title: 'Predictive Analytics', icon: LineChart, desc: 'Forecast trends and business outcomes.' },
    { title: 'NLP Solutions', icon: MessageSquare, desc: 'Advanced natural language understanding.' },
    { title: 'AI Chatbots', icon: Brain, desc: 'Intelligent customer support agents.' },
    { title: 'Computer Vision', icon: Search, desc: 'Image and video recognition systems.' },
    { title: 'AI Dashboards', icon: Layout, desc: 'Visual AI insights for your data.' },
    { title: 'Business Intelligence', icon: Activity, desc: 'Deep data insights for growth.' },
    { title: 'Data Science', icon: Database, desc: 'Structured data modeling and analysis.' }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-space font-bold mb-8"
          >
            AI Solutions Built <br />
            <span className="text-gradient">For The Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-dark/60 max-w-3xl mx-auto leading-relaxed"
          >
            Unlock the power of Artificial Intelligence and Machine Learning to automate operations and accelerate innovation.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {services.map((service, idx) => (
            <GlassCard key={idx} delay={idx * 0.1} className="group hover:bg-primary/5 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-dark/60 leading-relaxed">{service.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* Interactive Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-space font-bold">Intelligent Neural Networks</h2>
            <p className="text-dark/70 text-lg leading-relaxed">
              Our AI models are built using state-of-the-art neural network architectures, ensuring high accuracy and performance for enterprise-level applications.
            </p>
            <div className="space-y-4">
              {[
                'Deep Learning Architectures',
                'Custom ML Model Training',
                'Real-time Data Processing',
                'Scalable Cloud AI Infrastructure'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium text-dark/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-card p-12 aspect-square flex flex-col items-center justify-center text-center overflow-hidden">
              {/* Abstract Neural Network Graphic Placeholder */}
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-64 h-64 border-2 border-dashed border-primary/30 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-48 h-48 border-2 border-dashed border-secondary/30 rounded-full"
                />
                <Brain className="w-24 h-24 text-primary animate-pulse" />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIML;
