import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BarChart2, Shield, Zap, Users, CreditCard, ShoppingCart, Settings } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const OdooERP = () => {
  const features = [
    { title: 'CRM Management', icon: Users },
    { title: 'Inventory Automation', icon: Zap },
    { title: 'Accounting & Finance', icon: CreditCard },
    { title: 'HR & Payroll', icon: Users },
    { title: 'Manufacturing ERP', icon: Settings },
    { title: 'Sales Automation', icon: ShoppingCart },
    { title: 'Reporting & Analytics', icon: BarChart2 },
    { title: 'Odoo Customization', icon: Settings }
  ];

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
              Transform Operations with <span className="text-gradient">Smart Odoo ERP Solutions</span>
            </h1>
            <p className="text-xl text-dark/60 mb-8 leading-relaxed">
              Streamline finance, inventory, CRM, HR, manufacturing, and enterprise workflows with intelligent Odoo ERP implementation.
            </p>
            <div className="flex space-x-4">
              <button className="btn-primary">Consult Our Experts</button>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="glass-card p-6 rounded-[2.5rem] border-white/60 shadow-2xl relative z-10">
              <div className="bg-white/80 rounded-2xl p-4 shadow-inner">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-primary/10 rounded-lg w-3/4 animate-pulse" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 bg-secondary/10 rounded-xl animate-pulse" />
                    <div className="h-24 bg-primary/10 rounded-xl animate-pulse" />
                    <div className="h-24 bg-secondary/10 rounded-xl animate-pulse" />
                  </div>
                  <div className="h-32 bg-gray-50 rounded-xl animate-pulse" />
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-space font-bold mb-4">Comprehensive ERP Features</h2>
            <p className="text-dark/60 max-w-2xl mx-auto">Everything you need to run your business efficiently on a single, integrated platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <GlassCard key={idx} delay={idx * 0.05} className="flex flex-col items-center text-center p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-dark/60">Fully integrated and customizable module.</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Value Prop */}
        <div className="glass-card p-12 bg-white/40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-space font-bold mb-6">Why Odoo for Your Business?</h2>
              <div className="space-y-4">
                {[
                  'Unified business processes',
                  'Real-time data and analytics',
                  'Scalable architecture',
                  'Cost-effective implementation',
                  'User-friendly interface'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-dark/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 glass-card text-center bg-primary/5 border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <p className="text-sm text-dark/60">Average efficiency increase</p>
              </div>
              <div className="p-8 glass-card text-center bg-secondary/5 border-secondary/20">
                <div className="text-4xl font-bold text-secondary mb-2">30%</div>
                <p className="text-sm text-dark/60">Cost reduction in operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdooERP;
