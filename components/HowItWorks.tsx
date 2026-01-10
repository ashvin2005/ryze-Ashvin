'use client';

import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Data',
    description: 'Seamlessly integrate your marketing platforms, CRM, and analytics tools in minutes.',
    features: ['Easy API integration', 'Multiple data sources', 'Secure connection'],
  },
  {
    number: '02',
    title: 'AI Analysis',
    description: 'Our AI engine analyzes your data, identifies patterns, and generates actionable insights.',
    features: ['Automated analysis', 'Pattern recognition', 'Smart recommendations'],
  },
  {
    number: '03',
    title: 'Optimize & Grow',
    description: 'Implement AI-driven strategies and watch your marketing performance soar.',
    features: ['Real-time optimization', 'Performance tracking', 'Continuous improvement'],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ryze AI Works
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Get started in three simple steps and transform your marketing in minutes
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12`}
            >
              {/* Step Content */}
              <div className="flex-1 space-y-4">
                <div className="text-6xl md:text-7xl font-bold text-purple-100">{step.number}</div>
                <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                <ul className="space-y-3">
                  {step.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step Visual */}
              <div className="flex-1 w-full">
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl overflow-hidden shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white opacity-30">{step.number}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Start Your Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
