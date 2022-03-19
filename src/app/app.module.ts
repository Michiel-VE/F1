import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverComponent } from './drivers/driver/driver.component';
import { DriversComponent } from './drivers/drivers.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './races/map.component';
import { DriverRankingComponent } from './ranking/driver-ranking/driver-ranking.component';
import { RankingComponent } from './ranking/ranking.component';
import { AgePipe } from './shared/age.pipe';
import { SpecialPipe } from './shared/special.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DriversComponent,
    MapComponent,
    RankingComponent,
    AgePipe,
    SpecialPipe,
    DriverComponent,
    DriverRankingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
