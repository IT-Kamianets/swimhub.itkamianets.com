import { TopicPageData } from './swim-guide.types';

export const healthBenefits: TopicPageData = {
	slug: 'health-benefits',
	title: 'Health Benefits',
	intro:
		'Swimming supports the body and mind with gentle, full-body movement that can fit many fitness levels.',
	icon: 'favorite',
	benefits: [
		{ title: 'Improves heart health', description: 'Builds aerobic fitness and supports circulation.', icon: 'monitor_heart' },
		{ title: 'Builds muscles', description: 'Uses arms, legs, core, shoulders, and back.', icon: 'fitness_center' },
		{ title: 'Helps breathing', description: 'Teaches controlled breathing and rhythm.', icon: 'air' },
		{ title: 'Low impact on joints', description: 'Water supports the body while you move.', icon: 'accessibility_new' },
		{ title: 'Reduces stress', description: 'Steady movement and breathing can feel calming.', icon: 'spa' },
		{ title: 'Burns calories', description: 'Can be an effective full-body workout.', icon: 'local_fire_department' },
		{ title: 'Improves flexibility', description: 'Encourages long, smooth movement patterns.', icon: 'self_improvement' },
		{ title: 'Supports coordination', description: 'Combines breathing, timing, kicking, and pulling.', icon: 'hub' },
	],
};
