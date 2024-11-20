import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LeaguesComponent } from './pages/leagues/leagues.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { StatsComponent } from './pages/stats/stats.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyLeaguesComponent } from './pages/my-leagues/my-leagues.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: IndexComponent },
  { path: 'leagues', component: LeaguesComponent },
  { path: 'rankings', component: RankingComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'about', component: AboutComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'my-leagues', component: MyLeaguesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'how-to-play', component: HowToPlayComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];
