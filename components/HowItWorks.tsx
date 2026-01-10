'use client';

import { Check, Database, Cpu, Rocket } from 'lucide-react';

const steps = [
	{
		icon: Database,
		title: 'Ingest',
		subtitle: 'Unified Data Layer',
		description:
			'We connect directly to your data warehouse (Snowflake, BigQuery) or CRM/Ad platforms via native APIs. No manual CSV uploads required.',
		features: ['Zero-copy integration', 'PII Encryption', 'Historical backfill'],
		color: 'text-blue-400',
		bg: 'bg-blue-400/10',
		border: 'border-blue-400/20',
	},
	{
		icon: Cpu,
		title: 'Process',
		subtitle: 'Continuous Training',
		description:
			'Our models train on your unique data graph, identifying high-value cohorts and conversion signals that generic models miss.',
		features: ['Custom model weights', 'Anomaly detection', 'Identity resolution'],
		color: 'text-brand-cyan',
		bg: 'bg-brand-cyan/10',
		border: 'border-brand-cyan/20',
	},
	{
		icon: Rocket,
		title: 'Execute',
		subtitle: 'Autonomous Action',
		description:
			'Ryze pushes optimization decisions back to your ad platforms in real-time, adjusting bids and budgets to maximize ROAS.',
		features: ['Bid shading', 'Budget allocation', 'Creative rotation'],
		color: 'text-purple-400',
		bg: 'bg-purple-400/10',
		border: 'border-purple-400/20',
	},
];

export default function HowItWorks() {
	return (
		<section id="how-it-works" className="py-32 bg-brand-navy relative">
			{/* Connecting Line */}
			<div className="hidden lg:block absolute top-[50%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent -translate-y-1/2" />

			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-20">
					<h2 className="text-sm font-semibold text-brand-cyan uppercase tracking-widest mb-4">
						Workflow
					</h2>
					<h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
						From raw data to{' '}
						<span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
							revenue
						</span>
					</h3>
					<p className="text-xl text-brand-gray/80">
						A closed-loop system that gets smarter with every interaction.
					</p>
				</div>

				{/* Steps Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{steps.map((step, index) => (
						<div key={index} className="relative group">
							{/* Step Card */}
							<div
								className={`h-full p-8 rounded-3xl bg-[#111A29] border ${step.border} backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]`}
							>
								{/* Icon */}
								<div
									className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}
								>
									<step.icon className={`w-8 h-8 ${step.color}`} />
								</div>

								{/* Content */}
								<div className="mb-2 text-sm font-mono text-brand-gray/60 uppercase tracking-widest">
									0{index + 1} {'//'} {step.title}
								</div>
								<h4 className="text-2xl font-bold text-white mb-4">
									{step.subtitle}
								</h4>
								<p className="text-brand-gray/80 leading-relaxed mb-8 min-h-[80px]">
									{step.description}
								</p>

								{/* Feature List */}
								<ul className="space-y-3 pt-6 border-t border-white/5">
									{step.features.map((feature, i) => (
										<li
											key={i}
											className="flex items-center text-sm text-brand-gray"
										>
											<Check className={`w-4 h-4 mr-3 ${step.color}`} />
											{feature}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
