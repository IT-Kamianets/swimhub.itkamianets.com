import { TopicPageData } from './swim-guide.types';

export const swimSafety: TopicPageData = {
	slug: 'swim-safety',
	title: 'Swim Safety',
	intro:
		'Good safety habits make swimming more enjoyable. Learn the basic rules for pools, open water, and tired moments.',
	icon: 'health_and_safety',
	rules: [
		{ title: 'Never swim alone', description: 'Swim with others or where a lifeguard is present.', icon: 'group' },
		{ title: 'Do not run near the pool', description: 'Wet surfaces are slippery and falls happen quickly.', icon: 'directions_walk' },
		{ title: 'Check water depth', description: 'Know the depth before jumping or diving.', icon: 'straighten' },
		{ title: 'Listen to lifeguards', description: 'Follow instructions and posted pool rules.', icon: 'campaign' },
		{ title: 'Use sunscreen outdoors', description: 'Protect your skin during outdoor swimming.', icon: 'wb_sunny' },
		{ title: 'Rest when tired', description: 'Hold the wall, float, or leave the water if you feel weak.', icon: 'pause_circle' },
		{ title: 'Watch kids closely', description: 'Children need active supervision in and near water.', icon: 'child_care' },
		{ title: 'Know emergency basics', description: 'Call for help early and do not take risky rescues alone.', icon: 'emergency' },
	],
	sections: [
		{
			title: 'Open water safety',
			text: 'Check weather, currents, water temperature, and swim only in allowed areas.',
			icon: 'water',
		},
		{
			title: 'Why swimming alone is dangerous',
			text: 'Cramps, fatigue, panic, or cold water can become serious when nobody is nearby to help.',
			icon: 'priority_high',
		},
	],
};
