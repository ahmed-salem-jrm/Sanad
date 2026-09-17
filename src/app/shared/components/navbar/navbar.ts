import {
  Component,
  inject
} from '@angular/core';

import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import {
  LanguageService
} from '../../../core/services/language';

import {
  ThemeService
} from '../../../core/services/theme';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  readonly languageService =
    inject(LanguageService);

  readonly themeService =
    inject(ThemeService);

  menuOpen = false;

  readonly navItems = [
    {
      key: 'home',
      route: '/'
    },
    {
      key: 'about',
      route: '/about'
    },
    {
      key: 'fields',
      route: '/fields'
    },
    {
      key: 'projects',
      route: '/projects'
    },
    {
      key: 'successStories',
      route: '/success-stories'
    },
    {
      key: 'news',
      route: '/news'
    },
    {
      key: 'participate',
      route: '/participate'
    },
    {
      key: 'contact',
      route: '/contact'
    }
  ] as const;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  toggleLanguage(): void {
    this.languageService.toggle();
  }
}