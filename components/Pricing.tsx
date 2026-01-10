'use client';

import { Check, Zap, Cpu, Globe } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
	{
		name: 'Starter',
		price: '$49',
		period: '/mo',
		description: 'Essential AI insights for early-stage startups.',
		features: [
			'10,000 monthly active users',
			'Basic predictive modeling',
			'3 active campaigns',
			'Data retention: 3 months',
			'Email support',
			'1 team member',
		],
		cta: 'Get Started',
		icon: Zap,
		highlighted: false,
		color: 'from-blue-400 to-blue-600',
	},
	{
		name: 'Growth',
		price: '$149',
		period: '/mo',
		description: 'Advanced intelligence for scaling teams.',
		features: [
			'100,000 monthly active users',
			'Advanced behavioral cohorts',
			'Unlimited campaigns',
			'Data retention: 1 year',
			'Priority slack support',
			'5 team members',
			'API Access',
			'Custom Events',
		],
		cta: 'Start Free Trial',
		icon: Cpu,
		highlighted: true,
		color: 'from-brand-blue to-brand-cyan',
	},
	{
		name: 'Enterprise',
		price: 'Custom',
		period: '',
		description: 'Full-spectrum data sovereignty and dedicated support.',
		features: [
			'Unlimited MAUs',
			'Custom LLM fine-tuning',
			'Dedicated infrastructure',
			'Unlimited retention',
			'24/7 dedicated success manager',
			'SSO & Advanced Security',
			'On-premise deployment option',
			'Audit logs',
		],
		cta: 'Contact Sales',
		icon: Globe,
		highlighted: false,
		color: 'from-purple-400 to-purple-600',
	},
];

export default function Pricing() {
	const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

	return (
		<section className="py-32 bg-brand-navy relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[100px]" />
				<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[80px]" />
			</div>

			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-20">
					<h2 className="text-sm font-semibold text-brand-cyan uppercase tracking-widest mb-4">Pricing</h2>
					<h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
						Predictable pricing for <br />
						<span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
							unpredictable growth
						</span>
					</h3>
					<p className="text-xl text-brand-gray/80 mb-8">
						{' '}
						Invest in intelligence, not just software. Scale seamlessly as your data needs grow.
					</p>

					{/* Billing Toggle */}
					<div className="flex items-center justify-center gap-4">
						<span
							className={`text-sm font-medium transition-colors ${
								billingCycle === 'monthly' ? 'text-white' : 'text-brand-gray'
							}`}
						>
							Monthly
						</span>
						<button
							onClick={() =>
								setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')
							}
							className="w-14 h-7 bg-white/10 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cyan/50"
						>
							<div
								className={`absolute top-1 left-1 w-5 h-5 bg-brand-cyan rounded-full transition-transform duration-300 ${
									billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-0'
								}`}
							/>
						</button>
						<span
							className={`text-sm font-medium transition-colors ${
								billingCycle === 'yearly' ? 'text-white' : 'text-brand-gray'
							}`}
						>
							Yearly{' '}
							<span className="text-brand-cyan text-xs ml-1">(Save 20%)</span>
						</span>
					</div>
				</div>

				{/* Pricing Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
					{plans.map((plan, index) => (
						<div
							key={index}
							className={`relative rounded-3xl p-8 backdrop-blur-xl border transition-all duration-300 group
                ${plan.highlighted
								? 'bg-brand-blue/10 border-brand-blue/50 shadow-[0_0_40px_rgba(59,91,255,0.2)] hover:shadow-[0_0_60px_rgba(59,91,255,0.3)]'
								: 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
							}`}
						>
							{plan.highlighted && (
								<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
									Most Popular
								</div>
							)}

							<div className="mb-8">
								<div
									className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${plan.color} opacity-90`}
								>
									<plan.icon className="text-white w-6 h-6" />
								</div>
								<h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
								<p className="text-brand-gray/80 text-sm h-10">{plan.description}</p>
							</div>

							<div className="mb-8 p-6 bg-black/20 rounded-2xl border border-white/5">
								<div className="flex items-baseline gap-1">
									<span className="text-4xl font-bold text-white">
                                        {plan.price !== 'Custom' 
                                            ? (billingCycle === 'yearly' 
                                                ? `$${Math.floor(parseInt(plan.price.replace('$', '')) * 0.8)}` 
                                                : plan.price) 
                                            : plan.price}
                                    </span>
									{plan.price !== 'Custom' && (
										<span className="text-brand-gray text-sm">{plan.period}</span>
									)}
								</div>
								{billingCycle === 'yearly' && plan.price !== 'Custom' && (
									<p className="text-brand-cyan/80 text-xs mt-2">
										Billed annually
									</p>
								)}
							</div>

							<ul className="space-y-4 mb-10">
								{plan.features.map((feature, i) => (
									<li key={i} className="flex items-start text-brand-gray/90 text-sm">
										<Check
											className={`w-5 h-5 mr-3 shrink-0 ${
												plan.highlighted ? 'text-brand-cyan' : 'text-brand-blue'
											}`}
										/>
										<span>{feature}</span>
									</li>
								))}
							</ul>

							<button
								className={`w-full py-4 rounded-xl font-semibold transition-all duration-300
                  ${plan.highlighted
										? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg hover:shadow-brand-blue/50 hover:scale-[1.02]'
										: 'bg-white/10 text-white hover:bg-white/20 hover:scale-[1.02]'
									}
                `}
							>
								{plan.cta}
							</button>
						</div>
					))}
				</div>

				{/* Enterprise Banner */}
				<div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-brand-blue/10 to-brand-cyan/10 border border-white/10 rounded-2xl p-8 md:p-12 text-center backdrop-blur-md">
					<h4 className="text-2xl font-bold text-white mb-4">Need a custom solution?</h4>
					<p className="text-brand-gray mb-8">
						We offer tailored infrastructure and dedicated support models for high-volume enterprises.
					</p>
					<button className="px-8 py-3 bg-white text-brand-navy font-bold rounded-full hover:bg-gray-100 transition-colors">
						Contact Enterprise Sales
					</button>
				</div>
			</div>
		</section>
	);
}
