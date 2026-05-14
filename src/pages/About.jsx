import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Rocket } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-space font-bold mb-8"
          >
            Driving Innovation Through <br />
            <span className="text-gradient">Intelligent Technology</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-dark/60 max-w-3xl mx-auto leading-relaxed"
          >
            Skynex Technologies is a modern technology company specializing in Odoo ERP implementation, AI/ML solutions, enterprise automation, and premium web development services.
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="glass-card p-4 rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Team working" 
                className="rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-space font-bold">Our Story & Vision</h2>
            <p className="text-dark/70 text-lg leading-relaxed">
              We help businesses digitally transform operations with scalable, intelligent, and future-ready technology solutions. Since our inception, we have been at the forefront of the AI and ERP revolution, bridging the gap between complex technology and business efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard className="p-6">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">Our Mission</h4>
                <p className="text-sm text-dark/60">To empower businesses with innovative digital solutions that increase efficiency.</p>
              </GlassCard>
              <GlassCard className="p-6">
                <Eye className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-bold mb-2">Our Vision</h4>
                <p className="text-sm text-dark/60">To become the global leader in AI-driven enterprise transformation.</p>
              </GlassCard>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-space font-bold mb-4">Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', desc: 'Constantly pushing the boundaries of what is possible with AI and automation.', icon: Rocket },
              { title: 'Integrity', desc: 'Building trust through transparent processes and reliable enterprise systems.', icon: Shield },
              { title: 'Excellence', desc: 'Delivering premium quality in every line of code and every design pixel.', icon: Target }
            ].map((value, idx) => (
              <GlassCard key={idx} delay={idx * 0.1} className="text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-dark/60 leading-relaxed">{value.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
