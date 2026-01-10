'use client';

import Link from 'next/link';
import { ArrowLeft, Check, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const plans = [
	{
		name: 'Growth',
		price: '$499',
		period: '/mo',
		description: 'Perfect for scaling startups needing data clarity.',
		features: [
			'Unify up to 5 data sources',
			'Predictive CLV (Basic Model)',
			'Weekly automated reports',
			'3 Team Seats',
			'Email Support',
		],
		cta: 'Start Free Trial',
		popular: false,
	},
	{
		name: 'Scale',
		price: '$1299',
		period: '/mo',
		description: 'For data-driven teams focused on revenue acceleration.',
		features: [
			'Unify unlimited data sources',
			'Advanced Predictive Models',
			'Real-time Bid Automation',
			'10 Team Seats',
			'Dedicated Account Manager',
			'API Access',
		],
		cta: 'Get Started',
		popular: true,
	},
	{
		name: 'Enterprise',
		price: 'Custom',
		period: '',
		description: 'Full-spectrum intelligence for global organizations.',
		features: [
			'Custom Model Training',
			'On-premise deployment option',
			'SSO & Advanced Security',
			'Unlimited Seats',
			'24/7 Priority Support',
			'SLA Guarantees',
		],
		cta: 'Contact Sales',
		popular: false,
	},
];

const faqs = [
	{
		question: 'How does the free trial work?',
		answer:
			'You get full access to the Growth plan for 14 days. Connect your data sources and see actionable insights within hours. No credit card required.',
	},
	{
		question: 'Can I upgrade or downgrade anytime?',
		answer:
			'Yes, you can adjust your plan directly from the billing dashboard. Changes take effect at the start of the next billing cycle.',
	},
	{
		question: 'Is my data secure?',
		answer:
			'Absolutely. We are SOC2 Type II compliant and use bank-grade AES-256 encryption. Your data is processed in isolated containers and never shared.',
	},
	{
		question: 'Do you offer custom integrations?',
		answer:
			'Yes, our Enterprise plan includes custom engineering support to integrate proprietary data sources or legacy systems.',
	},
];

export default function Pricing() {
	const [isAnnual, setIsAnnual] = useState(true);

	return (
		<div className="min-h-screen bg-brand-navy text-white font-sans">
			<Header />

			<main className="pt-32 pb-24">
				{/* Header */}
				<div className="container mx-auto px-6 text-center mb-20">
					<h1 className="text-4xl md:text-6xl font-bold mb-6">
						Simple, Transparent <br />
						<span className="text-brand-cyan">Pricing</span>
					</h1>
					<p className="text-xl text-brand-gray/60 max-w-2xl mx-auto mb-12">
						Choose the plan that fits your growth stage. No hidden fees.
					</p>

					{/* Toggle */}
					<div className="inline-flex items-center p-1 bg-white/5 rounded-full border border-white/10 mb-8">
						<button
							onClick={() => setIsAnnual(false)}
							className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
								!isAnnual
									? 'bg-brand-blue text-white shadow-lg'
									: 'text-brand-gray/60 hover:text-white'
							}`}
						>
							Monthly
						</button>
						<button
							onClick={() => setIsAnnual(true)}
							className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
								isAnnual
									? 'bg-brand-blue text-white shadow-lg'
									: 'text-brand-gray/60 hover:text-white'
							}`}
						>
							Annual{' '}
							<span className="text-xs text-brand-cyan ml-1">(-20%)</span>
						</button>
					</div>
				</div>

				{/* Pricing Grid */}
				<div className="container mx-auto px-6 mb-32">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
						{plans.map((plan, index) => (
							<div
								key={index}
								className={`relative rounded-3xl p-8 border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${
									plan.popular
										? 'bg-[#111A29] border-brand-blue/50 shadow-[0_0_50px_rgba(59,91,255,0.15)] z-10 scale-105'
										: 'bg-[#0F172A]/50 border-white/10 hover:border-white/20'
								}`}
							>
								{plan.popular && (
									<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-cyan text-[#0B1220] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
										Most Popular
									</div>
								)}

								<h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
								<p className="text-brand-gray/60 text-sm mb-6 min-h-[40px]">
									{plan.description}
								</p>

								<div className="flex items-baseline mb-8">
									<span className="text-4xl font-bold">{plan.price}</span>
									<span className="text-brand-gray/60 ml-2">
										{plan.period}
									</span>
								</div>

								<Link
									href="/#contact"
									className={`block w-full py-3 rounded-xl text-center font-semibold mb-8 transition-all ${
										plan.popular
											? 'bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg shadow-brand-blue/25'
											: 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
									}`}
								>
									{plan.cta}
								</Link>

								<div className="space-y-4">
									<p className="text-xs font-semibold text-brand-gray/40 uppercase tracking-widest">
										Includes
									</p>
									{plan.features.map((feature, i) => (
										<div
											key={i}
											className="flex items-start text-sm text-brand-gray/80"
										>
											<Check className="w-4 h-4 text-brand-cyan mr-3 flex-shrink-0 mt-0.5" />
											{feature}
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Enterprise Banner */}
				<div className="container mx-auto px-6 mb-32">
					<div className="bg-gradient-to-r from-brand-blue/20 to-brand-cyan/10 rounded-3xl p-8 md:p-12 border border-brand-blue/20 flex flex-col md:flex-row items-center justify-between gap-8">
						<div>
							<h3 className="text-2xl font-bold mb-2">Need a custom solution?</h3>
							<p className="text-brand-gray/80 max-w-xl">
								We partner with large organizations to build bespoke AI models
								trained on your proprietary data infrastructure.
							</p>
						</div>
						<Link
							href="/#contact"
							className="px-8 py-3 bg-white text-brand-navy font-bold rounded-lg hover:bg-brand-cyan hover:text-brand-navy transition-colors whitespace-nowrap"
						>
							Contact Enterprise Sales
						</Link>
					</div>
				</div>

				{/* FAQ */}
				<div className="container mx-auto px-6 max-w-3xl">
					<h2 className="text-3xl font-bold mb-12 text-center">
						Frequently Asked Questions
					</h2>
					<div className="space-y-6">
						{faqs.map((faq, index) => (
							<div
								key={index}
								className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors"
							>
								<h4 className="flex items-center text-lg font-semibold mb-3">
									<HelpCircle className="w-5 h-5 text-brand-gray/40 mr-3" />
									{faq.question}
								</h4>
								<p className="text-brand-gray/60 leading-relaxed pl-8">
									{faq.answer}
								</p>
							</div>
						))}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
