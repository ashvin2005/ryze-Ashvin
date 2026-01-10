import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050A14] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-tr from-brand-blue to-brand-cyan rounded-lg flex items-center justify-center shadow-lg shadow-brand-blue/20">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Ryze AI</span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              We help forward-thinking companies scale their marketing operations with intelligent automation and predictive analytics.
            </p>
            <div className="flex space-x-6 pt-2">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110 duration-200">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-brand-blue transition-colors inline-flex items-center group">
                  Features
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-brand-blue transition-colors inline-flex items-center group">
                  Pricing
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-400 hover:text-brand-blue transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                    Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Careers <span className="text-xs bg-brand-blue/20 text-brand-blue px-2 py-0.5 rounded-full ml-2">Hiring</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-brand-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal/Newsletter */}
          <div>
             <h3 className="text-white font-semibold mb-6">Stay Updated</h3>
             <p className="text-gray-400 text-sm mb-4">Latest AI insights delivered to your inbox.</p>
             <div className="relative">
                 <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue transition-colors placeholder-gray-500"
                 />
                 <button className="absolute right-2 top-1.5 p-1.5 bg-brand-blue rounded-md text-white hover:bg-brand-blue/90 transition-colors">
                     <ArrowUpRight className="w-4 h-4" />
                 </button>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} Ryze AI Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
