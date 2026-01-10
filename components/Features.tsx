'use client';

import { Brain, TrendingUp, Target, Zap, Shield, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analytics',
    description: 'Advanced machine learning algorithms analyze your marketing data to uncover hidden patterns and opportunities.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Insights',
    description: 'Forecast trends and customer behavior with AI-driven predictions to stay ahead of the competition.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Target,
    title: 'Smart Targeting',
    description: 'Identify and reach your ideal audience with precision targeting powered by AI segmentation.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Zap,
    title: 'Campaign Automation',
    description: 'Automate your marketing workflows and optimize campaigns in real-time for maximum ROI.',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Enterprise-grade security ensures your marketing data is protected with end-to-end encryption.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Reporting',
    description: 'Get instant access to comprehensive reports and dashboards with actionable insights.',
    color: 'from-indigo-500 to-indigo-600',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to transform your marketing strategy with AI-powered intelligence
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Join over 5,000+ companies already using Ryze AI
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company, i) => (
              <div key={i} className="text-2xl font-bold text-gray-400">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
