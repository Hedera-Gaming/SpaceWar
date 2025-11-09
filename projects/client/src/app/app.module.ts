import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        AppComponent, // ✅ On importe le standalone component ici
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: `${environment.baseHref}` },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
