import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home')
        .then(m => m.Home)
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about')
        .then(m => m.About)
  },

  {
    path: 'fields',
    loadComponent: () =>
      import('./features/fields/fields')
        .then(m => m.Fields)
  },

  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects')
        .then(m => m.Projects)
  },

  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./features/project-details/project-details')
        .then(m => m.ProjectDetails)
  },

  {
    path: 'news',
    loadComponent: () =>
      import('./features/news/news')
        .then(m => m.News)
  },

  {
    path: 'news/:id',
    loadComponent: () =>
      import('./features/news-details/news-details')
        .then(m => m.NewsDetails)
  },

  {
    path: 'success-stories',
    loadComponent: () =>
      import('./features/success-stories/success-stories')
        .then(m => m.SuccessStories)
  },

  {
    path: 'participate',
    loadComponent: () =>
      import('./features/participate/participate')
        .then(m => m.Participate)
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact')
        .then(m => m.Contact)
  },

  {
    path: '**',
    redirectTo: ''
  }
];