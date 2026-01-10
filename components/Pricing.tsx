'use client';

import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for small businesses getting started with AI marketing',
    features: [
      'Up to 10,000 monthly visitors',
      'Basic AI analytics',
      '5 marketing campaigns',
      'Email support',
      'Basic reporting',
      '1 user account',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    description: 'Ideal for growing businesses that need advanced features',
    features: [
      'Up to 100,000 monthly visitors',
      'Advanced AI analytics',
      'Unlimited campaigns',
      'Priority support',
      'Custom reporting',
      '5 user accounts',
      'API access',
      'A/B testing',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with custom requirements',
    features: [
      'Unlimited monthly visitors',
      'Enterprise AI analytics',
      'Unlimited everything',
      'Dedicated support',
      'Custom integrations',
      'Unlimited users',
      'Advanced API access',
      'White-label options',
      'Custom training',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple,{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl scale-105 border-4 border-white'
                  : 'bg-white text-gray-900 border border-gray-200'
              } transition-all hover:shadow-xl`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end justify-center mb-2">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-xl ml-2 ${plan.highlighted ? 'text-purple-100' : 'text-gray-500'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-green-300' : 'text-green-500'}`} />
                    <span className={plan.highlighted ? 'text-purple-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-purple-50'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Have questions? Check out our <a href="#faq" className="text-purple-600 font-semibold hover:underline">FAQ</a> or{' '}
            <a href="#contact" className="text-purple-600 font-semibold hover:underline">contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
}
