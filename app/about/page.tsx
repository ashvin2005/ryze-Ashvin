import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Zap, Award, BarChart, Server } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-navy text-white overflow-hidden selection:bg-brand-blue selection:text-white">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative py-24 px-6 overflow-hidden">
           {/* Background Decoration */}
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
           
           <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Pioneering the Future of <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-blue bg-clip-text text-transparent animate-gradient bg-200%">
                Autonomous Marketing
              </span>
            </h1>
            <p className="text-xl text-brand-gray/80 max-w-2xl mx-auto leading-relaxed font-light">
              We're engineers, data scientists, and marketers building the intelligence layer that will power the next generation of growth.
            </p>
          </div>
        </section>

        {/* Our Story Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-sm font-semibold text-brand-cyan uppercase tracking-widest">Our Story</h2>
                <h3 className="text-4xl font-bold leading-tight">From data saturation to <br />clarity.</h3>
                <div className="space-y-6 text-brand-gray/80 text-lg leading-relaxed">
                  <p>
                    In 2022, we noticed a critical flaw in the modern marketing stack: <strong>fragmentation</strong>. Teams were drowning in dashboards, yet starving for truth. The available tools told you <em>what</em> happened, but never <em>why</em>.
                  </p>
                  <p>
                    Ryze AI was architected to solve this infrastructure problem. We didn't just want to build another analytics tool; we wanted to build a central nervous system for growth.
                  </p>
                  <p>
                    By training proprietary models on over 800M+ data points, we've created a platform that doesn't just report—it predicts, suggests, and empowers human creativity by handling the computational heavy lifting.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-cyan rounded-2xl blur-lg opacity-30 transform rotate-3" />
                <div className="relative bg-[#1a2333] border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
                   {/* Abstract Tech Illustration placeholder */}
                   <div className="aspect-[4/3] w-full rounded-lg bg-black/40 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-blue/20 to-transparent" />
                      <div className="grid grid-cols-6 gap-2 w-full px-8 animate-pulse text-brand-blue/40">
                         {[...Array(24)].map((_, i) => (
                           <div key={i} className="h-12 rounded bg-current opacity-20" />
                         ))}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-[#0B1220] p-6 rounded-2xl border border-brand-blue/30 shadow-[0_0_50px_rgba(59,91,255,0.3)] hover:scale-105 transition-transform duration-500">
                          <BarChart className="w-12 h-12 text-brand-cyan mb-2" />
                          <div className="h-2 w-20 bg-brand-gray/20 rounded mb-1" />
                          <div className="h-2 w-12 bg-brand-gray/20 rounded" />
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-y border-white/5 bg-white/5 backdrop-blur-sm">
           <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                 {[
                   { label: 'Data Points Processed', value: '800M+' },
                   { label: 'Predictions Served', value: '12k/sec' },
                   { label: 'Enterprise Clients', value: '500+' },
                   { label: 'Uptime', value: '99.99%' },
                 ].map((stat, i) => (
                   <div key={i}>
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-brand-gray font-medium">{stat.label}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Values Section */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">Build for impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: 'Obsessive Utility', desc: 'We don’t build shelfware. If it doesn\'t drive revenue, it doesn\'t ship.', color: 'text-brand-blue' },
                { icon: Server, title: 'Data Sovereignty', desc: 'Your data is your IP. We architect for privacy and security first.', color: 'text-purple-400' },
                { icon: Zap, title: 'Speed as Capability', desc: 'In real-time bidding and reaction, milliseconds equate to millions.', color: 'text-yellow-400' },
                { icon: Target, title: 'Radical Truth', desc: 'Our algorithms are unbiased. We tell you what the data says, not what you want to hear.', color: 'text-brand-cyan' },
              ].map((value, i) => (
                <div key={i} className="p-8 rounded-2xl bg-[#111A29] border border-white/5 hover:border-brand-blue/40 transition-colors group">
                   <value.icon className={`w-10 h-10 mb-6 ${value.color} group-hover:scale-110 transition-transform`} />
                   <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                   <p className="text-brand-gray/70 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
