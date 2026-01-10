import Header from '@/components/Header';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Pricing />
        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Can I switch plans at any time?
                  </h3>
                  <p className="text-gray-600">
                    Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-gray-600">
                    We accept all major credit cards (Visa, MasterCard, American Express) and also support PayPal and wire transfers for enterprise customers.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Is there a long-term contract?
                  </h3>
                  <p className="text-gray-600">
                    No, all our plans are month-to-month. You can cancel at any time with no penalties or hidden fees.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Do you offer discounts for annual billing?
                  </h3>
                  <p className="text-gray-600">
                    Yes! Save 20% when you choose annual billing. Contact our sales team for more details.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    What kind of support do you provide?
                  </h3>
                  <p className="text-gray-600">
                    Starter plans include email support with 24-hour response time. Professional plans get priority support, and Enterprise customers receive dedicated support with a dedicated success manager.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
