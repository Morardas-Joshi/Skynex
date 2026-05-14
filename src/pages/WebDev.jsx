import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Layers, Zap, Eye, Layout, Shield } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const WebDev = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-space font-bold mb-6 leading-tight">
              Modern Websites That <br />
              <span className="text-gradient">Drive Business Growth</span>
            </h1>
            <p className="text-xl text-dark/60 mb-8 leading-relaxed">
              We design and develop premium responsive websites and scalable enterprise web applications with modern UI/UX.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">View Portfolio</button>
              <button className="btn-secondary">Technical Stack</button>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="glass-card p-4 rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Web Dev Visual" 
                className="rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -z-10" />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-space font-bold mb-4">Our Technology Stack</h2>
            <p className="text-dark/60 max-w-2xl mx-auto">We use the latest technologies to build fast, secure, and scalable web solutions.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React.js', icon: Code2 },
              { name: 'Next.js', icon: Layers },
              { name: 'Tailwind CSS', icon: Layout },
              { name: 'Node.js', icon: Zap },
              { name: 'TypeScript', icon: Shield },
              { name: 'Cloud Native', icon: Globe },
              { name: 'PWA', icon: Smartphone },
              { name: 'UI/UX Design', icon: Eye }
            ].map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center p-8 glass-card hover:border-primary/50 transition-colors">
                <tech.icon className="w-10 h-10 text-primary mb-4" />
                <span className="font-bold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="section-padding glass-card bg-primary/5">
          <h2 className="text-4xl font-space font-bold text-center mb-16">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals and user needs.' },
              { step: '02', title: 'Design', desc: 'Creating intuitive and premium UI/UX.' },
              { step: '03', title: 'Development', desc: 'Building with clean and scalable code.' },
              { step: '04', title: 'Deployment', desc: 'Launching and optimizing performance.' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-space font-black text-primary/10 absolute -top-10 -left-4 -z-10">{item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-dark/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
