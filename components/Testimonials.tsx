'use client';

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
	{
		name: 'Sarah Johnson',
		role: 'Marketing Director',
		company: 'TechCorp Inc.',
		content:
			'Ryze AI transformed our marketing strategy completely. We saw a 300% increase in ROI within the first quarter. The AI insights are incredibly accurate and actionable.',
		image:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
	},
	{
		name: 'Michael Chen',
		role: 'CEO',
		company: 'StartupX',
		content:
			'As a startup, we needed data-driven decisions fast. Ryze AI delivered beyond expectations. The automation features saved us countless hours and thousands in marketing spend.',
		image:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
	},
	{
		name: 'Emily Rodriguez',
		role: 'Growth Manager',
		company: 'E-commerce Plus',
		content:
			'The predictive analytics feature is a game-changer. We can now anticipate customer behavior and adjust our campaigns proactively. Highly recommend!',
		image:
			'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces',
	},
];

export default function Testimonials() {
	return (
		<section className="relative py-24 bg-background overflow-hidden">
			{/* Background Gradients */}
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
			<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

			<div className="container mx-auto px-6 relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-20">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
					>
						<Star className="w-4 h-4 text-brand-cyan" fill="currentColor" />
						<span className="text-sm font-medium text-brand-cyan">
							Trusted by Leaders
						</span>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6"
					>
						Driving Growth for Top Brands
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-xl text-gray-400"
					>
						Join hundreds of data-driven companies using Ryze AI to scale their
						impact.
					</motion.p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 + 0.3 }}
							className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-blue/50 transition-colors"
						>
							<div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl group-hover:bg-brand-blue/20 transition-all opacity-0 group-hover:opacity-100" />

							<Quote className="w-10 h-10 text-brand-blue/20 mb-6" />

							<p className="text-gray-300 leading-relaxed mb-8 relative z-10">
								"{testimonial.content}"
							</p>

							<div className="flex items-center space-x-4">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-12 h-12 rounded-full border-2 border-white/10 object-cover"
								/>
								<div>
									<h4 className="text-white font-semibold">
										{testimonial.name}
									</h4>
									<p className="text-sm text-gray-400">
										{testimonial.role}, {testimonial.company}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
