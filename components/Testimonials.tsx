'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp Inc.',
    image: '👩‍💼',
    rating: 5,
    text: 'Ryze AI transformed our marketing strategy completely. We saw a 300% increase in ROI within the first quarter. The AI insights are incredibly accurate and actionable.',
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupX',
    image: '👨‍💻',
    rating: 5,
    text: 'As a startup, we needed data-driven decisions fast. Ryze AI delivered beyond expectations. The automation features saved us countless hours and thousands in marketing spend.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Growth Manager',
    company: 'E-commerce Plus',
    image: '👩‍🎨',
    rating: 5,
    text: 'The predictive analytics feature is a game-changer. We can now anticipate customer behavior and adjust our campaigns proactively. Highly recommend!',
  },
  {
    name: 'David Kim',
    role: 'CMO',
    company: 'Global Solutions',
    image: '👨‍💼',
    rating: 5,
    text: 'Ryze AI integrates seamlessly with all our tools. The real-time reporting gives us the agility we need in today\'s fast-paced market. Outstanding platform!',
  },
  {
    name: 'Lisa Anderson',
    role: 'Digital Strategist',
    company: 'Creative Agency',
    image: '👩‍🔬',
    rating: 5,
    text: 'Our clients love the detailed insights we can now provide thanks to Ryze AI. It\'s elevated our service offering and client satisfaction significantly.',
  },
  {
    name: 'James Wilson',
    role: 'VP of Marketing',
    company: 'Enterprise Corp',
    image: '👨‍🏫',
    rating: 5,
    text: 'The security and scalability of Ryze AI made it perfect for our enterprise needs. The support team is exceptional, and the platform just works.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Marketing Teams
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers have to say about their experience with Ryze AI
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              5,000+
            </div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              300%
            </div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-600">Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-gray-600">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
