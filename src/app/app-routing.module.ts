import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { MapComponent } from './races/map.component';
import { DriverRankingComponent } from './ranking/driver-ranking/driver-ranking.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/ranking/driver',
    pathMatch: 'full',
  },
  {
    path: 'races',
    component: MapComponent,
  },
  {
    path: 'ranking',
    component: RankingComponent,
    children: [
      {
        path: 'driver',
        component: DriverRankingComponent,
      },
      {
        path: 'team',
        component: DriverRankingComponent,
      },
    ],
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
