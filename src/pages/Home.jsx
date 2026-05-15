import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Cpu, Globe, Zap, CheckCircle2, Star, Users, Briefcase, Award, Settings, Code, BarChart, Link as LinkIcon, Rocket, Lightbulb, Database, ShieldCheck, Search, PenTool, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import TawkMessenger from '../components/TawkMessenger';

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
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
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

        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-paper-3 shadow-sm mb-8"
            >
              <div className="w-6 h-6 rounded-full bg-skynex-grad flex items-center justify-center mr-3 shadow-sm">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-medium text-ink-2">Where Odoo Expertise Meets Agentic AI</span>
            </motion.div>
            {/* <h1 className="text-5xl md:text-7xl font-sora font-extrabold leading-[1.05] mb-6 tracking-tight text-ink">
              Odoo experts who make your ERP <span className="text-gradient">genuinely intelligent.</span>
            </h1> */}
            <h1 
              className="font-sora font-extrabold leading-[1.1] mb-6 tracking-tight text-ink"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)' }}
            >
              Your Trusted <br />
              <span className="text-gradient">Odoo & AI</span> <br />
              Automation Partner.
            </h1>
            <p className="text-xl text-ink-2 mb-10 leading-relaxed max-w-xl">
              We implement Odoo ERP and build AI agents that plug right into it, so your team stops copy-pasting between tools and starts closing work up to 40% faster.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary group">
                <span>Book a Free Discovery Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-secondary">
                <span>Explore Our Services</span>
              </Link>
            </div>
            
            {/* Hero Meta Statistics */}
            <div className="mt-12 pt-8 border-t border-paper-3 flex flex-wrap gap-x-12 gap-y-6">
              <div>
                <div className="text-2xl font-sora font-bold text-gradient">35+</div>
                <div className="text-xs font-semibold text-ink-3 uppercase tracking-wider">Odoo implementations</div>
              </div>
              <div>
                <div className="text-2xl font-sora font-bold text-gradient">10+</div>
                <div className="text-xs font-semibold text-ink-3 uppercase tracking-wider">Industries Served</div>
              </div>
              <div>
                <div className="text-2xl font-sora font-bold text-gradient">24/7</div>
                <div className="text-xs font-semibold text-ink-3 uppercase tracking-wider">Support & AMC</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual - Realistic AI Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "backOut" }}
            className="relative perspective-1000 lg:col-span-6"
          >
            <div className="relative z-10 p-2">
              {/* Main Video Background in Glass Container */}
              <div className="glass-card p-2 rounded-[2.5rem] overflow-hidden border-paper-3 shadow-premium bg-white/60 backdrop-blur-3xl">
                <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-paper-2 shadow-inner">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover"
                  >
                    <source src="/video_homepage.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Dashboard Overlay - Removed as per user request */}
                </div>
              </div>
              
              {/* Floating Real-time Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-8 w-64 bg-white border border-paper-3 p-5 rounded-2xl shadow-premium backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold text-ink-3 tracking-widest">ACTIVE INTEGRATIONS</span>
                  {/* <div className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 text-[10px] font-bold">LIVE</div> */}
                </div>
                <div className="text-3xl font-sora font-bold text-ink tracking-tighter">20+<span className="text-sm font-normal text-ink-4">Modules</span></div>
                <div className="w-full bg-paper-2 h-1.5 rounded-full mt-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-skynex-grad rounded-full" 
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-8 w-64 bg-white/80 border border-white p-5 rounded-2xl shadow-2xl backdrop-blur-2xl"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-[10px] text-dark/40 font-bold uppercase">TEAM EFFICIENCY GAINED</div>
                    <div className="text-lg font-bold text-dark">+40% <span className="text-[10px] text-green-500 font-normal">↑ faster task</span></div>
                  </div>
                </div>
                <div className="h-1 bg-dark/5 w-full rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Ultra-Advanced SkyNex Neural Environment */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-transparent">
          {/* Layer 1: Ambient Pulse Core */}
          <motion.div 
            animate={{ 
              background: [
                "radial-gradient(circle at 30% 30%, rgba(123, 63, 228, 0.08) 0%, transparent 60%)",
                "radial-gradient(circle at 70% 70%, rgba(255, 122, 245, 0.08) 0%, transparent 60%)",
                "radial-gradient(circle at 30% 30%, rgba(123, 63, 228, 0.08) 0%, transparent 60%)"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />

          {/* Layer 2: Real-time Neural Mesh (Interactive dots) */}
          <svg className="absolute inset-0 w-full h-full">
            {[...Array(30)].map((_, i) => (
              <motion.circle
                key={`node-${i}`}
                r="1.5"
                fill="rgba(123, 63, 228, 0.5)"
                initial={{ cx: `${Math.random() * 100}%`, cy: `${Math.random() * 100}%` }}
                animate={{ 
                  cx: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
                  cy: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{ duration: 20 + i, repeat: Infinity, ease: "linear" }}
              />
            ))}
            {/* Pulsing connections between random nodes */}
            {[...Array(12)].map((_, i) => (
              <motion.path
                key={`conn-${i}`}
                d={`M ${Math.random() * 100} ${Math.random() * 100} L ${Math.random() * 100} ${Math.random() * 100}`}
                stroke="rgba(255, 122, 245, 0.15)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.4, 0] }}
                transition={{ duration: 10 + i, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </svg>

          {/* Layer 3: Floating 3D Tech Shards - Larger & More Premium */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`shard-${i}`}
              className="absolute w-64 h-64 bg-white/[0.08] border border-white/20 backdrop-blur-3xl rounded-[3rem]"
              initial={{ rotateY: 0, rotateX: 0 }}
              animate={{ 
                rotateY: [0, 360], 
                rotateX: [0, 180, 0],
                y: [0, -70, 0],
                x: [0, 40, 0]
              }}
              transition={{ 
                duration: 30 + i * 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{
                left: `${5 + i * 18}%`,
                top: `${10 + (i % 2) * 35}%`,
                boxShadow: '0 50px 100px -20px rgba(123, 63, 228, 0.2), inset 0 0 40px rgba(255,255,255,0.05)'
              }}
            />
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="relative"
      >
        {/* <div className="max-w-7xl mx-auto py-10">
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
        </div> */}
      </motion.section>

      {/* Services Section */}
      <motion.section 
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="pt-12 pb-16 bg-paper-2"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="eyebrow">What we do</div>
              {/* <h2 className="text-4xl md:text-5xl font-sora font-bold text-ink">
                Two practices. <span className="text-gradient">One partner.</span>
              </h2> */}
              <h2 className="text-4xl md:text-5xl font-sora font-bold text-ink">
                Odoo runs your business.<br />
                <span className="text-gradient"> AI runs it better.</span>
              </h2>
              <p className="text-lg text-ink-3 mt-4">
                From ERP implementation to intelligent automation — every service is built to reduce manual work, eliminate errors, and give your operations a measurable edge.
              </p>
            </div>
            <Link to="/contact" className="btn-secondary group">
              <span>Get a proposal</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Odoo Practice */}
          <div className="mb-0">
            {/* <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-bold uppercase tracking-widest text-ink-2">Odoo Practice</span>
              <div className="h-px bg-paper-3 flex-1" />
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Odoo Implementation", desc: "From zero to fully operational — configured, migrated, and deployed for your business.", icon: <Rocket /> },
                { title: "Odoo Customization", desc: "Every workflow, module, and screen built exactly the way your business operates.", icon: <Code /> },
                { title: "Odoo Integration", desc: "Connect Odoo to any tool, API, or AI service — and let intelligent automation do the rest.", icon: <LinkIcon /> },
                { title: "Odoo Consulting", desc: "Honest advice on what to build, what to skip, and how to get ROI from day one.", icon: <Lightbulb /> },
                { title: "Odoo Migration", desc: "Move to Odoo with clean data, AI-assisted mapping, and zero disruption to your operations.", icon: <Database /> },
                { title: "Odoo Support & Maintenance", desc: "Fast, reliable support so your Odoo system never becomes a bottleneck.", icon: <ShieldCheck /> }
              ].map((svc, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl border border-paper-3 shadow-sm hover:shadow-premium transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-skynex-soft border border-primary/10 flex items-center justify-center text-primary mb-6">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-sora font-bold text-ink mb-3">{svc.title}</h3>
                  <p className="text-ink-3 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <Link to="/services" className="text-primary text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Practice */}
          {/* <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-bold uppercase tracking-widest text-ink-2">AI Practice</span>
              <div className="h-px bg-paper-3 flex-1" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Agentic AI", desc: "Autonomous agents that take action across your stack.", icon: <Cpu /> },
                { title: "Workflow Automation", desc: "Replace repetitive tasks with reliable AI pipelines.", icon: <Zap /> },
                { title: "AI Strategy", desc: "Use-case discovery and ROI modeling for your AI journey.", icon: <BarChart /> },
                { title: "AI Integration", desc: "Drop AI into Odoo with secure, auditable connectors.", icon: <LinkIcon /> }
              ].map((svc, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl border border-paper-3 shadow-sm hover:shadow-premium transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-secondary mb-6 group-hover:bg-skynex-grad group-hover:text-white transition-colors duration-300">
                    {svc.icon}
                  </div>
                  <h3 className="text-lg font-sora font-bold text-ink mb-3">{svc.title}</h3>
                  <p className="text-ink-3 text-xs leading-relaxed mb-4">{svc.desc}</p>
                  <Link to="/services" className="text-primary text-xs font-bold flex items-center gap-2">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div> */}
        </div>
      </motion.section>

      {/* Statistics Section - Commented out as per user request
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="pt-8 pb-16 relative"
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
      */}

      {/* Why Choose Us */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="section-padding bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="mb-16">
            <div className="eyebrow">Why Skynex</div>
            <h2 className="text-4xl md:text-5xl font-sora font-bold text-ink">
              One team that speaks <br />
              <span className="text-gradient">Odoo and AI — fluently.</span>
            </h2>
            <p className="text-lg text-ink-3 mt-4 max-w-2xl">
              We don't just implement software; we transform how your business operates by combining deep ERP expertise with cutting-edge AI automation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                title: "Deep Odoo ERP Expertise",
                desc: "Specialized in scalable Odoo implementations, customizations, integrations, and enterprise workflows."
              },
              {
                title: "AI-Powered Business Automation",
                desc: "Automate operations, reduce manual work, and improve efficiency with intelligent AI-driven solutions."
              },
              {
                title: "Industry-Focused ERP Solutions",
                desc: "Tailored ERP systems designed around real business workflows across multiple industries."
              },
              {
                title: "Transparent & Agile Execution",
                desc: "Clear communication, structured delivery, and complete project visibility from start to finish."
              },
              {
                title: "End-to-End Implementation & Support",
                desc: "From consulting and development to deployment, training, and long-term optimization."
              },
              {
                title: "ROI-Driven Digital Transformation",
                desc: "Technology solutions focused on measurable growth, operational efficiency, and business scalability."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="flex items-start space-x-5 group"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-skynex-soft flex items-center justify-center mt-1 group-hover:bg-primary/20 transition-colors duration-300">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-sora font-bold text-ink mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-ink-3 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How We Work Section - Fine-tuned Process Flow */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="pt-12 pb-24 bg-paper-2 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Left Aligned Header - Matched to upper sections */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <motion.div variants={itemVariants} className="max-w-2xl text-left">
              <div className="eyebrow uppercase tracking-[0.2em] text-primary">Execution Framework</div>
              <h2 className="text-4xl md:text-5xl font-sora font-bold text-ink mb-4">
                How we <span className="text-gradient">Work</span>
              </h2>
              <p className="text-lg text-ink-3 leading-relaxed">
                A proven 5-step delivery process shaped around your team — not the other way around.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            {/* Interconnected Dashed Line - Passing through icon centers */}
            <div className="hidden lg:block absolute top-[48px] left-0 w-full border-t-2 border-dashed border-primary/20 -z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
              {[
                { step: "01", title: "Discover", desc: "Workshops, fit-gap analysis and success metrics agreed upfront.", icon: <Search className="w-5 h-5" /> },
                { step: "02", title: "Design", desc: "Solution blueprint and AI use-cases scoped to ROI.", icon: <PenTool className="w-5 h-5" /> },
                { step: "03", title: "Build", desc: "Configuration, custom modules and AI agents developed in sprints.", icon: <Code className="w-5 h-5" /> },
                { step: "04", title: "Launch", desc: "UAT, training, cutover — with a steady hand on go-live weekend.", icon: <Rocket className="w-5 h-5" /> },
                { step: "05", title: "Evolve", desc: "AMC, optimizations, new use-cases — measured every quarter.", icon: <RefreshCw className="w-5 h-5" /> }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="glass-card p-6 h-full flex flex-col items-center text-center rounded-[2rem] border-white/60 shadow-premium transition-all duration-500 hover:shadow-xl hover:bg-white group-hover:border-primary/10">
                    {/* Compact Icon - Positioned for the line */}
                    <div className="mb-6 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-skynex-soft text-primary flex items-center justify-center group-hover:bg-skynex-grad group-hover:text-white transition-all duration-500 shadow-sm ring-4 ring-paper-2 group-hover:ring-white">
                        {item.icon}
                      </div>
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white border border-paper-3 text-[8px] font-black flex items-center justify-center text-primary/40 group-hover:text-primary shadow-sm transition-colors">
                        {item.step}
                      </div>
                    </div>

                    <h3 className="text-lg font-sora font-bold text-ink mb-3 leading-tight">{item.title}</h3>
                    <p className="text-ink-3 text-[11px] leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials - Commented out as per user request
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
      */}

      {/* Large Purple CTA - Commented out as per user request
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
      */}

      {/* New Professional Compact CTA */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card bg-skynex-grad p-12 md:p-16 rounded-[3rem] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-premium">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} 
            />
            
            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6 leading-tight">
                Ready to make your business <br className="hidden lg:block" /> 
                <span className="opacity-80">genuinely intelligent?</span>
              </h2>
              <p className="text-white/80 text-lg font-medium leading-relaxed">
                Join the forward-thinking enterprises that have scaled their operations <br className="hidden md:block" /> with Skynex's Odoo and AI expertise.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
              <Link to="/contact" className="px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 text-center">
                Book a Free Strategy Call
              </Link>
              <Link to="/services" className="px-8 py-4 border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 text-center">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
      <TawkMessenger />
    </div>
  );
};

export default Home;
