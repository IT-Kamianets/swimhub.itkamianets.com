import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { ScrollService } from './services/scroll.service';

@Component({
	selector: 'app-root',
	imports: [RouterLink, RouterLinkActive, RouterOutlet, TopbarComponent],
	template: `
		<app-topbar />

		<div class="pb-24">
			<router-outlet />
		</div>

		<nav
			aria-label="Main navigation"
			class="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--c-border)] bg-[var(--c-bg-secondary)]/95 px-2 py-2 backdrop-blur supports-[backdrop-filter]:bg-[var(--c-bg-secondary)]/88"
		>
			<div class="no-scrollbar mx-auto flex max-w-[var(--container)] gap-1 overflow-x-auto">
				@for (item of navItems; track item.label) {
					@if (item.route) {
						<a
							class="flex min-w-20 shrink-0 flex-col items-center justify-center gap-1 rounded-[0.9rem] px-2 py-2 text-[11px] font-medium text-[var(--c-text-muted)] transition-colors duration-200 hover:bg-[var(--c-bg-primary)]"
							[routerLink]="item.route"
							[routerLinkActiveOptions]="{ exact: item.exact }"
							routerLinkActive="bg-[color:rgba(14,165,183,0.12)] text-[var(--c-secondary)]"
						>
							<span class="material-symbols-outlined text-[21px]" aria-hidden="true">
								{{ item.icon }}
							</span>
							<span class="truncate">{{ item.label }}</span>
						</a>
					} @else {
						<button
							class="flex min-w-0 flex-col items-center justify-center gap-1 rounded-[0.9rem] px-1 py-2 text-[11px] font-medium text-[var(--c-text-muted)] transition-colors duration-200 hover:bg-[var(--c-bg-primary)]"
							type="button"
						>
							<span class="material-symbols-outlined text-[21px]" aria-hidden="true">
								{{ item.icon }}
							</span>
							<span class="truncate">{{ item.label }}</span>
						</button>
					}
				}
			</div>
		</nav>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
	private readonly _scrollService = inject(ScrollService);

	protected readonly navItems = [
		{ label: 'Home', icon: 'home', route: '/', exact: true },
		{ label: 'Basics', icon: 'waves', route: '/swim-basics', exact: true },
		{ label: 'Styles', icon: 'pool', route: '/swimming-styles', exact: true },
		{ label: 'Plans', icon: 'fitness_center', route: '/training-plans', exact: true },
		{ label: 'Glossary', icon: 'menu_book', route: '/glossary', exact: true },
		{ label: 'Benefits', icon: 'favorite', route: '/health-benefits', exact: true },
		{ label: 'Safety', icon: 'health_and_safety', route: '/swim-safety', exact: true },
		{ label: 'Swimmers', icon: 'emoji_events', route: '/famous-swimmers', exact: true },
	];

	constructor() {
		this._scrollService.initialize();
	}
}
