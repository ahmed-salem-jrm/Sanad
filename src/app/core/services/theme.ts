import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly STORAGE_KEY = 'sanad-theme';

  readonly theme = signal<Theme>(this.getInitialTheme());

  readonly isDark = signal(this.theme() === 'dark');

  constructor() {
    this.applyTheme(this.theme());
  }

  toggle(): void {

    const newTheme: Theme =
      this.theme() === 'light' ? 'dark' : 'light';

    this.setTheme(newTheme);
  }

  setTheme(theme: Theme): void {

    this.theme.set(theme);
    this.isDark.set(theme === 'dark');

    localStorage.setItem(this.STORAGE_KEY, theme);

    this.applyTheme(theme);
  }

  private applyTheme(theme: Theme): void {

    document.documentElement.setAttribute(
      'data-theme',
      theme
    );
  }

  private getInitialTheme(): Theme {

    const savedTheme =
      localStorage.getItem(this.STORAGE_KEY) as Theme | null;

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
}