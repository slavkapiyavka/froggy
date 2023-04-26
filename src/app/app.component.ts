import { Component } from '@angular/core'
import { ColorSchemeService } from '../shared/services/color-scheme.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'froggy'

    constructor(public color: ColorSchemeService) {}

    ngOnInit() {
        this.color.darkMode$.subscribe(() =>
            document.documentElement.classList.toggle('dark')
        )
    }
}
