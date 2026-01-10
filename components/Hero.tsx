'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Activity, PieChart, Users, ChevronRight, BarChart3, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[110vh] pt-32 pb-40 flex flex-col items-center overflow-hidden bg-brand-navy">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-brand-navy">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,91,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,91,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[128px] animate-pulse animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 backdrop-blur-md shadow-[0_0_20px_rgba(59,91,255,0.2)] mb-8 animate-fade-in-up hover:border-brand-blue/50 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
          </span>
          <span className="text-sm font-medium text-brand-gray tracking-wide">
            New: AI-Powered Predictive Analytics
          </span>
          <ChevronRight className="w-4 h-4 text-brand-cyan opacity-60" />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1] max-w-5xl text-white">
          Data Intelligence <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-cyan bg-clip-text text-transparent bg-[200%_auto] animate-gradient">
              Reimagined
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-50" />
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-brand-gray/80 mb-12 max-w-3xl leading-relaxed font-light">
          Unlock the true potential of your marketing stack. Ryze AI unifies fragmented data into <span className="text-white font-medium">revenue-generating insights</span> with enterprise-grade precision.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-24 w-full justify-center">
          <Link
            href="/#contact"
            className="group relative px-8 py-4 bg-brand-blue text-white rounded-full font-semibold text-lg shadow-[0_10px_40px_-10px_rgba(59,91,255,0.5)] hover:shadow-[0_20px_60px_-15px_rgba(59,91,255,0.6)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="/#how-it-works"
            className="group px-8 py-4 bg-white/5 text-white backdrop-blur-sm border border-white/10 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
            </span>
            Watch Demo
          </Link>
        </div>

        {/* 3D Dashboard Visualization */}
        <div className="relative w-full max-w-[1200px] mx-auto perspective-[2000px] group">
          {/* Glow Effect under the dashboard */}
          <div className="absolute -inset-10 bg-gradient-to-t from-brand-blue/30 to-brand-cyan/30 blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
          
          <div className="relative bg-[#0F172A] rounded-2xl border border-white/10 shadow-2xl overflow-hidden transform rotate-x-[15deg] translate-y-10 scale-95 group-hover:rotate-x-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-1000 ease-out will-change-transform">
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-20" />
            
            {/* Header */}
            <div className="h-12 bg-[#1E293B]/80 backdrop-blur-md border-b border-white/5 flex items-center px-6 justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm" />
              </div>
              <div className="flex items-center px-4 py-1 rounded-full bg-black/20 border border-white/5 text-xs text-brand-gray/60 font-mono">
                app.ryze.ai/dashboard
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="grid grid-cols-[240px_1fr] h-[700px] bg-[#0F172A] relative">
              {/* Sidebar */}
              <div className="border-r border-white/5 p-6 space-y-8 bg-[#0F172A]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center font-bold text-white">R</div>
                  <span className="font-semibold text-white tracking-wide">Ryze AI</span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-brand-gray/40 uppercase tracking-widest pl-3">Main</div>
                  {[
                    { name: 'Dashboard', icon: BarChart3, active: true },
                    { name: 'Analytics', icon: Activity, active: false },
                    { name: 'Audience', icon: Users, active: false },
                    { name: 'Campaigns', icon: PieChart, active: false },
                  ].map((item) => (
                    <div key={item.name} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors cursor-pointer ${item.active ? 'bg-brand-blue/10 text-brand-cyan' : 'text-brand-gray/60 hover:text-white hover:bg-white/5'}`}>
                      <item.icon size={18} />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main View */}
              <div className="p-8 overflow-hidden relative">
                <div className="flex justify-between items-end mb-10">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Enterprise Overview</h2>
                    <p className="text-brand-gray/60">Real-time performance across all global channels</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 transition-colors">Export</button>
                    <button className="px-4 py-2 rounded-lg bg-brand-blue text-sm text-white hover:bg-brand-blue/90 transition-colors shadow-lg shadow-brand-blue/20">Live View</button>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                  {[
                    { label: 'Total Revenue', value: '$2.4M', change: '+12.5%', trend: 'up' },
                    { label: 'Conversion Rate', value: '4.8%', change: '+3.2%', trend: 'up' },
                    { label: 'Active Users', value: '84.2K', change: '+18%', trend: 'up' },
                    { label: 'Avg. Session', value: '4m 32s', change: '-1.4%', trend: 'down' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#1E293B]/50 backdrop-blur-sm border border-white/5 p-5 rounded-xl hover:border-brand-blue/30 transition-colors group/card">
                      <div className="text-brand-gray/60 text-sm mb-2">{stat.label}</div>
                      <div className="flex items-end justify-between">
                        <div className="text-2xl font-bold text-white group-hover/card:text-brand-cyan transition-colors">{stat.value}</div>
                        <div className={`text-xs font-medium px-2 py-1 rounded-full ${stat.trend === 'up' ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                          {stat.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="bg-[#1E293B]/50 backdrop-blur-sm border border-white/5 p-6 rounded-xl h-[360px] relative overflow-hidden group/chart">
                  <div className="absolute inset-x-0 bottom-0 h-[250px] flex items-end justify-between px-4 gap-2 opacity-80">
                    {[35, 45, 30, 60, 75, 50, 65, 80, 55, 70, 90, 65, 85, 95, 80].map((h, i) => (
                      <div key={i} className="w-full bg-brand-blue/20 rounded-t-sm relative group-hover/chart:bg-brand-blue/30 transition-all duration-500 delay-[50ms]" style={{ height: `${h}%` }}>
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-blue to-brand-cyan opacity-80 rounded-t-sm transition-all duration-1000 ease-out" style={{ height: '100%' }} />
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-brand-cyan shadow-[0_0_10px_2px_rgba(46,242,255,0.5)] opacity-0 group-hover/chart:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between py-6 px-0 pointer-events-none">
                     {[1,2,3,4,5].map(line => (
                       <div key={line} className="w-full h-[1px] bg-white/5" />
                     ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Brand Strip */}
        <div className="mt-32 pt-16 border-t border-white/5 w-full">
           <p className="text-sm text-brand-gray/40 mb-8 uppercase tracking-widest font-semibold">Trusted by industry leaders</p>
           <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {['Acme Corp', 'GlobalTech', 'Nebula', 'Circle', 'FoxRun'].map((brand) => (
               <span key={brand} className="text-xl md:text-2xl font-bold text-white">{brand}</span>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
