import { Routes } from '@angular/router';
import { navRoutes } from './nav-bar/nav.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'start-framework', pathMatch: 'full' },
  {
    path: 'start-framework',
    loadComponent: () =>
      import('./start-framework/start-framework.component').then(
        (c) => c.StartFrameworkComponent
      ),
    title: 'Home',
    children: navRoutes,
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),

    title: 'About',
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./portfolio/portfolio.component').then(
        (c) => c.PortfolioComponent
      ),
    title: 'Protfolio',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((c) => c.ContactComponent),
    title: 'Contact',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./error/error.component').then((c) => c.ErrorComponent),
    title: 'Not Found',
  },
];
