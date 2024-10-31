import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes').then((m) => m.routes)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'recoverpass',
    loadComponent: () => import('./recoverpass/recoverpass.page').then( m => m.RecoverpassPage)
  }
  ,
  {
    path: 'tab1',
    loadComponent: () => import('./tabs/tab1/tab1.page').then( m => m.Tab1Page)
  },
  {
    path: 'tab2',
    loadComponent: () => import('./tabs/tab2/tab2.page').then( m => m.Tab2Page)
  },
  {
    path: 'tab3',
    loadComponent: () => import('./tabs/tab3/tab3.page').then( m => m.Tab3Page)
  },
];
