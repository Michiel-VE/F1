import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverComponent } from './details/driver/driver.component';
import { DriverRankingComponent } from './driver-standing/driver-ranking/driver-ranking.component';
import { DriverStandingComponent } from './driver-standing/driver-standing.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './races/map.component';
import { AgePipe } from './shared/age.pipe';
import { SpecialPipe } from './shared/special.pipe';
import { TeamRankingComponent } from './team-standing/team-ranking/team-ranking.component';
import { TeamStandingComponent } from './team-standing/team-standing.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    AgePipe,
    SpecialPipe,
    DriverStandingComponent,
    DriverRankingComponent,
    TeamStandingComponent,
    TeamRankingComponent,
    DriverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
