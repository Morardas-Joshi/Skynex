import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Cpu, Globe, Zap, CheckCircle2, Star, Users, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6 border-primary/20">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              <span className="text-sm font-medium text-primary">Next-Gen Enterprise Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-space font-bold leading-tight mb-6">
              Empowering Businesses with <span className="text-gradient">ERP, AI & Intelligent Automation</span>
            </h1>
            <p className="text-xl text-dark/60 mb-8 leading-relaxed max-w-xl">
              Skynex Technologies delivers enterprise-grade Odoo ERP, AI/ML, automation, and web solutions designed to accelerate digital transformation and business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary group">
                Get Started
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Book Free Consultation
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 p-4">
              <div className="glass-card p-4 rounded-[2rem] overflow-hidden border-white/60 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                  alt="Dashboard Preview" 
                  className="rounded-2xl w-full shadow-lg"
                />
              </div>
              
              {/* Floating Dashboard Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-48 glass-card p-4 shadow-xl border-primary/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold text-dark/40 tracking-widest">Growth</span>
                  <BarChart2 className="w-4 h-4 text-primary" />
                </div>
                <div className="text-2xl font-bold">+124%</div>
                <div className="w-full bg-primary/10 h-1.5 rounded-full mt-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '70%' }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-primary rounded-full" 
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 w-56 glass-card p-4 shadow-xl border-secondary/20"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">Automation active</div>
                    <div className="text-[10px] text-dark/40">99.9% Efficiency</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orb-purple opacity-30 blur-3xl z-0" />
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-white/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">Trusted Technology Partner for Modern Enterprises</h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              We help startups, SMEs, and enterprises streamline operations, automate workflows, and scale faster using intelligent technology solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Microsoft', 'Google', 'Amazon', 'Adobe', 'Meta'].map((name) => (
              <span key={name} className="text-2xl font-bold font-space">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">Innovative Solutions for the Digital Future</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Odoo ERP Solutions', 
                desc: 'Optimize operations with custom Odoo ERP implementation, integration, and workflow automation.',
                icon: Briefcase,
                color: 'text-primary'
              },
              { 
                title: 'AI & Machine Learning', 
                desc: 'Leverage intelligent AI systems, predictive analytics, and automation to drive innovation.',
                icon: Cpu,
                color: 'text-secondary'
              },
              { 
                title: 'Web Development', 
                desc: 'Build premium responsive websites and scalable enterprise applications with modern UI/UX.',
                icon: Globe,
                color: 'text-primary'
              },
              { 
                title: 'Business Automation', 
                desc: 'Automate repetitive tasks and improve efficiency with smart automation systems.',
                icon: Zap,
                color: 'text-secondary'
              }
            ].map((service, idx) => (
              <GlassCard key={idx} delay={idx * 0.1}>
                <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-white/50`}>
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link to={`/services`} className="text-primary font-semibold text-sm flex items-center group">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto glass-card p-12 bg-primary/5 border-primary/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { label: 'Successful Projects', value: '100+' },
              { label: 'Enterprise Clients', value: '50+' },
              { label: 'Client Satisfaction', value: '99%' },
              { label: 'Technical Support', value: '24/7' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-space font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-dark/60 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-8">Why Businesses Choose Skynex Technologies</h2>
            <div className="space-y-6">
              {[
                'Enterprise-grade Architecture',
                'AI-driven Innovation',
                'Scalable Solutions',
                'Modern Technology Stack',
                'Dedicated Technical Support',
                'Fast Digital Transformation',
                'Secure & Reliable Systems'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg text-dark/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="glass-card p-8 aspect-square flex flex-col items-center justify-center text-center">
              <Award className="w-20 h-20 text-primary mb-6" />
              <h3 className="text-3xl font-space font-bold mb-4">Innovation Leader 2024</h3>
              <p className="text-dark/60 max-w-sm">Recognized for excellence in AI implementation and enterprise digital transformation.</p>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-space font-bold mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <GlassCard key={i} className="bg-white/80">
                <div className="flex space-x-1 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-dark/70 italic mb-8">
                  "Skynex transformed our legacy operations into a high-efficiency digital workflow. Their AI solutions are truly world-class."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20" />
                  <div>
                    <div className="font-bold">John Doe</div>
                    <div className="text-sm text-dark/40">CEO, TechFlow</div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto glass-card bg-gradient-to-br from-primary to-primary-neon p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-orb-cyan opacity-20 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Join 50+ enterprise clients who have scaled their operations with Skynex Technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:scale-105 transition-transform">
                Get Started Now
              </Link>
              <Link to="/contact" className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
