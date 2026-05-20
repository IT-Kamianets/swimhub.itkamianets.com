import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeTopic } from '../../../data/swim-guide.types';
import { SwimTranslatePipe } from '../../pipes/swim-translate.pipe';

@Component({
	imports: [RouterLink, SwimTranslatePipe],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	protected readonly topics: HomeTopic[] = [
		{
			title: 'Swim Basics',
			description: 'Equipment, breathing, etiquette, and beginner mistakes.',
			icon: 'waves',
			route: '/swim-basics',
		},
		{
			title: 'Swimming Styles',
			description: 'Compare freestyle, breaststroke, backstroke, and butterfly.',
			icon: 'pool',
			route: '/swimming-styles',
		},
		{
			title: 'Training Plans',
			description: 'Simple workouts for beginner, intermediate, and advanced swimmers.',
			icon: 'fitness_center',
			route: '/training-plans',
		},
		{
			title: 'Glossary',
			description: 'Learn common swimming words in plain language.',
			icon: 'menu_book',
			route: '/glossary',
		},
		{
			title: 'Health Benefits',
			description: 'Understand how swimming helps the body and mind.',
			icon: 'favorite',
			route: '/health-benefits',
		},
		{
			title: 'Swim Safety',
			description: 'Pool and open-water rules every beginner should know.',
			icon: 'health_and_safety',
			route: '/swim-safety',
		},
		{
			title: 'Famous Swimmers',
			description: 'Meet legendary swimmers and their achievements.',
			icon: 'emoji_events',
			route: '/famous-swimmers',
		},
	];
}
