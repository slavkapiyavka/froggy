import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component'
import { ButtonComponent } from './components/button/button.component'

@NgModule({
    declarations: [AppComponent, ThemeSwitcherComponent, ButtonComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
