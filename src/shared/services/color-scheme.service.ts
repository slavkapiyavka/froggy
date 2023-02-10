import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ColorSchemeService {
    private darkModeSubject = new Subject<boolean>()

    constructor() {
        this.init()
    }

    private init(): void {
        const prefersDarkMode = window.matchMedia(
            '(prefers-color-scheme: dark)'
        )
        this.darkModeSubject.next(prefersDarkMode.matches)

        prefersDarkMode.addEventListener('change', (e) => {
            this.darkModeSubject.next(e.matches)
        })
    }

    get darkMode$() {
        return this.darkModeSubject.asObservable()
    }
}
