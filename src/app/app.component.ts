import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NAVIGATION_LINKS } from './constants/navigation';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './styles/app.component.scss'
})
export class AppComponent {
  title = 'Cycling';
  navigationLinks = NAVIGATION_LINKS;
}
