import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { DriverComponent } from './details/driver/driver.component';
import { DriverStandingComponent } from './driver-standing/driver-standing.component';
import { MapComponent } from './races/map.component';
import { TeamStandingComponent } from './team-standing/team-standing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/ranking/drivers',
    pathMatch: 'full',
  },
  {
    path: 'races',
    component: MapComponent,
  },
  {
    path: 'ranking',
    children: [
      {
        path: 'drivers',
        component: DriverStandingComponent,
      },
      {
        path: 'teams',
        component: TeamStandingComponent,
      },
    ],
  },
  {
    path: 'detail',
    children: [
      {
        path: 'driver',
        component: DriverComponent,
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
