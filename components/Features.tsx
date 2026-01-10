'use client';

import Link from 'next/link';
import { Brain, TrendingUp, Zap, Shield, ArrowUpRight } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-32 bg-brand-navy relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Architecture for <br />
              <span className="text-brand-gray/50">Exponential Scale</span>
            </h2>
            <p className="text-lg text-brand-gray/80 font-light">
              We&apos;ve replaced the traditional ad-hoc marketing stack with a cohesive intelligence layer. Every component is designed to compound the value of your data.
            </p>
          </div>
          <Link 
            href="/#features"
            className="group flex items-center space-x-2 text-brand-cyan font-semibold border-b border-transparent hover:border-brand-cyan transition-all pb-1 uppercase tracking-widest text-sm"
          >
            <span>Explore Platform</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 min-h-[800px] md:min-h-[600px]">
          
          {/* Card 1: Core Intelligence (Large) */}
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-[#0F172A] border border-white/5 p-8 flex flex-col justify-between transition-all duration-500 hover:border-brand-blue/30 hover:shadow-[0_0_50px_rgba(59,91,255,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 mb-8">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-300 group-hover:bg-brand-blue/20">
                <Brain className="w-7 h-7 text-brand-cyan" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Neural Data Mapping</h3>
              <p className="text-brand-gray/80 max-w-sm text-lg leading-relaxed">
                Connect disparate data sources into a unified entity graph. Our models automatically identify and merge customer identities across channels without manual rules.
              </p>
            </div>

            {/* Abstract dynamic visualization */}
            <div className="relative h-48 rounded-2xl bg-[#0B1220] border border-white/5 overflow-hidden group-hover:border-white/10 transition-colors">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,91,255,0.2),transparent_70%)]" />
               {/* Animated nodes */}
               {[
                 { top: '28%', left: '15%', delay: '0s' },
                 { top: '65%', left: '35%', delay: '0.5s' },
                 { top: '35%', left: '75%', delay: '1s' },
                 { top: '78%', left: '55%', delay: '1.5s' },
                 { top: '52%', left: '85%', delay: '2s' },
               ].map((node, i) => (
                  <div key={i} className="absolute w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(46,242,255,0.5)] animate-pulse" 
                       style={{ 
                         top: node.top, 
                         left: node.left,
                         animationDelay: node.delay
                       }} 
                  />
               ))}
               {/* Connection lines (SVG) */}
               <svg className="absolute inset-0 w-full h-full opacity-30 stroke-brand-blue/50" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M10 50 Q 50 10 90 50 T 40 80" fill="none" strokeWidth="0.5" className="animate-[dash_10s_linear_infinite]" strokeDasharray="5,5" />
                 <path d="M20 80 Q 50 50 80 20" fill="none" strokeWidth="0.5" strokeDasharray="2,2" />
               </svg>
            </div>
          </div>

          {/* Card 2: Predictive (Tall) */}
          <div className="md:col-span-1 md:row-span-2 group relative rounded-3xl bg-[#111A29] border border-white/5 p-6 flex flex-col hover:border-purple-500/50 transition-colors duration-300">
             <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
               <TrendingUp className="w-6 h-6 text-purple-400" />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Predictive CLV</h3>
             <p className="text-sm text-brand-gray/70 mb-8 leading-relaxed">
               Forecast future value with 94% accuracy. Know who will buy before they do.
             </p>
             <div className="mt-auto relative h-40">
                {/* Bar Chart Bars */}
                <div className="flex items-end justify-between h-full gap-2 px-2 pb-4">
                  {[30, 45, 35, 60, 50, 85].map((h, i) => (
                    <div key={i} className="w-full bg-white/5 rounded-t-sm relative group-hover:bg-purple-500/20 transition-colors duration-500">
                      <div className="absolute bottom-0 w-full bg-purple-500 rounded-t-sm transition-all duration-700 ease-out" 
                           style={{ height: `${h}%`, opacity: 0.6 + (i * 0.1) }} />
                    </div>
                  ))}
                </div>
             </div>
          </div>

          {/* Card 3: Automation (Wide) */}
          <div className="md:col-span-1 md:row-span-1 group rounded-3xl bg-[#0F172A] border border-white/5 p-6 hover:bg-[#152035] transition-colors">
            <div className="flex justify-between items-start mb-4">
               <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                 <Zap className="w-5 h-5 text-yellow-400" />
               </div>
               <span className="text-xs font-mono text-brand-gray/50 bg-white/5 px-2 py-1 rounded">v2.4</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Auto-Pilot</h3>
            <p className="text-xs text-brand-gray/60">Autonomous bid adjustments 24/7.</p>
          </div>

          {/* Card 4: Security (Wide) */}
          <div className="md:col-span-1 md:row-span-1 group rounded-3xl bg-[#0F172A] border border-white/5 p-6 hover:bg-[#152035] transition-colors">
             <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
               <Shield className="w-5 h-5 text-green-400" />
             </div>
             <h3 className="text-lg font-bold text-white mb-1">SOC2 Certified</h3>
             <p className="text-xs text-brand-gray/60">Enterprise-grade encryption standard.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
