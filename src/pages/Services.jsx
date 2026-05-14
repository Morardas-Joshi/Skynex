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
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <motion.div 
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="orb w-[800px] h-[800px] bg-primary/5 -top-40 -left-40 blur-[120px]" 
        />
        <motion.div 
          animate={{ y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="orb w-[600px] h-[600px] bg-secondary/5 bottom-0 right-0 blur-[120px]" 
        />
      </div>

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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-0 overflow-hidden hover-lift group border-white/40 shadow-xl">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
                  <div className={`p-12 flex flex-col justify-center ${idx % 2 !== 0 ? 'lg:order-2 text-right items-end' : ''}`}>
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 shadow-inner"
                    >
                      <service.icon className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h2 className="text-4xl font-space font-bold mb-6 tracking-tight">{service.title}</h2>
                    <p className="text-xl text-dark/60 mb-8 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className={`grid grid-cols-2 gap-6 mb-10 w-full ${idx % 2 !== 0 ? 'text-right' : ''}`}>
                      {service.features.map((feature, fIdx) => (
                        <motion.div 
                          key={fIdx} 
                          className={`flex items-center space-x-3 group/feat ${idx % 2 !== 0 ? 'flex-row-reverse space-x-reverse' : ''}`}
                          whileHover={{ x: idx % 2 === 0 ? 5 : -5 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                          <span className="text-base font-semibold text-dark/80 group-hover/feat:text-primary transition-colors">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    <Link to={service.path} className="btn-primary inline-flex items-center self-start group/btn px-10 py-4 shadow-xl shadow-primary/20">
                      Explore Solution <ArrowRight className="ml-2 w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                  <div className={`relative h-96 lg:h-auto min-h-[500px] overflow-hidden ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 group-hover:scale-110 transition-transform duration-1000" />
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                       <service.icon className="w-48 h-48 text-primary/5 group-hover:text-primary/10 transition-colors duration-500" />
                    </motion.div>
                    {/* Decorative element */}
                    <div className="absolute bottom-10 left-10 right-10 h-1 bg-white/20 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="h-full bg-primary/40" 
                      />
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
