import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Cpu, Globe, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';

const Services = () => {
  const allServices = [
    { 
      title: 'Odoo ERP Solutions', 
      desc: 'Complete implementation, customization, and support for your enterprise resource planning needs.',
      path: '/services/odoo-erp',
      icon: Briefcase,
      features: ['CRM & Sales', 'Inventory', 'Accounting', 'HR Management']
    },
    { 
      title: 'AI & Machine Learning', 
      desc: 'Harness the power of data with custom AI models, predictive analytics, and natural language processing.',
      path: '/services/ai-ml',
      icon: Cpu,
      features: ['Predictive Analytics', 'NLP', 'Computer Vision', 'AI Chatbots']
    },
    { 
      title: 'Web Development', 
      desc: 'Scale your online presence with high-performance web applications built on modern frameworks.',
      path: '/services/web-development',
      icon: Globe,
      features: ['React & Next.js', 'E-commerce', 'SaaS Platforms', 'API Integration']
    },
    { 
      title: 'Business Automation', 
      desc: 'Streamline your operations and reduce manual overhead with intelligent automation workflows.',
      path: '/services/automation',
      icon: Zap,
      features: ['RPA', 'Workflow Design', 'Legacy Integration', 'Error Reduction']
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-space font-bold mb-8"
          >
            Our <span className="text-gradient">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-dark/60 max-w-3xl mx-auto leading-relaxed"
          >
            We provide a comprehensive suite of digital transformation services designed to help modern enterprises thrive in an AI-driven world.
          </motion.p>
        </div>

        <div className="space-y-12">
          {allServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-0 overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
                  <div className={`p-12 flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-space font-bold mb-6">{service.title}</h2>
                    <p className="text-lg text-dark/60 mb-8 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm font-medium text-dark/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={service.path} className="btn-primary inline-flex items-center self-start group">
                      Explore Solution <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className={`relative h-80 lg:h-auto min-h-[400px] bg-primary/5 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <div className="absolute inset-0 bg-orb-purple opacity-20 blur-3xl animate-pulse-glow" />
                    {/* Placeholder for service illustration */}
                    <div className="absolute inset-0 flex items-center justify-center">
                       <service.icon className="w-40 h-40 text-primary/10" />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
