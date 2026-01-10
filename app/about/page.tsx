import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Zap, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Ryze AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're on a mission to democratize AI-powered marketing intelligence, 
                making advanced analytics accessible to businesses of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-6">
                  Founded in 2022, Ryze AI was born from a simple observation: marketing teams 
                  were drowning in data but starving for insights. Our founders, seasoned marketing 
                  professionals and AI researchers, saw an opportunity to bridge this gap.
                </p>
                <p className="mb-6">
                  We built Ryze AI to transform how businesses understand and leverage their 
                  marketing data. By combining cutting-edge artificial intelligence with intuitive 
                  design, we've created a platform that turns complex data into clear, actionable strategies.
                </p>
                <p>
                  Today, we serve over 5,000 companies worldwide, from innovative startups to 
                  Fortune 500 enterprises, helping them make smarter marketing decisions faster.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer First</h3>
                <p className="text-gray-600">
                  Every decision we make starts with our customers' needs and success.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously push the boundaries of what's possible with AI and marketing.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Speed</h3>
                <p className="text-gray-600">
                  We move fast, iterate quickly, and deliver value to our customers rapidly.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, from code to customer support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 mb-12">
                We're a diverse team of engineers, designers, and marketing experts 
                passionate about transforming the marketing industry.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['CEO', 'CTO', 'Head of Product', 'Head of Design', 'VP Engineering', 'VP Marketing', 'Head of Sales', 'Head of Support'].map((role, i) => (
                  <div key={i} className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple-400 to-blue-400"></div>
                    <div className="font-semibold text-gray-900">Team Member</div>
                    <div className="text-sm text-gray-600">{role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using Ryze AI to make smarter marketing decisions.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Get Started Free
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
