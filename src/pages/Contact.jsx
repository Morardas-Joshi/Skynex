import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Contact = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-space font-bold mb-8"
          >
            Let's Build the <br />
            <span className="text-gradient">Future Together</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-dark/60 max-w-3xl mx-auto leading-relaxed"
          >
            Connect with Skynex Technologies to discuss your ERP, AI, automation, and digital transformation goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-space font-bold mb-8">Get In Touch</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email Us', info: 'hello@skynex.tech', color: 'bg-blue-100 text-blue-600' },
                { icon: Phone, title: 'Call Us', info: '+1 (234) 567-890', color: 'bg-purple-100 text-purple-600' },
                { icon: MapPin, title: 'Visit Us', info: 'Tech Hub, Silicon Valley, CA', color: 'bg-pink-100 text-pink-600' },
                { icon: Clock, title: 'Working Hours', info: 'Mon - Fri, 9am - 6pm', color: 'bg-green-100 text-green-600' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-dark/40 tracking-widest">{item.title}</div>
                    <div className="text-lg font-bold">{item.info}</div>
                  </div>
                </div>
              ))}
            </div>

            <GlassCard className="bg-primary/5 border-primary/20 p-8">
              <h3 className="text-xl font-bold mb-4">Book Free Consultation</h3>
              <p className="text-sm text-dark/60 mb-6">Schedule a 30-minute discovery call with our technical experts.</p>
              <button className="w-full btn-primary">Schedule Now</button>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <GlassCard className="p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark/60 ml-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary/50 focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark/60 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary/50 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark/60 ml-2">Company Name</label>
                    <input 
                      type="text" 
                      placeholder="Tech Solutions Inc." 
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary/50 focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dark/60 ml-2">Service Required</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary/50 focus:bg-white outline-none transition-all appearance-none">
                      <option>Odoo ERP Solutions</option>
                      <option>AI & Machine Learning</option>
                      <option>Web Development</option>
                      <option>Business Automation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark/60 ml-2">Your Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="Tell us about your project..." 
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-primary/50 focus:bg-white outline-none transition-all"
                  ></textarea>
                </div>

                <button className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform flex items-center justify-center space-x-2">
                  <span>Schedule Your Free Consultation Today</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
