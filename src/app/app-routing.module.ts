import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { DriversComponent } from './drivers/drivers.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './races/map.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'drivers',
    component: DriversComponent,
  },
  {
    path: 'races',
    component: MapComponent,
  },
  {
    path: 'ranking',
    component: RankingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
