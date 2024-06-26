import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'detail',
    loadComponent: () => import('./tab3/detail/detail.page').then( m => m.DetailPage)
  },
];
