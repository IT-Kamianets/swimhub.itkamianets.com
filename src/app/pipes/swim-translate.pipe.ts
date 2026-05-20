import { Pipe, PipeTransform, inject } from '@angular/core';
import en from '../../i18n/en.json';
import es from '../../i18n/es.json';
import fr from '../../i18n/fr.json';
import ua from '../../i18n/ua.json';
import { LanguageService } from '../feature/language/language.service';
import { LanguageCode } from '../feature/language/language.type';

const dictionaries: Record<LanguageCode, Record<string, string>> = {
	en,
	ua,
	es,
	fr,
};

@Pipe({
	name: 'swimTranslate',
	pure: false,
})
export class SwimTranslatePipe implements PipeTransform {
	private readonly _languageService = inject(LanguageService);

	transform(value: string | null | undefined) {
		if (!value) {
			return '';
		}

		const language = this._languageService.language();

		return dictionaries[language]?.[value] ?? value;
	}
}
