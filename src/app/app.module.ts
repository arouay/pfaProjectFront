import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';
import {AgmCoreModule} from '@agm/core';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material';
import {TypeformComponent} from './typeform/typeform.component';
import {FactureformComponent} from './factureform/factureform.component';
import {TokenInterceptor} from './Authentification/token.interceptor';
import {AuthService} from './Authentification/auth.service';
import {JwtInterceptor} from './Authentification/jwt.interceptor';
import { AuthComponent } from './auth/auth.component';


@NgModule({
    imports: [
        MatDialogModule,
        HttpClientModule,
        HttpModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),

    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        TypeformComponent,
        FactureformComponent,
        AuthComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        AuthService
    ],
    bootstrap: [AppComponent],
    entryComponents: [TypeformComponent, FactureformComponent]
})
export class AppModule {
}
