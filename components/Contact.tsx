'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              <span className="text-sm font-medium text-brand-blue">Contact Sales</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Accelerate Your <br />
              <span className="bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text text-transparent">
                Growth Engine?
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-lg">
              Book a personalized demo with our team and see exactly how Ryze AI can scale your marketing operations.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group cursor-pointer hover:bg-white/5 p-4 rounded-xl transition-all -ml-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-brand-blue/50 group-hover:text-brand-blue transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1">Email Us</h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors">hello@get-ryze.ai</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group cursor-pointer hover:bg-white/5 p-4 rounded-xl transition-all -ml-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-brand-blue/50 group-hover:text-brand-blue transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-1">Headquarters</h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 rounded-2xl blur-xl" />
            
            <div className="relative bg-[#0B1221] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Full Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition placeholder-gray-600"
                        placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Work Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition placeholder-gray-600"
                        placeholder="john@company.com"
                        />
                    </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition placeholder-gray-600"
                    placeholder="TechCorp Inc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white h-32 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition placeholder-gray-600 resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-brand-blue/30 transition-all flex items-center justify-center group"
                >
                  <span className="mr-2">Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
