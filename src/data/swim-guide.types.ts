export interface HomeTopic {
	title: string;
	description: string;
	icon: string;
	route: string;
}

export interface InfoSection {
	title: string;
	text: string;
	icon: string;
}

export interface SimpleItem {
	title: string;
	description: string;
	icon: string;
}

export interface SwimmingStyle {
	name: string;
	description: string;
	difficulty: 'Easy' | 'Medium' | 'Hard';
	bodyPosition: string;
	armMovement: string;
	legMovement: string;
	breathing: string;
	beginnerTip: string;
	icon: string;
}

export interface TrainingPlan {
	title: string;
	level: string;
	duration: string;
	goal: string;
	warmUp: string;
	mainExercises: string[];
	coolDown: string;
	notes: string;
	icon: string;
}

export interface GlossaryItem {
	term: string;
	explanation: string;
	category: string;
}

export interface SwimmerProfile {
	name: string;
	country: string;
	events: string;
	biography: string;
	achievements: string;
	fact: string;
}

export interface TopicPageData {
	slug: string;
	title: string;
	intro: string;
	icon: string;
	sections?: InfoSection[];
	equipment?: SimpleItem[];
	mistakes?: SimpleItem[];
	styles?: SwimmingStyle[];
	plans?: TrainingPlan[];
	glossary?: GlossaryItem[];
	benefits?: SimpleItem[];
	rules?: SimpleItem[];
	swimmers?: SwimmerProfile[];
}
