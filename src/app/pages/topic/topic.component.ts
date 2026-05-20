import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { famousSwimmers } from '../../../data/famous-swimmers';
import { glossary } from '../../../data/glossary';
import { healthBenefits } from '../../../data/health-benefits';
import { swimBasics } from '../../../data/swim-basics';
import { swimSafety } from '../../../data/swim-safety';
import { swimmingStyles } from '../../../data/swimming-styles';
import { TopicPageData } from '../../../data/swim-guide.types';
import { trainingPlans } from '../../../data/training-plans';
import { SwimTranslatePipe } from '../../pipes/swim-translate.pipe';

const topicPages: Record<string, TopicPageData> = {
	'swim-basics': swimBasics,
	'swimming-styles': swimmingStyles,
	'training-plans': trainingPlans,
	glossary,
	'health-benefits': healthBenefits,
	'swim-safety': swimSafety,
	'famous-swimmers': famousSwimmers,
};

@Component({
	imports: [RouterLink, SwimTranslatePipe],
	templateUrl: './topic.component.html',
	styleUrl: './topic.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicComponent {
	private readonly _route = inject(ActivatedRoute);

	protected readonly page = computed(() => {
		const slug = this._route.snapshot.routeConfig?.path ?? 'swim-basics';

		return topicPages[slug] ?? swimBasics;
	});

	protected readonly glossaryCategories = computed(() => [
		...new Set((this.page().glossary ?? []).map((item) => item.category)),
	]);
}
