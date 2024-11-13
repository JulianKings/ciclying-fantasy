import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: IndexComponent },
  { path: 'leagues', component: IndexComponent },
  { path: 'rankings', component: IndexComponent },
  { path: 'calendar', component: IndexComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];
