import { Routes } from '@angular/router';
import { MaterialDemoComponent } from './shared/components/material-demo/material-demo.component';
import { Main } from './pages/main/main';

export const routes: Routes = [
  {
    path: 'material-demo',
    component: MaterialDemoComponent,
    title: 'Material UI Demo',
  },
  {
    path: '',
    component: Main,
    title: 'Material UI Demo',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
