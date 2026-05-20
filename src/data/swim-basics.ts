import { TopicPageData } from './swim-guide.types';

export const swimBasics: TopicPageData = {
	slug: 'swim-basics',
	title: 'Swim Basics',
	intro:
		'Start with the essentials: what swimming is, why it helps, what to bring, and how to feel comfortable in the pool.',
	icon: 'waves',
	sections: [
		{
			title: 'What swimming is',
			text: 'Swimming is moving through water using coordinated breathing, body position, arm pulls, and kicks.',
			icon: 'pool',
		},
		{
			title: 'Why swimming is useful',
			text: 'It trains the whole body, builds confidence in water, and supports fitness without heavy impact on joints.',
			icon: 'favorite',
		},
		{
			title: 'Pool etiquette',
			text: 'Shower before entering, follow lane direction, keep space between swimmers, and listen to pool staff.',
			icon: 'rule',
		},
		{
			title: 'Basic breathing tips',
			text: 'Exhale slowly into the water, turn or lift only when needed, and keep breathing calm instead of rushed.',
			icon: 'air',
		},
	],
	equipment: [
		{ title: 'Swim cap', description: 'Keeps hair controlled and helps the pool stay clean.', icon: 'sports' },
		{ title: 'Goggles', description: 'Protect eyes and make it easier to see underwater.', icon: 'visibility' },
		{ title: 'Swimsuit', description: 'Choose a comfortable suit made for movement.', icon: 'checkroom' },
		{ title: 'Towel', description: 'Bring a dry towel for after training.', icon: 'dry_cleaning' },
		{ title: 'Flip-flops', description: 'Useful for walking safely around wet pool areas.', icon: 'footprint' },
		{ title: 'Kickboard', description: 'Helps beginners practice kicks and body position.', icon: 'view_week' },
	],
	mistakes: [
		{
			title: 'Holding breath too long',
			description: 'Try steady exhaling instead of waiting until you feel out of air.',
			icon: 'warning',
		},
		{
			title: 'Swimming too fast',
			description: 'Begin slowly so technique and breathing stay controlled.',
			icon: 'speed',
		},
		{
			title: 'Poor body position',
			description: 'Keep the body long and relaxed instead of letting the hips sink.',
			icon: 'straighten',
		},
		{
			title: 'Looking forward',
			description: 'Looking down often helps the body stay flatter in the water.',
			icon: 'visibility_off',
		},
		{
			title: 'Ignoring warm-up',
			description: 'Easy movement first helps your body prepare for training.',
			icon: 'local_fire_department',
		},
	],
};
