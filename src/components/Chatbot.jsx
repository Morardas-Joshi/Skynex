import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    { role: 'bot', text: 'Hello! I am your SkyNex AI assistant. How can I help you with Odoo or AI today?' }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newChat = [...chat, { role: 'user', text: message }];
    setChat(newChat);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      setChat([...newChat, { 
        role: 'bot', 
        text: "Thanks for reaching out! Our team of Odoo experts will get back to you shortly, or you can book a free consultation via the 'Get Started' button." 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] bg-white rounded-2xl shadow-premium border border-paper-3 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-skynex-grad p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-sora font-bold text-sm">SkyNex AI</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] opacity-80 uppercase font-bold tracking-wider">Online Now</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-paper-2">
              {chat.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white border border-paper-3 text-ink-2 rounded-tl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-white border-t border-paper-3 flex gap-2">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-paper-2 border border-paper-3 rounded-xl px-4 py-2 text-sm outline-none focus:border-primary transition-colors"
              />
              <button type="submit" className="p-2 bg-primary text-white rounded-xl hover:bg-primary-light transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-2xl bg-skynex-grad text-white shadow-neon flex items-center justify-center relative group"
      >
        <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
        
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-skynex-grad opacity-30 blur-lg rounded-2xl animate-pulse -z-10" />
        
        {/* Sparkle Icon */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 bg-white p-1 rounded-lg shadow-lg">
            <Sparkles className="w-3 h-3 text-primary" />
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;
