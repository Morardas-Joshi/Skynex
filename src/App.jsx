import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingOrbs from './components/FloatingOrbs';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import OdooERP from './pages/OdooERP';
import AIML from './pages/AIML';
import WebDev from './pages/WebDev';
import Automation from './pages/Automation';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-dark font-sans selection:bg-primary/20 selection:text-primary">
      <FloatingOrbs />
      <Navbar />
      
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/odoo-erp" element={<OdooERP />} />
            <Route path="/services/ai-ml" element={<AIML />} />
            <Route path="/services/web-development" element={<WebDev />} />
            <Route path="/services/automation" element={<Automation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
