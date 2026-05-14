import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-ink-4 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 pb-16 border-b border-white/5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="bg-white inline-block p-2 rounded-xl mb-6">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-ink-4/60">
              SkyNex Technologies is your end-to-end Odoo & AI partner. Building genuinely intelligent enterprise solutions.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-1">
            <h5 className="font-sora font-bold text-white mb-6 text-sm">Services</h5>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Odoo Implementation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">AI & ML Solutions</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cloud Automation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Digital Transformation</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="font-sora font-bold text-white mb-6 text-sm">Company</h5>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Latest News</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="font-sora font-bold text-white mb-6 text-sm">Legal</h5>
            <ul className="space-y-4 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h5 className="font-sora font-bold text-white mb-6 text-sm">Support</h5>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1 (555) 000-0000</span></li>
              <li><span className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@skynextechnologies.com</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-ink-4/40">
            © {new Date().getFullYear()} SkyNex Technologies. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            {[Facebook, Twitter, Linkedin, Github].map((Icon, idx) => (
              <a 
                key={idx}
                href="#" 
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:bg-skynex-grad hover:text-white hover:border-transparent transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
