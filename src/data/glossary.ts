import { TopicPageData } from './swim-guide.types';

export const glossary: TopicPageData = {
	slug: 'glossary',
	title: 'Glossary',
	intro: 'A simple dictionary of common swimming terms for beginners.',
	icon: 'menu_book',
	glossary: [
		{ term: 'Lap', explanation: 'One length of the pool.', category: 'Pool' },
		{ term: 'Lane', explanation: 'A marked swimming path in the pool.', category: 'Pool' },
		{ term: 'Stroke', explanation: 'A swimming style or movement pattern.', category: 'Technique' },
		{ term: 'Split time', explanation: 'The time for one part of a swim.', category: 'Training' },
		{ term: 'Kickboard', explanation: 'A floating board used for kick practice.', category: 'Equipment' },
		{ term: 'Drill', explanation: 'A focused exercise for improving one skill.', category: 'Training' },
		{ term: 'Relay', explanation: 'A team race where swimmers take turns.', category: 'Competition' },
		{ term: 'Turn', explanation: 'Changing direction at the wall.', category: 'Technique' },
		{ term: 'Open water', explanation: 'Swimming in lakes, rivers, or the sea.', category: 'Pool' },
		{ term: 'Medley', explanation: 'A race or set using multiple strokes.', category: 'Competition' },
	],
};
