import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../../core/services/language';

type FooterLinkKey = 'home' | 'about' | 'projects' | 'news' | 'contact';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {

  readonly ls = inject(LanguageService);

  readonly t = computed(() => this.ls.t());

  readonly linkKeys: FooterLinkKey[] = [
    'home',
    'about',
    'projects',
    'news',
    'contact'
  ];
}