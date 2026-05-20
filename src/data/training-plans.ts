import { TopicPageData } from './swim-guide.types';

export const trainingPlans: TopicPageData = {
	slug: 'training-plans',
	title: 'Training Plans',
	intro:
		'Use simple pool sessions for different levels. Rest when needed and choose the plan that matches your current comfort.',
	icon: 'fitness_center',
	plans: [
		{
			title: 'First pool session',
			level: 'Beginner',
			duration: '30 minutes',
			goal: 'Build comfort in the water',
			warmUp: '5 minutes easy swim',
			mainExercises: ['4 x 25m freestyle', '4 x 25m kickboard', '2 x 25m easy swim'],
			coolDown: '5 minutes slow swim',
			notes: 'Rest between each lap and focus on breathing.',
			icon: 'looks_one',
		},
		{
			title: 'Steady technique session',
			level: 'Intermediate',
			duration: '45 minutes',
			goal: 'Improve stroke rhythm and endurance',
			warmUp: '200m easy swim with mixed strokes',
			mainExercises: ['6 x 50m freestyle', '4 x 25m backstroke', '4 x 25m drill work'],
			coolDown: '100m relaxed swim',
			notes: 'Keep the same pace from the first repeat to the last.',
			icon: 'looks_two',
		},
		{
			title: 'Endurance builder',
			level: 'Advanced',
			duration: '60 minutes',
			goal: 'Train stamina and pace control',
			warmUp: '400m easy swim plus 4 x 25m build',
			mainExercises: ['8 x 100m freestyle', '4 x 50m kick', '4 x 50m strong finish'],
			coolDown: '200m slow mixed swim',
			notes: 'Use consistent rest intervals and track split times.',
			icon: 'looks_3',
		},
	],
};
