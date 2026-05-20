import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '@wawjs/ngx-ui';
import { LanguageOption } from '../../feature/language/language.interface';
import { LanguageService } from '../../feature/language/language.service';
import { SwimTranslatePipe } from '../../pipes/swim-translate.pipe';

@Component({
	selector: 'app-topbar',
	imports: [RouterLink, SwimTranslatePipe],
	templateUrl: './topbar.component.html',
	styleUrl: './topbar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
	private readonly _themeService = inject(ThemeService);
	private readonly _languageService = inject(LanguageService);

	protected readonly mode = computed(() => this._themeService.mode() ?? 'light');
	protected readonly languages = this._languageService.languages;
	protected readonly currentLanguage = computed(() =>
		this._languageService.getLanguage(this._languageService.language()),
	);
	protected readonly toggleIcon = computed(() =>
		this.mode() === 'dark' ? 'light_mode' : 'dark_mode',
	);
	protected readonly toggleLabel = computed(() =>
		this.mode() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
	);

	constructor() {
		this._themeService.init();
		this._languageService.init();
	}

	protected toggleMode() {
		const nextMode = this.mode() === 'dark' ? 'light' : 'dark';
		this._themeService.setMode(nextMode);
	}

	protected setLanguage(language: LanguageOption) {
		this._languageService.setLanguage(language.code);
	}
}
