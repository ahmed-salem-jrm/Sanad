import {
  Injectable,
  computed,
  signal
} from '@angular/core';

import { ar } from '../i18n/ar';
import { en } from '../i18n/en';

export type Language = 'ar' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private readonly STORAGE_KEY = 'sanad-language';

  readonly currentLanguage = signal<Language>(
    this.getInitialLanguage()
  );

  readonly isArabic = computed(
    () => this.currentLanguage() === 'ar'
  );

  readonly isEnglish = computed(
    () => this.currentLanguage() === 'en'
  );

  readonly dir = computed<'rtl' | 'ltr'>(
    () => this.isArabic() ? 'rtl' : 'ltr'
  );

  readonly t = computed(
    () => this.currentLanguage() === 'ar' ? ar : en
  );

  constructor() {
    this.applyLanguage(
      this.currentLanguage()
    );
  }

  toggle(): void {

    const language: Language =
      this.currentLanguage() === 'ar'
        ? 'en'
        : 'ar';

    this.setLanguage(language);
  }

  setLanguage(language: Language): void {

    if (
      language !== 'ar' &&
      language !== 'en'
    ) {
      return;
    }

    this.currentLanguage.set(language);

    localStorage.setItem(
      this.STORAGE_KEY,
      language
    );

    this.applyLanguage(language);
  }

  private applyLanguage(
    language: Language
  ): void {

    const direction =
      language === 'ar'
        ? 'rtl'
        : 'ltr';

    document.documentElement.lang =
      language;

    document.documentElement.dir =
      direction;
  }

  private getInitialLanguage(): Language {

    const saved =
      localStorage.getItem(
        this.STORAGE_KEY
      ) as Language | null;

    if (
      saved === 'ar' ||
      saved === 'en'
    ) {
      return saved;
    }

    return 'ar';
  }
}