import { Routes } from '@angular/router';
import { MaterialDemoComponent } from './material-demo/material-demo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/material-demo',
    pathMatch: 'full',
  },
  {
    path: 'material-demo',
    component: MaterialDemoComponent,
    title: 'Material UI Demo',
  },
  {
    path: '**',
    redirectTo: '/material-demo',
  },
];
