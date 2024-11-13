import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: IndexComponent },
  { path: 'leagues', component: IndexComponent },
  { path: 'rankings', component: IndexComponent },
  { path: 'calendar', component: IndexComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
];
