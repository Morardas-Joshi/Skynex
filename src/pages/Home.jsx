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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        duration: 0.8
      } 
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="orb w-[500px] h-[500px] bg-primary/20 -top-20 -left-20" 
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="orb w-[600px] h-[600px] bg-secondary/10 bottom-0 right-0" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full glass-card mb-6 border-primary/20 shadow-primary/10 shadow-lg"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Next-Gen Enterprise Solutions</span>
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-space font-bold leading-[1.1] mb-6 tracking-tighter">
              Build the <span className="text-gradient">Future</span> of Your Business
            </h1>
            <p className="text-xl text-dark/60 mb-8 leading-relaxed max-w-xl">
              Skynex Technologies delivers enterprise-grade Odoo ERP, AI/ML, automation, and web solutions designed to accelerate digital transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary group relative overflow-hidden">
                <span className="relative z-10">Get Started Now</span>
                <motion.div 
                  className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500"
                />
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
              <Link to="/services" className="btn-secondary group">
                <span className="group-hover:text-primary transition-colors">Our Services</span>
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "backOut" }}
            className="relative perspective-1000"
          >
            <div className="relative z-10 p-4 animate-float">
              <div className="glass-card p-2 rounded-[2.5rem] overflow-hidden border-white/60 shadow-2xl rotate-y-12 transition-transform duration-700 hover:rotate-y-0">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                  alt="Dashboard Preview" 
                  className="rounded-[2rem] w-full shadow-lg"
                />
              </div>
              
              {/* Floating Dashboard Cards */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-6 w-52 glass-card p-5 shadow-2xl border-primary/20 backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold text-dark/40 tracking-widest">Revenue Growth</span>
                  <BarChart2 className="w-5 h-5 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient">+124%</div>
                <div className="w-full bg-primary/10 h-2 rounded-full mt-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 2, delay: 1.5 }}
                    className="h-full bg-gradient-to-r from-primary to-primary-neon rounded-full" 
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  x: [0, -10, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-12 -left-12 w-64 glass-card p-5 shadow-2xl border-secondary/20 backdrop-blur-2xl"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center animate-pulse">
                    <Zap className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-tight">AI Automation</div>
                    <div className="text-[10px] text-dark/40 font-medium">99.9% Efficiency Achieved</div>
                  </div>
                </div>
                <div className="h-1 bg-secondary/10 w-full rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="section-padding bg-white/30 relative"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">Trusted Technology Partner for Modern Enterprises</h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              We help startups, SMEs, and enterprises streamline operations, automate workflows, and scale faster using intelligent technology solutions.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
          >
            {['Microsoft', 'Google', 'Amazon', 'Adobe', 'Meta'].map((name) => (
              <span key={name} className="text-2xl font-bold font-space hover:text-primary cursor-default transition-colors">{name}</span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="section-padding relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-4">Innovative Solutions for the <span className="text-gradient">Digital Future</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </motion.div>

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
              <motion.div key={idx} variants={itemVariants} className="h-full">
                <GlassCard className="h-full hover-lift group">
                  <div className={`w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-white/50 group-hover:rotate-6 transition-transform duration-500`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <Link to={`/services`} className="text-primary font-bold text-sm flex items-center group/link">
                    Explore Now <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="section-padding relative"
      >
        <div className="max-w-7xl mx-auto glass-card p-12 bg-primary/5 border-primary/10 overflow-hidden relative">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" 
          />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { label: 'Successful Projects', value: '100+' },
              { label: 'Enterprise Clients', value: '50+' },
              { label: 'Client Satisfaction', value: '99%' },
              { label: 'Technical Support', value: '24/7' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="cursor-default"
              >
                <div className="text-4xl md:text-5xl font-space font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-dark/60 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="section-padding"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-8">Why Businesses <span className="text-primary">Choose</span> Skynex</h2>
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
                <motion.div 
                  key={idx} 
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 10 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-lg text-dark/80 font-medium group-hover:text-primary transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="relative group">
            <div className="glass-card p-12 aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden group-hover:shadow-2xl transition-all duration-700">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"
              />
              <Award className="w-24 h-24 text-primary mb-6 animate-glow" />
              <h3 className="text-3xl font-space font-bold mb-4">Innovation Leader 2024</h3>
              <p className="text-dark/60 max-w-sm">Recognized for excellence in AI implementation and enterprise digital transformation.</p>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="section-padding bg-primary/5"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-space font-bold mb-4">What Our Clients <span className="text-primary">Say</span></h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div key={i} variants={itemVariants}>
                <GlassCard className="bg-white/80 hover-lift h-full">
                  <div className="flex space-x-1 mb-6">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary animate-pulse" />)}
                  </div>
                  <p className="text-dark/70 italic mb-8 text-lg leading-relaxed">
                    "Skynex transformed our legacy operations into a high-efficiency digital workflow. Their AI solutions are truly world-class."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-dark">Enterprise Client</div>
                      <div className="text-sm text-dark/40 font-medium">Verified Partner</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="section-padding"
      >
        <div className="max-w-5xl mx-auto glass-card bg-gradient-to-br from-primary to-primary-neon p-12 md:p-24 text-center text-white relative overflow-hidden group shadow-2xl shadow-primary/30">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 rounded-full blur-3xl" 
          />
          <div className="relative z-10">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-7xl font-space font-bold mb-8 tracking-tighter">Ready to Transform Your Business?</motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium">
              Join 50+ enterprise clients who have scaled their operations with Skynex Technologies.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="px-12 py-5 bg-white text-primary rounded-full font-bold text-xl hover:scale-110 hover:shadow-2xl transition-all duration-300">
                Get Started Now
              </Link>
              <Link to="/contact" className="px-12 py-5 border-2 border-white/50 text-white rounded-full font-bold text-xl hover:bg-white/10 hover:border-white transition-all duration-300">
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
