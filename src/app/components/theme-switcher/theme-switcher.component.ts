import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  @Input() absolute: boolean = false;

  toggleDarkTheme(): void {
    document.documentElement.classList.toggle('dark');
  }

}
