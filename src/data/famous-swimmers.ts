import { TopicPageData } from './swim-guide.types';

export const famousSwimmers: TopicPageData = {
	slug: 'famous-swimmers',
	title: 'Famous Swimmers',
	intro:
		'Meet elite swimmers whose careers show what technique, training, and consistency can achieve.',
	icon: 'emoji_events',
	swimmers: [
		{
			name: 'Michael Phelps',
			country: 'United States',
			events: 'Butterfly, freestyle, medley',
			biography: 'One of the most successful Olympic athletes in history.',
			achievements: '28 Olympic medals, including 23 gold.',
			fact: 'He competed at five Olympic Games.',
		},
		{
			name: 'Katie Ledecky',
			country: 'United States',
			events: 'Freestyle distance events',
			biography: 'Known for dominant performances in middle and long-distance freestyle.',
			achievements: 'Multiple Olympic and world championship gold medals.',
			fact: 'She became an Olympic champion as a teenager.',
		},
		{
			name: 'Caeleb Dressel',
			country: 'United States',
			events: 'Sprint freestyle and butterfly',
			biography: 'A powerful sprinter known for starts, speed, and underwater work.',
			achievements: 'Multiple Olympic gold medals.',
			fact: 'His underwater dolphin kick is a major strength.',
		},
		{
			name: 'Sarah Sjostrom',
			country: 'Sweden',
			events: 'Butterfly and freestyle sprint',
			biography: 'A world-class sprinter with a long international career.',
			achievements: 'Olympic champion and world record holder.',
			fact: 'She has been elite across several sprint events.',
		},
		{
			name: 'Adam Peaty',
			country: 'Great Britain',
			events: 'Breaststroke',
			biography: 'A breaststroke specialist who changed the standard for sprint breaststroke.',
			achievements: 'Olympic champion and world record holder.',
			fact: 'He was the first man to swim 100m breaststroke under 57 seconds.',
		},
		{
			name: 'Ian Thorpe',
			country: 'Australia',
			events: 'Freestyle',
			biography: 'A legendary Australian swimmer known for smooth technique and middle-distance speed.',
			achievements: 'Five Olympic gold medals.',
			fact: 'His nickname is the Thorpedo.',
		},
	],
};
