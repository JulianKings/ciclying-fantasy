import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NAVIGATION_LINKS } from './constants/navigation';
import { NgFor } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadUser, logout } from './store/auth/auth.actions';
import { AppState } from './store/store';
import { authFeature, AuthState } from './store/auth/auth.reducer';
import { Subscription } from 'rxjs';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matArrowDropDown, matArrowDropUp } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor, NgIconComponent],
  viewProviders: [provideIcons({ matArrowDropDown, matArrowDropUp })],
  templateUrl: './app.component.html',
  styleUrl: './styles/app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  auth: AuthState | null = null;
  subscription: Subscription = new Subscription();
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(loadUser());
    this.subscription.add(
      this.store.select(authFeature.selectAuthState).subscribe((auth) => {
        this.auth = auth;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout() {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }

  title = 'Cycling';
  navigationLinks = NAVIGATION_LINKS.filter(link => !link.userOnly);;
  userNavigationLinks = NAVIGATION_LINKS.filter(link => link.userOnly);
}
