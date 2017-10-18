import { NgModule } from '@angular/core';
import { ServiceModule } from './shared/service.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { PathNotFoundComponent } from './path-not-found.component';

import { RestaurantHomeComponent } from './restaurant-home.component';
import { RestaurantListComponent } from './restaurant-list.component';
import { RestaurantDetailsComponent } from './restaurant-details.component';
import { ReviewComponent } from './review.component';

import { combineAll } from 'rxjs/operator/combineAll';
import { delay } from 'rxjs/operator/delay';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AgmCoreModule } from '@agm/core';
import { Ng2CompleterModule } from "ng2-completer";
import { CookieModule } from 'ngx-cookie';

import { InMemoryUserService } from './services/in-memory-user.service';

@NgModule({
  imports: [
    SharedModule,
    ServiceModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: RestaurantHomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'login', component: AppLoginComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'restaurants-of-city/:city', component: RestaurantListComponent },
      { path: 'restaurant-details/:id', component: RestaurantDetailsComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: PathNotFoundComponent }
    ]),

    InMemoryWebApiModule.forRoot(InMemoryUserService, { delay: 300, passThruUnknownUrl: true }),    
    AgmCoreModule.forRoot({ apiKey:  'AIzaSyBQP6jNXB7hjv94Cz0-ex-pbqj1H2G_ROM'}),
    CookieModule.forRoot(),    
    Ng2CompleterModule,
  ],
  declarations: [AppComponent,
    AppLoginComponent,
    AboutComponent,
    ContactComponent,
    PathNotFoundComponent,
    RestaurantHomeComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    ReviewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
