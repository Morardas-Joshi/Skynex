import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Facebook, Instagram, Linkedin, 
  ChevronRight, ShieldCheck, Users, Globe, Briefcase 
} from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050b18] text-white/70 pt-16 pb-8 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-6">
            <Logo />
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              SkyNex Technologies is a global IT & ERP solutions provider specializing in Odoo ERP implementations, AI automation, custom software development, and digital transformation services for modern businesses.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact Us", path: "/contact" }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="flex items-center gap-3 text-sm hover:text-primary transition-colors group">
                    <ChevronRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Odoo Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 relative inline-block">
              Odoo Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Odoo Implementations", path: "/services" },
                { label: "Odoo Development", path: "/services" },
                { label: "Odoo Integrations", path: "/services" }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="flex items-center gap-3 text-sm hover:text-primary transition-colors group">
                    <ChevronRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 relative inline-block">
              Get In Touch
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:contact@skynextechnologies.com" className="text-sm hover:text-primary transition-colors">contact@skynextechnologies.com</a>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm leading-relaxed">3rd Floor, Time Square 2, Ayodhya Chowk, 150 Feet Ring Rd, Rajkot, Gujarat 360006.</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <a href="tel:+919274529709" className="text-sm hover:text-primary transition-colors">+91 92745 29709</a>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-3">
                  {[
                    { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/skynex-technologies-4330983b1/" },
                    { icon: <Facebook className="w-4 h-4" />, href: "https://www.skynextechnologies.com/website/social/facebook" },
                    { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/skynex_technologies" }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium">
          <div className="text-white/40">
            © {currentYear} SkyNex Technologies. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6 text-white/40">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <div className="w-px h-3 bg-white/10" />
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
