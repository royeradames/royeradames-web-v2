import { Routes } from '@angular/router';
import { MaterialDemoComponent } from '@shared/components/material-demo/material-demo.component';
import { MainPage } from './pages/main/main.page';

export const routes: Routes = [
  {
    path: 'material-demo',
    component: MaterialDemoComponent,
    title: 'Material UI Demo',
  },
  {
    path: '',
    component: MainPage,
    title: 'Resume | Royer Adames',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
