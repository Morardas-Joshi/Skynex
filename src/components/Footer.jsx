import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-white/40 border-t border-white/50 pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-neon rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-space font-bold tracking-tight">
                Skynex<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-dark/60 max-w-xs leading-relaxed">
              Empowering businesses with enterprise-grade Odoo ERP, AI/ML, and intelligent automation solutions for a digital-first future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 glass-card hover:bg-primary/10 transition-colors"><Twitter className="w-5 h-5 text-primary" /></a>
              <a href="#" className="p-2 glass-card hover:bg-primary/10 transition-colors"><Linkedin className="w-5 h-5 text-primary" /></a>
              <a href="#" className="p-2 glass-card hover:bg-primary/10 transition-colors"><Github className="w-5 h-5 text-primary" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-space">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-dark/60 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-dark/60 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-dark/60 hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="text-dark/60 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-space">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/services/odoo-erp" className="text-dark/60 hover:text-primary transition-colors">Odoo ERP Solutions</Link></li>
              <li><Link to="/services/ai-ml" className="text-dark/60 hover:text-primary transition-colors">AI & Machine Learning</Link></li>
              <li><Link to="/services/web-development" className="text-dark/60 hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services/automation" className="text-dark/60 hover:text-primary transition-colors">Business Automation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-space">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-dark/60">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Tech Hub, Silicon Valley, CA</span>
              </li>
              <li className="flex items-center space-x-3 text-dark/60">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center space-x-3 text-dark/60">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@skynex.tech</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/50 flex flex-col md:flex-row justify-between items-center text-sm text-dark/40">
          <p>© 2024 Skynex Technologies. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
