import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/services/language';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  readonly languageService = inject(LanguageService);

  readonly fieldImages = [
    'assets/images/fields/field-1.jpg',
    'assets/images/fields/field-2.jpg',
    'assets/images/fields/field-3.jpg',
    'assets/images/fields/field-4.jpg'
  ];

  readonly projectImages = [
    'assets/images/projects/project-1.jpg',
    'assets/images/projects/project-2.jpg',
    'assets/images/projects/project-3.jpg'
  ];

  readonly successStoryImages = [
    'assets/images/success-stories/story-1.jpg',
    'assets/images/success-stories/story-2.jpg',
    'assets/images/success-stories/story-3.jpg'
  ];

  readonly newsImages = [
    'assets/images/news/news-1.jpg',
    'assets/images/news/news-2.jpg',
    'assets/images/news/news-3.jpg'
  ];

}